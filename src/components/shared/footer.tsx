import Hubtric from '@/assets/icons/Hubtric.png';
import { routes } from '@/lib/constants';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className='bg-secondary w-full'>
      <div className='container grid md:grid-cols-5 grid-cols-1 py-8'>
        <div className='col-span-2 flex flex-col md:flex-row items-baseline md:items-center md:justify-center gap-8'>
          <img className='w-24' src={Hubtric} alt='' />
          <div className='flex flex-col items-start gap-4 justify-center text-xs'>
            <div className='flex items-start gap-1 text-primary'>
              <span className='font-bold'>Tel.</span>
              <div className='flex flex-col'>
                <Link to='tel:+91-7899176414'>+91 7899176414</Link>
                <Link to='tel:+49-15772902328'>+49 15772902328</Link>
              </div>
            </div>
            <div className='flex items-start gap-1 text-primary'>
              <span className='font-bold'>WA.</span>
              <div className='flex flex-col'>
                <Link to='https://wa.me/919901392219'>+91 9901392219</Link>
              </div>
            </div>
            <div className='flex items-start gap-1 text-primary'>
              <span className='font-bold'>Mail.</span>
              <div className='flex flex-col'>
                <Link to='mailto:info@hubtric.com'>info@hubtric.com</Link>
                <Link to='mailto:sales@hubtric.com'>sales@hubtric.com</Link>
              </div>
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
