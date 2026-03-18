import { createContext, useContext, useState, useEffect, type ReactNode } from 'react'

interface User {
  name: string
  email: string
}

interface AuthContextValue {
  user: User | null
  login: (name: string, email: string) => void
  logout: () => void
}

const AuthContext = createContext<AuthContextValue>({
  user: null,
  login: () => {},
  logout: () => {},
})

const STORAGE_KEY = 'microsite_user'

export function AuthProvider({ children }: { children: ReactNode }) {
  const [user, setUser] = useState<User | null>(() => {
    try {
      const stored = localStorage.getItem(STORAGE_KEY)
      return stored ? JSON.parse(stored) : null
    } catch {
      return null
    }
  })

  useEffect(() => {
    if (user) {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(user))
    } else {
      localStorage.removeItem(STORAGE_KEY)
    }
  }, [user])

  const login = (name: string, email: string) => setUser({ name, email })
  const logout = () => setUser(null)

  return (
    <AuthContext.Provider value={{ user, login, logout }}>
      {children}
    </AuthContext.Provider>
  )
}

export function useAuth() {
  return useContext(AuthContext)
}
