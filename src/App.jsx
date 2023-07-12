import "./App.css";
import AdminPage from "./components/AdminPage";
import Characters from "./components/Characters";
import Login from "./components/Login";
import { ThemeProvider } from "./context/ThemeContext";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Login />,
  },
  {
    path: "/info",
    element: <Characters />,
  },
  {
    path: "/admin",
    element: <AdminPage />,
  },
]);
function App() {
  return (
    <>
      <ThemeProvider>
        <RouterProvider router={router} />
      </ThemeProvider>
    </>
  );
}

export default App;
