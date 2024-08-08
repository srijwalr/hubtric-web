import { Globe, ShieldCheck, TimerReset, Vegan } from 'lucide-react';
import ISO from '@/assets/icons/iso.svg?react';
import DFM from '@/assets/icons/dfm2.svg?react';

const data = [
  {
    title: 'Global Expertise',
    description:
      'Gain a competitive edge with insights from our expert leadership team and international advisors based in Germany and Switzerland.',
    icon: <Globe strokeWidth={0.5} className='w-20 h-20' />,
  },
  {
    title: 'Advanced Dual-Layer Quality Assurance',
    description:
      'Achieve unmatched product reliability with our dual-tier QA system, combining rigorous internal audits and expert external validations.',
    icon: <ShieldCheck strokeWidth={0.5} className='w-20 h-20' />,
  },
  {
    title: 'Sustainable Manufacturing',
    description:
      'Employing eco-friendly processes, energy-efficient technologies, and sustainable materials to ensure superior quality with minimal environmental impact.',
    icon: <Vegan strokeWidth={0.5} className='w-20 h-20' />,
  },
  {
    title: 'ISO Compliance Guaranteed',
    description:
      'Our ISO 27001, ISO 45001, ISO 14001, and ISO 9001 certifications reflect our commitment to the highest standards of quality, security, safety, and environmental care.',
    icon: <ISO strokeWidth={0.5} className='w-20 h-20' />,
  },
  {
    title: 'Integrated DFM Analysis',
    description:
      'Our Design for Manufacturing (DFM) analysis ensures your designs are optimized for manufacturability, reducing production costs and time.',
    icon: <DFM strokeWidth={0.5} className='w-20 h-20' />,
  },
  {
    title: 'Rapid Turnaround Times',
    description:
      'Efficient project management and advanced manufacturing processes ensure quick turnaround without compromising quality.',
    icon: <TimerReset strokeWidth={0.5} className='w-20 h-20' />,
  },
];

const Benefits = () => {
  return (
    <div className='bg-secondary px-8 py-6 text-center'>
      <h1 className='text-3xl font-bold uppercase mb-8'>
        BENEFITS WITH HUBTRIC
      </h1>
      <div className='flex flex-col items-center gap-6 md:grid grid-cols-2 lg:grid-cols-3 text-secondary-foreground'>
        {data.map((item) => (
          <div className='flex flex-col items-center min-h-[256px] lg:min-h-[205px] h-full'>
            {item.icon}
            <h1 className='text-lg 2xl:text-2xl font-bold py-4'>{item.title}</h1>
            <p className='text-sm 2xl:text-md'>{item.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Benefits;
