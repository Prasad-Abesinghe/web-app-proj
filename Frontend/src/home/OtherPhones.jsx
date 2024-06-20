import React, { useEffect, useState } from "react";
import PhoneCards from "../components/PhoneCards";
import { Button } from "flowbite-react";
import { Link } from "react-router-dom";

const OtherPhones = () => {
  const [phones, setPhones] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/all-phones")
      .then((res) => res.json())
      .then((data) => setPhones(data.slice(4, 10)));
  }, []);
  return (
    <div>
      <PhoneCards phones={phones} headline="Other Phones" />
      <div className="flex justify-center items-center">
        <Link to={"/shop"}>
          <Button className=" btn-accent p-2 font-bold border-none">
            See All Phones
          </Button>
        </Link>
      </div>
    </div>
  );
};

export default OtherPhones;
