import { Container } from '@/components/ui'
import { FEATURES } from '@/lib/constants'

export function Features() {
  const shadowColors = ['#FFBE0B', '#FF006E', '#00F5FF']

  return (
    <section
      id="features"
      className="section-padding"
      style={{ backgroundColor: '#F5F5F5' }}
    >
      <Container>
        <div className="mb-16">
          <h2 className="text-5xl md:text-7xl font-display font-black tracking-tight mb-4">
            THREE QUALITIES YOUR KITCHEN NEEDS
          </h2>
          <p className="text-lg md:text-xl max-w-2xl" style={{ color: '#374151' }}>
            Built around how real kitchens work. No bloat. No complexity. Just
            the essentials.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {FEATURES.map((feature, index) => (
            <div
              key={feature.id}
              className="p-8 md:p-12 space-y-6 hover:shadow-brutal-lg transition-all border-4"
              style={{
                backgroundColor: '#FFFFFF',
                borderColor: '#000000',
                boxShadow: `10px 10px 0px 0px ${shadowColors[index]}`,
              }}
            >
              <div className="flex items-center justify-center">
                <div
                  className="w-20 h-20 md:w-24 md:h-24 rounded-full border-4 flex items-center justify-center text-5xl md:text-6xl"
                  style={{
                    borderColor: '#000000',
                    background: 'linear-gradient(to bottom right, #F9FAFB, #F5F5F5)',
                  }}
                >
                  {feature.icon}
                </div>
              </div>

              <div className="space-y-4 text-center">
                <h3 className="text-2xl md:text-3xl font-display font-black">
                  {feature.title}
                </h3>
                <p
                  className="text-base md:text-lg leading-relaxed"
                  style={{ color: '#374151' }}
                >
                  {feature.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  )
}
