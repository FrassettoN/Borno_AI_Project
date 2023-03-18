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
            <p>Breve descrizione</p>
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
            <p>Tre parole chiave</p>
            <ul>
              <li>Tre</li>
              <li>Parole</li>
              <li>Chiave</li>
            </ul>
          </div>
        </NavLink>
        <hr />

        <NavLink to='collabora'>
          <div>
            <h3>Collabora e Sostienici</h3>
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
