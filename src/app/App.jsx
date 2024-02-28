import { createBrowserRouter, RouterProvider } from "react-router-dom";
import HomePage from "../pages/HomePage";
import CurrentEmployeesPage from "../pages/CurrentEmployeesPage";
import ErrorPage from "../pages/ErrorPage";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <HomePage />,
    },
    {
      path: "/current-employees",
      element: <CurrentEmployeesPage />,
    },
    {
      path: "*",
      element: <ErrorPage />,
    },
  ]);

  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
