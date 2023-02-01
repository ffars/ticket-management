import { FC, FormEvent, ChangeEvent, useState } from "react";
import { Sprint } from "../../../api/models/Sprint.interface";
import { Form } from "../../../components/Form";
import Modal from "../../../components/Modal/Modal";

interface IProps {
  isOpen: boolean;
  onClose: () => void;
  title: string;
  createNewSprint: (newSprint: Sprint) => void;
}

const AddNewSprintModal: FC<IProps> = ({ createNewSprint, ...props }) => {

  const [startDate, setStartDate] = useState<string>('');

  const startDateChanged = (e: ChangeEvent<HTMLInputElement>) => {
    setStartDate(e.target.value)
  }

  const onSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const formData = new FormData(e.target as HTMLFormElement);

    createNewSprint({
      id: `${Date.now()}`,
      name: `${formData.get('name')}` || '',
      startDate: `${formData.get('startDate')}` || '',
      endDate: `${formData.get('endDate')}` || '',
    })

    props.onClose();
  }

  return (
    <Modal {...props}>
      <Form onSubmit={onSubmit}>
        <label htmlFor={"name"}>Name</label>
        <input placeholder={'Name'} required type={"text"} id={"name"} name={"name"} />

        <label htmlFor={"startDate"}>Start Date</label>
        <input type={'date'} onChange={startDateChanged} required id={"startDate"} name={"startDate"} />

        <label htmlFor={"endDate"}>End Date</label>
        <input type={'date'} required min={startDate} name={"endDate"} id={"endDate"} />

        <input type={"submit"} />
      </Form>
    </Modal>
  )
}

export default AddNewSprintModal;
