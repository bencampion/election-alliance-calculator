import { isRouteErrorResponse, useRouteError } from "react-router-dom";

export default function ErrorPage() {
  const error = useRouteError();
  console.error(error);

  return (
    <main className="content m-5">
      <h2 className="title is-4">Oops! 🙈</h2>
      {error instanceof Error ? (
        <>
          <p>{error.message}</p>
          <pre>
            <code>{error.stack}</code>
          </pre>
        </>
      ) : (
        <p>
          {isRouteErrorResponse(error) ? error.statusText : "Unknown errror"}
        </p>
      )}
    </main>
  );
}
