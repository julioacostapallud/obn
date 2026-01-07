import './PageStyles.css';

function Access6() {
  const handleOpenLocation = () => {
    window.open(
      'https://www.google.com/maps?q=-27.42927740044966,-58.99584492807279',
      '_blank',
      'noopener,noreferrer'
    );
  };

  return (
    <div className="page-container">
      <div className="card">
        <h1 className="title">🛰️ OPERACIÓN NUEVA BASE</h1>
        <h2 className="subtitle">Acceso #6</h2>
        <div className="content">
          <div className="clue">
            <p>"La pista se aleja… y no quiero escuchar ninguna queja."</p>
          </div>
        </div>
        <div className="footer">
          <p>No adivines. Interpretá.</p>
        </div>
        <div className="button-container">
          <button className="location-button" onClick={handleOpenLocation}>
            ABRIR UBICACIÓN
          </button>
        </div>
      </div>
    </div>
  );
}

export default Access6;

