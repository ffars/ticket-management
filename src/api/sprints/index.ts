import { Sprint } from "../models/Sprint.interface";
import { SPRINTS_KEY } from "./keys";

export const getAllSprints = (): Sprint[] => {
  const stored = localStorage.getItem(SPRINTS_KEY) || '';

  if(!stored) return []

  return JSON.parse(stored)
}

export const createNewSprint = (newSprint: Sprint) => {
  const sprints = getAllSprints().concat(newSprint);
  localStorage.setItem(SPRINTS_KEY, JSON.stringify(sprints));
}

export const getSprintById = (sprintId: string): Sprint | undefined => {
  const sprints = getAllSprints();

  return sprints.find(s => s.id === sprintId)
}
