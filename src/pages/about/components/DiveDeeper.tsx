import { routes } from '@/lib/constants';
import { AppWindow, Codesandbox, MoveRight, Podcast } from 'lucide-react';
import { Link } from 'react-router-dom';

const data = [
  {
    title: 'Talk to an expert',
    icon: <Podcast strokeWidth={0.5} className='w-20 h-20' />,
    href: routes.contactUs(),
  },
  {
    title: 'Book a meeting',
    icon: <Codesandbox strokeWidth={0.5} className='w-20 h-20' />,
    href: "https://calendly.com/director-hubtric", // routes.contactUs(),
  },
  {
    title: 'Get Quote',
    icon: <AppWindow strokeWidth={0.5} className='w-20 h-20' />,
    href: routes.contactUs(),
  },
];

const DiveDeeper = () => {
  return (
    <div className='bg-black px-4 py-6 text-white flex flex-col gap-8 items-center'>
      <h1 className='text-4xl font-semibold'>Talk to Us</h1>
      <div className='flex gap-6 justify-between flex-col md:flex-row'>
        {data.map((item, index) => (
          <Link
            to={item.href}
            target='_blank'
            className='border-white border-2 rounded-sm flex flex-col items-center p-4 gap-6 hover:scale-105 hover:bg-primary transition-all duration-300'
            key={index}
          >
            <div className='p-4'>{item.icon}</div>
            <div className='flex flex-col items-center gap-2'>
              <span>{item.title}</span>
              <MoveRight />
            </div>
          </Link>
        ))}
        {/* <link href="https://assets.calendly.com/assets/external/widget.css" rel="stylesheet" />
        <script src="https://assets.calendly.com/assets/external/widget.js" type="text/javascript" async></script>
        <a href="" onclick="Calendly.initPopupWidget({url: 'https://calendly.com/director-hubtric'});return false;">Discovery Call</a> */}
      </div>
    </div>
  );
};

export default DiveDeeper;
