import './style.css';

const OurStory = () => {
  return (
    <div className="flex flex-col md:flex-row w-full bg-white text-secondary-foreground relative pl-6">
      <div className="w-full md:w-1/2 p-4 pb-0 flex items-center justify-center">
        <h2 className="text-3xl md:text-[40px] 2xl:text-[80px] font-bold mb-2 capitalize resize">
          Our story
        </h2>
      </div>
      <div className="w-full md:w-1/2 px-6 py-4 text-sm 2xl:text-xl leading-relaxed">
        <p>
          Hubtric Manufacturing Pvt. Ltd., established in 2018, has been at the
          forefront of revolutionizing the manufacturing industry with its
          state-of-the-art facility in Bangalore, the Silicon Valley of India.
          Our company is dedicated to advancing traditional manufacturing
          processes by utilizing advanced machinery, elevating industries one
          step ahead. Guided by founding and strategic advisors based in Germany
          and Switzerland, we bring global expertise to our operations. Our
          specializations include CNC machining, injection molding, sheet metal
          fabrication, 3D printing, tooling, fixtures, and sub-assemblies. These
          extensive manufacturing capabilities cover a wide spectrum of
          industries and applications, including aerospace, defense, automobile,
          healthcare, petrochemical, and fertilizer sectors. Hubtric's strength
          lies in our robust manufacturing capabilities. Equipped with the
          latest technology and advanced equipment, we ensure exceptional
          precision and efficiency in every product we create. We pride
          ourselves on being a comprehensive one-stop solution for manufacturing
          needs. Whether it’s prototyping, low-volume production, or high-volume
          manufacturing, we offer an extensive range of services that cater to
          diverse requirements. With a team of skilled Engineers, Technical
          SMEs, Architects, Designers, and State-of-the-art facilities, Hubtric
          ensures a seamless transition from concept to final product, saving
          time, effort, and resources for our clients. At Hubtric, innovation
          and excellence are our driving forces. We deliver top-quality
          products, making us a trusted partner across multiple sectors
        </p>
      </div>
    </div>
  );
};

export default OurStory;
