import { createBrowserRouter, RouterProvider } from "react-router-dom";
import HomePage from "./pages/HomePage";
import NewEmployeePage from "./pages/NewEmployeePage";
import EmployeesPage from "./pages/EmployeesPage";
import ErrorPage from "./pages/ErrorPage";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <HomePage />,
    },
    {
      path: "/new-employee",
      element: <NewEmployeePage />,
    },
    {
      path: "/employees",
      element: <EmployeesPage />,
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
