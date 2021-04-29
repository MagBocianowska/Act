import Layout from '../src/components/Layout';
import Banner from '../src/components/Banner';
import { ImgTextLeft, ImgTextRight } from '../src/components/ImgText';
const Kadra = () => {
  return (
    <Layout>
      <Banner background={'/header/Act3.jpg'} text='Kadra' />
      <div className='cc'>
        <ImgTextRight
          name='Magdalena Bocianowska'
          text='Dyrektor ACT Studio Aktorskie, aktorka po Akademii Teatralnej w Warszawie Wydział Sztuki Lalkarskiej w Białymstoku, London International School of Performing Art i podyplomowej Logopedii Ogólnej i Klinicznej na Uniwersytecie Wrocławskim. Aktualnie współpracuje z Teatrem Żelaznym w Katowicach.'
          image='/kadra/Magdalena.png'
          alt='Magdalena Bocianowska'
        />
        <ImgTextRight
          name='Ewa Serwa'
          text='Absolwentka Państwowej Wyższej Szkoły Teatralnej w Krakowie. Występowała m.in.: w Teatrze na Woli, Komedia, Narodowym, Polskim i Scenie Na Piętrze w Poznaniu. Znana z serialu Barwy Szczęścia i pracy dubbingowej.'
          image='/kadra/Ewa_Serwa.png'
          alt='Ewa Serwa'
        />

        <ImgTextRight
          name='Alicja Pietruszka'
          text='Absolwentka Szkoły Muzycznej I stopnia im. Krzysztofa Komedy w Lubaczowie w klasie fortepianu, Escuela Superior de Arte Dramático de Castilla y León w Valladolid i Wydziału Lalkarskiego w Białymstoku Akademii Teatralnej w Warszawie. Aktualnie współpracuje z Teatrem Kameralnym w Bydgoszczy.'
          image='/kadra/Alicja_Pietruszka.png'
          alt='Alicja Pietruszka'
        />
        <ImgTextRight
          name='Aleksandra Jachymek'
          text='Absolwentka Warszawskiej Szkoły Filmowej. Ukończyła Kurs Choreografii
          Eksperymentalnej i tańczy od 5 r.ż. balet, Jazz, Taniec Nowoczesny, Hip -hop. Współpracuje z Teatrem Fluid.'
          image='/kadra/Ola_J.png'
          alt='Aleksandra Jachymek'
        />
        <ImgTextRight
          name='Paulina Sacharczuk'
          text='Aktorka głosowa i musicalowa. Absolwentka Akademii Teatralnej im. Aleksandra Zelwerowicza w Warszawie Wydział Sztuki Lalkarskiej Białymstoku i Logopedii Ogólnej i Klinicznej na Uniwersytecie Warszawskim. Aktualnie współpracuje z Chórem Kobiet.'
          image='/kadra/Paulina_Sacharczuk.png'
          alt='Paulina Sacharczuk'
        />
        <ImgTextRight
          name='Dominika Sell Kukułka'
          text='Absolwentka Szkoły Aktorskiej Haliny i Jana Machulskich i Akademii Pedagogiki Specjalnej im. Marii Grzegorzewskiej w Warszawie. Współpracuje z Instytutem Teatralnym im. Z. Raszewskiego w Warszawie i Kujawsko-Pomorskim Impresaryjnym Teatrem Muzycznym. Od dziecka zajmuje się aktorstwem dubbingowym. Zdała egzamin eksternistyczny w ZASP w 2015.'
          image='/kadra/Dominika_K.png'
          alt='Dominika Sell Kukułka'
        />
        <ImgTextRight
          name='Agnieszka Baranowska'
          text='Absolwentka Wydziału Reżyserii Akademii Teatralnej im. A. Zelwerowicza w Warszawie i aktorskiego Wydział Sztuki Lalkarskiej w Białymstoku. Reżyserowała m.in.: w Białostockim Teatrze Lalek, Teatrze im. A. Mickiewicza w Częstochowie, Teatrze w Tarnowie i Imce w Warszawie.'
          image='/kadra/Agnieszka_Baranowska.jpg'
          alt='Agnieszka Baranowska'
        />
        <ImgTextRight
          name='Sławomir Banaś'
          text='Absolwent Państwowego Studium Wokalno-Aktorskiego im. Danuty Baduszkowej w Gdyni. Debiutował w spektaklu “Mayday 2” w reż. Stefana Szaciłowskiego. Współpracuje z Teatrem Polskim we Wrocławiu, Bałtyckim Teatrem Dramatycznym, Teatrem A. Sewruka w Elblągu oraz Chorzowskim Teatrem Rozrywki.'
          image='/kadra/Slawomir_Banas.png'
          alt='Sławomir Banaś'
        />
        <ImgTextRight
          name='Maciej Łagodziński'
          text='Absolwent Wydziału Lalkarskiego w Białymstoku Akademii Teatralnej w Warszawie. Współpracował z Teatrem w Radomiu, Znany z serii spotów reklamowych sieci komórkowej Play.'
          image='/kadra/Maciek.png'
          alt='Maciej Łagodziński'
        />
        <ImgTextRight
          name='Mirosław Siedler'
          text='Dyrektor Teatru im. A. Sewruka w Elblągu, absolwent Wydziału Aktorskiego Państwowej Wyższej Szkoły Filmowej, Telewizyjnej i Teatralnej w Łodzi. Współpracował z Teatrem Nowym, Teatrem Powszechnym i Teatrem S. Jaracza w Łodzi.'
          image='/kadra/siedler.png'
          alt='Mirosław Siedler'
        />
        <ImgTextRight
          name='Sebastian Chondrokostas'
          text='Absolwent Wydziału Filozofii Uniwersytetu Łódzkiego oraz Reżyserii Dramatu Akademii Teatralnej w Warszawie. Reżyser spektakli w Teatrze telewizji, seriali w TVP i Polsat.  Realizował przedstawienia w Teatrze Ateneum, Kamienica, Syrena, Studio, Miejskim w Lesznie i w Teatrze Narodowym w Warszawie.'
          image='/kadra/Sebastian_Chondrokostas.png'
          alt='Sebastian Chondrokostas'
        />
      </div>
      <style jsx>{`
        .cc {
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          margin: 50px auto;
        }
      `}</style>
    </Layout>
  );
};

export default Kadra;
