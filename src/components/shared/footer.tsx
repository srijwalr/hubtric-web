import Hubtric from '@/assets/icons/Hubtric.png';
import { routes } from '@/lib/constants';
import { Mail, MapPin, PhoneCall } from 'lucide-react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className='bg-secondary w-full'>
      <div className='container grid md:grid-cols-5 grid-cols-1  py-8'>
        <div className='col-span-2 flex flex-col md:flex-row items-center md:justify-center gap-8'>
          <img className='w-24' src={Hubtric} alt='' />
          <div className='flex flex-col items-start gap-4 justify-center text-xs'>
            <div className='flex'>
              <MapPin className='me-2 w-16 h-4' />
              <p>
                No.24, 1st Main, 2nd Cross, Shivananjappa Layout, Vinayaka
                Nagar, Near Chetan Circle, Andrahalli Main Road, Peenya
                Industrial Area, 2nd Stage, Bengaluru - 560091, Karnataka.
              </p>
            </div>
            <div className='flex items-center gap-4'>
              <Link
                to='tel:+91-96116-75866'
                className='text-primary flex items-center'
              >
                <PhoneCall className='me-2 h-4' />
                +91 96116 75866
              </Link>
              <Link
                to='tel:+91-96114-38038'
                className='text-primary flex items-center'
              >
                <PhoneCall className='me-2 h-4' />
                +91 96114 38038
              </Link>
            </div>
            <div className='flex items-center gap-4'>
              <Link
                to='mailto:info@hubtric.com'
                className='text-primary flex items-center'
              >
                <Mail className='me-2 h-4' />
                info@hubtric.com
              </Link>
              <Link
                to='mailto:sales@hubtric.com'
                className='text-primary flex items-center'
              >
                <Mail className='me-2 h-4' />
                sales@hubtric.com
              </Link>
            </div>
          </div>
        </div>
        <div className='col-span-3'></div>
      </div>
      <div className='p-6 bg-black text-white text-xs'>
        <div className='container'>
          <p>
            Copyrights © 2024{' '}
            <Link
              className='hover:text-primary transition-colors'
              to={routes.home()}
            >
              Hubtric Manufacturing Pvt. Ltd.
            </Link>{' '}
            All rights reserved
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
