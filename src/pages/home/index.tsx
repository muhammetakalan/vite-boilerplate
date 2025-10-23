import { ArrowRight, ArrowUpRight, CirclePlay } from 'lucide-react'
import { useTranslation } from 'react-i18next'
import { Link } from 'react-router-dom'

import MainLayout from '@/layouts/main-layout'
import { LanguageSelector } from '@/shared/components/language-selector'
import { ModeToggle } from '@/shared/components/mode-toggle'
import ModelViewer from '@/shared/components/model-viewer'
import { ThemeSelector } from '@/shared/components/theme-selector'
import { Badge, Button } from '@/shared/components/ui'

export default function HomePage() {
  const { t } = useTranslation()

  return (
    <MainLayout>
      <div className="my-auto w-full">
        <div className="px-4">
          <div className="m-auto max-w-4xl text-center">
            <Badge variant="secondary">{t('homepage.badge')}</Badge>
            <h1 className="mt-6 text-[clamp(36px,9vw,72px)] font-semibold tracking-tighter">
              {t('homepage.heading')}
            </h1>
            <p className="mt-6 md:text-lg">{t('homepage.description')}</p>
            <div className="mt-12 flex flex-wrap justify-center gap-4">
              <a
                target="_blank"
                href="https://github.com/muhammetakalan/vite-boilerplate"
              >
                <Button>
                  {t('homepage.buttons.getStarted')}
                  <ArrowUpRight />
                </Button>
              </a>
              <LanguageSelector />
              <ThemeSelector />
              <ModeToggle />
            </div>
            <div className="h-96">
              <ModelViewer model="/model.glb" />
            </div>
          </div>
        </div>
      </div>
    </MainLayout>
  )
}
