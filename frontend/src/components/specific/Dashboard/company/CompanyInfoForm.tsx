"use client";

import { useState, useEffect } from "react";

interface CompanyInfoFormProps {
  company: any | null;
  onClose: () => void;
  onSave: (formData: FormData) => void;
}

export default function CompanyInfoForm({ company, onClose, onSave }: CompanyInfoFormProps) {
  const [companyName, setCompanyName] = useState(company?.company_name || "");
  const [email, setEmail] = useState(company?.email || "");
  const [phone, setPhone] = useState(company?.phone || "");
  const [address, setAddress] = useState(company?.address || "");
  const [city, setCity] = useState(company?.city || "");
  const [state, setState] = useState(company?.state || "");
  const [country, setCountry] = useState(company?.country || "");
  const [postalCode, setPostalCode] = useState(company?.postal_code || "");
  const [mapEmbedUrl, setMapEmbedUrl] = useState(company?.map_embed_url || "");
  const [logoFile, setLogoFile] = useState<File | null>(null);

  useEffect(() => {
    setCompanyName(company?.company_name || "");
    setEmail(company?.email || "");
    setPhone(company?.phone || "");
    setAddress(company?.address || "");
    setCity(company?.city || "");
    setState(company?.state || "");
    setCountry(company?.country || "");
    setPostalCode(company?.postal_code || "");
    setMapEmbedUrl(company?.map_embed_url || "");
    setLogoFile(null);
  }, [company]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("company_name", companyName);
    formData.append("email", email);
    formData.append("phone", phone);
    formData.append("address", address);
    formData.append("city", city);
    formData.append("state", state);
    formData.append("country", country);
    formData.append("postal_code", postalCode);
    formData.append("map_embed_url", mapEmbedUrl);
    if (logoFile) formData.append("logo_url", logoFile);

    onSave(formData);
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <form
        onSubmit={handleSubmit}
        className="bg-white dark:bg-gray-800 p-6 rounded-lg w-96 transition-colors duration-300 overflow-y-auto max-h-[90vh]"
      >
        <h3 className="text-xl font-semibold mb-4 text-gray-800 dark:text-gray-100">
          {company ? "Edit Company Info" : "Add Company Info"}
        </h3>

        <input
          type="text"
          placeholder="Company Name"
          className="w-full mb-3 px-4 py-2 border rounded dark:bg-gray-700 dark:text-gray-100"
          value={companyName}
          onChange={(e) => setCompanyName(e.target.value)}
          required
        />
        <input
          type="email"
          placeholder="Email"
          className="w-full mb-3 px-4 py-2 border rounded dark:bg-gray-700 dark:text-gray-100"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          type="text"
          placeholder="Phone"
          className="w-full mb-3 px-4 py-2 border rounded dark:bg-gray-700 dark:text-gray-100"
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
        />
        <textarea
          placeholder="Address"
          className="w-full mb-3 px-4 py-2 border rounded dark:bg-gray-700 dark:text-gray-100"
          value={address}
          onChange={(e) => setAddress(e.target.value)}
        />
        <input
          type="text"
          placeholder="City"
          className="w-full mb-3 px-4 py-2 border rounded dark:bg-gray-700 dark:text-gray-100"
          value={city}
          onChange={(e) => setCity(e.target.value)}
        />
        <input
          type="text"
          placeholder="State"
          className="w-full mb-3 px-4 py-2 border rounded dark:bg-gray-700 dark:text-gray-100"
          value={state}
          onChange={(e) => setState(e.target.value)}
        />
        <input
          type="text"
          placeholder="Country"
          className="w-full mb-3 px-4 py-2 border rounded dark:bg-gray-700 dark:text-gray-100"
          value={country}
          onChange={(e) => setCountry(e.target.value)}
        />
        <input
          type="text"
          placeholder="Postal Code"
          className="w-full mb-3 px-4 py-2 border rounded dark:bg-gray-700 dark:text-gray-100"
          value={postalCode}
          onChange={(e) => setPostalCode(e.target.value)}
        />
        <input
          type="url"
          placeholder="Map Embed URL"
          className="w-full mb-3 px-4 py-2 border rounded dark:bg-gray-700 dark:text-gray-100"
          value={mapEmbedUrl}
          onChange={(e) => setMapEmbedUrl(e.target.value)}
        />
        <input
          type="file"
          accept="image/*"
          className="w-full mb-3"
          onChange={(e) => e.target.files && setLogoFile(e.target.files[0])}
        />

        <div className="flex justify-end gap-2">
          <button
            type="button"
            className="px-4 py-2 rounded bg-gray-300 dark:bg-gray-600"
            onClick={onClose}
          >
            Cancel
          </button>
          <button
            type="submit"
            className="px-4 py-2 rounded bg-purple-600 text-white hover:bg-purple-700"
          >
            Save
          </button>
        </div>
      </form>
    </div>
  );
}
