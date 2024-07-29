import { Factory, FileUp, ShieldCheck, Truck } from 'lucide-react';
import ImgCard from '../ImgCard';

const steps = [
  {
    id: 1,
    label: 'DESIGN',
    description:
      'Upload your design files to the Hub-Quote Engine. Get a minimum quote within seconds and the best price in one business day',
    color: 'bg-primary',
    icon: <FileUp className='w-7 h-7' />,
  },
  {
    id: 2,
    label: 'MANUFACTURE',
    description:
      'Select the best quote for price, quality, and timeline. Our trusted team will create high-quality mechanical parts for you in just days!',
    color: 'bg-black',
    icon: <Factory className='w-7 h-7' />,
  },
  {
    id: 3,
    label: 'QUALITY',
    description:
      'Our expert engineers perform rigorous quality control to ensure accurate and reliable parts from the start.',
    color: 'bg-primary',
    icon: <ShieldCheck className='w-7 h-7' />,
  },
  {
    id: 4,
    label: 'DELIVERY',
    description:
      'Our proprietary software ensures timely delivery and continuous communication throughout the project lifecycle.',
    color: 'bg-black',
    icon: <Truck className='w-7 h-7' />,
  },
];

const Process = () => {
  return (
    <div className='flex justify-center items-center px-20 mx-auto'>
      <div className='flex flex-col md:flex-row gap-6'>
        {steps.map((step, index) => (
          <div
            key={step.id}
            className='flex flex-col items-center text-center max-w-xs transition-all hover:scale-110 duration-500'
          >
            <ImgCard {...step} sx={{bg: `${index%2 === 0 ? 'bg-primary text-white' : 'bg-secondary text-secondary-foreground'}`}} />
            {/* <div
              className={`p-4 w-32 h-32 ${step.color} gap-3 text-white rounded-full flex flex-col justify-center items-center font-bold`}
            >
              {step.icon}
              <h3 className='font-semibold text-sm'>{step.label}</h3>
            </div>
            <p className='mt-2 text-sm'>{step.description}</p> */}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Process;
