import { useNavigate } from 'react-router-dom'
import { useAuth } from '../lib/auth'

export default function Nav() {
  const navigate = useNavigate()
  const { user, logout } = useAuth()

  return (
    <nav>
      <div className="brand" onClick={() => navigate('/')}>
        coursera<span>.design</span>
      </div>
      {user && (
        <div className="flex items-center gap-12">
          <span className="cds-body-secondary text-grey-600">{user.name}</span>
          <button
            className="cds-body-tertiary text-grey-400 hover:text-grey-975 bg-transparent border-none cursor-pointer"
            onClick={logout}
          >
            Sign out
          </button>
        </div>
      )}
    </nav>
  )
}
