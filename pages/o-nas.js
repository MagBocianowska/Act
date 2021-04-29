import Layout from '../src/components/Layout';
import Banner from '../src/components/Banner';

const About = () => {
  return (
    <Layout>
      <Banner background={'/header/Act2.jpg'} text='O nas' />
      <div className='wrapper'>
        <p>
          <span>ACT Studio Aktorskie</span> to niezwykłe miejsce na mapie
          Warszawy, założone przez Magdalenę Bocianowską, aktorkę, logopedkę i
          twórczynię Fundacji Teatr Fluid. ACT został przekształcony w 2020 roku
          ze Szkoły Przygotowania Aktorskiego. ACT to autorska metoda pracy
          czerpiąca z technik rosyjskich prekursorów, ich amerykańskich i
          francuskich kontynuatorów i polskich reformatorów, udoskonalona
          poprzez świeże spojrzenie współczesnej ideologii aktorskiej. To
          wspólny proces budowany w oparciu o zaufanie, prawdę, naturalność,
          indywidualne podejście do każdego uczestnika, które pozwala
          przekraczać granice, pracować na sobą i rolą na scenie i przed
          obiektywem kamery. ACT to także tworzenie siatki kontaktów poprzez
          spotkania z ludźmi kultury, wykładowcami- czynnymi aktorami,
          logopedami, reżyserami i muzykami. To miejsce tworzymy wspólnie!
        </p>
      </div>
      <style jsx>{`
        .container {
          min-height: 600px;
        }
        p {
          margin: 50px 0;
        }
        span {
          font-weight: bold;
          font-style: normal;
        }
      `}</style>
    </Layout>
  );
};

export default About;
