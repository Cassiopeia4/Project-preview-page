import './App.css'
import {router} from "./router.tsx";
import {RouterProvider} from "react-router-dom";

import projectData from '../data/project-data.json';
import {DataContext} from "./contexts/DataContext.tsx";
import {ThemeButton} from "./components/ThemeButton/ThemeButton.tsx";

function App() {

    return (
        <DataContext.Provider value={projectData}>
            <RouterProvider router={router} />
            <ThemeButton />
        </DataContext.Provider>
    );
}

export default App;
