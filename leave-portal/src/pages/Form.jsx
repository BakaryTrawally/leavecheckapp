import React, { useState, useContext } from 'react'
import api from '../leaveApi/api';
import { FormContext } from '../FormContext';

const Form = () => {
 
  const {
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
    handleSubmit
  } = useContext(FormContext);


  return (
    <div>
          <div className="
                min-h-screen 
                flex 
                items-center 
                justify-center
                bg-gray-100
                p-5
                ">
          <form onSubmit={handleSubmit} className="w-full max-w-md">    
              <div className="
                bg-white
                rounded-3xl
                shadow-lg
                p-6
                w-full
                max-w-md
                ">
                  <h1 className="
                    text-2xl
                    font-bold
                    text-center
                    mb-6
                    ">
                     Enter Personnal Leave Data 
                  </h1>
                  <input
                    type="text"
                    className="
                    w-full
                    border
                    rounded-xl
                    capitalize
                    p-3
                    mb-4
                    outline-none
                    "
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="Enter Name"
                  />
                  <input
                      className="
                    w-full
                    border
                    rounded-xl
                    p-3
                    mb-4
                    outline-none
                    "
                      value={ops}
                      onChange={(e) => setOps(e.target.value)}
                      placeholder="Enter OPS"
                  />
                  <input
                   type='date'
                    className="
                    w-full
                    border
                    rounded-xl
                    p-3
                    mb-4
                    outline-none
                    "
                      value={proceedingDate}
                      onChange={(e) => setProceedingDate(e.target.value)}
                      placeholder="Proceeding Date"
                  />
                  <input
                      type="date"
                      className="
                    w-full
                    border
                    rounded-xl
                    p-3
                    mb-5
                    outline-none
                    "
                      placeholder="Resuming Date"
                      value={resumingDate}
                      onChange={(e) => setResumingDate(e.target.value)}
                  />
                  <input
                      type="number"
                      className="
                    w-full
                    border
                    rounded-xl
                    p-3
                    mb-5
                    outline-none
                    "
                      placeholder="Working days"
                      value={workingDays}
                      onChange={(e) => setWorkingDays(e.target.value)}
                  />
                  <button
                      className="
                w-full
                bg-blue-600
                text-white
                p-3
                rounded-xl
                font-semibold
                "
                  >
                      Submit
                  </button>
              </div>
          </form>
        </div>
    </div>
  )
}

export default Form