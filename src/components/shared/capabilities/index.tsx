import React from 'react';
import './style.css';
import ImgSubAssembly from '../../../assets/images/SubAssembly.jpeg'
// import ImgAeroSpace from '../../../assets/images/Aero'
import ImgAdvancedTooling from '../../../assets/images/AdvancedTooling.jpeg'
import ImgDesignPrototyping from '../../../assets/images/DesignPrototyping.jpeg'
import ImgInjectionMolding from '../../../assets/images/InjectionMolding.jpeg'
import ImgPrecisionMachining from '../../../assets/images/PrecisionMachining.jpeg'
import ImgRD from '../../../assets/images/R&D.jpeg'
import { Link } from 'react-router-dom';
import { routes } from '@/lib/constants';
// import ImgSubAssembly from '../../../assets/images/SubAssembly.jpeg'

// const image1 = 'https://www.istockphoto.com/vector/big-civil-aircraft-old-poster-gm1087285030-291711022'
const Capabilities = () => {
  const items = [
    { text: 'Sub Assemblies Customize Gauges', imageUrl: ImgSubAssembly },
    { text: 'Aerospace Components & Press Toolings', imageUrl: ImgAdvancedTooling },
    { text: 'Injection Molding & Press Toolings', imageUrl: ImgInjectionMolding },
    { text: 'Precision Machining For All Grades', imageUrl: ImgPrecisionMachining },
    { text: 'Research & Development', imageUrl: ImgRD },
    { text: 'Jigs & Fixtures', imageUrl: ImgAdvancedTooling },
    { text: 'Design, Modeling, Reverse Engineering', imageUrl: ImgDesignPrototyping },
    { text: 'Contract Services', imageUrl: ImgAdvancedTooling },
  ];
//http://localhost:5173/assets//images//GlobalImpact.jpg
  return (
    <div className="container mx-auto py-8">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
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
