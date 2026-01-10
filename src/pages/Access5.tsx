import { useState, useEffect } from 'react';
import './PageStyles.css';
import MedievalIntro from '../components/MedievalIntro';
import LordMotivation from '../components/LordMotivation';
import ClueBox from '../components/ClueBox';
import { medievalMusic } from '../utils/medievalMusic';

function Access5() {
  const [showContent, setShowContent] = useState(false);

  useEffect(() => {
    // Preparar el audio medieval
    medievalMusic.start();
  }, []);

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
        <h1 className="title">⚜️ La Orden del Nuevo Territorio</h1>
        <div className="content">
          <LordMotivation motivation="La búsqueda da un giro: el camino se abre y el rumbo está marcado." />
          <ClueBox icon="🗺️" clueNumber={5}>
            <p>La aventura sigue, no hay que parar,</p>
            <p>el camino aparece para ayudar.</p>
            <p>Al llegar al lugar que tenés que encontrar,</p>
            <p>usá el interruptor y dejá que pase algo más.</p>
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

