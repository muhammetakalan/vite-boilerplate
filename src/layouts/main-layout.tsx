interface MainLayoutProps {
  children: React.ReactNode
}

export default function MainLayout({ children }: MainLayoutProps) {
  return <main className="flex min-h-screen flex-col">{children}</main>
}
