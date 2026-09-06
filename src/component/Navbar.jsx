import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

const Navbar = () => {
    const {fechItems,cartItem, loading, error } = useSelector((state) => state.products);

  return (
    <nav className="bg-[#20395f] h-20 px-14 flex items-center justify-between shadow-md">
      
      {/* Logo */}
      <Link
        to="/"
        className="text-white text-3xl font-bold"
      >
        BuyBuddy
      </Link>

      {/* Navigation */}
      <div className="flex items-center gap-8">

        {/* <Link
          to="/"
          className="text-white text-xl hover:text-gray-300"
        >
          Products
        </Link> */}


      </div>

      {/* Cart */}
      <Link to="/cart" className="relative">

        <span className="text-white text-4xl">
          🛒
        </span>

        <span className="absolute -top-2 -right-3 bg-red-500 text-white text-sm font-bold w-7 h-7 rounded-full flex items-center justify-center">
          {cartItem? cartItem.length:0}
        </span>

      </Link>

    </nav>
  );
};

export default Navbar;