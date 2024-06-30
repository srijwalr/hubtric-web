import Hubtric from '@/assets/icons/Hubtric.png';
import { routes } from '@/lib/constants';
import { cn } from '@/lib/utils';
import { Transition } from '@headlessui/react';
import { MenuIcon, X } from 'lucide-react';
import { useEffect, useState } from 'react';
import { Link, NavLink, NavLinkProps, useLocation } from 'react-router-dom';
import { Button, buttonVariants } from '../ui/button';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const location = useLocation();

  useEffect(() => {
    setIsOpen(false);
  }, [location]);

  return (
    <header className='bg-white sticky top-0 z-50 py-4 backdrop-blur supports-[backdrop-filter]:bg-white/80'>
      <div className='container flex flex-row items-center gap-8 justify-between'>
        <Link to={routes.home()}>
          <img className='w-16' src={Hubtric} alt='Hubtric' />
        </Link>
        <div className='text-black flex-row gap-6 hidden md:flex'>
          <CustomNavLink to={routes.home()}>Home</CustomNavLink>
          <CustomNavLink to={routes.aboutUs()}>About Us</CustomNavLink>
          <CustomNavLink to={routes.capabilities()}>Capabilities</CustomNavLink>
          <CustomNavLink to={routes.industries()}>Industries</CustomNavLink>
        </div>
        <div className='flex items-center gap-3'>
          <Link
            className={buttonVariants({ variant: 'default' })}
            to={routes.contactUs()}
          >
            Contact Us
          </Link>
          <Button
            onClick={() => setIsOpen((prev) => !prev)}
            variant={'outline'}
            className='block md:hidden'
          >
            {isOpen ? <X /> : <MenuIcon />}
          </Button>
        </div>
      </div>
      <Transition
        show={isOpen}
        enter='transition ease-out duration-200'
        enterFrom='opacity-0 transform -translate-y-2'
        enterTo='opacity-100 transform translate-y-0'
        leave='transition ease-in duration-150'
        leaveFrom='opacity-100 transform translate-y-0'
        leaveTo='opacity-0 transform -translate-y-2'
      >
        <div className='md:hidden container'>
          <div className='flex flex-col items-end gap-2 p-4'>
            <CustomNavLink to={routes.home()}>Home</CustomNavLink>
            <CustomNavLink to={routes.aboutUs()}>About Us</CustomNavLink>
            <CustomNavLink to={routes.capabilities()}>
              Capabilities
            </CustomNavLink>
            <CustomNavLink to={routes.industries()}>Industries</CustomNavLink>
          </div>
        </div>
      </Transition>
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
