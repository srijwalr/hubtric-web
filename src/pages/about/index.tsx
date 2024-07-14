import Journey from '@/assets/images/Journey.png';
import MissionAndVision from '@/assets/images/MissionAndVision.jpg';
import GlobalImpact from '@/assets/images/GlobalImpact.jpg';
import Overview from '@/assets/images/Overview.jpg';
import Quality from '@/assets/images/Quality.jpg';
import './style.css';

const whenToUse = [
  {
    title: 'Precision Manufacturing',
    description:
      'When you need high-precision aerospace, defense, and automotive components.',
  },
  {
    title: 'Reverse Engineering',
    description:
      'For re-engineering parts to improve performance or reduce costs.',
  },
  {
    title: 'Tooling and Fixtures',
    description:
      'For custom-designed tooling and fixtures that enhance manufacturing efficiency.',
  },
  {
    title: 'Rapid Prototyping',
    description:
      'When quick turnaround times are essential for prototypes and small batch productions.',
  },
  {
    title: 'Quality Assurance',
    description:
      'For projects requiring stringent quality control and ISO-certified processes.',
  },
  {
    title: 'Global Delivery',
    description:
      'When you need reliable, on-time delivery and comprehensive order tracking from anywhere in the world.',
  },
];

const About = () => {
  return (
    <div>
      <section className='about md:h-40 lg:h-screen'>
        <div className='video-bg sm:h-40 md:h-screen'>
          <video autoPlay muted loop playsInline>
            <source src={'https://media.istockphoto.com/id/2153338836/video/fighter-aircraft-on-an-aircraft-carrier.mp4?s=mp4-640x640-is&k=20&c=h6e2DN0r1v5GE0ajJ3vlnkQ3FzSs2gI7Q-I989xqXDE='} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>
        <div className='container py-6'>
          <h1 className='text-4xl md:text-5xl lg:text-[60px] text-left font-semibold text-black animate-slide-in'>
            DESIGNING <br />{' '}
            <span className='text-primary font-extrabold'>MANUFACTURING</span>
            <br /> REVERSE ENGINEERING
          </h1>
        </div>
      </section>
      <section className='container flex flex-col grid-cols-4 md:grid'>
        <div className='py-6 col-span-1 flex flex-col items-start justify-center gap-6 w-full p-0 md:p-4 md:pl-0'>
          <h2 className='text-xl md:text-xl lg:text-[30px] text-left font-semibold text-primary'>
            Overview
          </h2>
          <p className='text-sm'>
            Company Started its state of art manufacturing facility in the year
            of 2016 at Silicon valley Bangalore, India. HUBTRIC is specialized
            in manufacturing of high precised Aerospace, Defense and Automobile
            machined components, Tooling's, Fixtures & Sub-Assemblies. HUBTRIC
            has come up with major expansion from the date Inception and started
            additional 4 manufacturing facility in Silicon Valley Bangalore. We
            are certified from ISO - 9001-2015 and AS9001D ur der Process
            expected in August 2023.
          </p>
        </div>
        <div className='col-span-1'>
          <img
            className='w-full h-60 md:h-full object-cover'
            src={Overview}
            alt='Overview'
          />
        </div>
        <div className='py-6 col-span-1 flex flex-col items-start justify-center gap-6 w-full p-0 md:p-4'>
          <h2 className='text-xl md:text-xl lg:text-[30px] text-left font-semibold text-primary'>
            Mission and Vision
          </h2>
          <p className='text-sm'>
            At Hubtric, our vision and mission are united by a single goal: to
            become the global first-choice supplier of precision components. We
            strive to achieve this by delivering an exclusive range of
            high-quality products and developing personalized solutions using
            cutting-edge technology. We are dedicated to exceeding our
            customers' expectations through continuous improvement, progressive
            management practices, and a steadfast commitment to excellence.
          </p>
        </div>
        <div className='col-span-1'>
          <img
            className='w-full h-60 md:h-full object-cover'
            src={MissionAndVision}
            alt='Mission And Vision'
          />
        </div>
      </section>
      <section className='container flex flex-col-reverse grid-cols-4 md:grid'>
        <div className='col-span-1'>
          <img
            className='w-full h-60 md:h-full object-cover'
            src={Quality}
            alt='Overview'
          />
        </div>
        <div className='py-6 col-span-1 flex flex-col items-start justify-center gap-6 w-full p-0 md:p-4'>
          <h2 className='text-xl md:text-xl lg:text-[30px] text-left font-semibold text-primary'>
            Quality and Commitment
          </h2>
          <p className='text-sm'>
            At Hubtric, our dedication to quality is unwavering. We ensure
            consistent manufacturing excellence through advanced quality
            management systems and a culture of continuous improvement. Our
            commitment to customer satisfaction is evident in our on-time
            deliveries and the high standards of our products. We invest in
            cutting-edge technology and skilled personnel to deliver reliable
            and precise solutions, fulfilling our promise of exceptional quality
            and integrity in every project.
          </p>
        </div>
        <div className='col-span-1'>
          <img
            className='w-full h-60 md:h-full object-cover'
            src={GlobalImpact}
            alt='Mission And Vision'
          />
        </div>
        <div className='py-6 col-span-1 flex flex-col items-start justify-center gap-6 w-full p-0 md:p-4 md:pr-0'>
          <h2 className='text-xl md:text-xl lg:text-[30px] text-left font-semibold text-primary'>
            Our Global Impact
          </h2>
          <p className='text-sm'>
            As a One Stop Manufacturing Shop, we offer over 2000 products and
            serve 10,000+ customers worldwide. With more than 50,000 deliveries,
            our commitment to quality and innovation has made a significant
            global impact, fostering strong relationships and driving industry
            excellence.
          </p>
        </div>
      </section>
      <section>
        <div className='container py-6 flex flex-col gap-4 items-center'>
          <h2 className='text-2xl md:text-2xl lg:text-[40px] text-left font-semibold text-black'>
            Our Journey
          </h2>
          <img src={Journey} alt='Journey' className='w-full md:w-3/4' />
        </div>
      </section>
      <section className='container flex flex-col md:flex-row items-center'>
        <div className='container py-6 flex items-start justify-center w-full md:w-1/4'>
          <h1 className='text-3xl md:text-4xl lg:text-[50px] text-left font-semibold text-black'>
            When to Use Hubtric?
          </h1>
        </div>
        <div className=''>
          <div className='container py-6 flex items-start justify-center w-full'>
            <ul className='flex flex-col gap-1 list-disc'>
              {whenToUse.map((item) => (
                <li>
                  <span className='font-semibold'>{item.title}</span>:{' '}
                  <span>{item.description}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
