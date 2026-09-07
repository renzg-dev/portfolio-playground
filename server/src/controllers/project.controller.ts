import type { Request, Response } from "express";

const projects = [
  {
    id: 1,
    title: "Portfolio Playground",
    description: "A full-stack learning project",
  },
  {
    id: 2,
    title: "Bakery Management System",
    description: "A management system for a bakery",
  },
];

export function getProjects(_req: Request, res: Response) {
  res.json(projects);
}
