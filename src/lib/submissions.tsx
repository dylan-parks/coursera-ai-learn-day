import { createContext, useContext, useState, useEffect, useCallback, type ReactNode } from 'react'
import { supabase, type Submission } from './supabase'
import { useAuth } from './auth'
import type { SubmitFormData } from '../components/SubmitDialog'

interface SubmissionsContextValue {
  submissions: Submission[]
  pendingCard: { description: string; name: string | null } | null
  submitProject: (data: SubmitFormData) => void
}

const SubmissionsContext = createContext<SubmissionsContextValue>({
  submissions: [],
  pendingCard: null,
  submitProject: () => {},
})

export function useSubmissions() {
  return useContext(SubmissionsContext)
}

export function SubmissionsProvider({ children }: { children: ReactNode }) {
  const { user } = useAuth()
  const [submissions, setSubmissions] = useState<Submission[]>([])
  const [pendingCard, setPendingCard] = useState<{ description: string; name: string | null } | null>(null)

  useEffect(() => {
    supabase
      .from('submissions')
      .select('*')
      .order('created_at', { ascending: false })
      .then(({ data }) => {
        if (data) setSubmissions(data)
      })
  }, [])

  const submitProject = useCallback(async (formData: SubmitFormData) => {
    setPendingCard({ description: formData.description, name: user?.name || null })

    let fileUrl: string | null = null
    if (formData.file) {
      const ext = formData.file.name.split('.').pop()
      const path = `${Date.now()}-${Math.random().toString(36).slice(2)}.${ext}`
      const { error } = await supabase.storage.from('submissions').upload(path, formData.file)
      if (!error) {
        const { data: urlData } = supabase.storage.from('submissions').getPublicUrl(path)
        fileUrl = urlData.publicUrl
      }
    }

    const { data, error } = await supabase
      .from('submissions')
      .insert({
        name: user?.name || null,
        email: user?.email || null,
        description: formData.description,
        liked: formData.liked || null,
        struggled: formData.struggled || null,
        confidence: formData.confidence,
        comments: formData.comments || null,
        file_url: fileUrl,
      })
      .select()
      .single()

    if (error) {
      console.error('Supabase insert error:', error)
    }

    setPendingCard(null)
    if (!error && data) {
      setSubmissions(prev => [data, ...prev])
    }
  }, [user])

  return (
    <SubmissionsContext.Provider value={{ submissions, pendingCard, submitProject }}>
      {children}
    </SubmissionsContext.Provider>
  )
}
