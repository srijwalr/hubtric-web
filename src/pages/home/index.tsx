import Engine from '@/assets/images/Engine.png';
import { clients } from '@/lib/constants';
import './style.css';
import { PackageCheck, PackagePlus, Users } from 'lucide-react';

const Home = () => {
  return (
    <div>
      <section className='banner h-screen bg-cover object-cover text-white flex flex-col lg:flex-row items-center justify-center gap-10 lg:gap-20 p-4'>
        <div className='text-4xl md:text-5xl lg:text-[60px] text-center lg:text-left font-light'>
          <p>GET BACK TO BUSINESS</p>
          <span className='font-bold text-primary'>
            WITH OUR TOP-QUALITY
            <br /> MACHINE PARTS
          </span>
        </div>
        <img className='spin w-40 md:w-60 lg:w-80' src={Engine} alt='Engine' />
      </section>
      <section className='py-6 bg-primary'>
        <div className='container flex flex-col gap-8 items-center'>
          <h1 className='text-3xl md:text-4xl lg:text-[50px] text-center lg:text-left font-bold'>
            One Stop Manufacturing Shop
          </h1>
          <div className='flex flex-col md:flex-row justify-center gap-8 items-center'>
            <div className='flex gap-4'>
              <PackagePlus className='w-12 h-12' />
              <div className='flex flex-col'>
                <span className='text-4xl font-semibold'>2000+</span>
                <div className='text-xl font-medium'>Products</div>
              </div>
            </div>
            <div className='flex gap-4'>
              <Users className='w-12 h-12' />
              <div className='flex flex-col'>
                <span className='text-4xl font-semibold'>10000+</span>
                <span className='text-xl font-medium'>Customers</span>
              </div>
            </div>
            <div className='flex gap-4'>
              <PackageCheck className='w-12 h-12' />
              <div className='flex flex-col'>
                <span className='text-4xl font-semibold'>50000+</span>
                <span className='text-xl font-medium'>Delivered</span>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className='container py-6 flex flex-col gap-6 items-center'>
        <h1 className='text-3xl md:text-3xl lg:text-[40px] text-center font-semibold'>
          Our Partners
        </h1>
        <div className='flex flex-wrap gap-6 items-center justify-center'>
          {clients.map((client) => (
            <img
              className='w-28 hover:scale-110 transition-transform duration-300'
              src={client.logo}
              alt={client.name}
            />
          ))}
        </div>
      </section>
      <section></section>
    </div>
  );
};

export default Home;
