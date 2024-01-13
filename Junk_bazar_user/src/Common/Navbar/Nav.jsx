/* eslint-disable react/prop-types */
import junk_logo from "../../assets/PNG/junk bazar logo 1.png";
import cart from "../../assets/SVG/solar_cart-plus-bold.svg";
import menu from "../../assets/SVG/jam_menu.svg";
import close from "../../assets/SVG/mobile-icon/close.svg";
import home from "../../assets/SVG/mobile-icon/home.svg";
import about from "../../assets/SVG/mobile-icon/about.svg";
// import contact from "../../assets/SVG/mobile-icon/contact.svg";
import price from "../../assets/SVG/mobile-icon/price.svg";
import carts from "../../assets/SVG/mobile-icon/cart.svg";
import faq from "../../assets/SVG/mobile-icon/faq.svg";
import sign_in from "../../assets/SVG/mobile-icon/sign-in.svg";
import sign_up from "../../assets/SVG/mobile-icon/sign-up.svg";
import logout from "../../assets/SVG/mobile-icon/logout.svg";
import track from '../../assets/PNG/track.png'
import {
    useState, useEffect
} from "react";
import {
    Link, useLocation, useParams
} from "react-router-dom";
import {
    useNavigate
} from "react-router-dom";
import {
    FaUserCircle
} from "react-icons/fa";
import {
    useDispatch, useSelector
} from "react-redux";

import {
    TfiHeadphoneAlt
} from "react-icons/tfi";


