export type ProjectType = "web" | "experiment" | "game";

export type Project = {
  dropNumber: string;
  name: string;
  description?: string;
  type: ProjectType;
  link?: string;
  isActive: boolean;
};
