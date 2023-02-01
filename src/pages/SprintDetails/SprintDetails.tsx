import React, { useEffect, useState, useCallback } from "react";
import { useParams } from "react-router-dom";
import { Sprint } from "../../api/models/Sprint.interface";
import { Ticket } from "../../api/models/Ticket.interface";
import BaseLayout from "../../layouts/BaseLayout/BaseLayout";
import TicketsList from "../Tickets/TicketsList/TicketsList";
import * as API from "../../api"

const SprintDetails = () => {

  const { id } = useParams();

  const [sprint, setSprint] = useState<Sprint | undefined>()
  const [tickets, setTickets] = useState<Ticket[]>([])

  const fetchData = useCallback(() => {
    const sprint = API.getSprintById(id as string);
    const tickets = API.getTicketsBySprintId(id as string);

    setSprint(sprint);
    setTickets(tickets)
  }, [id])

  useEffect(() => {
    fetchData();
  }, [fetchData])

  if(!sprint) return null;

  return (
    <BaseLayout>
      <h2>{sprint.name}</h2>
      <TicketsList tickets={tickets} />
    </BaseLayout>
  )
}

export default SprintDetails;
