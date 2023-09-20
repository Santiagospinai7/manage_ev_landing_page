import { VerticalFeatureRow } from '../feature/VerticalFeatureRow';
import { Section } from '../layout/Section';

const VerticalFeatures = () => (
  <Section
    title="Manage Ev"
    description="Smart grid es una plataforma web ideal para el cálculo de modelos predictivos, para aumentar el cuidado de tu vehículo, la bacteria y a su vez permite el registro y control de vehículos eléctricos en el valle de aburra, implementando algoritmos para adoptar los lugares de recarga y propuestas de recorridos más convenientes. enfocándonos en la ansiedad de carga que sufren los usuarios."
  >
    <VerticalFeatureRow
      title="Ansiedad de carga"
      description="La plataforma ManageEV ataca el problema de la ansiedad de carga, garantizando que todos sus usuarios puedan saber de antemano, si con su porcentaje de batería pueden llegar a su lugar de destino."
      image="https://previews.123rf.com/images/creativepriyanka/creativepriyanka1909/creativepriyanka190900776/130485590-icono-de-trastorno-de-estr%C3%A9s-postraum%C3%A1tico-trastorno-por-estr%C3%A9s-postraum%C3%A1tico.jpg"
      imageAlt="First feature alt text"
    />
    <VerticalFeatureRow
      title="Optimización de la carga"
      description="ManageEV te ayuda a que optimices la carga de la batería de tu vehículo eléctrico, recomendándote la mejor ruta que represente el menor consumo de batería, priorizando el tiempo estimado y la distancia."
      image="https://i.pinimg.com/564x/06/ee/f0/06eef07b5babf927d5c975741088cebf.jpg"
      imageAlt="Second feature alt text"
      reverse
    />
    <VerticalFeatureRow
      title="Analitica y encontrar mejor ruta"
      description="ManageEV te proporciona un dashboard intuitivo, dónde encontraras toda la información importante de tu vehículo eléctrico y estadísticas que te permitirá tomar decisiones basadas en datos. Al igual que vas a poder encontrar la estación de carga más cercana para que nunca te tengas que preocupar por la carga de tu vehículo eléctrico."
      image="https://i.pinimg.com/564x/cb/ee/e9/cbeee95d0ef7dce6c6e6acdc673440ea.jpg"
      imageAlt="Third feature alt text"
    />
  </Section>
);

export { VerticalFeatures };
