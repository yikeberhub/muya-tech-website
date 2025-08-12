// src/components/layout/Services.tsx
import ServiceCard from "./ServiceCard";

const servicesData = [
  {
    id: 1,
    title: "Web Development",
    description: "Building responsive and performant websites and applications.",
    icon: "💻",
  },
  {
    id: 2,
    title: "UI/UX Design",
    description: "Crafting intuitive user interfaces and delightful experiences.",
    icon: "🎨",
  },
  {
    id: 3,
    title: "API Integration",
    description: "Connecting apps with reliable and scalable APIs.",
    icon: "🔗",
  },
];

export default function Services() {
  return (
    <section
      id="services"
      className="py-20 bg-white text-gray-800 dark:bg-gray-900 dark:text-gray-100 transition-colors duration-300"
    >
      <div className="container mx-auto text-center max-w-5xl px-4">
        <h2 className="text-4xl font-bold mb-4">Services</h2>
        <p className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto mb-12">
          We provide end-to-end software development services to meet your
          business goals. From concept to deployment, we ensure quality,
          scalability, and user-friendly solutions.
        </p>
        <div className="flex flex-col md:flex-row md:space-x-8 space-y-8 md:space-y-0">
          {servicesData.map((service) => (
            <ServiceCard key={service.id} {...service} />
          ))}
        </div>
      </div>
    </section>
  );
}
