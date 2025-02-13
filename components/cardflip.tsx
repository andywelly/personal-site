import Image from 'next/image';
import "./cardflip.css";

interface CardFlipProps {
  image: string;
  text: string;
  width?: number;
  height?: number; // Optional height for the image
}

export default function CardFlip({ image, text, width = 300, height = 200 }: CardFlipProps) {  // Default width and height
  return (
    <div className="flip-card">
      <div className="flip-card-inner">
        <div className="flip-card-front">
          <Image 
            src={image} 
            alt="Card" 
            width={width} 
            height={height}
          />
        </div>
        <div className="flip-card-back">
          <p>{text}</p>
        </div>
      </div>
    </div>
  );
}