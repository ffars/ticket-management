import { Ticket } from "../models/Ticket.interface";
import { TICKETS_KEY } from "./keys";

export const getAllTickets = (): Ticket[] => {
  const stored = localStorage.getItem(TICKETS_KEY) || '';

  if(!stored) return []

  return JSON.parse(stored)
}

export const createNewTicket = (newTicket: Ticket) => {
  const tickets = getAllTickets().concat(newTicket);
  localStorage.setItem(TICKETS_KEY, JSON.stringify(tickets));
}

export const assignTicketToSprint = (ticketId: string, sprintId: string) => {
  const tickets = getAllTickets();

  const ticket = tickets.find(t => t.id === ticketId) as Ticket;

  ticket.sprintId = sprintId;

  localStorage.setItem(TICKETS_KEY, JSON.stringify(tickets));
}

export const getTicketsBySprintId = (sprintId: string): Ticket[] => {
  const tickets = getAllTickets();

  return tickets.filter(ticket => ticket.sprintId === sprintId);
}
