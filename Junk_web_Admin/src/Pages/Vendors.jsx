import { useEffect, useState } from "react";
import axiosInstance from "../api-config/axiosInstance";
import DashboardNav from "../Auth/Dashboard/Nav";
import Header from "../Auth/Dashboard/Header";
import PaginationComponent from "../utils/PaginationComponents";
import { useNavigate } from "react-router-dom";

const Vendors = () => {
    const [vendorNav, setVendorNav] = useState(false);
    const handleVendorNav = () => setVendorNav(true);
    const closeVendorNav = () => setVendorNav(false);
    const [vendorList, setVendorList] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const itemsPerPage = 4; // You can adjust this based on your design
    const [loading, setLoading] = useState(true);
    const [scrapList, setScrapList] = useState([]);
    const totalPages = Math.ceil(scrapList.length / itemsPerPage);
    const [totalScrap, setTotalScrap] = useState();
    const navigate = useNavigate();


    useEffect(() => {
        window.scrollTo(0, 0);
        fetchData();
    }, []);

    const fetchData = async () => {
        try {
            const response = await axiosInstance.get("/getVendor");

            const vendor = JSON.parse(response.data.data);
            setVendorList(vendor.vendor)
            console.log("Customer list response", vendor);
            setTotalScrap(vendor.totalScrapCount);
        }
        catch (error) {
            console.error("Error fetching data:", error);
        }
    }

    const handlePageChange = (pageNumber) => {
        setCurrentPage(pageNumber);
    };

    const handleDetails = (item) => {
        console.log("Vendor DEtails", item)
        navigate("/VendorDetails", {
            state: {
                item
            }
        })
    }



    const renderData = () => {
        const startIndex = (currentPage - 1) * itemsPerPage;
        const endIndex = startIndex + itemsPerPage;
        const currentItems = vendorList.slice(startIndex, endIndex);
        return currentItems?.map((item) => (
            <tr className="even:bg-[#FAFAFA] ">
                <td class="px-5 py-5   text-sm">
                    <div class="flex items-center">
                        <div class="flex-shrink-0 w-10 h-10">
                            <img class="w-full h-full rounded-full"
                                src={item.profileUrl}
                                alt="" />
                        </div>
                        <div class="ml-3">
                            <p class="text-gray-900 whitespace-no-wrap">
                                {item.firstName}{" "}{item.lastName}
                            </p>
                        </div>
                    </div>
                </td>
                <td class="px-5 py-5   text-sm">
                    <p class="text-gray-900 whitespace-no-wrap">{item.city}</p>
                </td>
                <td class="px-5 py-5   text-sm">
                    <p class="text-gray-900 whitespace-no-wrap">
                        {item.dialCode}{" "} {item.phoneNumber}
                    </p>
                </td>
                <td class="px-5 py-5   text-sm">
                    <span
                        class="relative inline-block px-3 py-1 font-semibold text-green-900 leading-tight">
                        <span aria-hidden
                            class="absolute inset-0  opacity-50 rounded-full"></span>
                        <span class="relative">{item.address}</span>
                    </span>
                </td>
                <td class="px-5 py-5   text-sm">
                    <p class="text-gray-900 whitespace-no-wrap">
                        {item.scrapSoldCount}
                    </p>
                </td>
                <td class="px-5 py-5   text-sm">
                    <button onClick={() => handleDetails(item)}>
                        Details
                    </button>
                </td>
            </tr>
        ))
    }
    return (
        <>
            <main>
                <DashboardNav showNav={vendorNav} hideNav={closeVendorNav} />
                <Header
                    handleNavClick={handleVendorNav}
                    showNav={vendorNav}
                />


                <section className="lg:ml-[18%] pt-[43%] md:pt-[23%] lg:pt-[10%] sm-[10%] h-full ">
                    <div class="mt-10 p-6 lg:grid lg:grid-cols-2 lg:gap-8 bg-white  shadow-lg m-10">
                        <a href="#"
                            class="block p-6 mb-6   lg:mb-0">
                            <h3 class="mb-2 text-2xl font-bold tracking-tight text-[#343434] dark:text-white">Vendor Details</h3>

                        </a>
                        <a href="#"
                            class="block p-6 mb-6    lg:mb-0">
                            <form class="flex flex-col justify-end d md:flex-row gap-3">
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

                    <div className="bg-white  shadow-lg m-10 p-5">
                        <div class="-mx-4 -mt-5 sm:-mx-8 px-4 sm:px-8 py-4 overflow-x-auto ">
                            <table class="min-w-full border-none">
                                <thead className="bg-[#EBFFDD] ">

                                    <tr>
                                        <th
                                            class="px-5 py-3   text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                                            Name
                                        </th>
                                        <th
                                            class="px-5 py-3   text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                                            City
                                        </th>
                                        <th
                                            class="px-5 py-3   text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                                            Phone Number
                                        </th>
                                        <th
                                            class="px-5 py-3   text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                                            Address
                                        </th>
                                        <th
                                            class="px-5 py-3   text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                                            Scrap Sold
                                        </th>
                                        <th
                                            class="px-5 py-3   text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                                            Action
                                        </th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {renderData()}
                                </tbody>
                            </table>
                            <div
                                class="px-5 py-5 bg-white border-t flex flex-col xs:flex-row items-center xs:justify-between          ">
                                <span class="text-xs xs:text-sm text-gray-900">
                                    Total Scrap : {totalScrap}
                                </span>
                                <div class="inline-flex mt-2 xs:mt-0">
                                    <PaginationComponent
                                        totalPages={totalPages}
                                        currentPage={currentPage}
                                        onPageChange={handlePageChange}
                                    />
                                </div>
                            </div>
                        </div>
                    </div>

                </section>
            </main >
        </>

    )
}

export default Vendors