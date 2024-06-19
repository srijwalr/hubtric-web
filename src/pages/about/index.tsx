import Journey from '@/assets/images/Journey.png';
import MissionAndVision from '@/assets/images/MissionAndVision.jpg';
import Overview from '@/assets/images/Overview.jpg';
import './style.css';

const About = () => {
  return (
    <div>
      <section className='about h-screen flex justify-center items-center'>
        <div className='bg-white/70 p-4 rounded m-4'>
          <h1 className='text-4xl md:text-5xl lg:text-[60px] text-left font-semibold text-black'>
            DESIGNING <br />{' '}
            <span className='text-primary font-extrabold'>MANUFACTURING</span>
            <br /> REVERSE ENGINEERING
          </h1>
        </div>
      </section>
      <section id='overview' className='container py-6 flex flex-col gap-6'>
        <div className='flex flex-col-reverse gap-6 md:flex-row items-center'>
          <div className='flex flex-col items-start justify-center gap-6 w-full'>
            <h2 className='text-2xl md:text-2xl lg:text-[40px] text-left font-semibold text-primary'>
              Overview
            </h2>
            <p>
              Company Started its state of art manufacturing facility in the
              year of 2016 at Silicon valley Bangalore, India. HUBTRIC is
              specialized in manufacturing of high precised Aerospace, Defense
              and Automobile machined components, Tooling's, Fixtures &
              Sub-Assemblies. HUBTRIC has come up with major expansion from the
              date Inception and started additional 4 manufacturing facility in
              Silicon Valley Bangalore. We are certified from ISO - 9001-2015
              and AS9001D ur der Process expected in August 2023
            </p>
          </div>
          <div className='w-full'>
            <img
              className='w-full rounded-lg object-cover'
              src={Overview}
              alt='Overview'
            />
          </div>
        </div>
        <div className='flex flex-col gap-4 items-center'>
          <h2 className='text-2xl md:text-2xl lg:text-[40px] text-left font-semibold text-black'>
            Our Journey
          </h2>
          <img src={Journey} alt='Journey' className='w-full md:w-3/4' />
        </div>
      </section>
      <section id='mission' className='container py-6 flex flex-col gap-6'>
        <div className='flex flex-col-reverse gap-6 md:flex-row-reverse items-center'>
          <div className='flex flex-col items-start justify-center gap-6 w-full'>
            <h2 className='text-2xl md:text-2xl lg:text-[40px] text-left font-semibold text-primary'>
              Mission and Vision
            </h2>
            <p>
              At Hubtric, our vision and mission are united by a single goal: to
              become the global first-choice supplier of precision components.
              We strive to achieve this by delivering an exclusive range of
              high-quality products and developing personalized solutions using
              cutting-edge technology. We are dedicated to exceeding our
              customers' expectations through continuous improvement,
              progressive management practices, and a steadfast commitment to
              excellence.
            </p>
          </div>
          <div className='w-full'>
            <img
              className='w-full rounded-lg object-cover'
              src={MissionAndVision}
              alt='Mission And Vision'
            />
          </div>
        </div>
      </section>
      <section></section>
    </div>
  );
};

export default About;
