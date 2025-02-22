import { useState } from 'react';
import Image from 'next/image';
import './cardflip.css';

interface CardFlipImageProps {
  image: string;
  imagelink: string;
  width?: number;
  height?: number; 
}

export default function CardFlipImage({ image, imagelink, width = 300, height = 200 }: CardFlipImageProps) {
  const [isFlipped, setIsFlipped] = useState(false);

  const handleFlip = () => {
    setIsFlipped(!isFlipped);
  };

  return (
    <div className="flip-card" onClick={handleFlip}>
      <div className={`flip-card-inner ${isFlipped ? 'flipped' : ''}`}>
        <div className="flip-card-front">
          <Image
            src={image}
            alt="Card"
            width={width}
            height={height}
          />
        </div>
        <div className="flip-card-back">
          <Image
            src={imagelink}
            alt="Flipped Image"
            width={width}
            height={height}
            style={{
                objectFit: 'cover', // Ensure the image covers the card
                borderRadius: '15px', // Rounded edges
              }}
          />
        </div>
      </div>
    </div>
  );
}