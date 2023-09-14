import { Link } from "react-router-dom";
export default function Button({ to, children }) {
  const style =
    "inline-block px-4 py-2 text-sm md:text-xl rounded bg-green font-semibold text-white transition-colors duration-300 hover:bg-green/80 focus:outline-none focus:ring focus:ring-green/80 focus:ring-offset-1";
  if (to) {
    return (
      <Link to={to} className={style}>
        {children}
      </Link>
    );
  }
  return <button className={style}>{children}</button>;
}
