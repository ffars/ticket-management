import { FC, FormEvent } from "react";
import { Ticket } from "../../../api/models/Ticket.interface";
import { Form } from "../../../components/Form";
import Modal from "../../../components/Modal/Modal";

interface IProps {
  isOpen: boolean;
  onClose: () => void;
  title: string;
  createNewTicket: (newTicket: Ticket) => void;
}

const AddNewTicketModal: FC<IProps> = ({ createNewTicket, ...props }) => {

  const onSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const formData = new FormData(e.target as HTMLFormElement);

    createNewTicket({
      id: `${Date.now()}`,
      name: `${formData.get('name')}` || '',
      description: `${formData.get('description')}` || ''
    })

    props.onClose();
  }

  return (
    <Modal {...props}>
      <Form onSubmit={onSubmit}>
        <label htmlFor={"name"}>Name</label>
        <input placeholder={'Name'} required type={"text"} name={"name"} />

        <label htmlFor={"description"}>Name</label>
        <textarea rows={5} cols={35} required id={"description"} placeholder={'Description'} name={"description"} />

        <input type={"submit"} />
      </Form>
    </Modal>
  )
}

export default AddNewTicketModal;
