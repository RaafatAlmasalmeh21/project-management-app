// Database Types
export interface Company {
  id: string
  name: string
  logo_url?: string
  created_at: string
  updated_at: string
}

export interface Role {
  id: number
  code: string
  name: string
}

export interface User {
  id: string
  company_id: string
  full_name: string
  email: string
  phone?: string
  avatar_url?: string
  is_active: boolean
  created_at: string
  updated_at: string
}

export interface UserRole {
  user_id: string
  role_id: number
}

export interface Project {
  id: string
  company_id: string
  name: string
  description?: string
  start_date: string
  end_date?: string
  status: ProjectStatus
  budget?: number
  created_at: string
  updated_at: string
}

export interface Site {
  id: string
  company_id: string
  project_id: string
  name: string
  address: string
  latitude?: number
  longitude?: number
  created_at: string
  updated_at: string
}

export interface Task {
  id: string
  company_id: string
  site_id: string
  name: string
  description?: string
  start_date: string
  end_date?: string
  status: TaskStatus
  priority: TaskPriority
  estimated_hours?: number
  actual_hours?: number
  created_at: string
  updated_at: string
}

export interface TaskAssignment {
  id: string
  company_id: string
  task_id: string
  user_id: string
  assigned_at: string
  created_at: string
  updated_at: string
}

export interface Timesheet {
  id: string
  company_id: string
  user_id: string
  task_id?: string
  clock_in: string
  clock_out?: string
  break_duration?: number
  notes?: string
  location?: string
  created_at: string
  updated_at: string
}

export interface Equipment {
  id: string
  company_id: string
  name: string
  model?: string
  serial_number?: string
  qr_code?: string
  status: EquipmentStatus
  created_at: string
  updated_at: string
}

export interface Incident {
  id: string
  company_id: string
  user_id: string
  site_id: string
  title: string
  description: string
  severity: IncidentSeverity
  status: IncidentStatus
  reported_at: string
  resolved_at?: string
  created_at: string
  updated_at: string
}

export interface Training {
  id: string
  company_id: string
  title: string
  description?: string
  duration_minutes: number
  created_at: string
  updated_at: string
}

export interface UserTrainingCompleted {
  id: string
  company_id: string
  user_id: string
  training_id: string
  completed_at: string
  expires_at?: string
  created_at: string
  updated_at: string
}

export interface PushSubscription {
  id: string
  company_id: string
  user_id: string
  endpoint: string
  p256dh: string
  auth: string
  created_at: string
  updated_at: string
}

export interface AuditLog {
  id: string
  company_id: string
  user_id: string
  action: string
  table_name: string
  record_id: string
  old_values?: Record<string, any>
  new_values?: Record<string, any>
  created_at: string
}

// Enums
export enum ProjectStatus {
  PLANNED = 'PLANNED',
  IN_PROGRESS = 'IN_PROGRESS',
  ON_HOLD = 'ON_HOLD',
  COMPLETED = 'COMPLETED',
  CANCELLED = 'CANCELLED'
}

export enum TaskStatus {
  NOT_STARTED = 'NOT_STARTED',
  IN_PROGRESS = 'IN_PROGRESS',
  COMPLETED = 'COMPLETED',
  ON_HOLD = 'ON_HOLD',
  CANCELLED = 'CANCELLED'
}

export enum TaskPriority {
  LOW = 'LOW',
  MEDIUM = 'MEDIUM',
  HIGH = 'HIGH',
  CRITICAL = 'CRITICAL'
}

export enum EquipmentStatus {
  AVAILABLE = 'AVAILABLE',
  IN_USE = 'IN_USE',
  MAINTENANCE = 'MAINTENANCE',
  OUT_OF_ORDER = 'OUT_OF_ORDER'
}

export enum IncidentSeverity {
  LOW = 'LOW',
  MEDIUM = 'MEDIUM',
  HIGH = 'HIGH',
  CRITICAL = 'CRITICAL'
}

export enum IncidentStatus {
  REPORTED = 'REPORTED',
  INVESTIGATING = 'INVESTIGATING',
  RESOLVED = 'RESOLVED',
  CLOSED = 'CLOSED'
}

export enum UserRoleCode {
  ADMIN = 'ADMIN',
  MANAGER = 'MANAGER',
  WORKER = 'WORKER'
}

// API Response Types
export interface ApiResponse<T = any> {
  data?: T
  error?: string
  message?: string
}

export interface PaginatedResponse<T = any> {
  data: T[]
  count: number
  page: number
  limit: number
  totalPages: number
}

// Auth Types
export interface AuthUser {
  id: string
  email: string
  full_name: string
  company_id: string
  roles: UserRoleCode[]
}

// Dashboard Types
export interface DashboardStats {
  totalProjects: number
  activeProjects: number
  totalSites: number
  totalTasks: number
  completedTasks: number
  totalWorkers: number
  activeWorkers: number
  totalEquipment: number
  availableEquipment: number
  openIncidents: number
}

// Map Types
export interface MapMarker {
  id: string
  name: string
  latitude: number
  longitude: number
  type: 'site' | 'equipment' | 'worker'
  status?: string
}

// Notification Types
export interface NotificationPayload {
  title: string
  body: string
  data?: Record<string, any>
  icon?: string
  badge?: string
} 