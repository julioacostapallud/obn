import './ClueBox.css';

interface ClueBoxProps {
  icon?: string;
  clueNumber: number;
  children: React.ReactNode;
}

function ClueBox({ icon, clueNumber, children }: ClueBoxProps) {
  return (
    <div className="clue-box">
      <div className="clue-header">Pista #{clueNumber}</div>
      {icon && <div className="clue-icon">{icon}</div>}
      <div className="clue-text">
        {children}
      </div>
    </div>
  );
}

export default ClueBox;

