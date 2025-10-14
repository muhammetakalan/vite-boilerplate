import { HelmetProvider } from 'react-helmet-async'

import { ActiveThemeProvider } from '@/shared/components/active-theme'
import { ThemeProvider } from '@/shared/components/theme-provider'
import { Toaster, TooltipProvider } from '@/shared/components/ui'

type RootLayoutProps = {
  children: React.ReactNode
}

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <HelmetProvider>
      <ActiveThemeProvider>
        <ThemeProvider defaultTheme="dark">
          <TooltipProvider>{children}</TooltipProvider>
          <Toaster position="top-center" />
        </ThemeProvider>
      </ActiveThemeProvider>
    </HelmetProvider>
  )
}
