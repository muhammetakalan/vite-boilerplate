import { useThemeConfig } from '@/shared/components/active-theme'
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectSeparator,
  SelectTrigger,
  SelectValue
} from '@/shared/components/ui'

const DEFAULT_THEMES = [
  {
    name: 'Default',
    value: 'default'
  },
  {
    name: 'Scaled',
    value: 'scaled'
  },
  {
    name: 'Mono',
    value: 'mono'
  }
]

const COLOR_THEMES = [
  {
    name: 'Blue',
    value: 'blue'
  },
  {
    name: 'Green',
    value: 'green'
  },
  {
    name: 'Amber',
    value: 'amber'
  },
  {
    name: 'Rose',
    value: 'rose'
  },
  {
    name: 'Purple',
    value: 'purple'
  },
  {
    name: 'Orange',
    value: 'orange'
  },
  {
    name: 'Teal',
    value: 'teal'
  }
]

export function ThemeSelector() {
  const { activeTheme, setActiveTheme } = useThemeConfig()

  return (
    <Select value={activeTheme} onValueChange={setActiveTheme}>
      <SelectTrigger>
        <SelectValue />
      </SelectTrigger>
      <SelectContent>
        <SelectGroup>
          {DEFAULT_THEMES.map((theme) => (
            <SelectItem value={theme.value}>{theme.name}</SelectItem>
          ))}
        </SelectGroup>
        <SelectSeparator />
        <SelectGroup>
          {COLOR_THEMES.map((theme) => (
            <SelectItem value={theme.value}>{theme.name}</SelectItem>
          ))}
        </SelectGroup>
      </SelectContent>
    </Select>
  )
}
