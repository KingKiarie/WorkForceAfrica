import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { createBrowserRouter, Route, RouterProvider } from "react-router-dom";
import About from "./pages/About.jsx";
import Contact from "./pages/contact.jsx";
import Help from "./pages/help.jsx";
import Worklist from "./joblist/WorkList.jsx";
import Job from "./components/job/Job.jsx";
//theme provider
import { ThemeProvider } from "./context/themecontext.jsx";

const path = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/about",
    element: <About />,
  },
  {
    path: "/contact",
    element: <Contact />,
  },
  {
    path: "/help",
    element: <Help />,
  },
  {
    path: "/worklist",
    element: <Worklist />,
  },
  {
    path: "/worklist/:id",
    element: <Job />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <ThemeProvider>
      <RouterProvider router={path} />
    </ThemeProvider>
  </React.StrictMode>
);
