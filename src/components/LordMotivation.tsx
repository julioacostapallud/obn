import './LordMotivation.css';

interface LordMotivationProps {
  motivation: string;
}

function LordMotivation({ motivation }: LordMotivationProps) {
  return (
    <div className="lord-motivation-container">
      <div className="lord-avatar-section">
        <div className="lord-avatar">
          <img src="/lord.png" alt="Lord QuiLiAc" />
        </div>
      </div>
      <div className="lord-motivation-text">
        <p>{motivation}</p>
      </div>
    </div>
  );
}

export default LordMotivation;

