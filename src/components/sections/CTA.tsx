'use client'

import { Button, Container } from '@/components/ui'
import { SITE_CONFIG } from '@/lib/constants'

export function CTA() {
  return (
    <section className="relative section-padding overflow-hidden">
      {/* Diagonal Split Background */}
      <div className="absolute inset-0">
        {/* Yellow base */}
        <div className="absolute inset-0" style={{ backgroundColor: '#FFBE0B' }} />
        {/* Pink diagonal overlay */}
        <div
          className="absolute inset-0"
          style={{
            backgroundColor: '#FF006E',
            clipPath: 'polygon(40% 0, 100% 0, 100% 100%, 60% 100%)',
          }}
        />
        {/* Black diagonal divider line */}
        <div
          className="absolute inset-0"
          style={{
            background: 'linear-gradient(to bottom right, transparent calc(50% - 3px), #000000 calc(50% - 3px), #000000 calc(50% + 3px), transparent calc(50% + 3px))',
            clipPath: 'polygon(40% 0, 42% 0, 62% 100%, 60% 100%)',
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
