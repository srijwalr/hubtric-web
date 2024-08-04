import './style.css';
// import VisionDisplay from './components/VisionDisplay';
import OurStory from './components/OurStory';
import Precision from '@/assets/images/Precision.gif';
import Prototyping from '@/assets/images/Prototyping.gif';
// import AbtVideo from '@/assets/video/aboutusvideo.mp4'
import RnD from '@/assets/images/RnD.gif';
import SecondaryOperations from '@/assets/images/SecondaryOperations.gif';
import OurWork from './components/OurWork';
import OurTeam from './components/OurTeam';
import ImgFounder from '@/assets/images/Founder.jpg';
import ImgMD from '@/assets/images/ManagingDirector.jpg';
import Certifications from './components/Certifications';
import WhenToUse from './components/WhenToUse';
import DiveDeeper from './components/DiveDeeper';
import Benefits from './components/Benefits';
// import Journey from '@/assets/images/Journey.png';
import MissionAndVision from '@/assets/images/MissionAndVision.jpg';
import GlobalImpact from '@/assets/images/GlobalImpact.jpg';
import Overview from '@/assets/images/Overview.jpg';
import Quality from '@/assets/images/Quality.jpg';

const AboutOld = () => {
  return (
    <div>
      <section className='container flex flex-col grid-cols-4 md:grid'>
      <div className='col-span-1'>
          <img
            className='w-full h-60 md:h-full object-cover'
            src={Overview}
            alt='Overview'
          />
        </div>
        <div className='py-6 col-span-1 flex flex-col items-start justify-center gap-6 w-full p-0 md:p-4'>
          <h3 className='text-xl md:text-xl lg:text-[30px] text-left font-semibold text-primary'>
          The Spark Behind Hubtric
          </h3>
          <p className=" text-sm 2xl:text-xl leading-loose">
          Hubtric was founded to revolutionize manufacturing by seamlessly bridging the gap between customer 
          demands and available resources through our international expertise. Driven by a commitment to better 
          governance and environmental responsibility, we focus on reducing CO2 emissions and supporting our 
          customers' sustainability goals.
          </p>
        </div>
        <div className='col-span-1'>
          <img
            className='w-full h-60 md:h-full object-cover'
            src={MissionAndVision}
            alt='Mission And Vision'
          />
        </div>
        <div className='py-6 col-span-1 flex flex-col items-start justify-center gap-6 w-full p-0 md:p-4'>
          <h3 className='text-xl md:text-xl lg:text-[30px] text-left font-semibold text-primary'>
            Our Purpose and Goals
          </h3>
          <p className=" text-sm 2xl:text-xl leading-loose">
          Transform manufacturing with innovative, sustainable solutions. • Meet evolving customer demands using advanced technology and international expertise.
        Commit to strong environmental and governance standards, reducing CO2 emissions and 
        supporting clients' sustainability goals. •
        Set new benchmarks in quality and efficiency to lead the industry towards a more responsible and 
        sustainable future.
          </p>
        </div>
      </section>
      <section className='container flex flex-col-reverse grid-cols-4 md:grid'>
        <div className='py-6 col-span-1 flex flex-col items-start justify-center gap-6 w-full p-0 md:p-4'>
          <h3 className='text-xl md:text-xl lg:text-[30px] text-left font-semibold text-primary'>
            Our driving force
          </h3>
          <p className=" text-sm 2xl:text-xl leading-loose">
          Global Insights, Local Excellence - Combining international expertise with the precision of local 
          experts •
          Sustainability Leadership - Pioneering a sustainable manufacturing industry and setting the 
          standard
          •
          Innovative Expertise - Leveraging international and industry expertise to meet customer demands 
          with innovative solutions •
          • Inclusive Work Environment - Fostering inclusivity and empowering women in manufacturing
          </p>
        </div>
        <div className='col-span-1'>
          <img
            className='w-full h-60 md:h-full object-cover'
            src={Quality}
            alt='Overview'
          />
        </div>
        <div className='py-6 col-span-1 flex flex-col items-start justify-center gap-6 w-full p-0 md:p-4'>
          <h3 className='text-xl md:text-xl lg:text-[30px] text-left font-semibold text-primary'>
            Global Excellence in Manufacturing
          </h3>
          <p className=" text-sm 2xl:text-xl leading-loose">
          Hubtric has empowered over 25+ businesses and innovators across continents, including Asia and 
          Europe. Delivering more than 5,000 parts, we showcase our commitment to innovation, quality, and 
          About us content
          Website Content Page 1 
          Europe. Delivering more than 5,000 parts, we showcase our commitment to innovation, quality, and 
          global reach. Our comprehensive manufacturing solutions drive sustainability and excellence, making a 
          profound impact worldwide.
          </p>
        </div>
        <div className='col-span-1'>
          <img
            className='w-full h-60 md:h-full object-cover'
            src={GlobalImpact}
            alt='Mission And Vision'
          />
        </div>
      </section>
    </div>
  );
};

