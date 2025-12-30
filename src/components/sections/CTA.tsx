'use client'

import { Button, Container } from '@/components/ui'
import { SITE_CONFIG } from '@/lib/constants'

export function CTA() {
  return (
    <section className="relative section-padding overflow-hidden">
      {/* Diagonal Split Background */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 w-1/2" style={{ backgroundColor: '#FFBE0B' }} />
        <div className="absolute inset-0 w-1/2 ml-auto" style={{ backgroundColor: '#FF006E' }} />
        {/* Diagonal divider line */}
        <div
          className="absolute inset-0"
          style={{
            backgroundColor: '#000000',
            clipPath: 'polygon(0 0, 100% 0, 0 100%)',
            width: '8px',
            right: '49.5%',
          }}
        />
      </div>

      <Container className="relative z-10">
        <div className="max-w-3xl mx-auto text-center space-y-8">
          <h2
            className="text-6xl md:text-8xl font-display font-black tracking-tight text-stroke leading-[0.9]"
            style={{ color: '#000000' }}
          >
            READY TO STOP THE PREP CHAOS?
          </h2>

          <p
            className="text-lg md:text-2xl font-medium max-w-2xl mx-auto"
            style={{ color: '#000000' }}
          >
            Join kitchens that have ditched the sticky notes and finally
            organized their mise en place.
          </p>

          <Button
            href={SITE_CONFIG.appUrl}
            isExternal
            variant="black"
            size="lg"
            className="mx-auto mt-4"
          >
            Try Mise Please Free →
          </Button>

          <p className="text-sm font-medium" style={{ color: '#374151' }}>
            Works on any device • Prints beautifully • Free forever
          </p>
        </div>
      </Container>
    </section>
  )
}
