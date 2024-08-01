import './style.css';
import VisionDisplay from './components/VisionDisplay';
import OurStory from './components/OurStory';
import Precision from '@/assets/images/Precision.gif';
import Prototyping from '@/assets/images/Prototyping.gif';
import RnD from '@/assets/images/RnD.gif';
import SecondaryOperations from '@/assets/images/SecondaryOperations.gif';
import OurWork from './components/OurWork';
import OurTeam from './components/OurTeam';
import ImgFounder from '@/assets/images/Founder.jpg';
import ImgMD from '@/assets/images/ManagingDirector.jpg';
import Certifications from './components/Certifications';
import WhenToUse from './components/WhenToUse';
import DiveDeeper from './components/DiveDeeper';

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
    designation: 'Co-founder, Germany',
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
      <section className='sm:h-40 md:h-80 xl:h-96 relative'>
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
              'https://media.istockphoto.com/id/2153338836/video/fighter-aircraft-on-an-aircraft-carrier.mp4?s=mp4-640x640-is&k=20&c=h6e2DN0r1v5GE0ajJ3vlnkQ3FzSs2gI7Q-I989xqXDE='
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

      <VisionDisplay />
      <OurWork inputData={whenToUse} />
      <WhenToUse />
      <OurTeam teamMembers={teamData} />
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
