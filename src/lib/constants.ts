import BEL from '@/assets/images/clients/BEL.png';
import HAL from '@/assets/images/clients/HAL.png';
import Nuventura from '@/assets/images/clients/Nuventura.webp';
import Radius from '@/assets/images/clients/Radius.jpg';
import Trident from '@/assets/images/clients/Trident.png';
import ABT from '@/assets/images/clients/ABT.png';
import Liveontechnolabs from '@/assets/images/clients/Liveontechnolabs.png';
import CompanyDetails from '@/assets/images/clients/CompanyDetails.png';
import Mamatha from '@/assets/images/clients/Mamtha.png';
import Magod from '@/assets/images/clients/Magod.webp';
import HAPL from '@/assets/images/clients/HAPL.png';
import AEROSKY from '@/assets/images/clients/AEROSKY.png';
import Datasol from '@/assets/images/clients/Datasol.png';
import TeamD from '@/assets/images/clients/TeamD.png';

export const routes = {
  home: () => '/',
  aboutUs: () => '/about',
  capabilities: () => '/capabilities',
  industries: () => '/industries',
  contactUs: () => '/contact',
  error: () => '*',
};

export const about = [
  {
    title: 'Overview',
    href: '/about#overview',
  },
  {
    title: 'Mission and vision',
    href: '/about#mission',
  },
  {
    title: 'Quality and commitment',
    href: '/about#quality',
  },
  {
    title: 'Clientele and testimonials',
    href: '/about#clientele',
  },
];

export const capabilities = [
  {
    title: 'CNC Milling',
    href: '/about#miling',
  },
  {
    title: 'CNC turning',
    href: '/about#turning',
  },
  {
    title: 'Injection molding',
    href: '/about#molding',
  },
];

export const clients = [
  {
    name: 'Hindustan Aeronautics Limited',
    logo: HAL,
  },
  {
    name: 'Bharat Electronics',
    logo: BEL,
  },
  // {
  //   name: 'Nuventura',
  //   logo: Nuventura,
  // },
  {
    name: 'Radius',
    logo: Radius,
  },
  {
    name: 'Trident Infosol',
    logo: Trident,
  },
  {
    name: 'Airboat',
    logo: ABT,
  },
  {
    name: 'LiveonTechnolabs',
    logo: Liveontechnolabs,
  },
  {
    name: 'CompanyDetails',
    logo: CompanyDetails,
  },
  {
    name: 'Mamatha Industries',
    logo: Mamatha,
  },
  {
    name: 'HAPL',
    logo: HAPL,
  },
  {
    name: 'MagodLaser',
    logo: Magod,
  },
  {
    name: 'AEROSKY',
    logo: AEROSKY,
  },
  {
    name: 'Datasol',
    logo: Datasol,
  },
  {
    name: 'TeamD',
    logo: TeamD,
  },
];
