import { useState } from "react";

function App() {
  const casillas = [
    {
      x: 1,
      y: 1
    },
    {
      x: 2,
      y: 1
    },
    {
      x: 3,
      y: 1
    },
    {
      x: 1,
      y: 2
    },
    {
      x: 2,
      y: 2
    },
    {
      x: 3,
      y: 2
    },
    {
      x: 1,
      y: 3
    },
    {
      x: 2,
      y: 3
    },
    {
      x: 3,
      y: 3
    }
  ]
  const [posicionActual, setPosicionActual] = useState({ x: 1, y: 1 });
  const [aviso, setAviso] = useState(false);
  const onClickCasilla = ({ x, y }) => {
    setPosicionActual({
      x,
      y
    });
  }
  const mostrarAviso = () => {
    setAviso(true);
    setTimeout(() => setAviso(false), 2000);
  }
  const onClickArriba = () => {
    if (posicionActual.y === 1) {
      mostrarAviso();
      return;
    }
    setPosicionActual({
      ...posicionActual,
      y: posicionActual.y - 1
    })
  }
  const onClickAbajo = () => {
    if (posicionActual.y === 3) {
      mostrarAviso();
      return;
    }
    setPosicionActual({
      ...posicionActual,
      y: posicionActual.y + 1
    })
  }
  const onClickIzquierda = () => {
    if (posicionActual.x === 1) {
      mostrarAviso();
      return;
    }
    setPosicionActual({
      ...posicionActual,
      x: posicionActual.x - 1
    })
  }
  const onClickDerecha = () => {
    if (posicionActual.x === 3) {
      mostrarAviso();
      return;
    }
    setPosicionActual({
      ...posicionActual,
      x: posicionActual.x + 1
    })
  }
  return (
    <>
      {
        aviso && <div className="aviso">¡Que te sales!</div>
      }
      <ul className="controles">
        <li onClick={onClickArriba}>⬆</li>
        <li onClick={onClickAbajo}>⬇</li>
        <li onClick={onClickIzquierda}>⬅</li>
        <li onClick={onClickDerecha}>➡</li>
      </ul>
      <div className="info">
        Casilla: {posicionActual.x}, {posicionActual.y}
      </div>
      <div className="tablero-contenedor">
        <ul className="tablero">
          {
            casillas.map((casilla, i) => (
              <li key={`${casilla.x}-${casilla.y}`} onClick={() => onClickCasilla(casilla)}></li>
            ))
          }
        </ul>
        <div className="ficha" style={{
          top: (posicionActual.y * 100) - 50,
          left: (posicionActual.x * 100) - 50
        }}>🍕</div>
      </div>
    </>
  );
}

export default App;
