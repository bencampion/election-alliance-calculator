import { createHashRouter, RouterProvider } from "react-router-dom";
import Layout from "./Layout.tsx";
import Error from "./Error.tsx";
import About from "./About.tsx";
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
          const data = await import(`./data/generated/${params.year}.ts`);
          return { year: params.year, ...data };
        },
      },
    ],
  },
]);

export default function App() {
  return <RouterProvider router={router} />;
}
