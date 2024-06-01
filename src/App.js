import React, { useState } from "react";
import HealthProviderTable from "./components/HealthProviderTable";
import ModalViewer from "./components/Modal";

const App = () => {
  const [providers, setProviders] = useState([
    {
      consultationId: "1",
      name: "Dr. B. Roy Wilson Armstrong",
      mode: "Scheduled",
      consultationType: "First Time Consultation",
      fees: {
        domesticFee: "500",
        internationalFee: "5000",
      },
      edit: "Edit",
      days: "Mon, Tue, Wed, Thu, Fri, Sat",
    },
    {
      consultationId: "2",
      name: "Dr. Devendra Agraharam",
      mode: "Walk-in",
      consultationType: "Follow-up Consultation",
      fees: {
        domesticFee: "500",
        internationalFee: "5000",
      },
      edit: "",
      days: "Mon, Tue, Wed, Thu, Fri, Sat",
    },
    {
      consultationId: "3",
      name: "Dr. J. Deenadayalan",
      mode: "Teleconsultation",
      consultationType: "Emergency Consultation",
      fees: {
        domesticFee: "500",
        internationalFee: "5000",
      },
      edit: "",
      days: "Mon, Tue, Wed, Thu, Fri, Sat",
    },
    {
      consultationId: "4",
      name: "Dr. (Prot) Rajasekaran",
      mode: "Scheduled",
      consultationType: "Routine Check-up",
      fees: {
        domesticFee: "500",
        internationalFee: "5000",
      },
      edit: "9",
      days: "Mon, Tue, Wed, Thu, Fri, Sat",
    },
    {
      consultationId: "5",
      name: "Dr. (Prof) Rajasekaran",
      mode: "Scheduled",
      consultationType: "Regular Consultation",
      fees: {
        domesticFee: "500",
        internationalFee: "5000",
      },
      edit: "9",
      days: "Mon, Tue, Wed, Thu, Fri, Sat",
    },
    {
      consultationId: "6",
      name: "Dr. B. Roy Wilson Armstrong",
      mode: "Scheduled",
      consultationType: "First Time Consultation",
      fees: {
        domesticFee: "500",
        internationalFee: "5000",
      },
      edit: "Edit",
      days: "Mon, Tue, Wed, Thu, Fri, Sat",
    },
    {
      consultationId: "7",
      name: "Dr. Devendra Agraharam",
      mode: "Walk-in",
      consultationType: "Follow-up Consultation",
      fees: {
        domesticFee: "500",
        internationalFee: "5000",
      },
      edit: "",
      days: "Mon, Tue, Wed, Thu, Fri, Sat",
    },
    {
      consultationId: "8",
      name: "Dr. J. Deenadayalan",
      mode: "Teleconsultation",
      consultationType: "Emergency Consultation",
      fees: {
        domesticFee: "500",
        internationalFee: "5000",
      },
      edit: "",
      days: "Mon, Tue, Wed, Thu, Fri, Sat",
    },
    {
      consultationId: "9",
      name: "Dr. (Prot) Rajasekaran",
      mode: "Scheduled",
      consultationType: "Routine Check-up",
      fees: {
        domesticFee: "500",
        internationalFee: "5000",
      },
      edit: "9",
      days: "Mon, Tue, Wed, Thu, Fri, Sat",
    },
    {
      consultationId: "10",
      name: "Dr. (Prof) Rajasekaran",
      mode: "Scheduled",
      consultationType: "Regular Consultation",
      fees: {
        domesticFee: "500",
        internationalFee: "5000",
      },
      edit: "9",
      days: "Mon, Tue, Wed, Thu, Fri, Sat",
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
    
    if (name === "domesticFee" || name === "internationalFee") {
      setSelectedProvider((prevProvider) => ({
        ...prevProvider,
        fees: {
          ...prevProvider.fees,
          [name]: value,
        },
      }));
    } else {
      setSelectedProvider((prevProvider) => ({
        ...prevProvider,
        [name]: value,
      }));
    }
  };

  const handleSaveChanges = () => {
    setProviders((prevProviders) =>
      prevProviders.map((provider) =>
        provider.consultationId === selectedProvider.consultationId ? selectedProvider : provider
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
