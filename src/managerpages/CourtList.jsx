// import React, { useEffect, useState } from "react";
// import CourtCard from "../CourtCard";
// import { getCourts } from "../../api/courtAPI";

// const CourtList = () => {
//   const [courtData, setCourtData] = useState([]);

//   useEffect(() => {
//     getCourts().then((data) => {
//       setCourtData(data);
//     });
//   }, []);

//   const [currentPage, setCurrentPage] = useState(1);
//   const [searchTerm, setSearchTerm] = useState("");
//   const [selectedTime, setSelectedTime] = useState("");
//   const [selectedLocation, setSelectedLocation] = useState("");

//   const courtsPerPage = 6;

//   const handleTimeChange = (event) => {
//     setSelectedTime(event.target.value);
//   };

//   const handleLocationChange = (event) => {
//     setSelectedLocation(event.target.value);
//   };

//   const filteredCourts = courtData
//     .filter(
//       (court) =>
//         court.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
//         court.location.toLowerCase().includes(searchTerm.toLowerCase())
//     )
//     .filter((court) => {
//       if (selectedTime === "") return true;
//       return court.availableTimes.includes(selectedTime);
//     })
//     .filter((court) => {
//       if (selectedLocation === "") return true;
//       return court.location.includes(selectedLocation);
//     });

//   const indexOfLastCourt = currentPage * courtsPerPage;
//   const indexOfFirstCourt = indexOfLastCourt - courtsPerPage;
//   const currentCourts = filteredCourts.slice(indexOfFirstCourt, indexOfLastCourt);

//   const totalPages = Math.ceil(filteredCourts.length / courtsPerPage);

//   return (
//     <div className="container mx-auto mb-6">
//       <h1 className="text-4xl font-bold text-center my-8">Danh sách sân</h1>
//       <div className="bg-gray-100 p-6 rounded-lg shadow-md mb-8 flex items-center justify-between">
//         <input
//           type="text"
//           placeholder="Tìm kiếm sân..."
//           className="px-4 py-2 border rounded-lg w-full md:w-1/3 mr-4"
//           value={searchTerm}
//           onChange={(e) => setSearchTerm(e.target.value)}
//         />
//         <div className="flex items-center space-x-4">
//           <div>
//             <label className="block mb-2">Khung giờ</label>
//             <select
//               className="px-4 py-2 border rounded"
//               value={selectedTime}
//               onChange={handleTimeChange}
//             >
//               <option value="">Tất cả</option>
//               <option value="08:00">08:00</option>
//               <option value="09:00">09:00</option>
//               <option value="10:00">10:00</option>
//               <option value="11:00">11:00</option>
//               <option value="12:00">12:00</option>
//               <option value="13:00">13:00</option>
//               <option value="14:00">14:00</option>
//               <option value="15:00">15:00</option>
//               <option value="16:00">16:00</option>
//               <option value="17:00">17:00</option>
//             </select>
//           </div>
//           <div>
//             <label className="block mb-2">Khu vực</label>
//             <select
//               className="px-4 py-2 border rounded"
//               value={selectedLocation}
//               onChange={handleLocationChange}
//             >
//               <option value="">Tất cả</option>
//               <option value="Quận 1, TP.HCM">Quận 1, TP.HCM</option>
//               <option value="Quận 3, TP.HCM">Quận 3, TP.HCM</option>
//               <option value="Quận 5, TP.HCM">Quận 5, TP.HCM</option>
//             </select>
//           </div>
//         </div>
//       </div>
//       <div className="flex flex-wrap justify-center bg-white p-4 rounded-lg shadow-md">
//         {currentCourts.map((court) => (
//           <CourtCard key={court.id} court={court} />
//         ))}
//       </div>
//       <div className="flex justify-center mt-4">
//         <button
//           className="px-4 py-2 mx-2 bg-blue-500 text-white rounded hover:bg-blue-600"
//           disabled={currentPage === 1}
//           onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
//         >
//           Previous
//         </button>
//         {[...Array(totalPages)].map((_, index) => (
//           <button
//             key={index}
//             className={`px-4 py-2 mx-2 ${
//               currentPage === index + 1
//                 ? "bg-blue-700 text-white"
//                 : "bg-blue-500 text-white"
//             } rounded hover:bg-blue-600`}
//             onClick={() => setCurrentPage(index + 1)}
//           >
//             {index + 1}
//           </button>
//         ))}
//         <button
//           className="px-4 py-2 mx-2 bg-blue-500 text-white rounded hover:bg-blue-600"
//           disabled={currentPage === totalPages}
//           onClick={() =>
//             setCurrentPage((prev) => Math.min(prev + 1, totalPages))
//           }
//         >
//           Next
//         </button>
//       </div>
//     </div>
//   );
// };

// export default CourtList;
