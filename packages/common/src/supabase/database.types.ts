export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json | undefined }
  | Json[]

export interface Database {
  public: {
    Tables: {
      companies: {
        Row: {
          id: string
          name: string
          logo_url: string | null
          created_at: string
          updated_at: string
        }
        Insert: {
          id?: string
          name: string
          logo_url?: string | null
          created_at?: string
          updated_at?: string
        }
        Update: {
          id?: string
          name?: string
          logo_url?: string | null
          created_at?: string
          updated_at?: string
        }
        Relationships: []
      }
      roles: {
        Row: {
          id: number
          code: string
          name: string
        }
        Insert: {
          id?: number
          code: string
          name: string
        }
        Update: {
          id?: number
          code?: string
          name?: string
        }
        Relationships: []
      }
      users: {
        Row: {
          id: string
          company_id: string
          full_name: string
          email: string
          phone: string | null
          avatar_url: string | null
          is_active: boolean
          created_at: string
          updated_at: string
        }
        Insert: {
          id: string
          company_id: string
          full_name: string
          email: string
          phone?: string | null
          avatar_url?: string | null
          is_active?: boolean
          created_at?: string
          updated_at?: string
        }
        Update: {
          id?: string
          company_id?: string
          full_name?: string
          email?: string
          phone?: string | null
          avatar_url?: string | null
          is_active?: boolean
          created_at?: string
          updated_at?: string
        }
        Relationships: [
          {
            foreignKeyName: "users_company_id_fkey"
            columns: ["company_id"]
            referencedRelation: "companies"
            referencedColumns: ["id"]
          }
        ]
      }
      user_roles: {
        Row: {
          user_id: string
          role_id: number
        }
        Insert: {
          user_id: string
          role_id: number
        }
        Update: {
          user_id?: string
          role_id?: number
        }
        Relationships: [
          {
            foreignKeyName: "user_roles_user_id_fkey"
            columns: ["user_id"]
            referencedRelation: "users"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "user_roles_role_id_fkey"
            columns: ["role_id"]
            referencedRelation: "roles"
            referencedColumns: ["id"]
          }
        ]
      }
      projects: {
        Row: {
          id: string
          company_id: string
          name: string
          description: string | null
          start_date: string
          end_date: string | null
          status: string
          budget: number | null
          created_at: string
          updated_at: string
        }
        Insert: {
          id?: string
          company_id: string
          name: string
          description?: string | null
          start_date: string
          end_date?: string | null
          status: string
          budget?: number | null
          created_at?: string
          updated_at?: string
        }
        Update: {
          id?: string
          company_id?: string
          name?: string
          description?: string | null
          start_date?: string
          end_date?: string | null
          status?: string
          budget?: number | null
          created_at?: string
          updated_at?: string
        }
        Relationships: [
          {
            foreignKeyName: "projects_company_id_fkey"
            columns: ["company_id"]
            referencedRelation: "companies"
            referencedColumns: ["id"]
          }
        ]
      }
      sites: {
        Row: {
          id: string
          company_id: string
          project_id: string
          name: string
          address: string
          latitude: number | null
          longitude: number | null
          created_at: string
          updated_at: string
        }
        Insert: {
          id?: string
          company_id: string
          project_id: string
          name: string
          address: string
          latitude?: number | null
          longitude?: number | null
          created_at?: string
          updated_at?: string
        }
        Update: {
          id?: string
          company_id?: string
          project_id?: string
          name?: string
          address?: string
          latitude?: number | null
          longitude?: number | null
          created_at?: string
          updated_at?: string
        }
        Relationships: [
          {
            foreignKeyName: "sites_company_id_fkey"
            columns: ["company_id"]
            referencedRelation: "companies"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "sites_project_id_fkey"
            columns: ["project_id"]
            referencedRelation: "projects"
            referencedColumns: ["id"]
          }
        ]
      }
      tasks: {
        Row: {
          id: string
          company_id: string
          site_id: string
          name: string
          description: string | null
          start_date: string
          end_date: string | null
          status: string
          priority: string
          estimated_hours: number | null
          actual_hours: number | null
          created_at: string
          updated_at: string
        }
        Insert: {
          id?: string
          company_id: string
          site_id: string
          name: string
          description?: string | null
          start_date: string
          end_date?: string | null
          status: string
          priority: string
          estimated_hours?: number | null
          actual_hours?: number | null
          created_at?: string
          updated_at?: string
        }
        Update: {
          id?: string
          company_id?: string
          site_id?: string
          name?: string
          description?: string | null
          start_date?: string
          end_date?: string | null
          status?: string
          priority?: string
          estimated_hours?: number | null
          actual_hours?: number | null
          created_at?: string
          updated_at?: string
        }
        Relationships: [
          {
            foreignKeyName: "tasks_company_id_fkey"
            columns: ["company_id"]
            referencedRelation: "companies"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "tasks_site_id_fkey"
            columns: ["site_id"]
            referencedRelation: "sites"
            referencedColumns: ["id"]
          }
        ]
      }
      task_assignments: {
        Row: {
          id: string
          company_id: string
          task_id: string
          user_id: string
          assigned_at: string
          created_at: string
          updated_at: string
        }
        Insert: {
          id?: string
          company_id: string
          task_id: string
          user_id: string
          assigned_at: string
          created_at?: string
          updated_at?: string
        }
        Update: {
          id?: string
          company_id?: string
          task_id?: string
          user_id?: string
          assigned_at?: string
          created_at?: string
          updated_at?: string
        }
        Relationships: [
          {
            foreignKeyName: "task_assignments_company_id_fkey"
            columns: ["company_id"]
            referencedRelation: "companies"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "task_assignments_task_id_fkey"
            columns: ["task_id"]
            referencedRelation: "tasks"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "task_assignments_user_id_fkey"
            columns: ["user_id"]
            referencedRelation: "users"
            referencedColumns: ["id"]
          }
        ]
      }
      timesheets: {
        Row: {
          id: string
          company_id: string
          user_id: string
          task_id: string | null
          clock_in: string
          clock_out: string | null
          break_duration: number | null
          notes: string | null
          location: string | null
          created_at: string
          updated_at: string
        }
        Insert: {
          id?: string
          company_id: string
          user_id: string
          task_id?: string | null
          clock_in: string
          clock_out?: string | null
          break_duration?: number | null
          notes?: string | null
          location?: string | null
          created_at?: string
          updated_at?: string
        }
        Update: {
          id?: string
          company_id?: string
          user_id?: string
          task_id?: string | null
          clock_in?: string
          clock_out?: string | null
          break_duration?: number | null
          notes?: string | null
          location?: string | null
          created_at?: string
          updated_at?: string
        }
        Relationships: [
          {
            foreignKeyName: "timesheets_company_id_fkey"
            columns: ["company_id"]
            referencedRelation: "companies"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "timesheets_user_id_fkey"
            columns: ["user_id"]
            referencedRelation: "users"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "timesheets_task_id_fkey"
            columns: ["task_id"]
            referencedRelation: "tasks"
            referencedColumns: ["id"]
          }
        ]
      }
      equipment: {
        Row: {
          id: string
          company_id: string
          name: string
          model: string | null
          serial_number: string | null
          qr_code: string | null
          status: string
          created_at: string
          updated_at: string
        }
        Insert: {
          id?: string
          company_id: string
          name: string
          model?: string | null
          serial_number?: string | null
          qr_code?: string | null
          status: string
          created_at?: string
          updated_at?: string
        }
        Update: {
          id?: string
          company_id?: string
          name?: string
          model?: string | null
          serial_number?: string | null
          qr_code?: string | null
          status?: string
          created_at?: string
          updated_at?: string
        }
        Relationships: [
          {
            foreignKeyName: "equipment_company_id_fkey"
            columns: ["company_id"]
            referencedRelation: "companies"
            referencedColumns: ["id"]
          }
        ]
      }
      incidents: {
        Row: {
          id: string
          company_id: string
          user_id: string
          site_id: string
          title: string
          description: string
          severity: string
          status: string
          reported_at: string
          resolved_at: string | null
          created_at: string
          updated_at: string
        }
        Insert: {
          id?: string
          company_id: string
          user_id: string
          site_id: string
          title: string
          description: string
          severity: string
          status: string
          reported_at: string
          resolved_at?: string | null
          created_at?: string
          updated_at?: string
        }
        Update: {
          id?: string
          company_id?: string
          user_id?: string
          site_id?: string
          title?: string
          description?: string
          severity?: string
          status?: string
          reported_at?: string
          resolved_at?: string | null
          created_at?: string
          updated_at?: string
        }
        Relationships: [
          {
            foreignKeyName: "incidents_company_id_fkey"
            columns: ["company_id"]
            referencedRelation: "companies"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "incidents_user_id_fkey"
            columns: ["user_id"]
            referencedRelation: "users"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "incidents_site_id_fkey"
            columns: ["site_id"]
            referencedRelation: "sites"
            referencedColumns: ["id"]
          }
        ]
      }
      training: {
        Row: {
          id: string
          company_id: string
          title: string
          description: string | null
          duration_minutes: number
          created_at: string
          updated_at: string
        }
        Insert: {
          id?: string
          company_id: string
          title: string
          description?: string | null
          duration_minutes: number
          created_at?: string
          updated_at?: string
        }
        Update: {
          id?: string
          company_id?: string
          title?: string
          description?: string | null
          duration_minutes?: number
          created_at?: string
          updated_at?: string
        }
        Relationships: [
          {
            foreignKeyName: "training_company_id_fkey"
            columns: ["company_id"]
            referencedRelation: "companies"
            referencedColumns: ["id"]
          }
        ]
      }
      user_training_completed: {
        Row: {
          id: string
          company_id: string
          user_id: string
          training_id: string
          completed_at: string
          expires_at: string | null
          created_at: string
          updated_at: string
        }
        Insert: {
          id?: string
          company_id: string
          user_id: string
          training_id: string
          completed_at: string
          expires_at?: string | null
          created_at?: string
          updated_at?: string
        }
        Update: {
          id?: string
          company_id?: string
          user_id?: string
          training_id?: string
          completed_at?: string
          expires_at?: string | null
          created_at?: string
          updated_at?: string
        }
        Relationships: [
          {
            foreignKeyName: "user_training_completed_company_id_fkey"
            columns: ["company_id"]
            referencedRelation: "companies"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "user_training_completed_user_id_fkey"
            columns: ["user_id"]
            referencedRelation: "users"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "user_training_completed_training_id_fkey"
            columns: ["training_id"]
            referencedRelation: "training"
            referencedColumns: ["id"]
          }
        ]
      }
      push_subscriptions: {
        Row: {
          id: string
          company_id: string
          user_id: string
          endpoint: string
          p256dh: string
          auth: string
          created_at: string
          updated_at: string
        }
        Insert: {
          id?: string
          company_id: string
          user_id: string
          endpoint: string
          p256dh: string
          auth: string
          created_at?: string
          updated_at?: string
        }
        Update: {
          id?: string
          company_id?: string
          user_id?: string
          endpoint?: string
          p256dh?: string
          auth?: string
          created_at?: string
          updated_at?: string
        }
        Relationships: [
          {
            foreignKeyName: "push_subscriptions_company_id_fkey"
            columns: ["company_id"]
            referencedRelation: "companies"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "push_subscriptions_user_id_fkey"
            columns: ["user_id"]
            referencedRelation: "users"
            referencedColumns: ["id"]
          }
        ]
      }
      audit_logs: {
        Row: {
          id: string
          company_id: string
          user_id: string
          action: string
          table_name: string
          record_id: string
          old_values: Json | null
          new_values: Json | null
          created_at: string
        }
        Insert: {
          id?: string
          company_id: string
          user_id: string
          action: string
          table_name: string
          record_id: string
          old_values?: Json | null
          new_values?: Json | null
          created_at?: string
        }
        Update: {
          id?: string
          company_id?: string
          user_id?: string
          action?: string
          table_name?: string
          record_id?: string
          old_values?: Json | null
          new_values?: Json | null
          created_at?: string
        }
        Relationships: [
          {
            foreignKeyName: "audit_logs_company_id_fkey"
            columns: ["company_id"]
            referencedRelation: "companies"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "audit_logs_user_id_fkey"
            columns: ["user_id"]
            referencedRelation: "users"
            referencedColumns: ["id"]
          }
        ]
      }
    }
    Views: {
      [_ in never]: never
    }
    Functions: {
      set_company_id_claim: {
        Args: {
          company_id: string
        }
        Returns: undefined
      }
    }
    Enums: {
      [_ in never]: never
    }
    CompositeTypes: {
      [_ in never]: never
    }
  }
} 