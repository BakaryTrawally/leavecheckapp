// import React, { useState, useContext, useEffect } from "react";
// import LeaveCard from "../components/LeaveCard";
// import { FormContext } from '../FormContext';


// function Dashboard() {
//   const [searchId, setSearchId] = useState("");
//   const [selectedLeave, setSelectedLeave] = useState(null);
//   const [hasSearched, setHasSearched] = useState(false);

//   const {
//     formData,
//   } = useContext(FormContext);

//   const getLeaveStatus = (leave) => {
//     const today = new Date();
//     const proceeding = new Date(leave.proceedingDate);
//     const resuming = new Date(leave.resumingDate);

//     if (today < proceeding) {
//       return {
//         text: "Pending",
//         color: "bg-yellow-500",
//       };
//     }

//     if (today >= proceeding && today < resuming) {
//       return {
//         text: "Active",
//         color: "bg-green-500",
//       };
//     }

//     return {
//       text: "Completed",
//       color: "bg-red-500",
//     };
//   };

//   const handleSearch = () => {
//     console.log("Searching for:", searchId);

//     formData.forEach((leave) => {
//       console.log("Database OPS:", leave.ops, typeof leave.ops);
//     });

//     const result = formData.find(
//       (leave) => String(leave.ops).trim() === searchId.trim()
//     );

//     console.log("Result:", result);
//     setSelectedLeave(result || null);
//   };

//   return (
//     <div className="
// min-h-screen
// bg-gray-100
// p-5
// flex
// justify-center
// ">

//       <div className="w-full max-w-md">
//         <div className="
//     bg-white
//     rounded-3xl
//     shadow-sm
//     p-5
//     mb-5
//     ">
//           <input
//             type="number"
//             min={0}
//             value={searchId}
//             onChange={(e) => setSearchId(e.target.value)}
//             placeholder="Enter your OPS E.G 332"
//             className="
//     w-full
//     border
//     rounded-xl
//     p-3
//     outline-none
//     border
//     "
//           />
//           <button
//             onClick={handleSearch}
//             className="
//     mt-4
//     w-full
//     bg-gray-500
//     hover:bg-gray-700
//     text-white
//     p-2
//     rounded-md
//     font-semibold
//     "
//           >
//             Search Leave
//           </button>
//         </div>

//         {
//           selectedLeave ? (
//             <LeaveCard leave={selectedLeave} />
//           )
//             :
//             (
//               <p className="text-center text-gray-500">
//                 Enter OPS Numbers to view leave details
//               </p>
//             )
//         }
//       </div>
//     </div>

//   )

// }


// export default Dashboard;

import React, { useState, useContext } from "react";
import LeaveCard from "../components/LeaveCard";
import { FormContext } from "../FormContext";

function Dashboard() {
  const [searchId, setSearchId] = useState("");
  const [selectedLeave, setSelectedLeave] = useState(null);
  const [hasSearched, setHasSearched] = useState(false);

  const { formData } = useContext(FormContext);

  // Make sure formData is an array
  const leaveRecords = Array.isArray(formData) ? formData : [];

  // SEARCH LEAVE BY OPS NUMBER
  const handleSearch = () => {
    const opsNumber = searchId.trim();

    // Check if the input is empty
    if (!opsNumber) {
      setSelectedLeave(null);
      setHasSearched(false);
      return;
    }

    console.log("Searching for OPS:", opsNumber);

    // Find matching OPS number
    const result = leaveRecords.find(
      (leave) =>
        String(leave.ops).trim() === opsNumber
    );

    console.log("Search result:", result);

    // Update search results
    setSelectedLeave(result || null);
    setHasSearched(true);
  };

  return (
    <div className="min-h-screen bg-gray-100 p-5 flex justify-center">

      <div className="w-full max-w-md">

        {/* SEARCH SECTION */}
        <div className="bg-white rounded-3xl shadow-sm p-5 mb-5">

          <input
            type="text"
            inputMode="numeric"
            value={searchId}
            onChange={(e) => {
              setSearchId(e.target.value);
              setSelectedLeave(null);
              setHasSearched(false);
            }}
            placeholder="Enter your OPS E.G 332"
            className="w-full border rounded-xl p-3 outline-none focus:ring-2 focus:ring-blue-400"
          />

          <button
            type="button"
            onClick={handleSearch}
            className="mt-4 w-full bg-gray-500 hover:bg-gray-700 text-white p-2 rounded-md font-semibold"
          >
            Search Leave
          </button>

        </div>

        {/* SEARCH RESULTS */}

        {selectedLeave ? (

          // MATCH FOUND: SHOW LEAVE DETAILS
          <LeaveCard leave={selectedLeave} />

        ) : hasSearched ? (

          // NO MATCH FOUND
          <div className="bg-white rounded-2xl shadow-sm p-6 text-center">

            <div className="text-red-500 text-4xl mb-3">
              <i className="fa-solid fa-circle-exclamation"></i>
            </div>

            <h3 className="text-red-600 font-bold text-lg">
              No Leave Record Found!
            </h3>

            <p className="text-gray-500 text-sm mt-2">
              There is no leave for this individual.
            </p>

            <p className="text-gray-400 text-sm mt-1">
              OPS Number: {searchId}
            </p>

          </div>

        ) : (

          // INITIAL MESSAGE
          <p className="text-center text-gray-500">
            Enter OPS Number to view leave details.
          </p>

        )}

      </div>
    </div>
  );
}

export default Dashboard;
