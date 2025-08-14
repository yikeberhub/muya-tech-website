"use client";

import { useState } from "react";
import ServicesTable from "../../../components/specific/Dashboard/services/ServicesTable";
import ServiceForm from "../../../components/specific/Dashboard/services/ServiceForm";
import { FaPlus } from "react-icons/fa";
import { useAppSelector } from "@/redux/hook";

export default function ServicesPage() {
  const theme = useAppSelector((state) => state.theme.mode);

  const [services, setServices] = useState([
    { id: 1, name: "Web Development", price: "$500" },
    { id: 2, name: "Graphic Design", price: "$300" },
  ]);

  const [modalOpen, setModalOpen] = useState(false);
  const [editService, setEditService] = useState<any>(null);

  const handleAddService = () => {
    setEditService(null);
    setModalOpen(true);
  };

  const handleEditService = (service: any) => {
    setEditService(service);
    setModalOpen(true);
  };

  return (
    <div className="transition-colors duration-300">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-2xl font-bold text-gray-800 dark:text-gray-100">Services</h2>
        <button
          onClick={handleAddService}
          className="flex items-center gap-2 bg-purple-600 text-white px-3 py-1 rounded hover:bg-purple-700"
        >
          <FaPlus />
          Add Service
        </button>
      </div>

      <ServicesTable services={services} onEdit={handleEditService} />

      {modalOpen && (
        <ServiceForm
          service={editService}
          onClose={() => setModalOpen(false)}
          onSave={(newService: any) => {
            if (editService) {
              setServices(services.map(s => (s.id === newService.id ? newService : s)));
            } else {
              setServices([...services, { ...newService, id: Date.now() }]);
            }
            setModalOpen(false);
          }}
        />
      )}
    </div>
  );
}
