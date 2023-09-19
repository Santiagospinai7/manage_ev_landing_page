import Link from 'next/link';

import { Button } from '../button/Button';
import { CTABanner } from '../cta/CTABanner';
import { Section } from '../layout/Section';

const Banner = () => (
  <Section>
    <CTABanner
      title="Ingresa a la App y comienza a disfrutar de los beneficios."
      subtitle="Empieza gratis."
      button={
        <Link href="#">
          <Button>Get Started</Button>
        </Link>
      }
    />
  </Section>
);

export { Banner };
