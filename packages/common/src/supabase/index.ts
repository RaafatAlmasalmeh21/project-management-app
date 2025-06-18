import { createClient, SupabaseClient } from '@supabase/supabase-js'
import type { Database } from './database.types'

// Supabase client factory
export const createSupabaseClient = (
  url: string,
  anonKey: string,
  options?: {
    autoRefreshToken?: boolean
    persistSession?: boolean
    detectSessionInUrl?: boolean
  }
): SupabaseClient<Database> => {
  return createClient<Database>(url, anonKey, {
    auth: {
      autoRefreshToken: options?.autoRefreshToken ?? true,
      persistSession: options?.persistSession ?? true,
      detectSessionInUrl: options?.detectSessionInUrl ?? true,
    },
  })
}

// Default client configuration for web
export const createWebClient = (url: string, anonKey: string) => {
  return createSupabaseClient(url, anonKey, {
    autoRefreshToken: true,
    persistSession: true,
    detectSessionInUrl: true,
  })
}

// Mobile client configuration
export const createMobileClient = (url: string, anonKey: string) => {
  return createSupabaseClient(url, anonKey, {
    autoRefreshToken: true,
    persistSession: true,
    detectSessionInUrl: false, // Mobile doesn't need URL detection
  })
}

// Utility functions for auth
export const getCurrentUser = async (client: SupabaseClient) => {
  const { data: { user }, error } = await client.auth.getUser()
  if (error) throw error
  return user
}

export const signOut = async (client: SupabaseClient) => {
  const { error } = await client.auth.signOut()
  if (error) throw error
}

export const getSession = async (client: SupabaseClient) => {
  const { data: { session }, error } = await client.auth.getSession()
  if (error) throw error
  return session
}

// RLS utility functions
export const setCompanyIdClaim = async (
  client: SupabaseClient,
  companyId: string
) => {
  // This would typically be handled by your auth system
  // For now, we'll ensure it's set in the JWT claims
  const { data, error } = await client.rpc('set_company_id_claim', {
    company_id: companyId
  })
  if (error) throw error
  return data
}

// Database utility functions
export const withTransaction = async <T>(
  client: SupabaseClient,
  callback: (client: SupabaseClient) => Promise<T>
): Promise<T> => {
  // Supabase doesn't expose transaction APIs directly
  // This is a placeholder for potential future implementation
  return await callback(client)
}

// Types
export type SupabaseClientType = SupabaseClient<Database>
export { Database } from './database.types' 