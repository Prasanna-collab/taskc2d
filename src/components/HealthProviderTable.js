import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faPencilAlt,
  faPhone,
  faCalendarAlt,
  faUserCog,
} from "@fortawesome/free-solid-svg-icons";


const HealthProviderTable = ({ providers,handleEditClick }) => {
  return (
    <div className="container mx-auto">
      <table className="w-full text-left bg-gray-100 border border-purple-600">
        <thead>
          <tr className="bg-gray-100">
            <th className="px-3 py-2">Name</th>
            <th className="px-3 py-2">Mode</th>
            <th className="px-3 py-2">Type of Consultation</th>
            <th className="px-3 py-2">Fees</th>
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
              <td className="px-1 text-sm">{provider.days}</td>
              </i>
              </td>
              <td className="px-3 py-2">{provider.consultationType}</td>
              <td className="px-3 py-2">{provider.fees}</td>
              <td className="px-3 py-2">
                <button className="mr-2 text-blue-500 hover:text-blue-700 focus:outline-none">
                  <FontAwesomeIcon
                    icon={faPencilAlt}
                    onClick={() => handleEditClick(provider)}
                  />
                </button>
                <button className="mr-2 text-green-500 hover:text-green-700 focus:outline-none">
                  <FontAwesomeIcon
                    icon={faPhone}
                    onClick={() => handleEditClick(provider)}
                  />
                </button>
                <button className="mr-2 text-blue-500 hover:text-blue-700 focus:outline-none">
                  <FontAwesomeIcon
                    icon={faCalendarAlt}
                    onClick={() => handleEditClick(provider)}
                  />
                </button>
                <button className="mr-2 text-yellow-500 hover:text-yellow-700 focus:outline-none">
                  <FontAwesomeIcon
                    icon={faUserCog}
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
