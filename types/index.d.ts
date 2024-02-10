//Types and interfaces needed for components/pages

export interface LayoutProps {
  children: React.ReactNode
}

export interface URLProps {
  params: { id: string }
  searchParams: { [key: string]: string | undefined }
}
