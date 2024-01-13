import { useState } from "react";
import Header from "../../Auth/Dashboard/Header";
import DashboardNav from "../../Auth/Dashboard/Nav";
import { useLocation } from "react-router-dom";

const VendorDetails = () => {
    const [vendorNav, setVendorNav] = useState(false);
    const handleVendorNav = () => setVendorNav(true);
    const closeVendorNav = () => setVendorNav(false);

    const location = useLocation();

    console.log("Scrap Details", location.state.item);

    const vendorDetails = location.state.item;


    return (
        <main>
            <DashboardNav showNav={vendorNav} hideNav={closeVendorNav} />
            <Header
                handleNavClick={handleVendorNav}
                showNav={vendorNav}
            />
            <section className="lg:ml-[18%] pt-[43%] md:pt-[23%] lg:pt-[15%] bg-green-50 h-full ">
                <section className="mx-5 border-2 r mb-2 block  md:max-w-[600px] md:mx-auto">
                    <div class="bg-white overflow-hidden shadow rounded-lg border">
                        <div class="px-4 py-5 sm:px-6">
                            <h3 class="text-lg leading-6 font-medium text-gray-900">
                                Scrap Details
                            </h3>
                            <p class="mt-1 max-w-2xl text-sm text-gray-500">

                            </p>
                        </div>

                        <div class="border-t border-gray-200 px-4 py-5 sm:p-0">
                            <dl class="sm:divide-y sm:divide-gray-200">
                                <div class="py-3 sm:py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                                    <img
                                        src={vendorDetails.profileUrl}
                                        alt="location_icon"
                                        className=" cursor-pointer"
                                    />
                                    <dd class="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                                        {vendorDetails.firstName}
                                    </dd>
                                </div>
                                <div class="py-3 sm:py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                                    <dd class="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                                        phoneNumber
                                    </dd>
                                    <dd class="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                                        {vendorDetails.dialCode} {vendorDetails.phoneNumber}
                                    </dd>
                                </div>

                                <div class="py-3 sm:py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                                    <dt class="text-sm font-medium text-gray-500">
                                        Address
                                    </dt>
                                    <dd class="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                                        {vendorDetails.address}
                                    </dd>
                                </div>
                                <div class="py-3 sm:py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                                    <dt class="text-sm font-medium text-gray-500">
                                        Pan Card
                                    </dt>
                                    <img
                                        src={vendorDetails.panUrl}
                                        alt="location_icon"
                                        className=" cursor-pointer"
                                    />
                                </div>
                                <div class="py-3 sm:py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                                    <dt class="text-sm font-medium text-gray-500">
                                        Aadhar Card
                                    </dt>
                                    <img
                                        src={vendorDetails.aadhaarUrl}
                                        alt="location_icon"
                                        className=" cursor-pointer"
                                    />
                                </div>

                            </dl>
                        </div>
                    </div>
                </section>
            </section>
        </main>
    )
}

export default VendorDetails;