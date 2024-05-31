import React, { useState } from "react";
import HealthProviderTable from "./components/HealthProviderTable";
import ModalViewer from "./components/Modal";

const App = () => {
  const [providers, setProviders] = useState([
    {
      name: "Dr. B. Roy Wilson Armstrong",
      mode: "Scheduled",
      consultationType: "First Time Consultation",
      fees: "500/5000",
      edit: "Edit",
      days: "Mon Tue Wed Thu Fri Sat",
    },
    {
      name: "Dr. Devendra Agraharam",
      mode: "Walk-in",
      consultationType: "Follow-up Consultation",
      fees: "500/5000",
      edit: "",
      days: "Mon Tue Wed Thu Fri Sat",
    },
    {
      name: "Dr. J. Deenadayalan",
      mode: "Teleconsultation",
      consultationType: "Emergency Consultation",
      fees: "500/5000",
      edit: "",
      days: "Mon Tue Wed Thu Fri Sat",
    },
    {
      name: "Dr. (Prot) Rajasekaran",
      mode: "Scheduled",
      consultationType: "Routine Check-up",
      fees: "500/5000",
      edit: "9",
      days: "Mon Tue Wed Thu Fri Sat",
    },
    {
      name: "Dr. (Prof) Rajasekaran",
      mode: "Scheduled",
      consultationType: "Regular Consultation",
      fees: "500/5000",
      edit: "9",
      days: "Mon Tue Wed Thu Fri Sat",
    },{
      name: "Dr. B. Roy Wilson Armstrong",
      mode: "Scheduled",
      consultationType: "First Time Consultation",
      fees: "500/5000",
      edit: "Edit",
      days: "Mon Tue Wed Thu Fri Sat",
    },
    {
      name: "Dr. Devendra Agraharam",
      mode: "Walk-in",
      consultationType: "Follow-up Consultation",
      fees: "500/5000",
      edit: "",
      days: "Mon Tue Wed Thu Fri Sat",
    },
    {
      name: "Dr. J. Deenadayalan",
      mode: "Teleconsultation",
      consultationType: "Emergency Consultation",
      fees: "500/5000",
      edit: "",
      days: "Mon Tue Wed Thu Fri Sat",
    },
    {
      name: "Dr. (Prot) Rajasekaran",
      mode: "Scheduled",
      consultationType: "Routine Check-up",
      fees: "500/5000",
      edit: "9",
      days: "Mon Tue Wed Thu Fri Sat",
    },
    {
      name: "Dr. (Prof) Rajasekaran",
      mode: "Scheduled",
      consultationType: "Regular Consultation",
      fees: "500/5000",
      edit: "9",
      days: "Mon Tue Wed Thu Fri Sat",
    },
  ]);

  const [showEditModal, setShowEditModal] = useState(false);
  const [selectedProvider, setSelectedProvider] = useState(null);

  const handleEditClick = (provider) => {
    setSelectedProvider(provider);
    setShowEditModal(true);
  };

  const handleModalClose = () => {
    setShowEditModal(false);
  };

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setSelectedProvider((prevProvider) => ({
      ...prevProvider,
      [name]: value,
    }));
  };

  const handleSaveChanges = () => {
    setProviders((prevProviders) =>
      prevProviders.map((provider) =>
        provider.name === selectedProvider.name ? selectedProvider : provider
      )
    );
    setShowEditModal(false);
  };

  return (
    <div>
      <HealthProviderTable
        providers={providers}
        setProviders={setProviders}
        handleEditClick={handleEditClick}
      />
      <ModalViewer
        showEditModal={showEditModal}
        handleModalClose={handleModalClose}
        selectedProvider={selectedProvider}
        handleInputChange={handleInputChange}
        handleSaveChanges={handleSaveChanges}
      />
    </div>
  );
};

export default App;
