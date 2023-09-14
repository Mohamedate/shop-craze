import { Link } from "react-router-dom";
import { shoppingCart } from "./icons";
import Button from "./Button";
export default function Header() {
  return (
    <header>
      <div className="flex items-center justify-between py-4">
        <div className="flex items-center">
          <svg
            className="mr-2 w-8 fill-green md:w-10"
            viewBox={shoppingCart.viewBox}
          >
            <path d={shoppingCart.path}></path>
          </svg>
          <Link
            to="/"
            className="mb-2 text-2xl font-bold text-blue md:text-4xl"
          >
            shopCraze
          </Link>
        </div>

        <Button to="/signup">Sign up</Button>
      </div>
    </header>
  );
}
