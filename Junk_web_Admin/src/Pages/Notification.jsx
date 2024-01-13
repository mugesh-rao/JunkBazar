import React, { useState } from "react";
import DashboardNav from "../Auth/Dashboard/Nav";
import Header from "../Auth/Dashboard/Header";

const ReusableComponent = ({ sender, message, circleColor }) => {
  return (
    <div className="flex items-center bg-[#EBFFDD] my-2 p-4 rounded-full justify-between">
      <div className="flex items-center">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="w-10 h-10 ml-3"
          viewBox="0 0 69 69"
          fill="none"
        >
          <path
            d="M62.2855 21.8024C60.7737 18.1942 58.5743 14.9146 55.81 12.1464C53.0539 9.37343 49.78 7.16872 46.1742 5.65748C42.4804 4.10183 38.5116 3.3044 34.5035 3.31256H34.3688C30.2921 3.33278 26.3502 4.14137 22.6374 5.73161C19.0626 7.25833 15.8194 9.46696 13.0893 12.234C10.3517 14.996 8.17755 18.2641 6.6879 21.8563C5.14157 25.5918 4.35803 29.5988 4.38341 33.6416C4.40362 38.3179 5.52218 42.9606 7.61105 47.1114V57.3536C7.61105 59.0651 8.99913 60.4532 10.7039 60.4532H20.9326C25.1028 62.5574 29.7046 63.6646 34.3755 63.6876H34.517C38.5465 63.6876 42.448 62.9059 46.1271 61.3763C49.7146 59.8831 52.9763 57.7041 55.7291 54.9615C58.5053 52.2055 60.6885 48.9846 62.2181 45.3931C63.8016 41.6736 64.6102 37.7182 64.6304 33.6348C64.6439 29.5312 63.8487 25.5489 62.2855 21.8024ZM21.0539 36.7344C19.275 36.7344 17.8263 35.2857 17.8263 33.5001C17.8263 31.7144 19.275 30.2657 21.0539 30.2657C22.8328 30.2657 24.2816 31.7144 24.2816 33.5001C24.2816 35.2857 22.8396 36.7344 21.0539 36.7344ZM34.5035 36.7344C32.7246 36.7344 31.2759 35.2857 31.2759 33.5001C31.2759 31.7144 32.7246 30.2657 34.5035 30.2657C36.2824 30.2657 37.7312 31.7144 37.7312 33.5001C37.7312 35.2857 36.2824 36.7344 34.5035 36.7344ZM47.9531 36.7344C46.1742 36.7344 44.7255 35.2857 44.7255 33.5001C44.7255 31.7144 46.1742 30.2657 47.9531 30.2657C49.732 30.2657 51.1808 31.7144 51.1808 33.5001C51.1808 35.2857 49.732 36.7344 47.9531 36.7344Z"
            fill="#5AB344"
          />
        </svg>

        <div className="ml-4">
          <p className="font-bold">From {sender}</p>
          <p>{message}</p>
        </div>
      </div>

      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="mx-4"
        width="22"
        height="22"
        viewBox="0 0 22 22"
        fill="none"
      >
        <circle cx="11" cy="11" r="11" fill={circleColor} />
      </svg>
    </div>
  );
};

function Notification() {
  const [vendorNav, setVendorNav] = useState(false);
  const handleVendorNav = () => setVendorNav(true);
  const closeVendorNav = () => setVendorNav(false);

  return (
    <div>
      {" "}
      <DashboardNav showNav={vendorNav} hideNav={closeVendorNav} />
      <Header handleNavClick={handleVendorNav} showNav={vendorNav} />
      <section className="lg:ml-[18%] pt-[43%] p-4 md:pt-[23%] lg:pt-[10%] flex flex-col items-center justify-center sm-[10%] h-full bg-[#F2F2F2] ">
        <div class="mt-2 p-4 lg:grid lg:grid-cols-2 lg:gap-8 bg-white w-full shadow-sm  mb-4 ">
          
          <div class="block p-6     lg:mb-0">


            <form class="flex flex-col  justify-between  md:flex-row gap-3">
            <h3 class="mb-2 text-2xl font-bold tracking-tight text-[#343434] ">
              Notification{" "}
            </h3>
              <div class="flex">
                <input
                  type="text"
                  placeholder="Search "
                  class="w-full md:w-80 px-3 h-10 rounded-l border-2  focus:outline-none f"
                />
                <button
                  type="submit"
                  class=" text-[#95989A80] border-[#95989A80] rounded-r px-2 md:px-3 py-0 md:py-1"
                >
                  Filter
                </button>
              </div>
              <select
                id="pricingType"
                name="pricingType"
                class="max-w-sm h-10 border-2 border-[#95989A80] focus:outline-none  text-[#95989A80] rounded px-2 md:px-3 py-0 md:py-1 tracking-wider"
              >
                <option value="All" selected="">
                  Location
                </option>
              </select>
            </form>
          </div>
        </div>
        <div className="bg-white w-full mx-auto   p-4   rounded-lg">
          <div class="flex flex-col gap-2  ">
            <ReusableComponent
              sender="Vikhram Sidney"
              message="Customer inputted the wrong address, and I am finding it hard to locate the seller's location"
              circleColor="#5AB344"
            />
            <ReusableComponent
              sender="Vikhram Sidney"
              message="Customer inputted the wrong address, and I am finding it hard to locate the seller's location"
              circleColor="#5AB344"
            />
            <ReusableComponent
              sender="Vikhram Sidney"
              message="Customer inputted the wrong address, and I am finding it hard to locate the seller's location"
              circleColor="#5AB344"
            />
            <ReusableComponent
              sender="Vikhram Sidney"
              message="Customer inputed the wrong address, and I am finding it hard to locate sellers  location"
              circleColor="#fc0000"
            />
            <ReusableComponent
              sender="Vikhram Sidney"
              message="Customer inputted the wrong address, and I am finding it hard to locate the seller's location"
              circleColor="#5AB344"
            />
          </div>
        </div>
      </section>
    </div>
  );
}

export default Notification;
