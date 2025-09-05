import { useState } from "react";
import {
  Menu,
  X,
  ShoppingCart,
  HomeIcon,
  User,
  LogOut,
  Key,
  BrainCircuit
} from "lucide-react";
import { Link, NavLink  } from "react-router-dom";
import { useSelector } from "react-redux";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [isProfileOpen, setIsProfileOpen] = useState(false);
  const [isLogIn, setIsLogIn] = useState(false);
  const cartData = useSelector((state : any)=> state.cart);

  return (
    <header className="bg-white shadow-md sticky top-0 z-50">
      <div className="container mx-auto flex items-center justify-between p-4">
        {/* Logo */}

        <Link to="/" className="text-2xl font-bold text-blue-600">
          <h1>AI Learning Hub</h1>{" "}
        </Link>
       
        {/* Desktop Menu */}
        <nav className="hidden md:flex space-x-8">
          <NavLink
            to="/"
            className={({ isActive }) =>
              isActive ? 'flex items-center space-x-2  text-blue-600 nav-link text-shadow-neon' : 'flex items-center space-x-2 text-gray-700 hover:text-blue-600 nav-link'
            }
            // className="flex items-center space-x-2 text-gray-700 hover:text-blue-600 nav-link"
          >
            <HomeIcon size={20} /> <span>Home</span>
          </NavLink>
          <NavLink to ="/aiServices" className={({ isActive }) => isActive ? 'flex items-center space-x-2  text-blue-600 nav-link text-shadow-neon' : 'flex items-center space-x-2 text-gray-700 hover:text-blue-600 nav-link'}>
            {/* <div className="flex items-center space-x-2 text-gray-700 hover:text-blue-600"> */}
              <BrainCircuit size={20} />
              <span>AI Services</span>
          </NavLink>
          <NavLink
            to="/cart"
            className={({ isActive }) => isActive ? 'flex items-center space-x-2  text-blue-600 nav-link text-shadow-neon' : 'flex items-center space-x-2 text-gray-700 hover:text-blue-600 nav-link'}
          >
            <ShoppingCart size={20} />
            <span>Cart {cartData.length  ? cartData.length : ""}</span>
          </NavLink>
          <button
            onClick={() => {
              setIsProfileOpen(!isProfileOpen);
            }}
            className="flex items-center space-x-2 text-gray-700 hover:text-blue-600"
          >
            <User /> <span>Profile</span>
          </button>
          {isProfileOpen && (
            <div className="absolute right-20 mt-8 w-44 rounded-xl bg-white shadow-lg ring-1 ring-black/5">
              <div className="flex flex-col py-2">
                {/* <Link
                  to="/"
                  className="flex items-center gap-2 px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                  //   onClick={() => setOpen(false)}
                >
                  <User className="w-4 h-4" />
                  Profile
                </Link> */}
                <Link
                  to="/login"
                  className="flex items-center gap-2 px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                  //   onClick={() => setOpen(false)}
                >
                  <LogOut className="w-4 h-4" />
                  Logout
                </Link>
              </div>
            </div>
          )}
          <Link
            to="/"
            className="flex items-center space-x-2 text-gray-700 hover:text-blue-600"
          >
            {!isLogIn ? (
              <>
                {" "}
                <Key size={20} /> <span>SignIn</span>
              </>
            ) : (
              <>
                {" "}
                <LogOut size={20} />
                <span>SignOut</span>
              </>
            )}
          </Link>
        </nav>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-gray-700"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-white shadow-md">
          <nav className="flex flex-col space-y-4 p-4">
          <Link
            to="/"
            className="flex items-center space-x-2 text-gray-700 hover:text-blue-600"
          >
            <HomeIcon size={20} /> <span>Home</span>
          </Link>
          <Link
            to="/"
            className="flex items-center space-x-2 text-gray-700 hover:text-blue-600"
          >
            <ShoppingCart size={20} />
            <span>Cart {cartData.length  ? cartData.length : ""}</span>
          </Link>
          <button
            onClick={() => {
              setIsProfileOpen(!isProfileOpen);
            }}
            className="flex items-center space-x-2 text-gray-700 hover:text-blue-600"
          >
            <User /> <span>Profile</span>
          </button>
          {isProfileOpen && (
            <div className=" right-0 mt-0 w-44 rounded-xl bg-white shadow-lg ring-1 ring-black/5">
              <div className="flex flex-col py-2">
                <Link
                  to="/"
                  className="flex items-center gap-2 px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                  //   onClick={() => setOpen(false)}
                >
                  <User className="w-4 h-4" />
                  Profile
                </Link>
                <Link
                  to="/logout"
                  className="flex items-center gap-2 px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                  //   onClick={() => setOpen(false)}
                >
                  <LogOut className="w-4 h-4" />
                  Logout
                </Link>
              </div>
            </div>
          )}
          <Link
            to="/"
            className="flex items-center space-x-2 text-gray-700 hover:text-blue-600"
          >
            {!isLogIn ? (
              <>
                {" "}
                <Key size={20} /> <span>SignIn</span>
              </>
            ) : (
              <>
                {" "}
                <LogOut size={20} />
                <span>SignOut</span>
              </>
            )}
          </Link>
          </nav>
        </div>
      )}
    </header>
  );
}
