import Layout from '../../src/components/Layout';
import Banner from '../../src/components/Banner';
import List from '../../src/components/List';

const ProgramAct = () => {
  return (
    <Layout>
      <Banner background={'../header/Act7.jpg'} text='IDEA ACT' />

      <p>
        Program ACT oferuje jednoroczny kurs kształcenia aktorskiego dla
        kandydatów do Państwowych Szkół Teatralnych, pasjonatów sztuki, a także
        osób, które chcą zdobywać nowe kompetencje. Profesjonalna i praktykująca
        kadra w nowatorski sposób pozwoli Ci z innej perspektywy spojrzeć na
        artystyczny świat teatru, filmu i reklamy. Dzięki 252 godzinom pracy
        weekendowej stworzysz z nami DEMO aktorskie, lektorskie i portfolio.
        Będziesz miał okazję poznać nieznane wielu techniki relaksacji, tańca,
        pracy z głosem, mowy ciała, improwizacji, zadań aktorskich
        Stanisławskiego, Czechowa i ich amerykańskich kontynuatorów. Poznasz
        trening fizyczny z elementami pantomimy, dotkniesz świata francuskiego
        prekursora współczesnego teatru i laboratorium pracy nad rolą. Ten
        skondensowany roczny program nauczania upiększony o spotkania
        warsztatowe z Mistrzami pozwolą jeszcze głębiej poznać siebie,
        wypracować swój własny styl i zdobywać nowe zlecenia!
      </p>
      <h4>ROZKŁAD ZAJĘĆ ACT:</h4>
      <List>
        <li>elementarne zadania aktorskie (20 godzin),</li>
        <li>sceny współczesne (40 godzin),</li>
        <li>interpretacja wiersza/ prozy (35 godzin),</li>
        <li>interpretacja piosenki (10 godzin),</li>
        <li>konsultacje logopedyczne (12 godziny),</li>
        <li>emisja głosu (20 godzin),</li>
        <li>dykcja (14 godzin),</li>
        <li>rytmika\kształcenie słuchu (8 godzin),</li>
        <li>elementy tańca (8 godzin),</li>
        <li>trening fizyczny z elementami pantomimy (6 godzin),</li>
        <li>platforma (8 godziny),</li>
        <li>komunikacja niewerbalna i mowa ciała (3 godzin),</li>
        <li>praca z mikrofonem (8 godzin),</li>
        <li>tworzenie showreel/portfolio (10 godzin),</li>
        <li>improwizacja (8 godzin),</li>
        <li>casting/praca z kamerą, m.in. tworzenie wizytówki (4 godzin),</li>
        <li>praca z reżyserem (15 godzin),</li>
        <li>spotkania z mistrzami (8 godziny),</li>
        <li>
          trening antystresowy i radzenia sobie w sytuacjach stresowych (5
          godzin),
        </li>
        <li>
          elementy zarządzania i marketingu (m.in. tworzenie projektów, CV) (4
          godzin),
        </li>
        <li>Sesja zdjęciowa- jednorazowe spotkanie (6 godzin)</li>
      </List>
      <style jsx>{`
        p {
          margin-top: 50px;
        }
        h4 {
          margin: 30px;
        }
        li {
          margin: 2px 0;
        }
      `}</style>
    </Layout>
  );
};

export default ProgramAct;
