import Layout from '../../src/components/Layout';
import Banner from '../../src/components/Banner';
import List from '../../src/components/List';
import Button from 'react-bootstrap/Button';
import Link from 'next/link';

const Years = () => {
  return (
    <Layout>
      <Banner background={'../header/Act5.jpg'} text='2021/2022' />
      <h4>
        <span>ZASADY REKRUTACJI</span> 2021-2022
      </h4>
      <List>
        <li>
          Kandydaci ACT Studio Aktorskiego muszą mieć ukończone 17 r.ż. Nie mamy
          górnej granicy wiekowej słuchaczy.
        </li>
        <li>
          Proces rekrutacji jest dwuetapowy. Pierwszy etap dotyczy wysłania
          skanu dokumentów, uiszczenia opłaty rekrutacyjnej w wysokości 120 zł
          <sup>1</sup>, nagrania wizytówki<sup>2</sup> i przesłania na adres
          biuro@actstudioaktorskie.pl. Drugi etap to rozmowa kwalifikacyjna za
          pośrednictwem platformy ZOOM, która będzie wyznaczona w ciągu trzech
          dni od dostarczenia niezbędnych dokumentów online. Decyzja o przyjęciu
          do ACT Studio Aktorskiego nastąpi następnego dnia roboczego.
        </li>
        <li>
          Dokumenty w wersji papierowej potrzebne będą na pierwszych zajęciach
          we wrześniu.
        </li>
      </List>
      <h4>
        <span>OPŁATY:</span>
      </h4>
      <List>
        <li>
          Rok edukacji w ACT kosztuje 3 900 złotych, czyli 390 złotych
          miesięcznie płatne do 10 każdego miesiąca.
        </li>
        <li>Opłata rekrutacyjna wynosi 120 złotych.</li>
        <li>
          Online-Spotkania one to one ustalane są indywidualnie z wykładowcą.
          Wystarczy napisać do nas z zapytaniem o możliwość konsultacji z
          konkretną osobą (100-170/60min). Więcej info w zakładce ONLINE.
        </li>
      </List>
      <h4>POTRZEBNE DOKUMENTY:</h4>
      <div className='container'>
        <Button variant='light' size='lg'>
          <Link href='../PODANIE_O_PRZYJĘCIE_DO_ACT_SA.pdf'>
            <a>Podanie o przyjęcie</a>
          </Link>
        </Button>
        <Button variant='dark' size='lg'>
          <Link href='../RegulaminACT.pdf'>
            <a className='white'>Regulamin</a>
          </Link>
        </Button>
        <Button variant='light' size='lg'>
          <Link href='../Umowa_ACT.pdf'>
            <a>Umowa</a>
          </Link>
        </Button>
      </div>
      <p>
        KSERO ŚWIADECTWA UKOŃCZENIA SZKOŁY ŚREDNIEJ/ZAŚWIADCZENIE O PRZEBIEGU
        EDUKACJI W SZKOLE ŚREDNIEJ
      </p>
      <p>DOWÓD WPŁATY REKRUTACYJNEJ </p>
      <p>1 ZDJĘCIE FORMATU DOWODU OSOBISTEGO</p>
      <p className='description'>
        <sup>1</sup>Opłata rekrutacyjna jest bezzwrotna gwarantująca miejsce w
        ACT Studio Aktorskie
      </p>
      <p className='description'>
        <sup>2</sup>1-2 min info o sobie i dlaczego chcesz dołączyć do NAS na
        adres biuro@actstudioaktorskie.pl
      </p>
      {/* <Button variant='dark' size='lg'>
          <Link href='../ZASADY_REKRUTACJI_2021.pdf'>
            <a className='white'>Zasady Rekrutacji</a>
          </Link>
        </Button> */}
      <style jsx>{`
        p {
          margin: 50px 0;
        }
        h4 {
          margin-top: 50px;
          font-style: italic;
        }
        span {
          font-weight: bold;
          font-style: normal;
        }
        li {
          margin: 2px 0;
        }
        .container {
          margin-top: 100px;
          max-width: 450px;
          min-width: 200px;
          display: flex;
          flex-direction: column;
        }
        .container * {
          margin: 10px 0;
        }
        a {
          color: #222;
          text-decoration: none;
        }
        .white {
          color: #fff;
        }
        .description {
          font-size: 0.8rem;
        }
      `}</style>
    </Layout>
  );
};

export default Years;