const Nav = () => {

    const token = localStorage.getItem("token")
    const [mobileNav,
        setMobileNav] = useState(false);
    const [show,
        handleShow] = useState(false);
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const [open, setOpen] = useState(false);

    const handleToggle = () => {
        setOpen(!open);
    };
    useEffect(() => {
        window.addEventListener("scroll", () => {
            if (window.scrollY > 25)
                handleShow(true);

            else handleShow(false);
        });

        return () => {
            window.removeEventListener("scroll", () => { });
        };
    }, []);
    useParams();

    const handleLogout = () => {
        console.log("logout click")
        localStorage.clear();
        // navigate("/sign-in", { replace: true })
        setOpen(false);
        navigate("/")

    }

    const handleTrack = () => {
        setOpen(false);
        navigate("/trackOrder", { replace: true })
    }

    const handleProfile = () => {
        setOpen(false);
        navigate("/profile")
    }

    const location = useLocation();

    const isActive = (path) => {
      // Check if the current path matches the link path
      return location.pathname === path;
    };
    // const handleTrackOut = () => {
    //     console.log("trackorder click")
    //     navigate("/TrackOrder", { replace: true })
    // }

    const readCartQuantity = useSelector((state) => state.totalQuantity);

    return (
        <nav>
            <div>
            <div className={`flex justify-between p-2 px-7 md:px-20 lg:px-0 lg:justify-around items-center fixed top-0 left-0 w-full z-10 ${show ? "bg-lime-300 duration-700" : "transparent duration-700"
}`}>
                    <Link to="/">
                        <img
                            src={junk_logo}
                            alt="Junk-bazzar-logo"
                            className="w-[115px] h-[8] lg:w-[202px] lg:h-[53px] cursor-pointer"
                        />
                    </Link>

                    <div className="text-zinc-500 text-center text-base font-semibold tracking-tight hidden lg:flex">
      <ul className="flex justify-between space-x-4 items-center">
        <Link to="/">
          <li className={`cursor-pointer ${isActive('/') && 'text-lime-500 font-bold'}`}>Home</li>
        </Link>
        <Link to="/about">
          <li className={`cursor-pointer ${isActive('/about') && 'text-lime-500 font-bold'}`}>About Us</li>
        </Link>
        <Link to="/pricing">
          <li className={`cursor-pointer ${isActive('/pricing') && 'text-lime-500 font-bold'}`}>Price List</li>
        </Link>
        <Link to="/contact-us">
          <li className={`cursor-pointer ${isActive('/contact-us') && 'text-lime-500 font-bold'}`}>Contact Us</li>
        </Link>
        {/* Add more links as needed */}
      </ul>
    </div>

                    <div className="flex gap-x-4 ">
                        <div className="flex gap-x-4 ">
                            <Link to="/cart">
                                <div className=" ">
                                    <img
                                        src={cart}
                                        alt="cart-img"
                                        className="w-10 cursor-pointer relative"
                                    />
                                    <div className="absolute top-[30px] ml-[30px] bg-black w-[20px] h-[20px] flex justify-center items-center rounded-full text-white font-extrabold">
                                        {readCartQuantity}
                                    </div>
                                </div>
                            </Link>

                            <div className="flex lg:hidden">
                                <img
                                    src={menu}
                                    alt="hamburger-menu"
                                    className="w-10 cursor-pointer"
                                    onClick={() => setMobileNav(true)}
                                />
                            </div>
                        </div>
                        <div className="hidden lg:flex ">
                            <div className="flex gap-x-3 items-center">
                            <Link to="/cart">
        <button className="text-center text-zinc-500 text-base font-semibold tracking-tight border-2 border-zinc-500 hover:bg-lime-600 hover:text-white    shadow-inner rounded-full cursor-pointer px-4 py-[.45rem]">
            Request Pickup
        </button>
    </Link>

                                {token === "" || token === undefined || token === null ? (
                                  <button
                                  className="text-center text-zinc-500 text-base font-semibold tracking-tight border-2 border-zinc-500 hover:bg-lime-600 hover:text-white    shadow-inner rounded-full cursor-pointer px-4 py-[.45rem]"
                                  onClick={() => navigate("/Sign-Up")}
                              >
                                  Sign up / Sign In
                              </button>
                                ) : (
                                    <div className="relative">
                                        <FaUserCircle
                                            onClick={handleToggle}
                                            size={42}
                                            className="-mr-8 cursor-pointer"
                                            fill="#555"
                                        />
                                        <ul
                                            className={`absolute right-0 w-40 -m-10 border border-gray-200 bg-white py-2 mt-2 rounded-lg z-50 shadow-xl ${open ? 'block' : 'hidden'}`}
                                        >
                                            <Link to="/trackOrder" className="flex w-full items-center px-3 py-2 text-sm hover:bg-lime-100">
                                                Track Order
                                            </Link>
                                            <Link to="/profile" className="flex w-full items-center px-3 py-2 text-sm hover:bg-lime-100">
                                                Profile
                                            </Link>
                                            <Link onClick={handleLogout} className="flex w-full items-center px-3 py-2 text-sm hover:bg-lime-100">
                                                Logout
                                            </Link>
                                        </ul>
                                    </div>


                                )}
                            </div>
                        </div>
                    </div>

                    {/* Mobile Design */}

                    <div
                        className={
                            mobileNav
                                ? "fixed top-0 left-0 w-[100%]  h-screen bg-black/90 z-10 duration-700 overflow-y-scroll"
                                : "fixed top-0 left-[-100%] w-[100%] h-screen bg-black/80 z-10 duration-700 overflow-y-scroll delay-200"
                        }
                    ></div>

                    <div
                        className={
                            mobileNav
                                ? "fixed top-0 left-0 w-[65%] md:w-[40%] h-screen bg-white z-10 duration-700 overflow-y-scroll delay-200 rounded-tr-3xl rounded-br-3xl"
                                : "fixed top-0 left-[-100%] w-[65%] md:w-[40%] h-screen bg-white z-10 duration-700 overflow-y-scroll"
                        }
                    >
                        <div>
                            <img
                                src={close}
                                alt="close-icon"
                                className="absolute right-6 w-5 top-6 cursor-pointer"
                                onClick={() => setMobileNav(false)}
                            />
                        </div>

                        <nav className="font-['Gilroy-Regular'] h-full">
                            <div className="flex justify-start flex-col h-3/4">
                                <ul className="flex flex-col px-1 py-4 text-gray-800 font-semibold mt-16">
                                    <Link to="/">
                                        <li
                                            onClick={() => setMobileNav(false)}
                                            className=" font-bold cursor-pointer py-2 flex items-center hover:border-l-4 hover:border-lime-400  duration-500 "
                                        >
                                            <img
                                                src={home}
                                                alt="home-icon"
                                                className="mx-3 mr-3 w-6"
                                            />
                                            <span className="text-base md:text-xl text-zinc-400  hover:text-lime-400 font-normal font-['Gilroy-Medium'] leading-normal">
                                                Homepage
                                            </span>
                                        </li>
                                    </Link>
                                    <Link to="/about">
                                        <li
                                            onClick={() => setMobileNav(false)}
                                            className=" font-bold cursor-pointer py-2 flex items-center hover:border-l-4 hover:border-lime-400  duration-500 "
                                        >
                                            <img
                                                src={about}
                                                alt="about-icon"
                                                className="mx-3 mr-3 w-6"
                                            />
                                            <span className="text-base md:text-xl text-zinc-400  hover:text-lime-400 font-normal font-['Gilroy-Medium'] leading-normal">
                                                About Us
                                            </span>
                                        </li>
                                    </Link>
                                    <Link to="/contact-us">
                                        <li
                                            onClick={() => setMobileNav(false)}
                                            className=" font-bold cursor-pointer py-2 flex items-center hover:border-l-4 hover:border-lime-400  duration-500 "
                                        >
                                            <TfiHeadphoneAlt className="mx-3 mr-3 w-6 text-zinc-500" size={22} />
                                            <span className="text-base md:text-xl text-zinc-400  hover:text-lime-400 font-normal font-['Gilroy-Medium'] leading-normal">
                                                Contact Us
                                            </span>
                                        </li>
                                    </Link>
                                    <Link to="/pricing">
                                        <li
                                            onClick={() => setMobileNav(false)}
                                            className=" font-bold cursor-pointer py-2 flex items-center hover:border-l-4 hover:border-lime-400  duration-500 "
                                        >
                                            <img
                                                src={price}
                                                alt="price-icon"
                                                className="mx-3 mr-3 w-6"
                                            />
                                            <span className="text-base md:text-xl text-zinc-400  hover:text-lime-400 font-normal font-['Gilroy-Medium'] leading-normal">
                                                Price List
                                            </span>
                                        </li>
                                    </Link>
                                    <Link to="/cart">
                                        <li
                                            onClick={() => setMobileNav(false)}
                                            className=" font-bold cursor-pointer py-2 flex items-center hover:border-l-4 hover:border-lime-400  duration-500 "
                                        >
                                            <img
                                                src={carts}
                                                alt="cart-icon"
                                                className="mx-3 mr-3 w-6"
                                            />
                                            <span className="text-base md:text-xl text-zinc-400  hover:text-lime-400 font-normal font-['Gilroy-Medium'] leading-normal">
                                                Cart
                                            </span>
                                        </li>
                                    </Link>
                                    <Link to="/trackOrder">
                                        <li
                                            onClick={() => setMobileNav(false)}
                                            className=" font-bold cursor-pointer py-2 flex items-center hover:border-l-4 hover:border-lime-400  duration-500 "
                                        >
                                            <img
                                                src={track}
                                                alt="cart-icon"
                                                className="mx-3 mr-3 w-6"
                                            />
                                            <span className="text-base md:text-xl text-zinc-400  hover:text-lime-400 font-normal font-['Gilroy-Medium'] leading-normal">
                                                Track Order
                                            </span>
                                        </li>
                                    </Link>

                                    <li
                                        onClick={() => {
                                            setMobileNav(false);
                                            navigate("/faqs");
                                        }}
                                        className=" font-bold cursor-pointer py-2 flex items-center hover:border-l-4 hover:border-lime-400 duration-500 "
                                    >
                                        <img src={faq} alt="faq-icon" className="mx-3 mr-3 w-6" />
                                        <span className="text-base md:text-xl text-zinc-400  hover:text-lime-400 font-normal font-['Gilroy-Medium'] leading-normal">
                                            FAQs
                                        </span>
                                    </li>
                                </ul>
                                {/* <h1 className="font-semibold text-lg text-lime-600 mx-3">
                                    Become a <span className="font-bold"> VENDOR</span>
                                </h1> */}
                            </div>

                            <div className="">
                                {token === "" || token === undefined || token === null ? (
                                    <div>
                                        <div
                                            className="w-3/4 rounded-full ml-2 px-3 py-2 bg-lime-500 flex items-center hover:bg-white cursor-pointer hover:border-lime-500 hover:border-2 duration-200 hover:text-lime-500"
                                            onClick={() => navigate("/sign-up")}
                                        >
                                            <img
                                                src={sign_up}
                                                alt="sign-up-icon"
                                                className="mx-3 mr-3 w-6"
                                            />
                                            <h1 className="text-base font-bold text-white hover:text-lime-500 ">
                                                Sign Up
                                            </h1>
                                        </div>

                                        <div
                                            className="w-3/4 rounded-full ml-2 px-3 py-2 my-2 border-2 border-zinc-400 flex items-center cursor-pointer hover:shadow-md hover:border-0"
                                            onClick={() => navigate("/sign-in")}
                                        >
                                            <img
                                                src={sign_in}
                                                alt="sign-in-icon"
                                                className="mx-3 mr-3 w-6"
                                            />
                                            <h1 className="text-base font-bold">Sign in</h1>
                                        </div>
                                    </div>
                                ) : (
                                    <div className="mx-auto">
                                        <FaUserCircle
                                            size={42}
                                            className="ml-6 cursor-pointer"
                                            fill="#555"
                                        />

                                        <div
                                            className=" ml-2 mt-4 mb-3  flex items-center cursor-pointer"
                                            onClick={handleLogout}
                                        >
                                            <img
                                                src={logout}
                                                alt="log-out-icon"
                                                className="mx-3 mr-3 w-6"
                                            />
                                            <h1 className="text-base font-bold text-red-600">Log out</h1>
                                        </div>
                                    </div>


                                )}


                            </div>
                        </nav>
                    </div>
                </div>
            </div>
        </nav>
    );
};

export default Nav;
