import {HomeLayout} from "./layouts/HomeLayout.tsx";
import {createBrowserRouter} from "react-router-dom";
import {TeamLayout} from "./layouts/TeamLayout.tsx";
import {WorkLayout} from "./layouts/WorkLayout.tsx";
import {DocLayout} from "./layouts/DocLayout.tsx";


export const router = createBrowserRouter([
        {
            path: "/",
            element: <HomeLayout/>,
            errorElement: <HomeLayout/>
        },
        {
            path: "/team",
            element: <TeamLayout/>,
            errorElement: <HomeLayout/>
        },
        {
            path: "/work",
            element: <WorkLayout/>,
            errorElement: <HomeLayout/>
        },
        {
            path: "/documentation",
            element: <DocLayout/>,
            errorElement: <HomeLayout/>
        },
    ],
    {basename: '/'});