import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Main from './components/Layout/Main.jsx';
import JobDetailsSection from './components/JobDetailsSection/JobDetailsSection';
import Home from './components/Home/Home';
import AppliedJobs from './components/AppliedJobs/AppliedJobs';



const router = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    children: [
      {
        path: "/",
        element: <Home /> 
      },
      {
        path: "job/:jobId",
        element: <JobDetailsSection />,
        loader: () => fetch(`jobs.json`)
      },
      {
        path: "applied",
        element: <AppliedJobs />
      }
    ]
  }
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
