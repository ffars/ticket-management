import { useState, useEffect } from "react";
import { Ticket } from "../../api/models/Ticket.interface";
import { Button } from "../../components/Button";
import BaseLayout from "../../layouts/BaseLayout/BaseLayout";
import AddNewTicketModal from "./AddNewTicketModal/AddNewTicketModal";
import AssignToSprintModal from "./AssignToSprintModal/AssignToSprintModal";
import TicketsList from "./TicketsList/TicketsList";
import * as API from '../../api'

const Tickets = () => {

  const [tickets, setTickets] = useState<Ticket[]>([]);
  const [assignId, setAssignId] = useState<string>('');

  const [isAddNewModalOpen, setIsAddNewModalOpen] = useState<boolean>(false);

  useEffect(() => {
    fetchTickets();
  }, [])

  const fetchTickets = () => {
    setTickets(API.getAllTickets());
  }

  const createNewTicket = (newTicket: Ticket) => {
    API.createNewTicket(newTicket)
    fetchTickets();
  }

  const assignTicketToSprint = (sprintId: string) => {
    API.assignTicketToSprint(assignId, sprintId)
    fetchTickets();
  }

  return (
    <BaseLayout>
      <Button onClick={() => setIsAddNewModalOpen(true)}>Add new Ticket</Button>
      <TicketsList tickets={tickets} setAssignId={setAssignId} />
      <AddNewTicketModal createNewTicket={createNewTicket} isOpen={isAddNewModalOpen} onClose={() => setIsAddNewModalOpen(false)} title={"Add New Ticket"} />
      <AssignToSprintModal isOpen={!!assignId} onClose={() => setAssignId('')} title={'Assign to Sprint'} onAssign={assignTicketToSprint} />
    </BaseLayout>
  )
}

export default Tickets;
