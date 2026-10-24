import React, { useContext } from "react";
import { FormContext } from '../FormContext';

const ViewData = () => {
 const {
   formData,
  } = useContext(FormContext);

  return (
      <main
        
      >
          {formData.length ? (
              <div className='m-auto text-center'>
                  <table className=" w-[100%]  px-8  overflow-y-auto">
                      <thead className=''>
                          <tr className="trHead">
                              <th className="border">#</th>
                              <th className="border">Name</th>
                              <th className="border">Leave Proceeding Date</th>
                              <th className="border">Resuming Date</th>
                              <th className="border">Working Days Applied</th>
                              <th className="border">OPS Number</th>
                          </tr>
                      </thead>
                      <tbody className="">
                          {formData.map((item, index) => {
                              const indexId = index + 1
                              return (
                                  <tr className='text-left bg-white text-black' key={item.id}>
                                      <td className="border pl-4 capitalize">{indexId}</td>
                                      <td className="border pl-2 capitalize">{item.name}</td>
                                      <td className="border pl-2 capitalize">{item.proceedingDate}</td>
                                      <td className="border pl-3 capitalize">{item.resumingDate}</td>
                                      <td className="border pl-3 capitalize">{item.workingDays}</td>
                                      <td className="border pl-3 capitalize">{item.ops}</td>
                                  </tr>
                              )
                          })}
                      </tbody>
                  </table>
              </div>

          ) : (
              <p style={{
                  marginTop: '2rem', textAlign: "center", display: "grid", placeItems: "center",
                  color: "black", fontSize: "3rem", margin: "auto", height: "50vh"
              }}>Your List is empty </p>
          )}
      </main>
  )
}

export default ViewData