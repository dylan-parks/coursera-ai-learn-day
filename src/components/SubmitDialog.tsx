import { useState, useEffect, useRef } from 'react'

export interface SubmitFormData {
  description: string
  file: File | null
  vercelUrl: string
  liked: string
  struggled: string
  confidenceBefore: number | null
  confidence: number | null
  comments: string
}

interface SubmitDialogProps {
  open: boolean
  onClose: () => void
  onSubmit: (data: SubmitFormData) => void
}

const inputClasses =
  'w-full p-12 border border-grey-400 rounded-8 bg-white cds-body-primary text-grey-975 placeholder:text-grey-600 hover:bg-blue-25 hover:border-blue-800 cds-focus-ring outline-none'

const textareaClasses = `${inputClasses} resize-none h-[80px]`

const ACCEPTED_TYPES = 'image/png,image/jpeg,image/gif,image/webp,video/mp4,video/webm,video/quicktime'

export default function SubmitDialog({ open, onClose, onSubmit }: SubmitDialogProps) {
  const fileInputRef = useRef<HTMLInputElement>(null)
  const [step, setStep] = useState(1)
  const [description, setDescription] = useState('')
  const [file, setFile] = useState<File | null>(null)
  const [preview, setPreview] = useState<string | null>(null)
  const [dragging, setDragging] = useState(false)
  const [vercelUrl, setVercelUrl] = useState('')
  const [liked, setLiked] = useState('')
  const [struggled, setStruggled] = useState('')
  const [confidenceBefore, setConfidenceBefore] = useState<number | null>(null)
  const [confidence, setConfidence] = useState<number | null>(null)
  const [comments, setComments] = useState('')

  useEffect(() => {
    if (!open) return
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose()
    }
    document.addEventListener('keydown', handleKey)
    return () => document.removeEventListener('keydown', handleKey)
  }, [open, onClose])

  useEffect(() => {
    if (open) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = ''
      setStep(1)
    }
    return () => { document.body.style.overflow = '' }
  }, [open])

  useEffect(() => {
    if (!file) { setPreview(null); return }
    if (!file.type.startsWith('image/')) { setPreview(null); return }
    const url = URL.createObjectURL(file)
    setPreview(url)
    return () => URL.revokeObjectURL(url)
  }, [file])

  if (!open) return null

  const handleFile = (f: File | undefined) => {
    if (!f) return
    if (f.size > 50 * 1024 * 1024) return
    setFile(f)
  }

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault()
    setDragging(false)
    handleFile(e.dataTransfer.files[0])
  }

  const canAdvanceStep1 = description.trim()
  const canAdvanceStep2 = liked.trim() && struggled.trim()
  const canSubmit = canAdvanceStep1 && canAdvanceStep2 && confidenceBefore !== null && confidence !== null

  const handleSubmit = () => {
    if (!canSubmit) return
    onSubmit({ description, file, vercelUrl, liked, struggled, confidenceBefore, confidence, comments })
    setDescription('')
    setFile(null)
    setVercelUrl('')
    setLiked('')
    setStruggled('')
    setConfidenceBefore(null)
    setConfidence(null)
    setComments('')
    onClose()
  }

  const stepLabels = ['Your project', 'Reflection', 'Confidence']

  return (
    <div className="fixed inset-0 bg-darken-500 flex items-center justify-center z-modal" onClick={onClose}>
      <div className="bg-white rounded-16 w-[568px] max-h-[80vh] flex flex-col shadow-elevation-3 max-sm:w-[calc(100%-32px)] max-sm:max-h-[90vh]" onClick={e => e.stopPropagation()}>

        <div className="px-24 pt-24 flex items-start justify-between shrink-0">
          <div>
            <h2 className="cds-title-sm">Share what you made</h2>
            <div className="flex gap-8 mt-12">
              {stepLabels.map((label, i) => (
                <button
                  key={i}
                  className={`cds-body-tertiary border-none bg-transparent cursor-pointer pb-4 ${step === i + 1 ? 'text-blue-700' : 'text-grey-400'}`}
                  style={{ borderBottom: step === i + 1 ? '2px solid var(--color-blue-700)' : '2px solid transparent' }}
                  onClick={() => {
                    if (i + 1 < step) setStep(i + 1)
                    if (i + 1 === 2 && canAdvanceStep1) setStep(2)
                    if (i + 1 === 3 && canAdvanceStep1 && canAdvanceStep2) setStep(3)
                  }}
                  type="button"
                >
                  {label}
                </button>
              ))}
            </div>
          </div>
          <button className="w-32 h-32 rounded-full border-none bg-transparent cursor-pointer flex items-center justify-center text-grey-600 hover:bg-grey-50 hover:text-grey-975 shrink-0 mt-4" onClick={onClose}>
            <span className="material-symbols-rounded" style={{ fontSize: '20px' }}>close</span>
          </button>
        </div>

        <div className="px-24 pt-24 pb-24 overflow-y-auto flex flex-col gap-16">
          {step === 1 && (
            <>
              <div className="flex flex-col">
                <label className="cds-subtitle-md text-grey-975 mb-8">Describe what you built</label>
                <input className={inputClasses} type="text" placeholder="A short description" value={description} onChange={e => setDescription(e.target.value)} autoFocus />
              </div>

              <div className="flex flex-col">
                <label className="cds-subtitle-md text-grey-975 mb-8">Screenshot or recording</label>
                <input
                  ref={fileInputRef}
                  type="file"
                  accept={ACCEPTED_TYPES}
                  className="hidden"
                  onChange={e => handleFile(e.target.files?.[0])}
                />
                {file ? (
                  <div className="border border-grey-400 rounded-8 overflow-hidden">
                    {preview ? (
                      <img src={preview} alt="Preview" className="w-full max-h-[200px] object-cover" />
                    ) : (
                      <div className="bg-grey-25 px-16 py-24 flex items-center justify-center">
                        <span className="material-symbols-rounded text-grey-400 mr-8" style={{ fontSize: '24px' }}>videocam</span>
                        <span className="cds-body-secondary text-grey-600">Video attached</span>
                      </div>
                    )}
                    <div className="px-12 py-8 flex items-center justify-between border-t border-grey-100">
                      <span className="cds-body-tertiary text-grey-600 truncate mr-8">{file.name}</span>
                      <button
                        className="text-grey-400 hover:text-grey-975 bg-transparent border-none cursor-pointer flex items-center justify-center shrink-0"
                        onClick={() => setFile(null)}
                        type="button"
                      >
                        <span className="material-symbols-rounded" style={{ fontSize: '16px' }}>close</span>
                      </button>
                    </div>
                  </div>
                ) : (
                  <div
                    className={`border border-dashed rounded-8 px-16 py-24 text-center cursor-pointer transition-colors duration-fast ${dragging ? 'border-blue-700 bg-blue-25' : 'border-grey-400 hover:border-blue-700 hover:bg-blue-25'}`}
                    onClick={() => fileInputRef.current?.click()}
                    onDragOver={e => { e.preventDefault(); setDragging(true) }}
                    onDragLeave={() => setDragging(false)}
                    onDrop={handleDrop}
                  >
                    <span className="material-symbols-rounded text-grey-400 mb-4 block" style={{ fontSize: '24px' }}>upload_file</span>
                    <span className="cds-body-secondary text-grey-600">Drop a file here or click to browse</span>
                    <span className="cds-body-tertiary text-grey-400 block mt-4">PNG, JPG, GIF, WebP, MP4, WebM — up to 50 MB</span>
                  </div>
                )}
              </div>

              <div className="flex flex-col">
                <label className="cds-subtitle-md text-grey-975 mb-8">Link to live prototype <span className="cds-body-tertiary text-grey-400 ml-4">Optional</span></label>
                <input className={inputClasses} type="url" placeholder="https://your-project.vercel.app" value={vercelUrl} onChange={e => setVercelUrl(e.target.value)} />
              </div>
            </>
          )}

          {step === 2 && (
            <>
              <div className="flex flex-col">
                <label className="cds-subtitle-md text-grey-975 mb-8">What did you like or learn?</label>
                <textarea className={textareaClasses} placeholder="What clicked, surprised you, or felt genuinely useful..." value={liked} onChange={e => setLiked(e.target.value)} autoFocus />
              </div>

              <div className="flex flex-col">
                <label className="cds-subtitle-md text-grey-975 mb-8">What did you struggle with?</label>
                <textarea className={textareaClasses} placeholder="Friction points are the most useful feedback..." value={struggled} onChange={e => setStruggled(e.target.value)} />
              </div>
            </>
          )}

          {step === 3 && (
            <>
              <div className="flex flex-col">
                <label className="cds-subtitle-md text-grey-975 mb-8">Before this experience, how confident were you using Cursor?</label>
                <div className="flex gap-8">
                  {[1, 2, 3, 4, 5].map(n => (
                    <button
                      key={n}
                      className={`confidence-btn${confidenceBefore === n ? ' active' : ''}`}
                      onClick={() => setConfidenceBefore(confidenceBefore === n ? null : n)}
                      type="button"
                    >
                      {n}
                    </button>
                  ))}
                </div>
                <div className="flex justify-between mt-4">
                  <span className="cds-body-tertiary text-grey-400">Not confident</span>
                  <span className="cds-body-tertiary text-grey-400">Very confident</span>
                </div>
              </div>

              <div className="flex flex-col">
                <label className="cds-subtitle-md text-grey-975 mb-8">After this experience, how confident do you feel?</label>
                <div className="flex gap-8">
                  {[1, 2, 3, 4, 5].map(n => (
                    <button
                      key={n}
                      className={`confidence-btn${confidence === n ? ' active' : ''}`}
                      onClick={() => setConfidence(confidence === n ? null : n)}
                      type="button"
                    >
                      {n}
                    </button>
                  ))}
                </div>
                <div className="flex justify-between mt-4">
                  <span className="cds-body-tertiary text-grey-400">Not confident</span>
                  <span className="cds-body-tertiary text-grey-400">Very confident</span>
                </div>
              </div>

              <div className="flex flex-col">
                <label className="cds-subtitle-md text-grey-975 mb-8">Any general comments or feedback? <span className="cds-body-tertiary text-grey-400 ml-4">Optional</span></label>
                <textarea className={textareaClasses} placeholder="Anything else you want to share..." value={comments} onChange={e => setComments(e.target.value)} />
              </div>
            </>
          )}
        </div>

        <div className="px-24 pt-16 pb-24 shrink-0 flex items-center justify-between">
          {step > 1 ? (
            <button
              className="bg-transparent border border-grey-400 rounded-8 cds-action-primary text-grey-975 cursor-pointer hover:bg-grey-50"
              style={{ padding: '12px 24px' }}
              onClick={() => setStep(step - 1)}
              type="button"
            >
              Back
            </button>
          ) : <div />}
          {step < 3 ? (
            <button
              className="bg-blue-700 hover:bg-blue-800 active:bg-purple-950 text-white border-none rounded-8 cds-action-primary cursor-pointer disabled:bg-grey-200 disabled:text-grey-50 disabled:cursor-not-allowed"
              style={{ padding: '12px 24px' }}
              onClick={() => setStep(step + 1)}
              disabled={step === 1 ? !canAdvanceStep1 : !canAdvanceStep2}
            >
              Next
            </button>
          ) : (
            <button
              className="bg-blue-700 hover:bg-blue-800 active:bg-purple-950 text-white border-none rounded-8 cds-action-primary cursor-pointer disabled:bg-grey-200 disabled:text-grey-50 disabled:cursor-not-allowed"
              style={{ padding: '12px 24px' }}
              onClick={handleSubmit}
              disabled={!canSubmit}
            >
              Submit
            </button>
          )}
        </div>
      </div>
    </div>
  )
}
