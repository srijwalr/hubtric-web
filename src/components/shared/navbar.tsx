import Hubtric from '@/assets/icons/Hubtric.png';
import { about, capabilities, routes } from '@/lib/constants';
import { cn } from '@/lib/utils';
import { Link, NavLink, NavLinkProps } from 'react-router-dom';
import { buttonVariants } from '../ui/button';
import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from '../ui/hover-card';
import { AnchorHTMLAttributes } from 'react';
import { ChevronDown } from 'lucide-react';

const Navbar = () => {
  return (
    <header className='bg-white sticky top-0 z-50 bg-primary-white px-12 py-4'>
      <div className='container flex flex-row items-center gap-8 justify-between'>
        <Link to={routes.home()}>
          <img className='w-16' src={Hubtric} alt='Hubtric' />
        </Link>
        <div className='text-black flex flex-row gap-6 max-sm:hidden'>
          <CustomNavLink to={routes.home()}>Home</CustomNavLink>
          <HoverCard>
            <HoverCardTrigger>
              <CustomNavLink to={routes.aboutUs()}>
                About Us <ChevronDown className='ms-2 w-4' />
              </CustomNavLink>
            </HoverCardTrigger>
            <HoverCardContent align='start'>
              {about.map((item) => (
                <CustomAnchor href={item.href}>{item.title}</CustomAnchor>
              ))}
            </HoverCardContent>
          </HoverCard>
          <HoverCard>
            <HoverCardTrigger>
              <CustomNavLink to={routes.capabilities()}>
                Capabilities <ChevronDown className='ms-2 w-4' />
              </CustomNavLink>
            </HoverCardTrigger>
            <HoverCardContent align='start'>
              {capabilities.map((item) => (
                <CustomAnchor href={item.href}>{item.title}</CustomAnchor>
              ))}
            </HoverCardContent>
          </HoverCard>
          <CustomNavLink to={routes.industries()}>Industries</CustomNavLink>
        </div>
        <Link
          className={buttonVariants({ variant: 'default' })}
          to={routes.contactUs()}
        >
          Contact Us
        </Link>
      </div>
    </header>
  );
};

export default Navbar;

interface CustomNavLinkProps extends NavLinkProps {
  className?: string;
}

const CustomNavLink = ({ className, to, children }: CustomNavLinkProps) => {
  return (
    <NavLink
      className={({ isActive }) =>
        cn(
          `font-semibold flex items-center text-lg transition-colors hover:text-primary ${
            isActive ? 'text-primary' : ''
          }`,
          className
        )
      }
      to={to}
    >
      {children}
    </NavLink>
  );
};

interface CustomAnchorProps extends AnchorHTMLAttributes<HTMLAnchorElement> {}

const CustomAnchor = ({ className, href, children }: CustomAnchorProps) => {
  return (
    <a
      className={cn('flex p-2 rounded-sm hover:bg-accent', className)}
      href={href}
    >
      {children}
    </a>
  );
};
