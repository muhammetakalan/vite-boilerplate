import * as React from 'react'
import { IconBrightness } from '@tabler/icons-react'

import { useTheme } from '@/shared/components/theme-provider'
import { Button } from '@/shared/components/ui'

export function ModeToggle() {
  const { setTheme, theme } = useTheme()

  const toggleTheme = React.useCallback(() => {
    setTheme(theme === 'dark' ? 'light' : 'dark')
  }, [theme, setTheme])

  return (
    <Button variant="outline" size="icon" onClick={toggleTheme}>
      <IconBrightness />
    </Button>
  )
}
