import React, { useState, useContext, useEffect } from "react";
import LeaveCard from "../components/LeaveCard";
import { FormContext } from '../FormContext';


function Dashboard(){
const [searchId, setSearchId] = useState("");
const [selectedLeave, setSelectedLeave] = useState(null);

 const {
   formData,
  } = useContext(FormContext);

// const leaves = [
//   {
//     "id": 1,
//     "name": "Bakary Trawally",
//     "ops": "106",
//     "leaveType": "Annual Leave",
//     "proceedingDate": "18 August 2026",
//     "status": "Active",
//     "resumingDate": "15 October 2026",
//     "workingDays": 30
//   },
//   {
//     "id": 1,
//     "name": "Bakary Trawally",
//     "ops": "105",
//     "leaveType": "Annual Leave",
//     "proceedingDate": "18 August 2026",
//     "status": "completed",
//     "resumingDate": "15 July 2026",
//     "workingDays": 30
//   },
//   {
//     "id": 2,
//     "name": "Ebrima Jallow",
//     "ops": "134",
//     "leaveType": "Sick Leave",
//     "proceedingDate": "05 July 2026",
//     "status": "Completed",
//     "resumingDate": "15 July 2026",
//     "workingDays": 10
//   },
//   {
//     "id": 3,
//     "name": "Fatou Camara",
//     "ops": "114",
//     "leaveType": "Annual Leave",
//     "proceedingDate": "01 September 2026",
//     "status": "Pending",
//     "resumingDate": "21 September 2026",
//     "workingDays": 20
//   },
//   {
//     "id": 4,
//     "name": "Ousman Sanneh",
//     "ops": "234",
//     "leaveType": "Annual Leave",
//     "proceedingDate": "01 September 2026",
//     "status": "Pending",
//     "resumingDate": "21 September 2026",
//     "workingDays": 20
//   },
//   {
//     "id": 5,
//     "name": "Ousman Sanneh",
//     "ops": "124",
//     "leaveType": "Annual Leave",
//     "proceedingDate": "01 September 2026",
//     "status": "Pending",
//     "resumingDate": "21 September 2026",
//     "workingDays": 20
//   },
//   {
//     "id": 6,
//     "name": "Elizabeth",
//     "ops": "4",
//     "leaveType": "Annual Leave",
//     "proceedingDate": "8 July 2026",
//     "status": "Active",
//     "resumingDate": "21 September 2026",
//     "workingDays": 20
//   }
// ];

  const getLeaveStatus = (leave) => {
    const today = new Date();
    const proceeding = new Date(leave.proceedingDate);
    const resuming = new Date(leave.resumingDate);

    if (today < proceeding) {
      return {
        text: "Pending",
        color: "bg-yellow-500",
      };
    }

    if (today >= proceeding && today < resuming) {
      return {
        text: "Active",
        color: "bg-green-500",
      };
    }

    return {
      text: "Completed",
      color: "bg-red-500",
    };
  };

  const handleSearch = () => {
    console.log("Searching for:", searchId);

    formData.forEach((leave) => {
      console.log("Database OPS:", leave.ops, typeof leave.ops);
    });

    const result = formData.find(
      (leave) => String(leave.ops).trim() === searchId.trim()
    );

    console.log("Result:", result);
    setSelectedLeave(result || null);
  };

return (
<div className="
min-h-screen
bg-gray-100
p-5
flex
justify-center
">

  <div className="w-full max-w-md">
    <div className="
    bg-white
    rounded-3xl
    shadow-sm
    p-5
    mb-5
    ">
    <input
    type="number"
    min={0}
    value={searchId}
    onChange={(e)=>setSearchId(e.target.value)}
    placeholder="Enter your OPS E.G 332"
    className="
    w-full
    border
    rounded-xl
    p-3
    outline-none
    border
    "
    />
    <button
    onClick={handleSearch}
    className="
    mt-4
    w-full
    bg-gray-500
    hover:bg-gray-700
    text-white
    p-2
    rounded-md
    font-semibold
    "
    >
    Search Leave
    </button>
    </div>

    {
    selectedLeave ? (
    <LeaveCard leave={selectedLeave}/>
    )
    :
    (
    <p className="text-center text-gray-500">
      Enter OPS Numbers to view leave details
    </p>
    )
    }
  </div>


</div>

)

}


export default Dashboard;