import './LordDialog.css';

interface LordDialogProps {
  children: React.ReactNode;
  introduction?: React.ReactNode;
}

function LordDialog({ children, introduction }: LordDialogProps) {
  return (
    <div className="lord-dialog-container">
      <div className="lord-avatar">
        <img src="/lord.png" alt="Lord QuiLiAc" />
      </div>
      <div className="lord-dialog">
        <div className="lord-name">Lord QuiLiAc</div>
        <div className="lord-speech">
          {introduction && (
            <div className="lord-introduction">
              {introduction}
            </div>
          )}
          <div className="lord-clue">
            {children}
          </div>
        </div>
      </div>
    </div>
  );
}

export default LordDialog;

