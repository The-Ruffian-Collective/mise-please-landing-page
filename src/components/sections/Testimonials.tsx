import { Container } from '@/components/ui'
import { TESTIMONIALS } from '@/lib/constants'

export function Testimonials() {
  const shadowColors = ['#FF006E', '#00F5FF']

  return (
    <section className="section-padding" style={{ backgroundColor: '#F5F5F5' }}>
      <Container>
        <div className="mb-16">
          <h2 className="text-5xl md:text-7xl font-display font-black tracking-tight mb-4">
            WHAT CHEFS ARE SAYING
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {TESTIMONIALS.map((testimonial, index) => (
            <div
              key={index}
              className="p-8 md:p-12 space-y-6 border-4"
              style={{
                backgroundColor: '#FFBE0B',
                borderColor: '#000000',
                boxShadow: `10px 10px 0px 0px ${shadowColors[index]}`,
              }}
            >
              <div
                className="text-6xl font-display leading-none mb-4"
                style={{ color: '#FF006E' }}
              >
                "
              </div>

              <p className="text-xl md:text-2xl font-display font-bold italic leading-relaxed text-black">
                {testimonial.quote}
              </p>

              <div className="pt-6 border-t-4" style={{ borderColor: '#000000' }}>
                <div className="space-y-2">
                  <p className="font-display font-black text-lg">
                    {testimonial.author}
                  </p>
                  <p className="text-sm" style={{ color: '#374151' }}>
                    {testimonial.role} @ {testimonial.restaurant}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  )
}
