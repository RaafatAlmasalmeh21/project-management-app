declare module '@supabase/supabase-js' {
  export interface SupabaseClient<Db = any> {
    auth: any
    from: (...args: any[]) => any
    rpc: (...args: any[]) => any
  }
  export function createClient<Db = any>(
    url: string,
    key: string,
    options?: any
  ): SupabaseClient<Db>
}
