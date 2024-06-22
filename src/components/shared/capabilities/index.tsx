import { Link } from 'react-router-dom';
import './style.css';
import { routes } from '@/lib/constants';

const data = [
  {
    title: 'Aerospace Components & Press Toolings',
  },
  {
    title: 'Precision Machining For All Grades',
  },
  {
    title: 'Sub Assemblies Customize Gauges',
  },
  {
    title: 'Injection Molding & Press Toolings',
  },
  {
    title: 'Design, Modeling, Reverse Engineering',
  },
  {
    title: 'Research & Development',
  },
  {
    title: 'Jigs & Fixtures',
  },
];

const Capabilities = () => {
  return (
    <div className='p-6'>
      <div className='container'>
        <div className='flex flex-col items-center justify-center'>
          <div className='flex justify-center gap-0 md:gap-1 flex-wrap'>
            {data.slice(0, 4).map((item, index) => (
              <HexagonItem key={index} title={item.title} />
            ))}
          </div>
          <div className='flex justify-center gap-0 md:gap-1 flex-wrap'>
            {data.slice(4).map((item, index) => (
              <HexagonItem key={index} title={item.title} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

const HexagonItem = ({ title }: { title: string }) => (
  <div className='hexagon-item'>
    <div className='hex-item'>
      <div></div>
      <div></div>
      <div></div>
    </div>
    <div className='hex-item'>
      <div></div>
      <div></div>
      <div></div>
    </div>
    <Link to={routes.capabilities()} className='hex-content'>
      <span className='hex-content-inner'>
        <span className='title text-primary-foreground'>{title}</span>
      </span>
      <svg
        viewBox='0 0 173.20508075688772 200'
        height='200'
        width='174'
        version='1.1'
        xmlns='http://www.w3.org/2000/svg'
      >
        <path
          d='M86.60254037844386 0L173.20508075688772 50L173.20508075688772 150L86.60254037844386 200L0 150L0 50Z'
          fill='#000000'
        ></path>
      </svg>
    </Link>
  </div>
);

export default Capabilities;
