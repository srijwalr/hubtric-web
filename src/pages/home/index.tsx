// import Capabilities from '@/assets/images/Capabilities.png';
import Engine from '@/assets/images/Engine.png';
import Capabilities from '@/components/shared/capabilities';
import Industries from '@/components/shared/industries';
import { clients, routes } from '@/lib/constants';
import { PackageCheck, PackagePlus, Users } from 'lucide-react';
import './style.css';
import Process from '@/components/shared/process';
import AnimatedCounter from '@/components/shared/animatedCounter/AnimatedCounter';
import ImageGrid from './components/ImageGrid';
import ContactUs from './components/ContactUs';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div>
      <section className='banner h-screen md:h-[50vh] xl:h-[75vh] bg-cover object-cover text-white flex flex-col lg:flex-row items-center justify-center lg:justify-around gap-10 lg:gap-20 p-4'>
        <div className='text-4xl xl:text-5xl 2xl:text-7xl text-left font-light animate-slide-in order-2 lg:order-1'>
          <p>ONE STEP AHEAD</p>
          <span className='font-bold text-primary'>
            TRANSFORMING INDUSTRIES<br/> WITH OUR PRECISION PARTS
            {/* <br /> MACHINE PARTS */}
          </span>
          <br />
        <Link to={routes.contactUs()}
          className="inline-block bg-primary text-primary-foreground font-bold py-2 px-4 hover:bg-primary-foreground hover:text-secondary-foreground uppercase text-sm md:text-md xl:text-xl"
        >
          Get Instant Quote
        </Link>
        </div>
        <img className='spin w-40 md:w-60 lg:w-80 2xl:w-96 order-1 lg:order-2' src={Engine} alt='Engine' />
      </section>
      <section className='py-6 bg-primary'>
        <div className='container flex flex-col gap-8 items-center'>
          <h1 className='text-3xl md:text-4xl lg:text-[50px] text-center lg:text-left font-bold'>
            One Stop Manufacturing Shop
          </h1>
          <div className='flex flex-col md:flex-row justify-center gap-16 items-center'>
            <div className='flex gap-4 min-w-[220px]'>
              <PackagePlus className='w-12 h-12' />
              <div className='flex flex-col'>
                <span className='text-4xl font-semibold'><AnimatedCounter end={100} increment={1} timerInterval={15} />+</span>
                <div className='text-xl font-medium'>Products</div>
              </div>
            </div>
            <div className='flex gap-4 min-w-[220px]'>
              <Users className='w-12 h-12' />
              <div className='flex flex-col'>
                <span className='text-4xl font-semibold'><AnimatedCounter end={50} increment={1} timerInterval={20} />+</span>
                <span className='text-xl font-medium'>Customers</span>
              </div>
            </div>
            <div className='flex gap-4 min-w-[220px]'>
              <PackageCheck className='w-12 h-12' />
              <div className='flex flex-col'>
                <span className='text-4xl font-semibold'><AnimatedCounter end={10000} />+</span>
                <span className='text-xl font-medium'>Delivered</span>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className='w-full py-6 flex flex-col gap-6 items-center bg-secondary'>
        <h2 className='text-2xl md:text-[40px] lg:text-[40px] text-left font-semibold text-black'>
          Capabilities
        </h2>
        <Capabilities />
        {/* <Link
          className={buttonVariants({ variant: 'ghost' })}
          to={routes.capabilities()}
        >
          View More
          <ChevronRight className='w-4 h-4 ms-2' />
        </Link> */}
      </section>
      <section className='overflow-hidden'>
        <div className='container py-8 gap-6 flex flex-col items-center justify-between'>
          <div className='flex flex-col text-center'>
            <h1 className='text-3xl md:text-3xl lg:text-[40px] font-semibold'>
              Our Process
            </h1>
            <span className='font-semibold'>The Hubtric Way</span>
          </div>
          <Process />
        </div>
      </section>
      <section className='w-full py-6 flex flex-col gap-6 items-center bg-secondary'>
        <h2 className='text-2xl md:text-[40px] lg:text-[40px] text-left font-semibold text-black'>
          Industries We Serve
        </h2>
        <Industries />
        {/* <Link
          className={buttonVariants({ variant: 'ghost' })}
          to={routes.capabilities()}
        >
          View More
          <ChevronRight className='w-4 h-4 ms-2' />
        </Link> */}
      </section>
      <ContactUs />
      <section className='container py-6 flex flex-col gap-6 items-center'>
        <h1 className='text-3xl md:text-3xl lg:text-[40px] text-center font-semibold'>
          Our Partners
        </h1>
        <ImageGrid images={clients} />
        {/* <div className='flex flex-wrap gap-6 items-center justify-center'>
          {clients.map((client) => (
            <img
              className='w-28 hover:scale-110 hover:grayscale-0 hover:opacity-100 transition-transform duration-300 grayscale opacity-75'
              src={client.logo}
              alt={client.name}
            />
          ))}
        </div> */}
      </section>
    </div>
  );
};

export default Home;
