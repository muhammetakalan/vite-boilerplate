import { SearchIcon } from 'lucide-react'
import { Helmet } from 'react-helmet-async'

import {
  Empty,
  EmptyContent,
  EmptyDescription,
  EmptyHeader,
  EmptyTitle,
  InputGroup,
  InputGroupAddon,
  InputGroupInput,
  Kbd
} from '@/shared/components/ui'

export default function NotFound() {
  return (
    <div className="flex h-screen">
      <Helmet>
        <title>Sayfa Bulunamadı | Vite Boilerplate</title>
        <meta name="description" content="Böyle bir sayfa bulunamadı" />
        <meta name="robots" content="noindex, nofollow" />
      </Helmet>

      <Empty>
        <EmptyHeader>
          <EmptyTitle>404 - Not Found</EmptyTitle>
          <EmptyDescription>
            The page you&apos;re looking for doesn&apos;t exist. Try searching
            for what you need below.
          </EmptyDescription>
        </EmptyHeader>
        <EmptyContent>
          <InputGroup className="sm:w-3/4">
            <InputGroupInput placeholder="Try searching for pages..." />
            <InputGroupAddon>
              <SearchIcon />
            </InputGroupAddon>
            <InputGroupAddon align="inline-end">
              <Kbd>/</Kbd>
            </InputGroupAddon>
          </InputGroup>
          <EmptyDescription>
            Need help? <a href="#">Contact support</a>
          </EmptyDescription>
        </EmptyContent>
      </Empty>
    </div>
  )
}
