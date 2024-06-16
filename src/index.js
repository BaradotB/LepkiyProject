import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import PelmeniComp from './components/PelmeniComponent/PelmeniComponent'
import HinkaleComp from './components/HinkaleComponent/HinkaleComponent'
import VarenikiComp from './components/VarenikiComponent/VarenikiComponent'
import KurzeComp from './components/KurzeComponent/KurzeComponent'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <div></div>,
    children: [
      {
        path: "/pelmeni",
        element: <PelmeniComp />,
        errorElement: <div></div>,
      },
      {
        path: "/hinkali",
        element: <HinkaleComp/>,
        errorElement: <div></div>
      },
      {
        path: "/vareniki",
        element: <VarenikiComp/>,
        errorElement: <div></div>
      },
      {
        path: "/kurze",
        element: <KurzeComp/>,
        errorElement: <div></div>
      },
    ]
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);