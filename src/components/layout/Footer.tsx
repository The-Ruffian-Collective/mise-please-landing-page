import { Container } from '@/components/ui'
import { SITE_CONFIG, FOOTER_LINKS } from '@/lib/constants'

export function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-black text-white">
      <Container>
        <div className="py-16 md:py-24">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
            {/* Branding Column */}
            <div>
              <div className="flex items-center gap-2 mb-4">
                <div className="w-10 h-10 bg-primary-pink border-4 border-white flex items-center justify-center">
                  <span className="font-display font-black text-white text-lg">
                    MP
                  </span>
                </div>
                <div className="font-display font-black text-lg tracking-tight">
                  MISE PLEASE
                </div>
              </div>
              <p className="text-gray-400 text-sm">
                Professional kitchen prep, organized.
              </p>
            </div>

            {/* Product Links */}
            <div>
              <h4 className="font-display font-black text-sm uppercase mb-4">
                Product
              </h4>
              <nav className="space-y-3">
                {FOOTER_LINKS.product.map((link) => (
                  <a
                    key={link.label}
                    href={link.href}
                    className="block text-gray-400 hover:text-white transition-colors text-sm"
                  >
                    {link.label}
                  </a>
                ))}
              </nav>
            </div>

            {/* Connect Column */}
            <div>
              <h4 className="font-display font-black text-sm uppercase mb-4">
                Connect
              </h4>
              <div className="space-y-3">
                <p className="text-gray-400 text-sm">
                  <a
                    href={`mailto:${SITE_CONFIG.email}`}
                    className="hover:text-white transition-colors"
                  >
                    {SITE_CONFIG.email}
                  </a>
                </p>
              </div>
            </div>
          </div>

          {/* Divider */}
          <div className="border-t-4 border-gray-800 pt-8">
            <p className="text-gray-500 text-sm text-center">
              © {currentYear} {SITE_CONFIG.name} • Built for chefs, by people
              who care about craft
            </p>
          </div>
        </div>
      </Container>
    </footer>
  )
}
