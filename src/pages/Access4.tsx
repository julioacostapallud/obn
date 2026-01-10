import { useState, useEffect } from 'react';
import './PageStyles.css';
import MedievalIntro from '../components/MedievalIntro';
import LordMotivation from '../components/LordMotivation';
import ClueBox from '../components/ClueBox';
import { medievalMusic } from '../utils/medievalMusic';

function Access4() {
  const [showContent, setShowContent] = useState(false);

  useEffect(() => {
    // Preparar el audio medieval
    medievalMusic.start();
  }, []);

  if (!showContent) {
    return <MedievalIntro clueNumber={4} onComplete={() => setShowContent(true)} />;
  }

  return (
    <div className="page-container">
      <div className="card">
        <h1 className="title">⚜️ La Orden del Nuevo Territorio</h1>
        <div className="content">
          <LordMotivation motivation="Tu perseverancia es admirable. El final de la búsqueda está cerca." />
          <ClueBox icon="🔑" clueNumber={4}>
            <p>Si querés seguir esta búsqueda especial,</p>
            <p>pensá en algo que sirve para viajar.</p>
            <p>No camina, no vuela, pero sabe rodar:</p>
            <p>adentro del León la pista va a estar.</p>
          </ClueBox>
        </div>
        <div className="footer">
          <p>No adivines. Interpretá.</p>
        </div>
      </div>
    </div>
  );
}

export default Access4;

