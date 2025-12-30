'use client'

import { Button, Container } from '@/components/ui'
import { SITE_CONFIG } from '@/lib/constants'

export function Header() {
  return (
    <header className="sticky top-0 z-50 bg-white border-b-4 border-black">
      <Container>
        <div className="flex items-center justify-between py-6">
          <div className="flex items-center gap-2">
            <div className="w-10 h-10 bg-primary-pink border-4 border-black flex items-center justify-center">
              <span className="font-display font-black text-white text-lg">MP</span>
            </div>
            <div className="font-display font-black text-xl tracking-tight">
              MISE<br />PLEASE
            </div>
          </div>

          <Button
            href={SITE_CONFIG.appUrl}
            isExternal
            variant="primary"
            size="md"
          >
            Try It Free →
          </Button>
        </div>
      </Container>
    </header>
  )
}
