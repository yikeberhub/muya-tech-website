"use client";

import { FaCode, FaMobileAlt, FaCloud } from "react-icons/fa";

export default function CoreServices() {
  const services = [
    {
      icon: <FaCode className="text-blue-500" size={28} />,
      title: "Web Application Development",
      desc: "Responsive, scalable, and feature-rich web applications using the latest technologies.",
      list: [
        "Custom web portals and dashboards",
        "E-commerce platforms",
        "Content management systems",
        "Progressive web applications",
      ],
    },
    {
      icon: <FaMobileAlt className="text-green-500" size={28} />,
      title: "Mobile App Development",
      desc: "Native and cross-platform mobile applications for iOS and Android.",
      list: [
        "Native iOS and Android apps",
        "Cross-platform solutions",
        "Mobile commerce applications",
        "AR/VR mobile experiences",
      ],
    },
    {
      icon: <FaCloud className="text-purple-500" size={28} />,
      title: "SaaS Platform Development",
      desc: "Scalable, secure, and reliable Software-as-a-Service (SaaS) solutions.",
      list: [
        "Multi-tenant architecture",
        "Subscription management",
        "Scalable cloud infrastructure",
        "API development and integration",
      ],
    },
  ];

  return (
    <section>
      <h2 className="text-3xl font-semibold mb-8">Core Services</h2>
      <div className="grid md:grid-cols-3 gap-8">
        {services.map((service, i) => (
          <div
            key={i}
            className="bg-white dark:bg-gray-800 rounded-xl shadow-md p-6 space-y-3 hover:shadow-lg transition"
          >
            {service.icon}
            <h3 className="text-xl font-semibold">{service.title}</h3>
            <p className="text-gray-600 dark:text-gray-400">{service.desc}</p>
            <ul className="list-disc list-inside text-gray-600 dark:text-gray-400">
              {service.list.map((item, idx) => (
                <li key={idx}>{item}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
}
