import logo from "../../assets/PNG/dashboard/junk_bazar_logo.png";
import orders from "../../assets/SVG/dashboard/solar_bag-check-bold.svg";
import home_icon from "../../assets/SVG/dashboard/Home.svg";
import about_icon from "../../assets/SVG/dashboard/About.svg";
import contact_icon from "../../assets/SVG/dashboard/Contact.svg";
import price_list_icon from "../../assets/SVG/dashboard/Price list.svg";
import pickup_icon from "../../assets/SVG/dashboard/Pickup history.svg";
import setting_icon from "../../assets/SVG/dashboard/Settings.svg";
import logout_icon from "../../assets/SVG/dashboard/logout.svg";
import cancel_icon from "../../assets/SVG/dashboard/cancel.svg";
import user_img from "../../assets/SVG/dashboard/User Img.svg";
import location_icon from "../../assets/SVG/dashboard/location.svg";
import { TfiHeadphoneAlt } from "react-icons/tfi";

import { Link, useNavigate } from "react-router-dom";
import axiosInstance from "../../api-config/axiosInstance";
import Swal from "sweetalert2";
import { useEffect, useState } from "react";

const DashboardNav = ({
  showNav,
  hideNav,
  onScrap,
  showHistory,
  showSettings,
  Pricing,
  AcceptOrder

}) => {

  const navigate = useNavigate();

  const handlehome = () => {
    navigate("https://junkbaazar-user.netlify.app/")
  }


  const [profile, setProfileData] = useState({});

  useEffect(() => {
    window.scrollTo(0, 0);
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const response = await axiosInstance.get("/getCurrentUser");
      console.log("get User data", response);
      const data = JSON.parse(response.data.data);
      setProfileData(data);
      console.log("get Profile of user ", data)
      localStorage.setItem("fullname", profile.firstName)
    }
    catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  const handleLogOut = async () => {
    try {
      const response = await axiosInstance.get("/logout");
      console.log("logout", response);
      const data = response.data;
      if (data.statusCode === 200) {
        Swal.fire({
          icon: "success",
          position: "center",
          showConfirmButton: true,
          timer: 2500,
          title: "Successfully Logout"
        });
        localStorage.clear();
        navigate("/")
      }

    }
    catch (error) {
      console.error("Error fetching data:", error);
    }
  };




  return (

    <div>
      <nav className="fixed h-screen w-[18%] shadow-xl left-0 bg-[#5AB344] hidden lg:block">
        <main className="flex flex-col justify-between h-full">
          <section className=" ">
            <div className="flex justify-center items-center h-[15%] bg-white">
              <img
                src={logo}
                alt="bazar-logo"
                className="w-36 cursor-pointer p-3"
              />
            </div>

            <div className="flex flex-col justify-center item-center mb-10">
              {/* <Link to="/Dashboard">
                <div
                  className=" w-[90%] h-[3.25rem] mt-5 hover:rounded-[9px] flex items-center pl-4 duration-300 cursor-pointer ml-2"
                  onClick={onScrap}
                >

                  <div id="NewRootRoot" className="flex flex-row w-full items-start">
                    <div className="bg-[#ebffdd] flex flex-row gap-4 w-full h-12 font-['Gilroy-Bold'] items-start pt-4 px-3 rounded-lg">
                      <img
                        src="https://file.rendit.io/n/7SX9GYydOBQL73g0wJk2.svg"
                        alt="Icrounddashboard"
                        id="Icrounddashboard"
                        className="mt-px w-6"
                      />
                      <div className="text-center tracking-[0.17] text-[#81d742] mt-1">
                        Dashboard
                      </div>
                    </div>
                  </div>
                </div>
              </Link> */}
              <Link to="/UploadScrap">
                <div
                  className=" w-[90%] h-[3.25rem] mt-5 hover:rounded-[9px] flex items-center pl-4 duration-300 cursor-pointer ml-2"
                  onClick={onScrap}
                >

                  <div id="NewRootRoot" className="flex flex-row w-full items-start">
                    <div className="bg-[#ebffdd] flex flex-row gap-4 w-full h-12 font-['Gilroy-Bold'] items-start pt-4 px-3 rounded-lg">
                      <img
                        src="https://file.rendit.io/n/7SX9GYydOBQL73g0wJk2.svg"
                        alt="Icrounddashboard"
                        id="Icrounddashboard"
                        className="mt-px w-6"
                      />
                      <div className="text-center tracking-[0.17] text-[#81d742] mt-1">
                        Scraps
                      </div>
                    </div>
                  </div>
                </div>
              </Link>
              <Link to="/orders">
                <div
                  className=" w-[90%] h-[3.25rem] mt-5 hover:rounded-[9px] flex items-center pl-4 duration-300 cursor-pointer mt-1 ml-2">


                  <div id="NewRootRoot" className="flex flex-row w-full items-start">
                    <div className="bg-[#ebffdd] flex flex-row gap-4 w-full h-12 font-['Gilroy-Bold'] items-start pt-3 px-3 rounded-lg">
                      <img
                        src="https://file.rendit.io/n/YBDrPMzG3GCKjAJ9gexA.svg"
                        alt="Solarbagcheckbold"
                        id="Solarbagcheckbold"
                        className="w-6"
                      />
                      <div className="text-center tracking-[0.17] text-[#5ab344] mt-1">
                        Orders
                      </div>
                    </div>
                  </div>

                </div>
              </Link>
              <Link to="/Customers">
                <div className=" w-[90%] h-[3.25rem] mt-5 hover:rounded-[9px] flex items-center pl-4 duration-300 cursor-pointer mt-1 ml-2">
                  <div className="bg-[#ebffdd] flex flex-row gap-4 w-full h-12 font-['Gilroy-Bold'] items-start pt-3 px-3 rounded-lg">
                    <img
                      src="https://file.rendit.io/n/ZI9oRVFCj5ppKeFlRFNk.svg"
                      alt="Carbonuserfilled"
                      id="CarbonuserfilledRoot"
                      className="w-8"
                    />
                    <div className="text-center font-['Gilroy-Bold'] tracking-[0.17] text-[#5ab344] w-min">
                      Customers
                    </div>
                  </div>

                </div>
              </Link >
              <Link to={"/Vendors"} >
                <div className=" w-[90%] h-[3.25rem] mt-5 hover:rounded-[9px] flex items-center pl-4 duration-300 cursor-pointer mt-1 ml-2">
                  <div id="NewRootRoot" className="flex flex-row w-full items-start">
                    <div className="bg-[#ebffdd] flex flex-row gap-3 w-full h-12 font-['Gilroy-Bold'] items-start pt-3 px-3 rounded-lg">
                      <img
                        src="https://file.rendit.io/n/Ukbq4KATWL8npuuvbDr3.svg"
                        alt="Tablerusersplus"
                        id="Tablerusersplus"
                        className="w-6"
                      />
                      <div className="text-center tracking-[0.17] text-[#5ab344] mt-px">
                        Vendor
                      </div>
                    </div>
                  </div>

                </div>
              </Link>
              <Link to={"/Notification"} >
                <div className=" w-[90%] h-[3.25rem] mt-5 hover:rounded-[9px] flex items-center pl-4 duration-300 cursor-pointer mt-1 ml-2">
                  <div id="NewRootRoot" className="flex flex-row w-full items-start">
                    <div className="bg-[#ebffdd] flex flex-row gap-3 w-full h-12 font-['Gilroy-Bold'] items-start pt-3 px-3 rounded-lg">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" className="w-6" viewBox="0 0 24 24" fill="none">
  <path fill-rule="evenodd" clip-rule="evenodd" d="M22 12C22 6.477 17.523 2 12 2C6.477 2 2 6.477 2 12C2 17.523 6.477 22 12 22C17.523 22 22 17.523 22 12ZM12 6.25C12.1989 6.25 12.3897 6.32902 12.5303 6.46967C12.671 6.61032 12.75 6.80109 12.75 7V13C12.75 13.1989 12.671 13.3897 12.5303 13.5303C12.3897 13.671 12.1989 13.75 12 13.75C11.8011 13.75 11.6103 13.671 11.4697 13.5303C11.329 13.3897 11.25 13.1989 11.25 13V7C11.25 6.80109 11.329 6.61032 11.4697 6.46967C11.6103 6.32902 11.8011 6.25 12 6.25ZM12 17C12.2652 17 12.5196 16.8946 12.7071 16.7071C12.8946 16.5196 13 16.2652 13 16C13 15.7348 12.8946 15.4804 12.7071 15.2929C12.5196 15.1054 12.2652 15 12 15C11.7348 15 11.4804 15.1054 11.2929 15.2929C11.1054 15.4804 11 15.7348 11 16C11 16.2652 11.1054 16.5196 11.2929 16.7071C11.4804 16.8946 11.7348 17 12 17Z" fill="#5AB344"/>
</svg>
                      <div className="text-center tracking-[0.17] text-[#5ab344] mt-px">
                        Notification
                      </div>
                    </div>
                  </div>

                </div>
              </Link>
              {/* <Link to="">
                <div className=" w-[90%] h-[3.25rem] mt-5 hover:rounded-[9px] flex items-center pl-4 duration-300 cursor-pointer mt-1 ml-2">

                  <div id="NewRootRoot" className="flex flex-row w-full items-start">
                    <div className="bg-[#ebffdd] flex flex-row gap-3 w-full h-12 font-['Gilroy-Bold'] items-start pt-4 px-4 rounded-lg">
                      <img
                        src="https://file.rendit.io/n/E8s7vabCASReTmFH15Gl.svg"
                        alt="Solardangercirclebold"
                        className="w-6"
                      />
                      <div className="text-center tracking-[0.17] text-[#5ab344] mt-px">
                        Notification
                      </div>
                    </div>
                  </div>


                </div>
              </Link> */}
              {/* <Link to={"/price"}>
                <div
                  className=" w-[90%] h-[3.25rem] mt-5 hover:rounded-[9px] flex items-center pl-4 duration-300 cursor-pointer mt-1 ml-2">

                  <img src={price_list_icon} alt="price-list-icon" />
                  <a href="https://junkbaazar-user.netlify.app/" target="_blank" rel="noreferrer">
                    <span className="text-center text-white text-base font-normal font-['Gilroy-Medium'] tracking-tight ml-3">
                      Price List
                    </span>
                  </a>
                </div>
              </Link> */}
              {/* <Link to="">
                <div
                  className=" w-[90%] h-[3.25rem] mt-5 hover:rounded-[9px] flex items-center pl-4 duration-300 cursor-pointer mt-1 ml-2"
                  onClick={showHistory}
                >
                  <div id="NewRootRoot" className="flex flex-row w-full items-start">
                    <div className="bg-[#ebffdd] flex flex-row gap-4 w-full h-12 font-['Gilroy-Medium'] items-start pt-4 px-4 rounded-lg">
                      <img
                        src="https://file.rendit.io/n/w2YZYGOYkJIU2CnR3NYT.svg"
                        alt="Materialsymbolslighthandshakesharp"
                        className="w-6"
                      />
                      <div className="text-center tracking-[0.17] text-[#5ab344] mt-px">
                        Industry/Cooperate
                      </div>
                    </div>
                  </div>

                </div>
              </Link> */}
              {/* <Link to="">
                <div
                  className=" w-[90%] h-[3.25rem] mt-5 hover:rounded-[9px] flex items-center pl-4 duration-300 cursor-pointer mt-1 ml-2"

                >
                  <div id="NewRootRoot" className="flex flex-row w-full items-start">
                    <div className="bg-[#ebffdd] flex flex-row gap-4 w-full h-12 font-['Gilroy-Medium'] items-start pt-4 px-4 rounded-lg">
                      <img
                        src="https://file.rendit.io/n/ivpvmff3jIfdrlCT2806.svg"
                        alt="Antdesignsettingfilled"
                        className="mt-1 w-6"
                      />
                      <div className="text-center tracking-[0.17] text-[#5ab344] mt-1">
                        Setting
                      </div>
                    </div>
                  </div>

                </div>
              </Link> */}
            </div>

          </section>
          <section>
            <div onClick={handleLogOut} className=" w-[90%] h-[3.25rem] hover:bg-red-300 mb-3 hover:rounded-[9px] flex items-center pl-4 duration-300 cursor-pointer mt-1 ml-2 text-white hover:text-neutral-800">
              <img src={logout_icon} alt="logout-icon" />
              <span className="text-center   text-base font-normal font-['Gilroy-Medium'] tracking-tight ml-3">
                Logout
              </span>
            </div>
          </section>
        </main>
      </nav>

      {/* Mobile Nav */}
      <main className="lg:hidden relative">
        <section>
          <aside
            className={
              showNav
                ? "fixed top-0 left-0 w-[65%] md:w-[50%] h-screen bg-white  duration-700 overflow-y-scroll delay-700 rounded-br-3xl overflow z-50"
                : "fixed top-[-100%] left-0 w-screen h-screen bg-white z-50 duration-700 overflow-y-scroll opacity-0 overflow"
            }
          >
            <div className="py-10 pl-2 md:pl-10 bg-white rounded-br-[40px] w-full">
              <img
                src={cancel_icon}
                alt="close-icon"
                className="absolute right-4 w-7 md:w-10 top-3 cursor-pointer"
                onClick={hideNav}
              />
              <aside className="flex items-center ">
                <img
                  src={user_img}
                  alt="useImg"
                  className="mr-2 w-16 md:w-20"
                />
                <aside>
                  <h1 className="text-white text-lg md:text-2xl font-bold leading-tight">
                    {profile.firstName}
                  </h1>
                  <p className="text-white text-sm md:text-xl font-bold leading-tight">
                    {profile.dialCode}{" "} {profile.phoneNumber}
                  </p>
                  <span className="flex mr-1">
                    <img src={location_icon} alt="location_icon" />
                    <p className="text-white text-sm md:text-xl font-bold leading-tight">
                      India
                    </p>
                  </span>
                </aside>
              </aside>
            </div>

            <nav className="font-['Gilroy-Regular'] h-full">
              <div className="flex justify-between flex-col h-3/4 ">
                <ul className="flex flex-col px-1 py-4 text-gray-800 font-semibold mt-1">
                  {/* <Link to="/Dashboard">
                    <li
                      onClick={hideNav}
                      className=" font-bold cursor-pointer py-2 flex items-center hover:border-l-4 hover:border-lime-400  duration-500 "
                    >
                      <img
                        src={home_icon}
                        alt="home-icon"
                        className="mx-3 mr-3 w-7 md:w-12"
                      />
                      <span className="text-base md:text-xl text-zinc-400  hover:text-lime-400 font-normal font-['Gilroy-Medium'] leading-loose">
                        Dashboard
                      </span>
                    </li>
                  </Link> */}

                  <Link to={"/UploadScrap"}>
                    <li
                      onClick={hideNav}
                      className=" font-bold cursor-pointer py-2 flex items-center hover:border-l-4 hover:border-lime-400  duration-500 "
                    >
                      <img
                        src={about_icon}
                        alt="about-icon"
                        className="mx-3 mr-3 w-7 md:w-12"
                      />

                      <span className="text-base md:text-xl text-zinc-400  hover:text-lime-400 font-normal font-['Gilroy-Medium'] leading-loose">
                        Scraps
                      </span>
                    </li>
                  </Link>
                  {/* <Link to="/orders">
                    <li
                      onClick={hideNav}
                      className=" font-bold cursor-pointer py-2 flex items-center hover:border-l-4 hover:border-lime-400  duration-500 "
                    >
                     

                      <TfiHeadphoneAlt className="mx-3 mr-3 w-7 md:w-12 text-zinc-500" size={22} />
                      <span className="text-base md:text-xl text-zinc-400  hover:text-lime-400 font-normal font-['Gilroy-Medium'] leading-loose">
                        Orders
                      </span>
                    </li>
                  </Link> */}
                  <Link to={"/Customers"}>
                    <li
                      onClick={hideNav}
                      className=" font-bold cursor-pointer py-2 flex items-center hover:border-l-4 hover:border-lime-400  duration-500 "
                    >
                      <img
                        src={price_list_icon}
                        alt="price-list-icon"
                        className="mx-3 mr-3 w-7 md:w-12"
                      />
                      <span className="text-base md:text-xl text-zinc-400  hover:text-lime-400 font-normal font-['Gilroy-Medium'] leading-loose">
                        Customers
                      </span>
                    </li>
                  </Link>

                  {/* <Link to="/history">
                    <li
                      onClick={hideNav}
                      className=" font-bold cursor-pointer py-2 flex items-center hover:border-l-4 hover:border-lime-400  duration-500 "
                    >
                      <img
                        src={pickup_icon}
                        alt="pickup-icon"
                        className="mx-3 mr-3 w-7 md:w-12"
                      />
                      <span className="text-base md:text-xl text-zinc-400  hover:text-lime-400 font-normal font-['Gilroy-Medium'] leading-loose">
                        Pickup History
                      </span>
                    </li>
                  </Link> */}

                  <Link to="/Vendors">
                    <li
                      onClick={hideNav}
                      className=" font-bold cursor-pointer py-2 flex items-center hover:border-l-4 hover:border-lime-400  duration-500 "
                    >
                      <img
                        src={setting_icon}
                        alt="pickup-icon"
                        className="mx-3 mr-3 w-7 md:w-12"
                      />
                      <span className="text-base md:text-xl text-zinc-400  hover:text-lime-400 font-normal font-['Gilroy-Medium'] leading-loose">
                        Vendor
                      </span>
                    </li>
                  </Link>
                </ul>

                <section>
                  <div onClick={handleLogOut} className=" font-bold cursor-pointer py-2 flex items-center hover:border-l-4 hover:border-red-300  duration-500 pl-2">
                    <img
                      src={logout_icon}
                      alt="logout-icon"
                      className="mx-3 mr-3 w-7 md:w-12"
                    />
                    <span className="text-center   text-base font-normal font-['Gilroy-Medium'] tracking-tight ml-3">
                      Logout
                    </span>
                  </div>
                </section>
              </div>
            </nav>
          </aside>
        </section>
      </main>
    </div >

  );
};

export default DashboardNav;
