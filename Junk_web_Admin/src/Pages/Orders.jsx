import { useEffect, useState } from "react";
import Header from "../Auth/Dashboard/Header";
import DashboardNav from "../Auth/Dashboard/Nav";
import axiosInstance from "../api-config/axiosInstance";

const Orders = () => {

    const [vendorNav, setVendorNav] = useState(false);
    const handleVendorNav = () => setVendorNav(true);
    const closeVendorNav = () => setVendorNav(false);

    const [order, setOrder] = useState([]);

  

    const fetchData = async () => {
        try {
            const scrap = await axiosInstance.get("/getPendingOrdersAssignToAdmin");

            const scraps = JSON.parse(scrap.data.data);
            // setScrapList(scraps.scrap)
            // setTotalScrap(scraps.totalScrapCount)
            setOrder(scraps.scrap);
            console.log("Customer list response", scraps);

        }
        catch (error) {
            console.error("Error fetching data:", error);
        }
    }

    useEffect(() => {
        window.scrollTo(0, 0);
        fetchData();
        console.log(order ,"order");
    }, []);

    const render = () => {
        return Array.isArray(order) && order.length > 0 ? (
            order.map((item) => (
                <div
                class="block p-4 mb-6 bg-white border border-gray-200 rounded-lg shadow-md  lg:mb-0 overflow-hidden">
                <div className="flex flex-col mb-px gap-6  items-start p-4">
                    <div
                        id="NewOrder1"
                        className="text-center text-2xl tracking-[0.19] text-[#4a4a4a]"
                    >
                        New Order <span className="font-['Gilroy-Regular']">{item.userId}</span>
                    </div>
                    <div class="w-full  lg:grid lg:grid-cols-2 lg:gap-8 gap-20">
                        <div
                            class=" lg:mb-0">
                            <h3 class="mb-2 text-2xl font-bold tracking-tight text-[#343434] ">Customers Name</h3>
                            <p>
  {item.addressInfo.address}, {item.addressInfo.city}, {item.addressInfo.stateCode}, {item.addressInfo.countryCode}, Pincode: {item.addressInfo.pincode},
</p>

                        </div>
                        <div class="  lg:mb-0">
                            <h3 class="mb-2 text-2xl font-bold tracking-tight text-[#343434] ">Address</h3>
                            <p>456, Amaravati–Anantapur....</p>
                        </div>

                    </div>
                    <div class="w-full mt-5  lg:grid lg:grid-cols-2 lg:gap-8 gap-20">
                        <div
                            class=" lg:mb-0">
                            <h3 class="mb-2 text-2xl font-bold tracking-tight text-[#343434] ">Customers Name</h3>
                            <p>{item.firstName} {item.lastName}</p>
                        </div>
                        <div
                            class="  lg:mb-0">
                            <h3 class="mb-2 text-2xl font-bold tracking-tight text-[#343434] ">Address</h3>
                            <p>{item.address}, {item.city}, {item.stateCode} - {item.countryCode}</p>
                        </div>

                    </div>
                    <div
                        id="NewOrder1"
                        className="text-center text-2xl tracking-[0.19] text-[#4a4a4a]"
                    >
                        Closest Vendor
                    </div>

                    <div>
                    <div class="w-full overflow-x-auto">
    <div class="">
        <table class=" border-none overflow-x-scroll ">
            <thead className="bg-[#EBFFDD]">
                <tr className="rounded">
                    <th class="px-5 py-3 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                        Name
                    </th>
                    <th class="px-5 py-3 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                        Landmark
                    </th>
                    <th class="px-5 py-3 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                        Status
                    </th>
                    <th class="px-5 py-3 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                        Select
                    </th>
                </tr>
            </thead>
            <tbody>
            {item.vendors.map((item) => (
          <tr key={item.scrapId}>
            <td className="px-5 py-3">{item.scrapId}</td>
            <td className="px-5 py-3">{item.phoneNumber}</td>
            <td className="px-5 py-3">{item.quantityType}</td>
            <td className="px-5 py-3">{item.amount}</td>
            <td className="px-5 py-3">{item.quantity}</td>
            <td className="px-5 py-3">
              {/* Add your action buttons or any other dynamic content here */}
            </td>
          </tr>
        ))}
            </tbody>
        </table>
    </div>
</div>

                    </div>

                    <div class="w-full ">
                       
                        <div
                            class=" flex justify-end  gap-2 lg:mb-0">
                            <button className="border border-slate-400 p-3 rounded-2xl ">Cancel</button>
                            <button className="bg-[#5AB344] border p-3 rounded-2xl  text-white">Assign Order</button>
                        </div>

                    </div>

                </div>
            </div>
            ))
        ) : (
            <p>No orders available.</p>
        );
    };
    



    return (

        <>
            <main className="bg-slate-100">
                <DashboardNav showNav={vendorNav} hideNav={closeVendorNav} />
                <Header
                    handleNavClick={handleVendorNav}
                    showNav={vendorNav}
                />
                <section className="lg:ml-[18%] pt-[43%] md:pt-[23%] lg:pt-[10%] sm-[10%] h-full ">
                    <div class="mt-2 p-6 lg:grid lg:grid-cols-2 lg:gap-8 bg-white  shadow-sm mx-4">
                        <a href="#"
                            class="block p-6 mb-6   lg:mb-0">
                            <h3 class="mb-2 text-2xl font-bold tracking-tight text-[#343434] ">New Pickup Alert</h3>

                        </a>
                        <a href="#"
                            class="block p-6 mb-6    lg:mb-0">
                            <form class="flex flex-col  justify-end  md:flex-row gap-3">
                                <div class="flex">
                                    <input type="text" placeholder="Search "
                                        class="w-full md:w-80 px-3 h-10 rounded-l border-2  focus:outline-none f"
                                    />
                                    <button type="submit" class=" text-[#95989A80] border-[#95989A80] rounded-r px-2 md:px-3 py-0 md:py-1">Filter</button>
                                </div>
                                <select id="pricingType" name="pricingType"
                                    class="max-w-sm h-10 border-2 border-[#95989A80] focus:outline-none  text-[#95989A80] rounded px-2 md:px-3 py-0 md:py-1 tracking-wider">
                                    <option value="All" selected="">Location</option>

                                </select>
                            </form>

                        </a>

                    </div>

                    <div class="mt-10 p-4 lg:grid lg:grid-cols-2 lg:gap-10 gap-10">
                        {render()}
                        {/* <a href="#"
                            class="block p-6 mb-6 bg-white border border-gray-200 rounded-lg shadow-md dark:bg-gray-800 dark:hover:bg-gray-700 hover:bg-gray-100 dark:border-gray-700 lg:mb-0">
                            <div className="flex flex-col mb-px gap-6 w-5/6 items-start p-10">
                                <div
                                    id="NewOrder1"
                                    className="text-center text-2xl tracking-[0.19] text-[#4a4a4a]"
                                >
                                    New Order <span className="font-['Gilroy-Regular']">#24521</span>
                                </div>
                                <div class="w-full  lg:grid lg:grid-cols-2 lg:gap-8 gap-20">
                                    <a href="#"
                                        class=" lg:mb-0">
                                        <h3 class="mb-2 text-2xl font-bold tracking-tight text-[#343434] ">Customers Name</h3>
                                        <p>Sahim Adar</p>
                                    </a>
                                    <a href="#"
                                        class="   lg:mb-0">
                                        <h3 class="mb-2 text-2xl font-bold tracking-tight text-[#343434] ">Address</h3>
                                        <p>456, Amaravati–Anantapur....</p>
                                    </a>

                                </div>
                                <div class="w-full mt-5  lg:grid lg:grid-cols-2 lg:gap-8 gap-20">
                                    <a href="#"
                                        class=" lg:mb-0">
                                        <h3 class="mb-2 text-2xl font-bold tracking-tight text-[#343434] ">Customers Name</h3>
                                        <p>Sahim Adar</p>
                                    </a>
                                    <a href="#"
                                        class="   lg:mb-0">
                                        <h3 class="mb-2 text-2xl font-bold tracking-tight text-[#343434] ">Address</h3>
                                        <p>456, Amaravati–Anantapur....</p>
                                    </a>

                                </div>
                                <div
                                    id="NewOrder1"
                                    className="text-center text-2xl tracking-[0.19] text-[#4a4a4a]"
                                >
                                    Closest Vendor
                                </div>

                            </div>
                        </a> */}

                    </div>



                </section>
            </main>
        </>


    )
}

export default Orders;