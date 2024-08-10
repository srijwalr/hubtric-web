import Overview from "@/assets/images/Overview.jpg";
import GlobalImpact from "@/assets/images/GlobalImpact.jpg";
import MissionAndVision from "@/assets/images/MissionAndVision.jpg";
import Quality from "@/assets/images/Quality.jpg";
import "./style.css";

// const data = [
//   {
//     heading: "Overview",
//     content:
//       "Company Started its state of art manufacturing facility in the year of 2016 at Silicon valley Bangalore, India. HUBTRIC is specialized in manufacturing of high precised Aerospace, Defense and Automobile machined components, Tooling's, Fixtures & Sub-Assemblies. HUBTRIC has come up with major expansion from the date Inception and started additional 4 manufacturing facility in Silicon Valley Bangalore. We are certified from ISO - 9001-2015 and AS9001D ur der Process expected in August 2023.",
//     imageUrl: Overview,
//   },
//   {
//     heading: "Mission and Vision",
//     content:
//       "At Hubtric, our vision and mission are united by a single goal: to become the global first-choice supplier of precision components. We strive to achieve this by delivering an exclusive range of high-quality products and developing personalized solutions using cutting-edge technology. We are dedicated to exceeding our customers' expectations through continuous improvement, progressive management practices, and a steadfast commitment to excellence.",
//     imageUrl: MissionAndVision,
//   },
//   {
//     heading: "Quality and Commitment",
//     content:
//       "At Hubtric, our dedication to quality is unwavering. We ensure consistent manufacturing excellence through advanced quality management systems and a culture of continuous improvement. Our commitment to customer satisfaction is evident in our on-time deliveries and the high standards of our products. We invest in cutting-edge technology and skilled personnel to deliver reliable and precise solutions, fulfilling our promise of exceptional quality and integrity in every project.",
//     imageUrl: Quality,
//   },
//   {
//     heading: "Our Global Impact",
//     content:
//       "As a One Stop Manufacturing Shop, we offer over 2000 products and serve 10,000+ customers worldwide. With more than 50,000 deliveries, our commitment to quality and innovation has made a significant global impact, fostering strong relationships and driving industry excellence.",
//     imageUrl: GlobalImpact,
//   },
// ];

const data = [
  {
    heading: "The Spark Behind Hubtric",
    content:
      "Hubtric was founded to revolutionize manufacturing by seamlessly bridging the gap between customer demands and available resources through our international expertise. Driven by a commitment to better governance and environmental responsibility, we focus on reducing CO2 emissions and supporting our customers' sustainability goals.",
    imageUrl: Overview,
  },
  {
    heading: "Our Purpose and Goals",
    content:
      "Transform manufacturing with innovative, sustainable solutions. " +
      "Meet evolving customer demands using advanced technology and " +
      "international expertise. Commit to strong environmental and " +
      "governance standards, reducing CO2 emissions and supporting clients' " +
      "sustainability goals. • Set new benchmarks in quality and efficiency " +
      "to lead the industry towards a more responsible and sustainable " +
      "future.",
    imageUrl: MissionAndVision,
  },
  {
    heading: "Our driving force",
    content:
      "Global Insights, Local Excellence - Combining international " +
      "expertise with the precision of local experts • Sustainability " +
      "Leadership - Pioneering a sustainable manufacturing industry and " +
      "setting the standard • Innovative Expertise - Leveraging " +
      "international and industry expertise to meet customer demands with " +
      "innovative solutions • • Inclusive Work Environment - Fostering " +
      "inclusivity and empowering women in manufacturing",
    imageUrl: Quality,
  },
  {
    heading: "Global Excellence in Manufacturing",
    content:
      "Hubtric has empowered over 25+ businesses and innovators across " +
      "continents, including Asia and Europe. Delivering more than 5,000 " +
      "parts, we showcase our commitment to innovation, quality, and About " +
      "us content Website Content Page 1 Europe. Delivering more than 5,000 " +
      "parts, we showcase our commitment to innovation, quality, and global " +
      "reach.", // Our comprehensive manufacturing solutions drive " +
      // "sustainability and excellence, making a profound impact worldwide.",
    imageUrl: GlobalImpact,
  },
];
interface VisionSectionTypes {
  items: any;
  reverse?: boolean;
}

