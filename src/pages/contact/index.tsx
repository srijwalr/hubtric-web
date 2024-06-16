import Map from '@/components/shared/map';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Link } from 'react-router-dom';

const Contact = () => {
  return (
    <div>
      <section className='container py-6'>
        <div className='flex flex-col gap-6'>
          <h1 className='text-4xl md:text-5xl lg:text-[60px] text-center lg:text-left font-light'>
            Contact Us <br />{' '}
            <span className='font-bold'>Call us or book an Appointment</span>
          </h1>
          <div className='flex flex-col md:flex-row gap-6'>
            <form action='' className='w-full flex flex-col gap-3'>
              <Input type='text' id='name' placeholder='Name' />
              <Input type='email' id='email' placeholder='Email' />
              <Input type='tel' id='phone' placeholder='Phone' />
              <Textarea placeholder='How can we help?' />
              <Button type='submit'>Submit</Button>
              <div className='flex items-center gap-6'>
                <Link to='mailto:info@hubtric.com' className='text-black flex'>
                  <div className='flex flex-col'>
                    <span className='font-semibold'>E-mail</span>
                    <span>info@hubtric.com</span>
                  </div>
                </Link>
                <Link to='tel:+91-96116-75866' className='text-black flex'>
                  <div className='flex flex-col'>
                    <span className='font-semibold'>Phone</span>
                    <span>+91 96116 75866</span>
                  </div>
                </Link>
              </div>
            </form>
            <div className='w-full'>
              <Map />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
