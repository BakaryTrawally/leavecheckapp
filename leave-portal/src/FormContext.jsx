import React, { createContext, useState, useEffect, useMemo, useRef } from "react";
import api from "./leaveApi/api";

export const FormContext = createContext();
export const FormProvider = ({ children }) => {
    const [formData, setFormData] = useState([]);
    const [formValues, setFormValues] = useState([])
    const [name, setName] = useState('');
    const [ops, setOps] = useState('');
    const [proceedingDate, setProceedingDate] = useState('');
    const [resumingDate, setResumingDate] = useState('');
    const [workingDays, setWorkingDays] = useState('');

    const handleFormValues = {
        name: name,
        ops: ops,
        proceedingDate: proceedingDate,
        resumingDate: resumingDate,
        workingDays: workingDays
    }
    const handleSubmit = async (e) => {
        e.preventDefault();
        // Handle form submission logic here  
        try {
            const response = await api.post('/leaveApp', handleFormValues);
            const allPost = [...formData, response.data]
            setFormData(allPost)
            // navigate('/personnel')
        } catch (err) {
            console.log(`Error: ${err.message}`);
        }
        console.log('Form submitted:', handleFormValues);
        handleReset(); // Reset the form after submission
    };

    const handleReset = () => {
        setName('');
        setOps('');
        setProceedingDate('');
        setResumingDate('');
        setWorkingDays('');
    }        
   

    const fetchTrainingData = async () => {
        try {
            const response = await api.get("/leaveApp");
            setFormData(response.data);
        } catch (err) {
            console.log(err.message);
        }
    };

    useEffect(() => {
        fetchTrainingData();
    }, []);


    // status of the leave
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

    return (
        <FormContext.Provider
            value={{
                formData,
                setFormData,
                name, 
                setName,
                ops, 
                setOps,                 
                proceedingDate,
                setProceedingDate,
                resumingDate,
                setResumingDate,
                workingDays,
                setWorkingDays,    
                handleSubmit,
                status
                       
            }}
        >
            {children}
        </FormContext.Provider>
    );
};