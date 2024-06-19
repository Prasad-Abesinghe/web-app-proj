import React, { useEffect, useState } from "react";
import PhoneCards from "../components/PhoneCards";
const PopularPhone = () => {
  const [phones, setPhones] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/all-phones")
      .then((res) => res.json())
      .then((data) => setPhones(data.slice(0, 8)));
  }, []);
  return (
    <div>
      <PhoneCards phones={phones} headline="Popular Phones" />
    </div>
  );
};

export default PopularPhone;
