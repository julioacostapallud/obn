import { useState } from 'react';
import './PageStyles.css';
import MedievalIntro from '../components/MedievalIntro';
import LordMotivation from '../components/LordMotivation';
import ClueBox from '../components/ClueBox';

function Access3() {
  const [showContent, setShowContent] = useState(false);

  if (!showContent) {
    return <MedievalIntro clueNumber={3} onComplete={() => setShowContent(true)} />;
  }

  return (
    <div className="page-container">
      <div className="card">
        <h1 className="title">⚜️ OPERACIÓN NUEVA BASE</h1>
        <div className="content">
          <LordMotivation motivation="Cada paso te acerca más al tesoro. Mantené la mente alerta y los ojos abiertos." />
          <ClueBox icon="📚" clueNumber={3}>
            <p>Arriba se puede jugar o sentarse a estudiar,</p>
            <p>pero la pista no está donde la ves al mirar.</p>
            <p>Buscá más abajo, no tan a la vista,</p>
            <p>donde se junta el polvo se esconde la pista.</p>
          </ClueBox>
        </div>
        <div className="footer">
          <p>No adivines. Interpretá.</p>
        </div>
      </div>
    </div>
  );
}

export default Access3;

