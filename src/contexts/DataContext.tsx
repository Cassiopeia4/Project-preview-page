import { createContext, useContext } from "react";
import projectData from '../../data/project-data.json';

type ProjectData = typeof projectData;

export const DataContext = createContext<ProjectData | null>(null);

export const useProjectData = () => useContext(DataContext);