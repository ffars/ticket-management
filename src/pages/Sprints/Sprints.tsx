import React, { useEffect, useState } from "react";
import * as API from "../../api";
import { Sprint } from "../../api/models/Sprint.interface";
import { Button } from "../../components/Button";
import BaseLayout from "../../layouts/BaseLayout/BaseLayout";
import AddNewSprintModal from "./AddNewSprintModal/AddNewSprintModal";
import SprintsList from "./SprintsList/SprintsList";

const Sprints = () => {

  const [sprints, setSprints] = useState<Sprint[]>([]);

  const [isAddNewModalOpen, setIsAddNewModalOpen] = useState<boolean>(false);

  useEffect(() => {
    fetchSprints();
  }, [])

  const fetchSprints = () => {
    setSprints(API.getAllSprints());
  }

  const createNewSprint = (newSprint: Sprint) => {
    API.createNewSprint(newSprint)
    fetchSprints();
  }

  return (
    <BaseLayout>
      <Button onClick={() => setIsAddNewModalOpen(true)}>Add new Sprint</Button>
      <SprintsList sprints={sprints} />
      <AddNewSprintModal isOpen={isAddNewModalOpen} onClose={() => setIsAddNewModalOpen(false)} title={"Create New Sprint"} createNewSprint={createNewSprint} />
    </BaseLayout>
  )
}

export default Sprints;