const VisionSection = ({ items, reverse }: VisionSectionTypes) => {
  return (
    <section className={`grid-cols-1 lg:grid-cols-2 md:grid`}>
      {items.map((vision: any, index: number) => (
        <div
          className={`flex flex-col grid-cols-2 md:grid`}
        >
          <div className={`col-span-1 order-1 md:${index % 2 === 0 ? 'order-1' : 'order-2'} lg:${reverse ? 'order-2' : 'order-1'}`}>
          {/* <div className={`col-span-1 ${reverse ? 'md:order-2' : 'order-1'}`}> */}
            <img
              className="w-full h-60 md:h-full object-cover"
              src={vision.imageUrl}
              alt={vision.heading}
            />
          </div>
          <div className={`px-6 pt-4 pb-10 col-span-1 flex flex-col items-start justify-center gap-6 w-full p-0 order-2 md:${index % 2 === 0 ? 'order-2' : 'order-1'} lg:${reverse ? 'order-1' : 'order-2'}`}>
          {/* <div className={`px-6 pt-4 pb-10 col-span-1 flex flex-col items-start justify-center gap-6 w-full p-0 ${reverse ? 'md:order-1' : 'order-2'}`}> */}
            <h3 className="text-lg 2xl:text-2xl font-semibold mb-2 text-primary">
              {vision.heading}
            </h3>
            <p className="text-sm 2xl:text-md">
              {vision.content}
            </p>
          </div>
        </div>
      ))}
    </section>
  );
};

const VisionDisplay = () => {
  return (
    <div>
      <VisionSection items={data.slice(0, 2)} />
      <VisionSection items={data.slice(2)} reverse />
    </div>
  );
};

export default VisionDisplay;

{
  /* //   <div className="flex flex-col">
  //     {data.map((item, index) => (
  //         <div
  //           key={index}
  //           className="flex flex-col md:flex-row w-full md:min-h-72"
  //         >
  //           {index % 2 === 0 ? (
  //             <div className="flex flex-col md:flex-row md:max-h-80">
  //               <div className="w-full md:w-1/2 flex justify-center items-center h-auto slide-in-left order-1">
  //                 <img src={item.imageUrl} alt={`Image ${index}`} className="w-full h-full object-cover min-h-48" />
  //               </div>
  //               <div className="w-full md:w-1/2 flex flex-col justify-center items-start px-6 pt-4 pb-10 md:pb-10 bg-secondary order-2">
  //                 <h2 className="text-lg 2xl:text-2xl font-semibold mb-2">{item.heading}</h2>
  //                 <p className="text-sm 2xl:text-md">{item.content}</p>
  //               </div>
  //             </div>
  //           ) : (
  //             <div className="flex flex-col md:flex-row md:max-h-80">
  //               <div className="w-full md:w-1/2 flex flex-col justify-center items-start px-6 pt-4 pb-10 md:pb-10 bg-primary text-white order-2 md:order-1">
  //                 <h2 className="text-lg 2xl:text-2xl font-semibold mb-2">{item.heading}</h2>
  //                 <p className="text-sm 2xl:text-md">{item.content}</p>
  //               </div>
  //               <div className="w-full md:w-1/2 flex justify-center items-center h-auto slide-in-right order-1 md:order-2">
  //                 <img src={item.imageUrl} alt={`Image ${index}`} className="w-full h-full object-cover min-h-48" />
  //               </div>
  //             </div>
  //           )}
  //         </div>
  //       )
  //     )}
  //   </div>
  // );
// }; */
}
