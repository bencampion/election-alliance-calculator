import { createHashRouter, RouterProvider } from "react-router-dom";
import { Election } from "../data/types.ts";
import About from "./About.tsx";
import Error from "./Error.tsx";
import Layout from "./Layout.tsx";
import Results from "./Results.tsx";

const router = createHashRouter([
  {
    path: "/",
    element: <Layout />,
    errorElement: <Layout outlet={<Error />} />,
    children: [
      {
        path: "/",
        element: <About />,
      },
      {
        path: "/:year",
        element: <Results />,
        loader: async ({ params }) => {
          return (await import(
            `../data/generated/${params.year!}.ts`
          )) as Election;
        },
      },
    ],
  },
]);

export default function App() {
  return <RouterProvider router={router} />;
}
