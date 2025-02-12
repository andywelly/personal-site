import "./cardflip.css";

interface CardFlipProps {
  image: string; // Path to the image
  text: string;  // Text to display on the back
}

export default function CardFlip({ image, text }: CardFlipProps) {
  return (
    <div className="flip-card">
      <div className="flip-card-inner">
        <div className="flip-card-front">
          <img src={image} alt="Card" />
        </div>
        <div className="flip-card-back">
          <p>{text}</p>
        </div>
      </div>
    </div>
  );
}