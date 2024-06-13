import Engine from '@/assets/images/Engine.png';
import { clients } from '@/lib/constants';
import './style.css';

const Home = () => {
  return (
    <div>
      <section className='banner h-screen bg-cover object-cover text-white flex flex-col lg:flex-row items-center justify-center gap-10 lg:gap-20 p-4'>
        <div className='text-4xl md:text-5xl lg:text-[60px] text-center lg:text-left'>
          <p>GET BACK TO BUSINESS</p>
          <span className='font-extrabold'>
            WITH OUR TOP-QUALITY
            <br /> MACHINE PARTS
          </span>
        </div>
        <img className='spin w-40 md:w-60 lg:w-80' src={Engine} alt='Engine' />
      </section>
      <section className='container py-6 flex flex-col gap-6 items-center'>
        <h1 className='text-4xl md:text-4xl lg:text-[50px] text-center font-semibold'>
          Our Partners
        </h1>
        <div className='flex flex-wrap gap-4 items-center justify-center'>
          {clients.map((client) => (
            <img className='w-28' src={client.logo} alt={client.name} />
          ))}
        </div>
      </section>
    </div>
  );
};

export default Home;
