import './style.css';
import ImgSubAssembly from '../../../assets/images/SubAssembly.jpeg'
import ImgAdvancedTooling from '../../../assets/images/AdvancedTooling.jpeg'
import ImgDesignPrototyping from '../../../assets/images/DesignPrototyping.jpeg'
import ImgInjectionMolding from '../../../assets/images/InjectionMolding.jpeg'
import ImgPrecisionMachining from '../../../assets/images/PrecisionMachining.jpeg'
import ImgRD from '../../../assets/images/R&D.jpeg'
import { Link } from 'react-router-dom';
import { routes } from '@/lib/constants';

const Capabilities = () => {
  const items = [
    { text: 'Precision CNC Machining', imageUrl: ImgPrecisionMachining },
    { text: 'Advanced Tooling Solutions', imageUrl: ImgAdvancedTooling },
    { text: 'Injection Molding', imageUrl: ImgInjectionMolding },
    { text: 'Sub Assembly Services', imageUrl: ImgSubAssembly },
    { text: 'Design & Prototyping', imageUrl: ImgDesignPrototyping },
    { text: 'Research & Development', imageUrl: ImgRD },
    // { text: 'SecondaryOperations', imageUrl: '' },
    // { text: 'Contract Services', imageUrl: '' },
  ];

  return (
    <div className="container mx-auto py-8">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {items.map((item, index) => (
          <Link to={routes.capabilities()} key={index}>
            <div
              className="relative w-full h-full overflow-hidden capabilitiesItem"
              style={{ backgroundImage: `url(${item.imageUrl})` }}
            >
              <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center px-4">
                <span className="text-white text-xl font-bold text-center">{item.text}</span>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Capabilities;
