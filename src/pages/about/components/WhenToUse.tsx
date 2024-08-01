const data = [
  {
    title: 'Rapid Prototyping',
    points: [
      'Ideal for low-volume runs under 10 units per design',
      'Receive competitive quotes and precise timelines',
      'Access expert guidance from experienced engineers',
      'Quickly validate designs with functional prototypes',
      'Seamlessly transition from prototyping to full production',
      'Benefit from fast turnaround times to accelerate development',
      'Secure intellectual property with controlled prototyping processes',
    ],
  },
  {
    title: 'Pilot Production',
    points: [
      'Ideal for medium-volume runs of 10-100 units per design',
      'Receive competitive quotes and precise timelines',
      'Validate designs and production processes with functional parts',
      'Benefit from optimized production workflows and efficient processes',
      'Ensure consistent quality with rigorous quality control measures',
      'Scalable production solutions to adapt to market demands',
      'Implement design for manufacturability (DFM) feedback',
      'Comprehensive post-production support',
    ],
  },
  {
    title: 'E2E Manufacturing',
    points: [
      'Perfect for high-volume production with over 100 units per design',
      'Take advantage of volume discounts for large-scale production',
      'Dedicated account manager for personalized service and support',
      'Comprehensive project management from design to final delivery',
      'Expert guidance in selecting the optimal manufacturing process',
      'Tooling design and fabrication for mass production',
      'Materials selection and optimization advice',
      'Optimized production schedules to meet tight deadlines',
      'All benefits of Rapid Prototyping and Pilot Production included',
    ],
  },
];

const WhenToUse = () => {
  return (
    <div className='flex flex-col gap-8 px-4 py-6'>
      <div className='flex flex-col items-center mb-4 w-full text-center gap-3'>
        <h1 className='text-3xl font-bold uppercase'>WHEN TO USE HUBTRIC?</h1>
        <span>
          Hubtric is the preferred choice for engineers and companies worldwide,
          <br /> trusted for their comprehensive and efficient manufacturing
          solutions
        </span>
      </div>
      <div className='flex gap-4 flex-col md:flex-row'>
        {data.map((item, index) => (
          <div
            className={`p-4 flex flex-col gap-2 w-full ${
              index === 1
                ? 'bg-primary text-primary-foreground'
                : 'bg-secondary text-secondary-foreground'
            }`}
            key={index}
          >
            <h1 className='text-4xl font-bold'>{item.title}</h1>
            <ul className='custom-bullet px-4 text-sm'>
              {item.points.map((value, idx) => (
                <li key={idx}>{value}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
};

export default WhenToUse;
