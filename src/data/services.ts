export interface Service {
  id: string;
  title: string;
  headline: string;
  href: string;
  iconName: string;
}

export const SERVICES: Service[] = [
  {
    id: 'full-detail',
    title: 'Full Detail',
    headline: 'Interior + exterior. Left cleaner than factory.',
    href: '/full-detail',
    iconName: 'sparkle',
  },
  {
    id: 'exterior-detail',
    title: 'Exterior Detail',
    headline: 'Decontamination, clay, sealant. Protection that lasts.',
    href: '/exterior-detail',
    iconName: 'shield',
  },
  {
    id: 'ceramic-coating',
    title: 'Ceramic Coating',
    headline: 'Single-layer protection, years of payoff.',
    href: '/ceramic-coating',
    iconName: 'layers',
  },
  {
    id: 'recon',
    title: 'Heavy Recon',
    headline: 'Neglected vehicles restored to a sellable standard.',
    href: '/recon',
    iconName: 'wrench',
  },
  {
    id: 'fleet',
    title: 'Fleet Programs',
    headline: 'Per-unit pricing. Standing schedule. Monthly invoice.',
    href: '/fleet',
    iconName: 'truck',
  },
];
