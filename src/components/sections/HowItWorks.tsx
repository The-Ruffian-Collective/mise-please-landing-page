import { Card, Container } from '@/components/ui'
import { HOW_IT_WORKS } from '@/lib/constants'

export function HowItWorks() {
  return (
    <section id="how-it-works" className="section-padding" style={{ backgroundColor: '#FFFFFF' }}>
      <Container>
        <div className="mb-16">
          <h2 className="text-5xl md:text-7xl font-display font-black tracking-tight mb-4">
            THREE STEPS TO ORGANIZED PREP
          </h2>
          <p className="text-lg md:text-xl max-w-2xl" style={{ color: '#374151' }}>
            From chaos to clarity in minutes.
          </p>
        </div>

        <div className="space-y-8 md:space-y-0 md:grid md:grid-cols-3 md:gap-8">
          {HOW_IT_WORKS.map((item, index) => (
            <div key={item.step} className="relative">
              {/* Connecting Line (hidden on mobile) */}
              {index < HOW_IT_WORKS.length - 1 && (
                <div className="hidden md:block absolute top-32 -right-4 w-8 h-1" style={{ backgroundColor: '#000000' }} />
              )}

              <div
                className="p-8 md:p-10 space-y-6 border-4"
                style={{
                  backgroundColor: '#FFFFFF',
                  borderColor: '#000000',
                  boxShadow: '10px 10px 0px 0px #FFBE0B',
                }}
              >
                {/* Step Number Background */}
                <div className="relative">
                  <div
                    className="text-9xl font-display font-black leading-none mb-4"
                    style={{ color: '#F5F5F5' }}
                  >
                    {String(item.step).padStart(2, '0')}
                  </div>
                  <h3 className="text-2xl md:text-3xl font-display font-black absolute top-0 left-0">
                    {item.title}
                  </h3>
                </div>

                <p className="text-base md:text-lg leading-relaxed pt-12" style={{ color: '#374151' }}>
                  {item.description}
                </p>

                {/* Icon Placeholder */}
                <div className="pt-4 border-t-4" style={{ borderColor: '#000000' }}>
                  <div
                    className="w-16 h-16 border-4 flex items-center justify-center text-3xl"
                    style={{
                      backgroundColor: '#00F5FF',
                      borderColor: '#000000',
                    }}
                  >
                    {index === 0 ? '➕' : index === 1 ? '📊' : '🖨️'}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  )
}
