"use client";

import { useEffect, useState } from "react";
import ServicesTable from "../../../components/specific/Dashboard/services/ServicesTable";
import ServiceForm from "../../../components/specific/Dashboard/services/ServiceForm";
import { FaPlus } from "react-icons/fa";
import { useAppSelector, useAppDispatch } from "@/redux/hook";
import {
  addService,
  editService,
  removeService,

  fetchServices,
} from "../../../redux/slices/serviceSlice";
import { Service } from "@/types/serviceType";
import LoadingSpinner from "@/components/shared/LoadingSpinner";

export default function ServicesPage() {
  const theme = useAppSelector((state) => state.theme.mode);
  const serviceState = useAppSelector((state) => state.services);
  const services = serviceState.services;
  const dispatch = useAppDispatch();

  const [modalOpen, setModalOpen] = useState(false);
  const [editingService, setEditingService] = useState<Service | null>(null);
  const [initialLoading, setInitialLoading] = useState(true);


  useEffect(() => {
    const fetchData = async () => {
      setInitialLoading(true);
      await dispatch(fetchServices());
      setInitialLoading(false);
    };
    fetchData();
  }, [dispatch]);

  const handleAddService = () => {
    setEditingService(null);
    setModalOpen(true);
  };
  
  const handleEditService = (service: Service) => {
    setEditingService(service);
    setModalOpen(true);
  };
  

  const handleDeleteService = (id: number) => {
    if (confirm("Are you sure you want to delete this service?")) {
      dispatch(removeService(id));
    }
  };

  const handleSaveService = (data: FormData, id?: number) => {
    if (id) {
      dispatch(editService({ id, payload: data }));
    } else {
      dispatch(addService(data));
    }
    dispatch(fetchServices());
    setModalOpen(false);
  };

  if (initialLoading) {
    return (
      <div
        className={`flex items-center justify-center min-h-screen ${
          theme === "dark" ? "bg-gray-900 text-white" : "bg-gray-50 text-gray-900"
        }`}
      >
        <LoadingSpinner size={50} />
      </div>
    );
  }

  return (
    <div
      className={`relative min-h-screen transition-colors duration-300 p-4 ${
        theme === "dark" ? "bg-gray-900 text-white" : "bg-gray-50 text-gray-900"
      }`}
    >
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-2xl font-bold">Services</h2>
        <button
          onClick={handleAddService}
          className="flex items-center gap-2 bg-purple-600 text-white px-3 py-1 rounded hover:bg-purple-700"
        >
          <FaPlus />
          Add Service
        </button>
      </div>

      {serviceState.loading && services.length > 0 ? (
        <div className="flex justify-center items-center h-40">
          <LoadingSpinner size={40} />
        </div>
      ) : services?.length > 0 ? (
        <ServicesTable
          services={services}
          onDelete={handleDeleteService}
          onEdit={handleEditService}
        />
      ) : (
        <div className="flex justify-center items-center h-[40vh] text-gray-500">
          No services found. Add one to get started!
        </div>
      )}

      {modalOpen && (
        <ServiceForm
        service={editingService}
        onClose={() => setModalOpen(false)}
        onSave={handleSaveService}
      />
      
      )}
    </div>
  );
}
