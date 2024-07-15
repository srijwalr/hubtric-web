// import Capabilities from '@/assets/images/Capabilities.png';
import Engine from '@/assets/images/Engine.png';
import Capabilities from '@/components/shared/capabilities';
import { clients } from '@/lib/constants';
import { PackageCheck, PackagePlus, Users } from 'lucide-react';
import './style.css';
import Process from '@/components/shared/process';
import AnimatedCounter from '@/components/shared/animatedCounter/AnimatedCounter';

const Home = () => {
  return (
    <div>
      <section className='banner h-screen xl:h-[75vh] bg-cover object-cover text-white flex flex-col lg:flex-row items-center justify-center lg:justify-around gap-10 lg:gap-20 p-4'>
        <div className='text-4xl xl:text-5xl 2xl:text-7xl text-center lg:text-left font-light animate-slide-in'>
          <p>GET BACK TO BUSINESS</p>
          <span className='font-bold text-primary'>
            WITH OUR TOP-QUALITY
            <br /> MACHINE PARTS
          </span>
        </div>
        <img className='spin w-40 md:w-60 lg:w-80 2xl:w-96' src={Engine} alt='Engine' />
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
                <span className='text-4xl font-semibold'><AnimatedCounter end={2000} />+</span>
                <div className='text-xl font-medium'>Products</div>
              </div>
            </div>
            <div className='flex gap-4 min-w-[220px]'>
              <Users className='w-12 h-12' />
              <div className='flex flex-col'>
                <span className='text-4xl font-semibold'><AnimatedCounter end={10000} />+</span>
                <span className='text-xl font-medium'>Customers</span>
              </div>
            </div>
            <div className='flex gap-4 min-w-[220px]'>
              <PackageCheck className='w-12 h-12' />
              <div className='flex flex-col'>
                <span className='text-4xl font-semibold'><AnimatedCounter end={50000} />+</span>
                <span className='text-xl font-medium'>Delivered</span>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className='container py-6 flex flex-col gap-6 items-center'>
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
      <section className='bg-secondary overflow-hidden'>
        <div className='container py-6 gap-6 flex flex-col md:flex-row items-center justify-between'>
          <div className='flex flex-col'>
            <h1 className='text-3xl md:text-3xl lg:text-[40px] text-left font-semibold'>
              Our Process
            </h1>
            <span className='font-semibold'>The Hubtric Way</span>
          </div>
          <Process />
        </div>
      </section>
      <section className='container py-6 flex flex-col gap-6 items-center'>
        <h1 className='text-3xl md:text-3xl lg:text-[40px] text-center font-semibold'>
          Our Partners
        </h1>
        <div className='flex flex-wrap gap-6 items-center justify-center'>
          {clients.map((client) => (
            <img
              className='w-28 hover:scale-110 hover:grayscale-0 hover:opacity-100 transition-transform duration-300 grayscale opacity-75'
              src={client.logo}
              alt={client.name}
            />
          ))}
        </div>
      </section>
    </div>
  );
};

export default Home;
