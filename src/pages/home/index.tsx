import Engine from '@/assets/images/Engine.png';
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
      <section className='p-4'></section>
    </div>
  );
};

export default Home;
