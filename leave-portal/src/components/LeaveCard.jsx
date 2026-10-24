import React, { useContext } from "react";
import { CalendarDays, CheckCircle } from "lucide-react";


const LeaveCard = ({ leave }) => {

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

    const status = getLeaveStatus(leave);



    const active = leave.status === "Active";
    return (

        <div
            className={`
            bg-white
            rounded-3xl
            shadow-lg
            p-6
            w-full
            border-2
            shadow-md
            border-none            `}
            
        >
            {/* Header */}

            <div className="flex justify-between items-center">

                <div>

                    <h2 className="text-xl font-bold">
                        Welcome
                    </h2>


                    <h3 className="text-2xl font-semibold capitalize mt-1">
                        {leave.name}
                    </h3>

                </div>

                <span
                    className={`
                    flex
                    items-center
                    gap-2
                    px-4
                    py-2
                    rounded-full
                    text-white
                    font-semibold
                    shadow-lg
                    ${
                        status.color
                    }
                    `}
                >

                    <CheckCircle size={18}/>

                    {status.text}

                </span>

            </div>

            {/* Leave Details Card */}

            <div
                className="
                mt-6
                bg-gray-50
                rounded-2xl
                p-5
                "
            >
                <h4 className="text-lg font-bold">
                    {leave.leaveType}
                </h4>

                {/* Proceeding Date */}

                <div className="mt-5 flex items-center gap-3">

                    <CalendarDays className="text-blue-600"/>

                    <div>

                        <p className="text-gray-500 text-sm">
                            Proceeding Date
                        </p>


                        <p className="font-semibold">
                            {leave.proceedingDate}
                        </p>

                    </div>

                </div>

                {/* Resuming Date */}

                <div className="mt-5 flex items-center gap-3">
                 <CalendarDays className="text-blue-600"/>

                    <p className="text-gray-500 text-sm">
                        Resuming Date
                    </p>


                    <p className="font-semibold">
                        {leave.resumingDate}
                    </p>

                </div>

                {/* Duration */}

                <div className="mt-5 flex items-center gap-3">
                <CalendarDays className="text-blue-600"/>
                    <p className="text-gray-500 text-sm">
                        Leave Duration
                    </p>


                    <p className="text-xl font-bold">
                        {leave.workingDays} Working Days
                    </p>

                </div>

            </div>

        </div>

    );

};


export default LeaveCard;