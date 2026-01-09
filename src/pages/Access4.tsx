import { useState } from 'react';
import './PageStyles.css';
import MedievalIntro from '../components/MedievalIntro';
import LordMotivation from '../components/LordMotivation';
import ClueBox from '../components/ClueBox';

function Access4() {
  const [showContent, setShowContent] = useState(false);

  if (!showContent) {
    return <MedievalIntro clueNumber={4} onComplete={() => setShowContent(true)} />;
  }

  return (
    <div className="page-container">
      <div className="card">
        <h1 className="title">⚜️ OPERACIÓN NUEVA BASE</h1>
        <div className="content">
          <LordMotivation motivation="Tu perseverancia es admirable. El final de la búsqueda está cerca." />
          <ClueBox icon="🔑" clueNumber={4}>
            <p>Tenemos un francés, eso es verdad,</p>
            <p>pero hoy no es el elegido, no lo vamos a usar.</p>
            <p>Buscá al japonés que espera sin protestar,</p>
            <p>la pista está con él, sabrás dónde mirar.</p>
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

