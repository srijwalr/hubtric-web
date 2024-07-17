
interface InputData {
  label: string;
  image: string;
}

const InputBox = ({ label, image }: InputData) => {
  return (
    <div className="bg-white border border-gray-200 rounded p-4 flex flex-col items-center justify-center">
      <img src={image} alt={label} className="max-w-full max-h-[100px] object-cover" />
      <p className="text-center font-medium text-sm 2xl:text-xl mt-2 min-h-12">{label}</p>
    </div>
  );
};

const OurWork = ({ inputData }: {inputData: InputData[]}) => {
  return (
    <div className="text-center px-4 py-6">
      <h1 className="text-3xl font-bold uppercase mb-8">WE LOVE WHAT WE DO</h1>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {inputData.map((item, index) => (
          <InputBox key={index} label={item.label} image={item.image} />
        ))}
      </div>
    </div>
  );
};

export default OurWork;
