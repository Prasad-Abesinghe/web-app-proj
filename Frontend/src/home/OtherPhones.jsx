import React, { useEffect, useState } from "react";
import PhoneCards from '../components/PhoneCards';

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
  </div>
  )
}

export default OtherPhones