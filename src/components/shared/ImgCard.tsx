import { ReactNode } from "react";

interface iProps {
  imageUrl?: string;
  label: string;
  description?: string;
  icon?: ReactNode,
  sx?: {
    bg?: string,
    img?: string,
    label?: string,
    description?: string,
    icon?: string
  }
}

const ImgCard = (props: iProps) => {
  const { imageUrl, label, description, sx, icon } = props;
  return (
    <div className={`max-w-sm rounded overflow-hidden shadow-md h-full ${sx?.bg || 'bg-white text-secondary-foreground'}`}>
      {/* <img
        className="w-full h-64"
        src={imageUrl}
        alt="Sunset in the mountains"
      /> */}
      <>
      {imageUrl && (<div
        className={`relative w-full h-40 xl:h-48 overflow-hidden ${sx?.img}`}
        style={{ backgroundImage: `url(${imageUrl})` }}
      />)}
      {icon && (
        <div className={`w-full flex justify-center align-center p-6 ${sx?.icon}`}>{icon}</div>
      )}
      <div className="p-4">
        <div className={`font-bold text-md mb-2 text-center ${sx?.label}`}>{label}</div>
        {description && (
          <p className={`text-xs 2xl:text-sm ${sx?.description}`}>{description}</p>
        )}
      </div>
      </>
    </div>
  );
};

export default ImgCard;
