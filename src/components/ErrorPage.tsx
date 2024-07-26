import { Link } from "react-router-dom";

const ErrorPage = () => {
  return (
    <div className="fixed inset-0 flex flex-col items-center justify-center bg-slate-50 px-2 text-center dark:bg-neutral-800">
      <h1 className="mb-4 text-2xl font-bold md:text-4xl">
        Oops! Something went wrong.
      </h1>
      <p className="mb-8 text-balance">
        We couldn't find the page you were looking for. It might have been
        removed, renamed, or did not exist in the first place.
      </p>
      <Link to="/" className="rounded bg-blue-500 px-4 py-2 text-white">
        Go Back to Home
      </Link>
    </div>
  );
};

export default ErrorPage;
