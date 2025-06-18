import i18n from 'i18next'
import { initReactI18next } from 'react-i18next'

const resources = {
  en: {
    translation: {
      welcome: 'Welcome to BuildPro',
      dashboard: 'Dashboard',
      projects: 'Projects',
      sites: 'Sites',
      tasks: 'Tasks',
      workforce: 'Workforce',
      equipment: 'Equipment',
      reports: 'Reports',
      settings: 'Settings',
    }
  },
  es: {
    translation: {
      welcome: 'Bienvenido a BuildPro',
      dashboard: 'Panel',
      projects: 'Proyectos',
      sites: 'Sitios',
      tasks: 'Tareas',
      workforce: 'Fuerza laboral',
      equipment: 'Equipo',
      reports: 'Informes',
      settings: 'Configuración',
    }
  },
  ar: {
    translation: {
      welcome: 'مرحباً بك في BuildPro',
      dashboard: 'لوحة التحكم',
      projects: 'المشاريع',
      sites: 'المواقع',
      tasks: 'المهام',
      workforce: 'القوى العاملة',
      equipment: 'المعدات',
      reports: 'التقارير',
      settings: 'الإعدادات',
    }
  }
}

i18n
  .use(initReactI18next)
  .init({
    resources,
    lng: 'en',
    fallbackLng: 'en',
    interpolation: {
      escapeValue: false
    }
  })

export default i18n 