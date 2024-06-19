import React from "react";
import { useState } from "react";
import { useLoaderData, useParams } from "react-router-dom";
import { Button, Textarea, Label, Select, TextInput } from "flowbite-react";

const EditPhone = () => {
  const { id } = useParams();
  const {
    mobileName,
    imageUrl,
    price,
    mobileDescription,
    mobileDetailUrl,
    brand,
  } = useLoaderData();
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

  const handleUpdate = (event) => {
    event.preventDefault();
    const form = event.target;

    const mobileName = form.mobileName.value;
    const imageUrl = form.imageUrl.value;
    const price = form.price.value;
    const mobileDescription = form.mobileDescription.value;
    const mobileDetailUrl = form.mobileDetailUrl.value;
    const brand = form.brand.value;

    const updatePhoneObj = {
      mobileName,
      imageUrl,
      price,
      mobileDescription,
      mobileDetailUrl,
      brand,
    };
    //update phone
    fetch(`http://localhost:5000/phone/${id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(updatePhoneObj),
    })
      .then((res) => res.json())
      .then((data) => {
        alert("Phone is updated successfully!!");
      });
  };

  return (
    <div className=" px-4 my-12 ">
      <h2 className=" mb-8 text-3xl font-bold">Update a phone data</h2>
      <form
        onSubmit={handleUpdate}
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
              defaultValue={mobileName}
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
              defaultValue={brand}
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
              defaultValue={imageUrl}
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
              defaultValue={price}
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
            defaultValue={mobileDescription}
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
            defaultValue={mobileDetailUrl}
            placeholder="Mobile Details Url"
            required
          />
        </div>
        <Button type="submit" className=" mt-5">
          Update Mobile data
        </Button>
      </form>
    </div>
  );
};

export default EditPhone;
