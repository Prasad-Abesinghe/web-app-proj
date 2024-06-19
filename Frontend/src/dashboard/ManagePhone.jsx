"use client";

import { Table } from "flowbite-react";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const ManagePhone = () => {
  const [allPhones, setAllPhones] = useState([]);
  useEffect(() => {
    fetch("http://localhost:5000/all-phones")
      .then((res) => res.json())
      .then((data) => setAllPhones(data));
  }, []);

  //delete phone
  const handleDelete = (id) => {
    //console.log(id);
    fetch(`http://localhost:5000/phone/${id}`,{
      method:"DELETE",
    })
      .then((res) => res.json())
      .then((data) => {alert("Phone is deleted successfull")
        //setAllPhones
      });
  };
  return (
    <div className="px-4 my-12">
      <h2 className="mb-8 text-3xl font-bold">Manage phones</h2>
      <table className=" lg:w-[1180px] w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
        <thead class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
          <tr>
            <th scope="col" class="px-6 py-3">
              No
            </th>
            <th scope="col" class="px-6 py-3">
              Mobile Name
            </th>
            <th scope="col" class="px-6 py-3">
              Mobile Brand
            </th>
            {/* <th scope="col" class="px-6 py-3">
              Mobile Description
            </th> */}
            <th scope="col" class="px-6 py-3">
              Price
            </th>
            <th scope="col" class="px-6 py-3">
              <span class="sr-only">Edit</span>
            </th>
          </tr>
        </thead>
        {allPhones.map((phone, index) => (
          <tbody key={phone._id}>
            <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
              <th
                scope="row"
                class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
              >
                {index + 1}
              </th>
              <td class="px-6 py-4">{phone.mobileName}</td>
              <td class="px-6 py-4">{phone.brand}</td>
              {/* <td class="px-6 py-4">{phone.mobileDescription}</td> */}
              <td class="px-6 py-4">{phone.price}</td>
              <td class="px-6 py-4 text-right">
                <Link
                  className=""
                  to={`/admin/dashboard/edit-phones/${phone._id}`}
                >
                  <button className=" btn-primary px-6 py-1 lg:mr-2 mb-2 font-semibold text-white rounded-md">
                  
                    Edit
                  </button>
                </Link>
                <button
                  onClick={() => handleDelete(phone._id)}
                  className=" btn-accent px-4 py-1 font-semibold text-white rounded-md"
                >
                  Delete
                </button>
              </td>
            </tr>
          </tbody>
        ))}
      </table>
    </div>
  );
};

export default ManagePhone;
