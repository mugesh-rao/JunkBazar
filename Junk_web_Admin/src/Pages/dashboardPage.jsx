import { useState } from "react";
import DashboardNav from "../Auth/Dashboard/Nav";
import Header from "../Auth/Dashboard/Header";
import overview from "../assets/PNG/Overview.png";
import recent from "../assets/PNG/Recent Orders.png";
import { Line } from "react-chartjs-2";

import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend,
  } from 'chart.js';

ChartJS.register(
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend
  );
const DashboardPage = () => {
    
  const [vendorNav, setVendorNav] = useState(false);
  const handleVendorNav = () => setVendorNav(true);
  const closeVendorNav = () => setVendorNav(false);

  const options = {
    responsive: true,
    interaction: {
      mode: 'index',
      intersect: false,
    },
    stacked: false,
    plugins: {
      title: {
        display: true,
        text: 'Overview',
      },
    },
    scales: {
      y: {
        type: 'linear',
        display: true,
        position: 'left',
      },
      y1: {
        type: 'linear',
        display: true,
        position: 'right',
        grid: {
          drawOnChartArea: false,
        },
      },
    },
  };
  
  
 
  const data = {
    labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
    datasets: [
      {
        label: 'Earning',
        data: [200, 350, 450, 300, 600, 800, 700],
        borderColor: 'rgb(255, 99, 132)',
        backgroundColor: 'rgba(255, 99, 132, 0.5)',
        yAxisID: 'y',
      },
      {
        label: 'Payout',
        data: [400, 550, 650, 500, 300, 200, 300],
        borderColor: 'rgb(53, 162, 235)',
        backgroundColor: 'rgba(53, 162, 235, 0.5)',
        yAxisID: 'y1',
      },
      {
        label: 'Outstanding',
        data: [300, 450, 550, 400, 700, 900, 800],
        fill: true,
        backgroundColor: 'rgba(255, 99, 132, 0.2)',
        yAxisID: 'y',
      },
    ],
  };
  
  
  
  return (
    <>
      <main className="bg-slate-100">
        <DashboardNav showNav={vendorNav} hideNav={closeVendorNav} />
        <Header handleNavClick={handleVendorNav} showNav={vendorNav} />
        <section className="lg:ml-[18%] pt-[43%] md:pt-[23%] lg:pt-[10%] sm-[10%] h-full ">
          <div className="flex flex-row gap-5 w-full  p-8">
            <div className="bg-white w-full   p-4 h-48 items-center rounded-lg">
              {" "}
              <div className="flex flex-row justify-between ml-4 w-5/6 items-start">
                <div className="relative flex flex-col w-2/5 items-start">
                  <div className="text-center text-sm font-['Gilroy-Medium'] tracking-[0.17] text-[#95989a] absolute top-12 left-1 h-4 w-20">
                    Total Users
                  </div>
                  <div className="text-4xl tracking-[0.05] leading-[54px] text-[#404040] relative mb-3 w-full">
                    11,500
                  </div>
                </div>
                <div
                  id="NewRootRoot"
                  className="flex flex-row w-12 items-start pt-3"
                >
                  <div className="bg-[#ebffdd] flex flex-row justify-center pt-3 w-12 h-12 items-start rounded-lg">
                    <img
                      src="https://file.rendit.io/n/u65N1ImPIEybIy99UmDA.svg"
                      alt="Fasolidusers"
                      id="Fasolidusers"
                      className="w-6"
                    />
                  </div>
                </div>
              </div>
              <div className="flex flex-row justify-between ml-4 w-5/6 items-start pt-10">
                <div className="relative flex flex-col w-2/5 items-start">
                  <div
                    id="NewRootRoot"
                    className="flex flex-row w-12 items-start"
                  >
                    <div className="text-center text-xs font-['Gilroy-Bold'] tracking-[0.17] text-[#81d742] bg-[#ebffdd] flex flex-row w-12 h-5 items-start pl-2 pr-3 rounded">
                      +5.9%
                    </div>
                  </div>
                </div>
                <div
                  id="NewRootRoot"
                  className="flex flex-row w-12 items-start"
                >
                  <img
                    src="https://file.rendit.io/n/X3MEvubBgbYhXFinjzNw.svg"
                    alt="Mioptionsvertical"
                    id="MioptionsverticalRoot"
                    className="w-6"
                  />
                </div>
              </div>
            </div>
            <div className="bg-white w-full   p-4 h-48 items-center rounded-lg">
              {" "}
              <div className="flex flex-row justify-between ml-4 w-5/6 items-start">
                <div className="relative flex flex-col w-2/5 items-start">
                  <div className="text-center text-sm font-['Gilroy-Medium'] tracking-[0.17] text-[#95989a] absolute top-12 left-1 h-4 w-20">
                    Total Orders
                  </div>
                  <div className="text-4xl tracking-[0.05] leading-[54px] text-[#404040] relative mb-3 w-full">
                    45,580
                  </div>
                </div>
                <div
                  id="NewRootRoot"
                  className="flex flex-row w-12 items-start pt-3"
                >
                  <div className="bg-[#ebffdd] flex flex-row justify-center pt-3 w-12 h-12 items-start rounded-lg">
                    <img
                      src="https://file.rendit.io/n/mmhfLa7gwAn78kmBQEKG.svg"
                      alt="Materialsymbolsorderapprovesharp"
                      className="w-6"
                    />
                  </div>
                </div>
              </div>
              <div className="flex flex-row justify-between ml-4 w-5/6 items-start pt-10">
                <div className="relative flex flex-col w-2/5 items-start">
                  <div
                    id="NewRootRoot"
                    className="flex flex-row w-12 items-start"
                  >
                    <div className="text-center text-xs font-['Gilroy-Bold'] tracking-[0.17] text-[#81d742] bg-[#ebffdd] flex flex-row w-12 h-5 items-start pl-2 pr-3 rounded">
                      +5.9%
                    </div>
                  </div>
                </div>
                <div
                  id="NewRootRoot"
                  className="flex flex-row w-12 items-start"
                >
                  <img
                    src="https://file.rendit.io/n/X3MEvubBgbYhXFinjzNw.svg"
                    alt="Mioptionsvertical"
                    id="MioptionsverticalRoot"
                    className="w-6"
                  />
                </div>
              </div>
            </div>
            <div className="bg-white w-full   p-4 h-48 items-center rounded-lg">
              {" "}
              <div className="flex flex-row justify-between ml-4 w-5/6 items-start">
                <div className="relative flex flex-col w-2/5 items-start">
                  <div className="text-center text-sm font-['Gilroy-Medium'] tracking-[0.17] text-[#95989a] absolute top-12 left-1 h-4 w-20">
                    Total Vendors
                  </div>
                  <div className="text-4xl tracking-[0.05] leading-[54px] text-[#404040] relative mb-3 w-full">
                    1,500
                  </div>
                </div>
                <div
                  id="NewRootRoot"
                  className="flex flex-row w-12 items-start pt-3"
                >
                  <div className="bg-[#ebffdd] flex flex-row justify-center pt-3 w-12 h-12 items-start rounded-lg">
                    <img
                      src="https://file.rendit.io/n/dXnoJll0f9ZBQMdA7Yp4.svg"
                      alt="Fasolidusers"
                      id="Fasolidusers"
                      className="mt-px w-6"
                    />
                  </div>
                </div>
              </div>
              <div className="flex flex-row justify-between ml-4 w-5/6 items-start pt-10">
                <div className="relative flex flex-col w-2/5 items-start">
                  <div
                    id="NewRootRoot"
                    className="flex flex-row w-12 items-start"
                  >
                    <div className="text-center text-xs font-['Gilroy-Bold'] tracking-[0.17] text-[#e33629] bg-[rgba(227,_54,_41,_0.1)] flex flex-row w-12 h-5 items-start px-2 rounded">
                      -2.1%
                    </div>
                  </div>
                </div>
                <div
                  id="NewRootRoot"
                  className="flex flex-row w-12 items-start"
                >
                  <img
                    src="https://file.rendit.io/n/X3MEvubBgbYhXFinjzNw.svg"
                    alt="Mioptionsvertical"
                    id="MioptionsverticalRoot"
                    className="w-6"
                  />
                </div>
              </div>
            </div>
            <div className="bg-white w-full   p-4 h-48 items-center rounded-lg">
              <div className="flex flex-row justify-between ml-4 w-5/6 items-start">
                <div className="relative flex flex-col w-2/5 items-start">
                  <div className="text-center text-sm font-['Gilroy-Medium'] tracking-[0.17] text-[#95989a] absolute top-12 left-1 h-4 w-24">
                    Total Earnings
                  </div>
                  <div className="text-4xl tracking-[0.05] leading-[54px] text-[#404040] relative mb-3 w-full">
                    ₹651,500
                  </div>
                </div>
                <div
                  id="NewRootRoot"
                  className="flex flex-row w-12 items-start pt-3"
                >
                  <div className="bg-[#ebffdd] flex flex-row justify-center pt-3 w-12 h-12 items-start rounded-lg">
                    <img
                      src="https://file.rendit.io/n/xTUuxkIJrqua5ofjt4cm.svg"
                      alt="Fluentmoneyfilled"
                      id="FluentmoneyfilledRoot"
                      className="w-8"
                    />
                  </div>
                </div>
              </div>
              <div className="flex flex-row justify-between ml-4 w-5/6 items-start pt-10">
                <div className="relative flex flex-col w-2/5 items-start">
                  <div
                    id="NewRootRoot"
                    className="flex flex-row w-12 items-start"
                  >
                    <div className="text-center text-xs font-['Gilroy-Bold'] tracking-[0.17] text-[#81d742] bg-[#ebffdd] flex flex-row w-12 h-5 items-start pl-2 pr-3 rounded">
                      +5.9%
                    </div>
                  </div>
                </div>
                <div
                  id="NewRootRoot"
                  className="flex flex-row w-12 items-start"
                >
                  <img
                    src="https://file.rendit.io/n/X3MEvubBgbYhXFinjzNw.svg"
                    alt="Mioptionsvertical"
                    id="MioptionsverticalRoot"
                    className="w-6"
                  />
                </div>
              </div>
            </div>
          </div>

          <div class="flex flex-row mx-10 gap-2">
          <div class="bg-white w-full h-full p-4 text-white flex items-center justify-center">
        <div className="w-full h-full">
            <Line options={options} data={data} />
        </div>
    </div>

    <div class="bg-white px-4 py-3 w-full h-full text-white flex items-center justify-center">
                               

                               <ol class="relative text-gray-500 border-s  border-gray-400 ">                  
                                  <li class="mb-10 ms-6 ">            
                                  <span class="absolute flex items-center justify-center w-4 h-4 bg-lime-400 rounded-full -start-2 ring-2 ring-gray-600 ">
                                   </span>
                                   <div className="flex flex-row items-center justify-center">
                               
                                   <h3 class="font-medium leading-tight">Order ID #2454</h3>
                                   <span className="font-bold mx-3 "> -------------------------</span>
                                       <span class=" text-gray-500">20 min ago</span>
                                   </div>
                                   <p class="text-sm">Chopra placed an order 1 min ago</p>
                               </li>
                               <li class="mb-10 ms-6 ">            
                                  <span class="absolute flex items-center justify-center w-4 h-4 bg-lime-400 rounded-full -start-2 ring-2 ring-gray-600 ">
                                   </span>
                                   <div className="flex flex-row items-center justify-center">
                               
                                   <h3 class="font-medium leading-tight">Order ID #2454</h3>
                                   <span className="font-bold mx-3 "> -------------------------</span>
                                       <span class=" text-gray-500">20 min ago</span>
                                   </div>
                                   <p class="text-sm">Chopra placed an order 1 min ago</p>
                               </li> <li class="mb-10 ms-6 ">            
                                  <span class="absolute flex items-center justify-center w-4 h-4 bg-lime-400 rounded-full -start-2 ring-2 ring-gray-600 ">
                                   </span>
                                   <div className="flex flex-row items-center justify-center">
                               
                                   <h3 class="font-medium leading-tight">Order ID #2454</h3>
                                   <span className="font-bold mx-3 "> -------------------------</span>
                                       <span class=" text-gray-500">20 min ago</span>
                                   </div>
                                   <p class="text-sm">Chopra placed an order 1 min ago</p>
                               </li>
                                   <li class="ms-6">
                                   <span class="absolute flex items-center justify-center w-4 h-4 bg-lime-400 rounded-full -start-2 ring-2 ring-gray-600 ">
                                          
                                       </span>
                                       <div className="flex flex-row items-center justify-center">
                               
                               <h3 class="font-medium leading-tight">Order ID #2454</h3>
                               <span className="font-bold mx-3 "> -------------------------</span>
                                   <span class=" text-gray-500">20 min ago</span>
                               </div>
                               <p class="text-sm">Chopra placed an order 1 min ago</p>
                                   </li>
                               </ol>
                               
                                                           </div>

                    </div>

          <div className="bg-white  shadow-lg m-10 p-5">
            <div class="-mx-4 -mt-5 sm:-mx-8 px-4 sm:px-8 py-4 overflow-x-auto ">
              <div class=" min-w-full  overflow-hidden">
                <table class="min-w-full border-none">
                  <thead className="bg-[#EBFFDD] ">
                    <tr className="rounded">
                      <th class="px-5 py-3   text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                        ID
                      </th>
                      <th class="px-5 py-3   text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                        NAME
                      </th>
                      <th class="px-5 py-3  text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                        CATEGORY
                      </th>
                      <th class="px-5 py-3 0 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                        PRICE
                      </th>
                      <th class="px-5 py-3  text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                        KILOGRAM
                      </th>
                      <th class="px-5 text-start py-3   text-xs font-semibold text-gray-600 uppercase tracking-wider">
                        GEOGRAPHY
                      </th>
                      <th class="px-5 text-start py-3   text-xs font-semibold text-gray-600 uppercase tracking-wider">
                        LOCATION
                      </th>
                      <th class="px-5 text-start py-3   text-xs font-semibold text-gray-600 uppercase tracking-wider">
                        STATUS
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="even:bg-[#FAFAFA] ">
                      <td class="px-5 py-5   text-sm">
                        <p class="text-[#707070] whitespace-no-wrap">#23</p>
                      </td>
                      <td class="px-5 py-5  text-sm">
                        <p class="text-[#707070] whitespace-no-wrap">
                          Sahim Adar
                        </p>
                      </td>
                      <td class="px-5 py-5   text-sm">
                        <p class="text-[#707070] whitespace-no-wrap">Plastic</p>
                      </td>
                      <td class="px-5 py-5  text-sm">
                        <p class="text-[#707070] whitespace-no-wrap">₹234</p>
                      </td>
                      <td class="px-5 py-5  text-sm">
                        <span class="relative inline-block px-3 py-1 font-semibold text-green-900 leading-tight">
                          <span
                            aria-hidden
                            class="absolute inset-0  opacity-50 rounded-full"
                          ></span>
                          <span class="relative">-23kg</span>
                        </span>
                      </td>
                      <td class="px-5 py-5  text-sm">
                        <p class="text-[#707070] whitespace-no-wrap">
                          Delhi, Inidia
                        </p>
                      </td>
                      <td class="px-5 py-5  text-sm">
                        <p class="text-[#707070] whitespace-no-wrap">
                          456, New street, Delhi, India
                        </p>
                      </td>

                      <td class="px-5 py-5  text-sm">
                        <p class="text-[#707070] whitespace-no-wrap">Online</p>
                      </td>
                    </tr>
                  </tbody>
                </table>
                {/* <div
                                    class="px-5 py-5 bg-white border-t flex flex-col xs:flex-row items-center xs:justify-between          ">
                                    <span class="text-xs xs:text-sm text-gray-900">
                                        Total Scrap : 
                                    </span>
                                    <div class="inline-flex mt-2 xs:mt-0">
                                        <PaginationComponent

                                          
                                        />
                                    </div>
                                </div> */}
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  );
};

export default DashboardPage;
