import Map from '@/components/shared/map';

const Contact = () => {
  return (
    <div>
      <section className='container py-6 h-screen'>
        <div>
          <h1 className='text-4xl md:text-5xl lg:text-[60px] text-center lg:text-left font-light'>
            Contact Us <br />{' '}
            <span className='font-bold'>Call us or book an Appointment</span>
          </h1>
        </div>
      </section>
      <section className='flex container'>
        <div className='w-1/2'></div>
        <div className='w-1/2'>
          <Map />
        </div>
      </section>
    </div>
  );
};

export default Contact;
