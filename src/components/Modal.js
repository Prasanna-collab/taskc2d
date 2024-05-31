
import React from "react";
import {
  Modal,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Form,
  FormGroup,
  Button,
} from "react-bootstrap";

const ModalViewer = ({
  showEditModal,
  handleModalClose,
  selectedProvider,
  handleInputChange,
  handleSaveChanges,
}) => {
  if (!selectedProvider) {
    return null; 
  }

  const [domesticFee, internationalFee] = selectedProvider.fees.split("/");

  return (
    <div>
      <Modal show={showEditModal} onHide={handleModalClose}>
        <ModalHeader className="text-purple-800 text-[34px]">
          Manage Schedule
        </ModalHeader>
        <ModalBody className="overflow-y-auto">
          <Form className="bg-purple-300 p-4 rounded-md">
            <FormGroup className="mb-3">
              <Form.Label
                htmlFor="consultationType"
                className="form-label text-purple-800 text-xs"
              >
                Appointment Type
              </Form.Label>
              <Form.Control
                type="text"
                className="form-control border border-purple-400"
                id="consultationType"
                name="consultationType"
                value={selectedProvider?.consultationType || ""}
                onChange={handleInputChange}
              />
            </FormGroup>
            <FormGroup className="mb-3">
              <Form.Label
                htmlFor="mode"
                className="form-label text-purple-800 text-xs"
              >
                Mode
              </Form.Label>
              <Form.Control
                type="text"
                className="form-control border border-purple-400"
                id="mode"
                name="mode"
                value={selectedProvider?.mode || ""}
                onChange={handleInputChange}
              />
            </FormGroup>

            <FormGroup className="mb-3">
              <div className="flex">
                <div>
                  <Form.Label
                    htmlFor="domesticFee"
                    className="form-label text-purple-800 text-xs"
                  >
                   Charges- Domestic
                  </Form.Label>
                  <Form.Control
                    type="text"
                    className="form-control border border-purple-400 flex-1 mr-2"
                    id="domesticFee"
                    name="domesticFee"
                    value={domesticFee || ""}
                    onChange={handleInputChange}
                  />
                </div>

                <div>
                  <Form.Label
                    htmlFor="domesticFee"
                    className="form-label text-purple-800 text-xs"
                  >
                   Charges- International
                  </Form.Label>
                  <Form.Control
                    type="text"
                    className="form-control border border-purple-400 flex-1 ml-2"
                    id="domesticFee"
                    name="domesticFee"
                    value={internationalFee || ""}
                    onChange={handleInputChange}
                  />
                </div>
              </div>
            </FormGroup>

          </Form>
        </ModalBody>
        <ModalFooter>
          <Button
            variant="primary"
            onClick={handleSaveChanges}
            className="bg-purple-800 border border-purple-600 hover:bg-purple-800 active:bg-purple-800 text-white font-semibold"
          >
            Save Changes
          </Button>
        </ModalFooter>
      </Modal>
    </div>
  );
};

export default ModalViewer;
