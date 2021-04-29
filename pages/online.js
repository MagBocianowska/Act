import Layout from '../src/components/Layout';
import Banner from '../src/components/Banner';
import List from '../src/components/List';

const Online = () => {
  return (
    <Layout>
      <Banner background={'/header/Act6.jpg'} text='Online' />

      <p>
        Podczas spotkania ONE TO ONE wybrany przez Ciebie wykładowca zaproponuje
        indywidualnie dobrany system nauczania:
      </p>
      <List>
        <li>
          Pomoże Ci w doborze tekstów na egzaminy wstępne i poświęci sto procent
          uwagi byś zdobył/-a wymarzony indeks.
        </li>
        <li>
          Pomoże Ci osiągnąć lepsze rezultaty przy wystąpieniach publicznych.
        </li>
        <li>Pomoże Ci zniwelować wady wymowy.</li>
        <li>Pomoże Ci wyszlifować Twój talent wokalny.</li>
        <li>Pomoże Ci w pracy z kamerą i mikrofonem.</li>
      </List>
      <p>
        Napisz do nas mail zatytułowany ONE TO ONE i opisz swoje potrzeby
        artystyczne i wybierz wykładowcę, a my dołożymy wszelkich starań by
        odpowiednio zmotywować Cię do pracy i stworzyć najlepsze warunki byś
        zdobył to o czym marzysz!
      </p>
      <h4>
        <span>ACT</span> - sprawdź NAS!
      </h4>

      <style jsx>{`
        p {
          margin: 50px 0;
        }
        h4 {
          margin-top: 30px;
          font-style: italic;
        }
        span {
          font-weight: bold;
          font-style: normal;
        }
        li {
          margin: 2px 0;
        }
      `}</style>
    </Layout>
  );
};

export default Online;
