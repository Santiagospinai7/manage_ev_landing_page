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
          <Link href="https://github.com/Santiagospinai7/manage_ev_front">
            GitHub
          </Link>
        </li>
        <li>
          <Link href="/">Dashboard</Link>
        </li>
      </NavbarTwoColumns>
    </Section>

    <Section yPadding="pt-20 pb-32">
      <HeroOneButton
        title={
          <>
            {'La aplicación moderna para tu\n'}
            <span className="text-primary-500">Carro electrico</span>
          </>
        }
        description="Luchamos contra la ansiedad de carga."
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
