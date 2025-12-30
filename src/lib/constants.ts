export const SITE_CONFIG = {
  name: 'Mise Please',
  url: 'https://mise-please-landing.vercel.app',
  appUrl: 'https://mise-please.vercel.app',
  description:
    'Stop juggling sticky notes and spreadsheets. Fast, smart, printable mise en place for professional kitchens.',
  ogImage: '/og-image.png',
  email: 'hello@miseplease.com',
}

export const FEATURES = [
  {
    id: 'fast',
    icon: '⚡',
    title: 'Add Tasks in Seconds',
    description:
      'No complex forms or endless clicking. Type what you need, hit enter, and get back to the line. Speed is built into every interaction.',
  },
  {
    id: 'smart',
    icon: '🧠',
    title: 'Organized by Station',
    description:
      'Automatically sort prep tasks by kitchen section—prep, garde manger, hot line, pastry. Everyone sees exactly what they need to do, nothing more.',
  },
  {
    id: 'printable',
    icon: '📋',
    title: 'Print Real MEP Lists',
    description:
      'Generate clean, professional mise en place lists for your wall. No tablets in the kitchen—just paper that works when you\'re elbow-deep in prep.',
  },
]

export const HOW_IT_WORKS = [
  {
    step: 1,
    title: 'Add Your Tasks',
    description:
      'Open the app, type in today\'s prep work. Assign priorities and stations as you go. Takes 30 seconds to set up your entire day.',
  },
  {
    step: 2,
    title: 'View by Station',
    description:
      'Switch to Stations view to see prep organized by kitchen section—exactly how your team works. Garde manger sees garde manger tasks. Hot line sees hot line tasks.',
  },
  {
    step: 3,
    title: 'Print & Prep',
    description:
      'Hit print to generate clean MEP lists formatted for the real world. Post them on your wall, cross off tasks, and let your team execute without checking back with you every five minutes.',
  },
]

export const TESTIMONIALS = [
  {
    quote:
      'Finally, a prep system that\'s faster than our old whiteboard. The whole team picked it up in minutes.',
    author: 'Alex Chen',
    role: 'Executive Chef',
    restaurant: 'The Modern Table',
  },
  {
    quote:
      'We tried three different kitchen management apps before this. Mise Please is the only one that actually understands how kitchens work—no bloat, just what we need.',
    author: 'Jordan Martinez',
    role: 'Sous Chef',
    restaurant: 'Harvest Kitchen',
  },
]

export const FOOTER_LINKS = {
  product: [
    { label: 'Features', href: '#features' },
    { label: 'How It Works', href: '#how-it-works' },
    { label: 'About', href: '#' },
  ],
  legal: [
    { label: 'Privacy', href: '#' },
    { label: 'Terms', href: '#' },
    { label: 'Contact', href: `mailto:${SITE_CONFIG.email}` },
  ],
  social: [
    { label: 'Twitter', href: '#', icon: 'twitter' },
    { label: 'Instagram', href: '#', icon: 'instagram' },
    { label: 'GitHub', href: '#', icon: 'github' },
  ],
}

export const PRICING_FEATURES = [
  'Unlimited tasks',
  'Multiple kitchen stations',
  'Priority & date management',
  'Print unlimited MEP lists',
  'Access from any device',
]
