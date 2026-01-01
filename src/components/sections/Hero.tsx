'use client'

import { Button, Container } from '@/components/ui'
import { Badge } from '@/components/ui'
import { SITE_CONFIG } from '@/lib/constants'

export function Hero() {
  const scrollToFeatures = () => {
    const element = document.getElementById('features')
    element?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <section className="min-h-screen flex items-center bg-white relative overflow-hidden">
      {/* Floating geometric shapes */}
      <div
        className="absolute top-20 right-10 w-32 h-32 border-6 opacity-20 rotate-12"
        style={{
          backgroundColor: '#FFBE0B',
          borderColor: '#000000',
          boxShadow: '10px 10px 0px 0px #FFBE0B',
        }}
      />
      <div
        className="absolute bottom-32 left-10 w-24 h-24 rounded-full border-6 opacity-20"
        style={{
          backgroundColor: '#00F5FF',
          borderColor: '#000000',
          boxShadow: '10px 10px 0px 0px #00F5FF',
        }}
      />
      <div
        className="absolute top-1/2 right-1/3 w-20 h-20 border-6 opacity-20 rotate-45"
        style={{
          backgroundColor: '#FF006E',
          borderColor: '#000000',
          boxShadow: '10px 10px 0px 0px #FF006E',
        }}
      />

      <Container className="relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          {/* Text Side */}
          <div className="space-y-8">
            <Badge variant="black">Built for Professional Kitchens</Badge>

            <div className="space-y-4">
              <h1 className="text-6xl md:text-7xl lg:text-8xl font-display font-black tracking-tight leading-[0.85]">
                MISE EN PLACE THAT DOESN&apos;T SLOW YOU DOWN
              </h1>
              <p className="text-lg md:text-xl text-gray-700 max-w-md leading-relaxed">
                Stop juggling sticky notes and spreadsheets. Mise Please gives
                your kitchen team one fast, printable system for daily prep
                tasks—so you can focus on cooking, not chaos.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <Button
                href={SITE_CONFIG.appUrl}
                isExternal
                variant="primary"
                size="lg"
              >
                Try It Free →
              </Button>
              <Button
                variant="secondary"
                size="lg"
                onClick={scrollToFeatures}
              >
                See How It Works ↓
              </Button>
            </div>
          </div>

          {/* Visual Side */}
          <div className="relative h-96 md:h-full flex items-center justify-center">
            {/* App Screenshot Container */}
            <div
              className="w-full max-w-sm border-6 bg-white relative"
              style={{
                borderColor: '#000000',
                boxShadow: '10px 10px 0px 0px #00F5FF',
              }}
            >
              <div
                className="p-8 text-white"
                style={{
                  background: 'linear-gradient(135deg, #FF006E, #00F5FF)',
                }}
              >
                <h3 className="font-display font-black text-2xl mb-4">
                  MISE PLEASE
                </h3>
                <div className="space-y-4">
                  <div className="bg-white/20 h-10 rounded-sm border-2 border-white/30" />
                  <div className="bg-white/20 h-10 rounded-sm border-2 border-white/30" />
                  <div className="bg-white/20 h-10 rounded-sm border-2 border-white/30" />
                </div>
              </div>
            </div>

            {/* Accent elements - hidden on mobile to prevent overflow */}
            <div
              className="hidden md:block absolute -bottom-4 -right-4 w-24 h-24 border-6"
              style={{
                backgroundColor: '#FFBE0B',
                borderColor: '#000000',
                boxShadow: '10px 10px 0px 0px #FFBE0B',
              }}
            />
            <div
              className="hidden md:block absolute -top-4 -left-4 w-16 h-16 border-6"
              style={{
                backgroundColor: '#FB5607',
                borderColor: '#000000',
                boxShadow: '10px 10px 0px 0px #FB5607',
              }}
            />
          </div>
        </div>
      </Container>
    </section>
  )
}
