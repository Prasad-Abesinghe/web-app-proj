import { useState } from "react";
import { Button, Textarea, Label, Select, TextInput } from "flowbite-react";

const UploadPhone = () => {
  const phoneBrands = [
    "Samsung",
    "Apple",
    "Huawei",
    "Nokia",
    "Sony",
    "Redmi",
    "One-Plus",
    "Google-Pixel",
  ];

  const [selectedPhoneBrand, setSelectePhoneBrand] = useState(phoneBrands[0]);

  const handleChangeSelectedValue = (event) => {
    console.log(event.target.value);
    setSelectePhoneBrand(event.target.value);
  };

  // phone submission

  const handlePhoneSubmit = (event) => {
    event.preventDefault();
    const form = event.target;

    const mobileName = form.mobileName.value;
    const imageUrl = form.imageUrl.value;
    const price = form.price.value;
    const mobileDescription = form.mobileDescription.value;
    const mobileDetailUrl = form.mobileDetailUrl.value;
    const brand = form.brand.value;

    const phoneObj = {
      mobileName,
      imageUrl, 
      price,
      mobileDescription,
      mobileDetailUrl,
      brand,
    };
    //console.log(phoneObj);

    //ssend data to databse
    fetch("http://localhost:5000/upload-phone", {
      method: "POST",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify(phoneObj),
    })
      .then((res) => res.json())
      .then((data) => {
        //console.log(data)
        alert("Phone uploaded Successfully");
        form.reset();
      });
  };

  return (
    <div className=" px-4 my-12 ">
      <h2 className=" mb-8 text-3xl font-bold">Upload a phone</h2>
      <form
        onSubmit={handlePhoneSubmit}
        className="flex flex-col lg:w-[1180px] flex-wrap gap-4"
      >
        <div className=" flex gap-8">
          <div className=" lg:w-1/2">
            <div className="mb-2 block">
              <Label htmlFor="mobileName" value="Phone Name" />
            </div>
            <TextInput
              id="mobileName"
              name="mobileName"
              type="text"
              placeholder="phone name"
              required
            />
          </div>
          <div className=" lg:w-1/2">
            <div className="mb-2 block">
              <Label htmlFor="inputState" value="Mobile Brand" />
            </div>
            <Select
              id="inputState"
              name="brand"
              className=" w-full rounded"
              value={selectedPhoneBrand}
              onChange={handleChangeSelectedValue}
            >
              {phoneBrands.map((option) => (
                <option key={option} value={option}>
                  {option}
                </option>
              ))}
            </Select>
          </div>
        </div>
        <div className=" flex gap-8">
          <div className=" lg:w-1/2">
            <div className="mb-2 block">
              <Label htmlFor="imageUrl" value="Image URL" />
            </div>
            <TextInput
              id="imageUrl"
              name="imageUrl"
              type="text"
              placeholder="Image URL"
              required
            />
          </div>
          <div className=" lg:w-1/2">
            <div className="mb-2 block">
              <Label htmlFor="price" value="Price" />
            </div>
            <TextInput
              id="price"
              name="price"
              type="text"
              placeholder="Price"
              required
            />
          </div>
        </div>
        <div className="">
          <div className="mb-2 block">
            <Label htmlFor="mobileDescription" value="Description" />
          </div>
          <Textarea
            id="mobileDescription"
            name="mobileDescription"
            type="text"
            placeholder="Description"
            required
            rows={4}
          />
        </div>
        <div className="">
          <div className="mb-2 block">
            <Label htmlFor="mobileDetailUrl" value="Mobile Details URL" />
          </div>
          <TextInput
            id="mobileDetailUrl"
            name="mobileDetailUrl"
            type="text"
            placeholder="Mobile Details Url"
            required
          />
        </div>
        <Button type="submit" className="btn-primary py-1.5">
          Upload New Mobile
        </Button>
      </form>
    </div>
  );
};

export default UploadPhone;
