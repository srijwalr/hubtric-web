import ContactUsImg from '@/assets/images/ContactUs.jpg';
import { routes } from '@/lib/constants';
import { Link } from 'react-router-dom';

const ContactUs = () => {
    return(
        
      <section className="p-0">
      <div className="flex flex-col md:flex-row items-center bg-gray-900 text-white relative p-8 pl-14 pt-14">
      {/* <div className="bg-white absolute w-1/5 z-0 -inset-1 hidden md:block"></div> */}

      <div className="relative mb-8 md:mb-0">
        <div className="bg-orange-600 absolute inset-0 transform -translate-x-6 -translate-y-6"></div>
        <img
          src={ContactUsImg}
          alt="People discussing a project"
            className="relative z-30 w-[900px] lg:w-[650px] h-[250px] lg:h-[280px] 2xl:h-[400px]"
        />
      </div>
      <div className="md:ml-12 text-center md:text-left">
        <h2 className="text-3xl font-bold mb-4">Dive Deeper</h2>
        <p className="text-gray-400 mb-4">
        We're here to help! Contact us to collaborate on your next project and discover how our 
        precision machining and manufacturing excellence can elevate your industry.
        </p>
        <Link to={routes.contactUs()}
          className="inline-block bg-gray-800 text-white py-2 px-4 border border-white hover:bg-white hover:text-gray-900 uppercase"
        >
          Request demo
        </Link>
      </div>
    </div>
    </section>
    )
}

export default ContactUs;
