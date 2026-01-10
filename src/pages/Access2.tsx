import { useState, useEffect } from 'react';
import './PageStyles.css';
import MedievalIntro from '../components/MedievalIntro';
import LordMotivation from '../components/LordMotivation';
import ClueBox from '../components/ClueBox';
import { medievalMusic } from '../utils/medievalMusic';

function Access2() {
  const [showContent, setShowContent] = useState(false);

  useEffect(() => {
    // Preparar el audio medieval
    medievalMusic.start();
  }, []);

  if (!showContent) {
    return <MedievalIntro clueNumber={2} onComplete={() => setShowContent(true)} />;
  }

  return (
    <div className="page-container">
      <div className="card">
        <h1 className="title">⚜️ OPERACIÓN NUEVA BASE</h1>
        <div className="content">
          <LordMotivation motivation="¡Bien hecho, valiente explorador, habéis dado el primer paso.! Sigamos adelante con determinación." />
          <ClueBox icon="❄️" clueNumber={2}>
            <p>No busques en cajones ni mochilas esta vez,</p>
            <p>buscá donde el agua se hace dura y el frío es rey.</p>
            <p>No es lugar para papeles, eso seguro está,</p>
            <p>en el rincón más frío de la casa lo vas a encontrar.</p>
          </ClueBox>
        </div>
        <div className="footer">
          <p>No adivines. Interpretá.</p>
        </div>
      </div>
    </div>
  );
}

export default Access2;

