import { FC, FormEvent, useEffect, useState } from "react";
import * as API from "../../../api";
import { Sprint } from "../../../api/models/Sprint.interface";
import { Form } from "../../../components/Form";
import Modal from "../../../components/Modal/Modal";

interface IProps {
  isOpen: boolean;
  onClose: () => void;
  title: string;
  onAssign: (sprintId: string) => void;
}

const AssignToSprintModal: FC<IProps> = ({ onAssign, ...props }) => {

  const [sprints, setSprints] = useState<Sprint[]>([]);

  useEffect(() => {
    fetchSprints();
  }, [])

  const fetchSprints = () => {
    setSprints(API.getAllSprints());
  }

  const onSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const formData = new FormData(e.target as HTMLFormElement);

    onAssign(`${formData.get('sprint')}`)

    props.onClose();
  }

  return (
    <Modal {...props}>
      <Form onSubmit={onSubmit}>
        <select name={"sprint"}>
          {sprints.map(({ name, id }) => {
            return <option key={id} value={id}>{name}</option>
          })}
        </select>

        <input type={"submit"} />
      </Form>
    </Modal>
  )
}

export default AssignToSprintModal;
