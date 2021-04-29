import { LayoutFooter } from '../src/components/Layout';
import Banner from '../src/components/Banner';
import Contact from '../src/components/Contact';

const Kontakt = () => {
  return (
    <LayoutFooter>
      <Banner background={'/header/Act4.jpg'} text='Kontakt' />
      <Contact />
    </LayoutFooter>
  );
};

export default Kontakt;
