import { useState } from 'react';
import './PageStyles.css';
import MedievalIntro from '../components/MedievalIntro';
import LordMotivation from '../components/LordMotivation';
import ClueBox from '../components/ClueBox';

function Access5() {
  const [showContent, setShowContent] = useState(false);

  const handleOpenLocation = () => {
    window.open(
      'https://www.google.com/maps?q=-27.42927740044966,-58.99584492807279',
      '_blank',
      'noopener,noreferrer'
    );
  };

  if (!showContent) {
    return <MedievalIntro clueNumber={5} onComplete={() => setShowContent(true)} />;
  }

  return (
    <div className="page-container">
      <div className="card">
        <h1 className="title">⚜️ OPERACIÓN NUEVA BASE</h1>
        <div className="content">
          <LordMotivation motivation="¡Excelente trabajo! Has llegado al final de tu búsqueda. El tesoro te espera." />
          <ClueBox icon="🗺️" clueNumber={5}>
            <p>La pista se aleja, no es tiempo de queja,</p>
            <p>ahora toca seguir y dejarse guiar.</p>
            <p>Tocá el botón y mirá el mapa sin dudar,</p>
            <p>que el lugar que buscás está por mostrar.</p>
          </ClueBox>
        </div>
        <div className="footer">
          <p>No adivines. Interpretá.</p>
        </div>
        <div className="button-container">
          <button className="location-button" onClick={handleOpenLocation}>
            👉 ABRIR UBICACIÓN
          </button>
        </div>
      </div>
    </div>
  );
}

export default Access5;

