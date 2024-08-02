import './style.css';
// import ImgSubAssembly from '../../../assets/images/SubAssembly.jpg'
// import ImgAdvancedTooling from '../../../assets/images/AdvancedTooling.jpeg'
// import ImgDesignPrototyping from '../../../assets/images/DesignPrototyping.jpg'
// import ImgInjectionMolding from '../../../assets/images/InjectionMolding.jpeg'
// import ImgPrecisionMachining from '../../../assets/images/PrecisionMachining.jpg'
import AutomotiveMc from '../../../assets/images/automotivemc.jpeg'
import AerospaceMc from '../../../assets/images/aerospacemc.jpeg'
import MedicalMc from '../../../assets/images/medicalmcn.jpeg'
import RoboticsMc from '../../../assets/images/roboticsmc.jpeg'
import ElectronicsImg from '../../../assets/images/ElectronicsImg.jpeg'
import DefenceImg from '../../../assets/images/DefencImg.jpeg'
import FMCGImg from '../../../assets/images/FMCGImg.jpeg'
import FertImg from '../../../assets/images/FertImg.jpeg'
import RailwayImg from '../../../assets/images/RailwayImg.jpeg'
import PetroChemImg from '../../../assets/images/PetroChemImg.jpeg'
// import ImgRD from '../../../assets/images/R&D.jpg'
import { Link } from 'react-router-dom';
import { routes } from '@/lib/constants';
import ImgCard from '../ImgCard';

const Industries = () => {
  const items = [
    { label: 'Aerospace Machining', imageUrl: AerospaceMc },
    { label: 'Electronics', imageUrl: ElectronicsImg },
    { label: 'Automotive Industries', imageUrl: AutomotiveMc },
    { label: 'Robotics', imageUrl: RoboticsMc },
    { label: 'Pharmaceutical & Healthcare', imageUrl: MedicalMc },
    { label: 'FMCG Companies', imageUrl: FMCGImg },
    { label: 'Defence', imageUrl: DefenceImg },
    { label: 'Railways', imageUrl: RailwayImg },
    { label: 'Fertilizer Industries', imageUrl: FertImg },
    { label: 'Petrochemical Industries', imageUrl: PetroChemImg },
  ];

  return (
    <div className="container mx-auto py-8 px-0">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-1 px-16 w-4/5 mx-auto">
        {items.map((item, index) => (
          <Link to={routes.capabilities()} key={index} className='transition-all hover:scale-110 duration-500'>
            <ImgCard {...item} sx={{img: 'capabilitiesItem'}} />
            {/* <div
              className="relative w-full h-64 xl:h-80 overflow-hidden capabilitiesItem" // sm:h-64 xl:w-80 xl:h-80 
              style={{ backgroundImage: `url(${item.imageUrl})` }}
            >
              <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4">
                <span className="text-white text-2xl 2xl:text-3xl font-semibold text-center">{item.text}</span>
              </div>
            </div> */}
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Industries;
