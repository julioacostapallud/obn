import './LordPresentation.css';

interface LordPresentationProps {
  children: React.ReactNode;
}

function LordPresentation({ children }: LordPresentationProps) {
  return (
    <div className="lord-presentation-container">
      <div className="lord-avatar-section">
        <div className="lord-avatar">
          <img src="/lord.png" alt="Lord QuiLiAc" />
        </div>
      </div>
      <div className="lord-presentation-text">
        {children}
      </div>
    </div>
  );
}

export default LordPresentation;

