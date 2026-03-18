import { createClient } from '@supabase/supabase-js'

export const supabase = createClient(
  'https://obozwkogkcckuonekiqp.supabase.co',
  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im9ib3p3a29na2Nja3VvbmVraXFwIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NzM3OTA4ODIsImV4cCI6MjA4OTM2Njg4Mn0.YXfS_1lIe6aWJAahR0ZeBkVdhpEyDa68ZDNnQzq2wd0'
)

export interface Submission {
  id: string
  name: string | null
  email: string | null
  liked: string | null
  struggled: string | null
  description: string
  confidence_before: number | null
  confidence: number | null
  comments: string | null
  file_url: string | null
  vercel_url: string | null
  created_at: string
}
