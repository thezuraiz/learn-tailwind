import ServiceCard from "../components/ServiceCard";
import { services } from "../constants";
const Services = () => {
  return (
    <section
      id="about-us"
      className="flex justify-center flex-wrap gap-9 max-container"
    >
      {services.map((e) => (
        <ServiceCard key={e.label} {...e} />
      ))}
    </section>
  );
};

export default Services;
