import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faPencilAlt,
  faPhone,
  faCalendarAlt,
  faUserCog,
  faInfoCircle,
  faUserCheck
} from "@fortawesome/free-solid-svg-icons";
import Search from "./Search";


const HealthProviderTable = ({ providers,handleEditClick }) => {
  return (
    <div className="container mx-auto">
    <h2 className="text-lg font-bold px-2 my-2">Health Provider List</h2>
    <Search/>
      <table className="w-full text-left bg-gray-100 border border-purple-800">
        <thead>
          <tr className="bg-gray-100">
            <th className="px-3 py-2">Name</th>
            <th className="px-3 py-2">Mode</th>
            <th className="px-3 py-2">Type of Consultation</th>
            <th className="px-3 py-2">Fees&nbsp;  <FontAwesomeIcon
                    icon={faInfoCircle}
                  /></th>
            <th className="px-3 py-2">Edit</th>
          </tr>
        </thead>
        <tbody>
          {providers.map((provider, index) => (
            <tr key={index} className="border-b hover:bg-gray-100">
              <td className="px-3 py-2">{provider.name}</td>
              <td className="px-3 py-2">{provider.mode}
              <br/>
              <i>
              <td className="text-xs">{provider.days}</td>
              </i>
              </td>
              <td className="px-3 py-2">{provider.consultationType}</td>
              <td className="px-3 py-2">{provider.fees}</td>
              <td className="px-3 py-2">
                <button className="mr-2 w-10 text-blue-500 hover:text-blue-700 focus:outline-none bg-slate-200 p-1 rounded mx-1">
                  <FontAwesomeIcon
                    icon={faPencilAlt}
                    onClick={() => handleEditClick(provider)}
                  />
                </button>
              
                <button className="mr-2 w-10 text-blue-500 hover:text-blue-700 focus:outline-none bg-slate-200 p-1 rounded mx-1">
                  <FontAwesomeIcon
                    icon={faCalendarAlt}
                    onClick={() => handleEditClick(provider)}
                  />
                </button>
                <button className="mr-2 w-10 text-yellow-500 hover:text-yellow-700 focus:outline-none bg-slate-200 p-1 rounded mx-1">
                  <FontAwesomeIcon
                    icon={faUserCog}
                    onClick={() => handleEditClick(provider)}
                  />
                </button>
                <button className="mr-2 w-10 text-yellow-500 hover:text-yellow-700 focus:outline-none bg-slate-200 p-1 rounded mx-1">
                  <FontAwesomeIcon
                    icon={faUserCheck}
                    onClick={() => handleEditClick(provider)}
                  />
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default HealthProviderTable;
