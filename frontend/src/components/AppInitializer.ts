"use client";

import { useEffect } from "react";
import { useAppDispatch } from "@/redux/hooks";
import { fetchContacts } from "@/redux/slices/contactSlice";
import { fetchTestimonials } from "@/redux/slices/testimonialsSlice";
import { fetchServices } from "@/redux/slices/serviceSlice";
import { fetchCompanyInfo } from "@/redux/slices/companyInfoSlice";
import { fetchProducts } from "@/api/productApi";
import { fetchSocialLinks } from "@/redux/slices/socialLinkSlice";
import { fetchProjects } from "@/redux/slices/projectSlice";
import { fetchLoggedInUser } from "@/redux/slices/authSlice";

export default function AppInitializer() {
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(fetchLoggedInUser());
    dispatch(fetchContacts());
    dispatch(fetchTestimonials());
    dispatch(fetchServices());
    dispatch(fetchCompanyInfo());
    dispatch(fetchProducts());
    dispatch(fetchSocialLinks());
    dispatch(fetchProjects());
  }, [dispatch]);

  return null;
}
