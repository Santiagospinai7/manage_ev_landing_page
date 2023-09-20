import Link from 'next/link';

import { Background } from '../background/Background';
import { Button } from '../button/Button';
import { HeroOneButton } from '../hero/HeroOneButton';
import { Section } from '../layout/Section';
import { NavbarTwoColumns } from '../navigation/NavbarTwoColumns';
import { Logo } from './Logo';

const Hero = () => (
  <Background color="bg-gray-100">
    <Section yPadding="py-6">
      <NavbarTwoColumns logo={<Logo xl />}>
        <li>
          <Link href="/">Dashboard</Link>
        </li>
      </NavbarTwoColumns>
    </Section>

    <Section yPadding="pt-20 pb-32">
      <HeroOneButton
        title={
          <>
            {'La aplicación que necesitas para tu\n'}
            <span className="text-primary-500">Carro electrico</span>
          </>
        }
        description="Tu viaje inteligente hacia lo sostenible."
        button={
          <Link href="#">
            <Button xl>Dashboard</Button>
          </Link>
        }
      />
    </Section>
  </Background>
);

export { Hero };
