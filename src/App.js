import "./App.css";
import Home from "./components/Home";
import WholeDetails from "./components/WholeDetails";
import Error from "./components/Error";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import SavedWatch from "./components/SavedWatch";

function AppLayout() {
  return (
    <div className="App">
      <Outlet />
    </div>
  );
}

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/watchDetails",
        element: <WholeDetails />,
      },
      {
        path: "/save",
        element: <SavedWatch />,
      },
    ],
    errorElement: <Error />,
  },
]);

const App = () => {
  return (
    <div>
      <RouterProvider router={appRouter} />
    </div>
  );
};

export default App;
