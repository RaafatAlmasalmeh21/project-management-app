import { useEffect, useState } from 'react'
import { User } from '@supabase/supabase-js'
import { supabase } from '../lib/supabase'

// Define AuthUser type locally for now
export interface AuthUser {
  id: string
  email: string
  full_name: string
  company_id: string
  roles: string[]
}

export function useAuth() {
  const [user, setUser] = useState<AuthUser | null>(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    // Get initial session
    const getSession = async () => {
      try {
        const { data: { session } } = await supabase.auth.getSession()
        if (session?.user) {
          const authUser = await transformUser(session.user)
          setUser(authUser)
        }
      } catch (error) {
        console.error('Error getting session:', error)
      } finally {
        setLoading(false)
      }
    }

    getSession()

    // Listen for auth changes
    const { data: { subscription } } = supabase.auth.onAuthStateChange(
      async (event, session) => {
        if (session?.user) {
          const authUser = await transformUser(session.user)
          setUser(authUser)
        } else {
          setUser(null)
        }
        setLoading(false)
      }
    )

    return () => subscription.unsubscribe()
  }, [])

  const transformUser = async (supabaseUser: User): Promise<AuthUser> => {
    // Get user profile and roles from database
    try {
      const { data: userProfile, error: profileError } = await supabase
        .from('users')
        .select('full_name, company_id')
        .eq('id', supabaseUser.id)
        .single()

      if (profileError) {
        console.error('Error fetching user profile:', profileError)
        throw profileError
      }

      const { data: userRoles, error: rolesError } = await supabase
        .from('user_roles')
        .select('role_id, roles(code)')
        .eq('user_id', supabaseUser.id)

      if (rolesError) {
        console.error('Error fetching user roles:', rolesError)
        throw rolesError
      }

      const roles = userRoles?.map(ur => (ur.roles as any)?.code).filter(Boolean) || []

      const company_id = supabaseUser.user_metadata?.company_id 
        || (supabaseUser?.app_metadata?.claims?.company_id as string) 
        || ''

      return {
        id: supabaseUser.id,
        email: supabaseUser.email!,
        full_name: userProfile.full_name,
        company_id: company_id,
        roles: roles,
      }
    } catch (error) {
      // Fallback if user profile doesn't exist yet
      const company_id = supabaseUser.user_metadata?.company_id 
        || (supabaseUser?.app_metadata?.claims?.company_id as string) 
        || ''
      
      return {
        id: supabaseUser.id,
        email: supabaseUser.email!,
        full_name: supabaseUser.email!,
        company_id: company_id,
        roles: [],
      }
    }
  }

  const signIn = async (email: string, password: string) => {
    setLoading(true)
    try {
      const { error } = await supabase.auth.signInWithPassword({ email, password })
      if (error) throw error
    } finally {
      setLoading(false)
    }
  }

  const signOut = async () => {
    const { error } = await supabase.auth.signOut()
    if (error) throw error
  }

  return {
    user,
    loading,
    signIn,
    signOut,
  }
} 