const whenToUse = [
  {
    label: 'Precision Manufacturing Excellence',
    description:
      'When you need high-precision aerospace, defense, and automotive components.',
    image: Precision,
  },
  {
    label: 'Cutting-Edge Design and Prototyping',
    description:
      'For re-engineering parts to improve performance or reduce costs.',
    image: Prototyping,
  },
  {
    label: 'Research and Development',
    description:
      'For custom-designed tooling and fixtures that enhance manufacturing efficiency.',
    image: RnD,
  },
  {
    label: 'Comprehensive Secondary Operations',
    description:
      'When quick turnaround times are essential for prototypes and small batch productions.',
    image: SecondaryOperations,
  },
  // {
  //   title: "Quality Assurance",
  //   description:
  //     "For projects requiring stringent quality control and ISO-certified processes.",
  // },
  // {
  //   title: "Global Delivery",
  //   description:
  //     "When you need reliable, on-time delivery and comprehensive order tracking from anywhere in the world.",
  // },
];

const teamData = [
  {
    name: 'Anoop Raj Rao',
    designation: 'Co-founder & Strategic Advisor, Germany',
    country: 'Germany',
    imageUrl: ImgFounder, // Replace with actual image URL
    fbUrl: 'https://www.linkedin.com/in/anooprajrao/',
  },
  {
    name: 'Kusuma U Rao',
    designation: 'Co-founder & Managing Director, India',
    country: 'India',
    imageUrl: ImgMD, // Replace with actual image URL
    fbUrl: 'https://www.linkedin.com/in/kusuma-u/',
  },
];

const About = () => {
  return (
    <div className='flex flex-col'>
      <section className='sm:h-20 md:h-80 xl:h-96 relative'>
        {/* <div className="video-bg sm:h-40 md:h-80 top-0 md:top-24"> */}
        <video
          autoPlay
          muted
          loop
          playsInline
          className='video-bg sm:h-40 md:h-80 xl:h-96 object-cover'
        >
          <source
            src={
              'https://res.cloudinary.com/dsrflnll5/video/upload/v1722541669/szwp8kmudd0mlcc57s13.mp4'
            }
            type='video/mp4'
          />
          Your browser does not support the video tag.
        </video>
        {/* </div> */}
        <div className='container py-6'>
          <h1 className='text-4xl md:text-5xl lg:text-[60px] text-left font-semibold text-black animate-slide-in'>
            DESIGNING {/* DESIGNING <br />{' '} */}
            <span className='text-primary'>MANUFACTURING</span>
            <br />
            <span className='text-primary'>REVERSE </span>
            <span className='text-black'>ENGINEERING</span>
          </h1>
        </div>
      </section>
      <br />

      <OurStory />

      {/* <section>
        <div className="container py-6 flex flex-col gap-4 items-center">
          <h2 className="text-2xl md:text-2xl lg:text-[40px] text-left font-semibold text-black">
            Our Journey
          </h2>
          <img src={Journey} alt="Journey" className="w-full md:w-3/4" />
        </div>
      </section> */}
      <AboutOld /> 
      {/* <VisionDisplay /> */}
      <OurTeam teamMembers={teamData} />
      <OurWork inputData={whenToUse} />
      <Benefits />
      <WhenToUse />
      <Certifications />
      <DiveDeeper />
      {/* <section className="container flex flex-col md:flex-row items-center">
        <div className="container py-6 flex items-start justify-center w-full md:w-1/4">
          <h1 className="text-3xl md:text-4xl lg:text-[50px] text-left font-semibold text-black">
            When to Use Hubtric?
          </h1>
        </div>
        <div>
          <div className="container py-6 flex items-start justify-center w-full">
            <ul className="flex flex-col gap-1 list-disc">
              {whenToUse.map((item) => (
                <li>
                  <span className="font-semibold">{item.title}</span>:{" "}
                  <span>{item.description}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section> */}
    </div>
  );
};

export default About;
