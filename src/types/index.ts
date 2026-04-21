// Global shared types

export interface NavItem {
  label: string
  href: string
  external?: boolean
}

export interface Project {
  id: string
  title: string
  description: string
  tags: string[]
  url?: string
  repo?: string
  image?: string
}
