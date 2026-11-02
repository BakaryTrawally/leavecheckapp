import React, { useState, useContext, useEffect } from "react";
import LeaveCard from "../components/LeaveCard";
import { FormContext } from "../FormContext";
import bg1 from "./images/airstrike.jpg";
import bg2 from "./images/birdsStrike.jpg"
import bg3 from "./images/Airside.jpg"
import bg4 from "./images/Airside2.jpg"
import bg5 from "./images/bjlAirdSide3.jpg"
import bg6 from "./images/Airport.jpg"
import bg7 from "./images/bnjlAirSide.jpg"
import bg8 from "./images/airstrike.jpg"
import bg9 from "./images/images.jpg"

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

    // console.log("Searching for OPS:", opsNumber);

    // Find matching OPS number
    const result = leaveRecords.find(
      (leave) =>
        String(leave.ops).trim() === opsNumber
    );

    // console.log("Search result:", result);

    // Update search results
    setSelectedLeave(result || null);
    setHasSearched(true);
  };

  // background images 
  const [index, setIndex] = useState(0);

  const images = [bg1, bg2, bg3, bg4, bg5, bg6, bg7, bg8, bg9];

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % images.length);
    }, 60000); // 60000ms = 1 minute
    return () => clearInterval(interval); // cleanup
  }, []);



  return (
    <div
      className="min-h-screen bg-gray-300 p-5  flex justify-center"
      style={{
        backgroundImage: `url(${images[index]})`,
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
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

            <p className="text-gray-700 text-sm mt-2">
              There is no leave for this individual.
            </p>

            <p className="text-gray-400 text-sm mt-1">
              OPS Number: {searchId}
            </p>

          </div>

        ) : (

          // INITIAL MESSAGE
          <p className="text-center text-gray-500">
            Enter OPS Number to view leave--
            <a href="/#form">details.</a>
          </p>
        )}

      </div>
    </div>
  );
}

export default Dashboard;
