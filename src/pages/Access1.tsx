import { useState, useEffect } from 'react';
import './PageStyles.css';
import MedievalIntro from '../components/MedievalIntro';
import LordPresentation from '../components/LordPresentation';
import ClueBox from '../components/ClueBox';
import { medievalMusic } from '../utils/medievalMusic';

function Access1() {
  const [showContent, setShowContent] = useState(false);

  useEffect(() => {
    // Preparar el audio medieval
    medievalMusic.start();
  }, []);

  if (!showContent) {
    return <MedievalIntro clueNumber={1} onComplete={() => setShowContent(true)} />;
  }

  return (
    <div className="page-container">
      <div className="card">
        <h1 className="title">⚜️ La Orden del Nuevo Territorio</h1>
        <div className="content">
          <LordPresentation>
            <h3>Lord QuiLiAc</h3>
            <p>Salve, noble viajero. Soy Lord QuiLiAc, guardián de los secretos y maestro de las pistas ocultas.</p>
            <p>Hoy no gana el más rápido, sino el que mejor observa. Usá tu imaginación y soñá en grande: las pistas están más cerca de lo que parecen.</p>
            <p>Si fallás una vez, no pasa nada: volvé a leer y probá de nuevo. La paciencia y la atención son tus mejores aliados en esta búsqueda.</p>
          </LordPresentation>
          <ClueBox icon="🔥" clueNumber={1}>
            <p>Aquí no juegues con fuego, prestá mucha atención,</p>
            <p>si esto llega a faltar, no hay comida ni cocción.</p>
            <p>Buscá donde nace la llama, con cuidado al buscar,</p>
            <p>ahí está la pista que tenés que encontrar.</p>
          </ClueBox>
        </div>
        <div className="footer">
          <p>No adivines. Interpretá.</p>
        </div>
      </div>
    </div>
  );
}

export default Access1;

