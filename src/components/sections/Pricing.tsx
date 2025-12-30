import { Button, Card, Container } from '@/components/ui'
import { Badge } from '@/components/ui'
import { SITE_CONFIG, PRICING_FEATURES } from '@/lib/constants'

export function Pricing() {
  return (
    <section
      className="section-padding"
      style={{ backgroundColor: '#FF006E' }}
    >
      <Container size="sm">
        <div className="mb-12 text-center space-y-4">
          <h2 className="text-5xl md:text-7xl font-display font-black tracking-tight" style={{ color: '#FFFFFF' }}>
            START ORGANIZING TODAY
          </h2>
          <p className="text-lg md:text-xl" style={{ color: 'rgba(255,255,255,0.9)' }}>
            Everything you need to transform your kitchen prep.
          </p>
        </div>

        <div
          className="p-8 md:p-12 space-y-8 max-w-2xl mx-auto border-4"
          style={{
            backgroundColor: '#FFFFFF',
            borderColor: '#000000',
            boxShadow: '10px 10px 0px 0px #00F5FF',
          }}
        >
          <div className="text-center space-y-4">
            <Badge variant="cyan">100% FREE</Badge>
            <h3 className="text-4xl md:text-5xl font-display font-black">
              Everything You Need
            </h3>
            <p className="text-base md:text-lg" style={{ color: '#374151' }}>
              No credit card required. No trial period. No BS.
            </p>
          </div>

          <div className="space-y-4 border-t-4 border-b-4 pt-8 pb-8" style={{ borderColor: '#000000' }}>
            {PRICING_FEATURES.map((feature, index) => (
              <div key={index} className="flex items-start gap-4">
                <div
                  className="w-6 h-6 border-2 rounded-full flex items-center justify-center flex-shrink-0 mt-1"
                  style={{
                    backgroundColor: '#00F5FF',
                    borderColor: '#000000',
                  }}
                >
                  <span className="text-xs font-bold text-black">✓</span>
                </div>
                <span className="text-base md:text-lg font-medium" style={{ color: '#1F2937' }}>
                  {feature}
                </span>
              </div>
            ))}
          </div>

          <div className="text-center space-y-4">
            <Button
              href={SITE_CONFIG.appUrl}
              isExternal
              variant="black"
              size="lg"
              className="w-full"
            >
              Start Using Mise Please →
            </Button>
            <p className="text-sm" style={{ color: '#4B5563' }}>
              Works on any device • Prints beautifully • Free forever
            </p>
          </div>
        </div>
      </Container>
    </section>
  )
}
