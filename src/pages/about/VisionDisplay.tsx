import MissionAndVision from "@/assets/images/MissionAndVision.jpg";
import GlobalImpact from "@/assets/images/GlobalImpact.jpg";
import Overview from "@/assets/images/Overview.jpg";
import Quality from "@/assets/images/Quality.jpg";

const data = [
  {
    heading: "Overview",
    content:
      "Company Started its state of art manufacturing facility in the year of 2016 at Silicon valley Bangalore, India. HUBTRIC is specialized in manufacturing of high precised Aerospace, Defense and Automobile machined components, Tooling's, Fixtures & Sub-Assemblies. HUBTRIC has come up with major expansion from the date Inception and started additional 4 manufacturing facility in Silicon Valley Bangalore. We are certified from ISO - 9001-2015 and AS9001D ur der Process expected in August 2023.",
    imageUrl: Overview,
  },
  {
    heading: "Mission and Vision",
    content:
      "At Hubtric, our vision and mission are united by a single goal: to become the global first-choice supplier of precision components. We strive to achieve this by delivering an exclusive range of high-quality products and developing personalized solutions using cutting-edge technology. We are dedicated to exceeding our customers' expectations through continuous improvement, progressive management practices, and a steadfast commitment to excellence.",
    imageUrl: MissionAndVision,
  },
  {
    heading: "Quality and Commitment",
    content:
      "At Hubtric, our dedication to quality is unwavering. We ensure consistent manufacturing excellence through advanced quality management systems and a culture of continuous improvement. Our commitment to customer satisfaction is evident in our on-time deliveries and the high standards of our products. We invest in cutting-edge technology and skilled personnel to deliver reliable and precise solutions, fulfilling our promise of exceptional quality and integrity in every project.",
    imageUrl: Quality,
  },
  {
    heading: "Our Global Impact",
    content:
      "As a One Stop Manufacturing Shop, we offer over 2000 products and serve 10,000+ customers worldwide. With more than 50,000 deliveries, our commitment to quality and innovation has made a significant global impact, fostering strong relationships and driving industry excellence.",
    imageUrl: GlobalImpact,
  },
];

const VisionDisplay = () => {
  return (
    <div className="flex flex-col">
      {data.map((item, index) => (
          <div
            key={index}
            className="flex flex-col md:flex-row w-full md:min-h-[350px]"
          >
            {index % 2 === 0 ? (
              <>
                <div className="w-full md:w-1/2 flex justify-center items-center h-auto slide-in-left order-1">
                  <img src={item.imageUrl} alt={`Image ${index}`} className="w-full h-full object-cover min-h-[190px]" />
                </div>
                <div className="w-full md:w-1/2 flex flex-col justify-center items-start px-6 pt-4 pb-10 md:pb-10 bg-secondary order-2">
                  <h2 className="text-lg xl:text-2xl font-semibold mb-2">{item.heading}</h2>
                  <p className="text-sm xl:text-xl">{item.content}</p>
                </div>
              </>
            ) : (
              <>
                <div className="w-full md:w-1/2 flex flex-col justify-center items-start px-6 pt-4 pb-10 md:pb-10 bg-primary text-white order-2 md:order-1">
                  <h2 className="text-lg xl:text-2xl font-semibold mb-2">{item.heading}</h2>
                  <p className="text-sm xl:text-xl">{item.content}</p>
                </div>
                <div className="w-full md:w-1/2 flex justify-center items-center h-auto slide-in-right order-1 md:order-2">
                  <img src={item.imageUrl} alt={`Image ${index}`} className="w-full h-full object-cover min-h-[190px]" />
                </div>
              </>
            )}
          </div>
        )
      )}
    </div>
  );
};

export default VisionDisplay;
