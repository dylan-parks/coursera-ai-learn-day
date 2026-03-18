import { useState } from 'react'
import { useAuth } from '../lib/auth'

const inputClasses =
  'w-full p-12 border border-grey-400 rounded-8 bg-white cds-body-primary text-grey-975 placeholder:text-grey-600 hover:bg-blue-25 hover:border-blue-800 cds-focus-ring outline-none'

export default function LoginPage() {
  const { login } = useAuth()
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState('')

  const canSubmit = name.trim() && email.trim() && password.trim()

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setError('')

    if (!email.toLowerCase().endsWith('@coursera.org')) {
      setError('Please use your @coursera.org email address.')
      return
    }

    if (password !== 'ownit2026') {
      setError('Incorrect password. Check the invite for the shared password.')
      return
    }

    login(name.trim(), email.trim().toLowerCase())
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-grey-25">
      <div className="w-[440px] max-sm:w-[calc(100%-32px)]">
        <div className="mb-32 text-center">
          <div className="cds-action-secondary text-blue-700 mb-8">coursera.design</div>
          <h1 className="cds-title-sm mb-8">AI Prototyping</h1>
          <p className="cds-body-secondary text-grey-600">Sign in with your Coursera email to get started.</p>
        </div>

        <form onSubmit={handleSubmit} className="bg-white rounded-16 shadow-elevation-1 px-24 pt-24 pb-24 flex flex-col gap-16">
          <div className="flex flex-col">
            <label className="cds-subtitle-md text-grey-975 mb-8">Your name</label>
            <input
              className={inputClasses}
              type="text"
              placeholder="First and last name"
              value={name}
              onChange={e => setName(e.target.value)}
              autoFocus
            />
          </div>

          <div className="flex flex-col">
            <label className="cds-subtitle-md text-grey-975 mb-8">Email</label>
            <input
              className={inputClasses}
              type="email"
              placeholder="you@coursera.org"
              value={email}
              onChange={e => setEmail(e.target.value)}
            />
          </div>

          <div className="flex flex-col">
            <label className="cds-subtitle-md text-grey-975 mb-8">Password</label>
            <input
              className={inputClasses}
              type="password"
              placeholder="Shared password from invite"
              value={password}
              onChange={e => setPassword(e.target.value)}
            />
          </div>

          {error && (
            <div className="cds-body-secondary text-red-700 bg-red-25 rounded-8 p-12">
              {error}
            </div>
          )}

          <button
            type="submit"
            className="self-start bg-blue-700 hover:bg-blue-800 active:bg-purple-950 text-white border-none rounded-8 cds-action-primary cursor-pointer disabled:bg-grey-200 disabled:text-grey-50 disabled:cursor-not-allowed mt-8"
            style={{ padding: '12px 24px' }}
            disabled={!canSubmit}
          >
            Sign in
          </button>
        </form>
      </div>
    </div>
  )
}
