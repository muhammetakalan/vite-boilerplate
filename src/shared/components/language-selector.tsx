import { useTranslation } from 'react-i18next'

import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue
} from '@/shared/components/ui'

export function LanguageSelector() {
  const { i18n } = useTranslation()

  return (
    <Select value={i18n.language} onValueChange={i18n.changeLanguage}>
      <SelectTrigger>
        <SelectValue />
      </SelectTrigger>
      <SelectContent>
        <SelectGroup>
          <SelectItem value="tr">🇹🇷 Turkish</SelectItem>
          <SelectItem value="en">🇬🇧 English</SelectItem>
        </SelectGroup>
      </SelectContent>
    </Select>
  )
}
