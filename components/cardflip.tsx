import { useState } from 'react';
import Image from 'next/image';
import './cardflip.css';

interface CardFlipProps {
  image: string;
  text: string;
  width?: number;
  height?: number;
}

export default function CardFlip({ image, text, width = 300, height = 200 }: CardFlipProps) {
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
          <p>{text}</p>
        </div>
      </div>
    </div>
  );
}