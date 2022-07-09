import Modal from "../ui/Modal";
import Input from "../ui/Input";

const ModalInput = (props) => {
  return (
    <Modal
      {...props}
      className={{
        modal: "modal-input",
        title: "modal-input__title",
        actions: "modal-input__actions",
      }}
      isAction={true}
      actions={[
        { className: "modal-input__actions__btn btn-success", onClick: null, name: "Accept" },
        { className: "modal-input__actions__btn btn-danger", onClick: null, name: "Cancel" },
      ]}
    >
      <Input placeholder="Type to update task" />
    </Modal>
  );
};

export default ModalInput;
