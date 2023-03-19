import React from 'react';
import { NavLink } from 'react-router-dom';
import Logo from '../images/logo_astra.png';

function Home() {
  return (
    <main className={'home'}>
      <img src={Logo} alt='logo' />
      <div className={'firstPart'}>
        <NavLink to='chi_siamo'>
          <div>
            <h3>Chi siamo:</h3>
            <p>
              Borno: la lista di giovani candidati pronti a plasmare il futuro
              della città. Energia, conoscenza e collaborazione per affrontare
              le sfide e creare un futuro migliore. Ascolto e coinvolgimento
              comunitario al centro dell'impegno dei candidati. Un'opportunità
              per tutti i residenti di Borno di fare la differenza insieme
            </p>
          </div>
        </NavLink>

        <hr />
        <NavLink to='valori'>
          <div>
            <h3>I nostri valori:</h3>
            <ol>
              <li>Nazionalismo</li>
              <li>Valori tradizionali</li>
              <li>Neoliberismo</li>
              <li>Giustizia sociale</li>
              <li>Sovranità</li>
            </ol>
          </div>
        </NavLink>
        <hr />
      </div>

      <div className={'secondPart'}>
        <NavLink to='programma'>
          <div>
            <h3>Il nostro programma:</h3>
            <ul>
              <li>Turismo sostenibile</li>
              <li>Qualità</li>
              <li>Inclusione</li>
            </ul>
            <p>
              Programma politico per rilanciare il territorio attraverso lo
              sviluppo delle attività turistiche, la valorizzazione del
              patrimonio culturale e naturale, la creazione di nuove opportunità
              lavorative e di servizi adeguati per tutte le fasce d'età.
            </p>
          </div>
        </NavLink>
        <hr />

        <NavLink to='collabora'>
          <div>
            <h3>Collabora e Sostienici</h3>
            <p>
              Insieme possiamo creare un futuro migliore per la nostra comunità:
              unisciti a noi per costruire un programma politico condiviso per
              le imminenti elezioni!
            </p>
            <a
              className={'button'}
              href='https://www.repubblica.it/'
              target={'_blank'}
              rel='noreferrer'>
              Apri il questionario
            </a>
          </div>
        </NavLink>
      </div>
    </main>
  );
}

export default Home;
