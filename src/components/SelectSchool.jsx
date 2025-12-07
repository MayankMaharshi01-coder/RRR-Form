import React, { useState } from "react";
import Item from "./Item.jsx"

function SelectSchool({schoolDataList}) {

  const productList = schoolDataList;
  // [
  //   {
  //     district: "Churu",
  //     schools: ["Govt. Sr. Sec. School, Churu", "Bal Mandir Sr. Sec. School, Churu"]
  //   },
  //   {
  //     district: "Ratangarh",
  //     schools: ["Govt. Sr. Sec. School, Ratangarh", "Bal Mandir Sr. Sec. School, Ratangarh"]
  //   },
  //   {
  //     district: "Sujangarh",
  //     schools: ["Govt. Sr. Sec. School, Sujangarh", "Bal Mandir Sr. Sec. School, Sujangarh"]
  //   },
  //   {
  //     district: "Taranagar",
  //     schools: ["Govt. Sr. Sec. School, Taranagar", "Bal Mandir Sr. Sec. School, Taranagar"]
  //   },
  //   {
  //     district: "Bidasar",
  //     schools: ["Govt. Sr. Sec. School, Bidasar", "Adarsh Vidya Mandir, Bidasar"]
  //   },
  //   {
  //     district: "Sardarshahar",
  //     schools: ["Govt. Sr. Sec. School, Sardarshahar", "Seth Moti Lal School, Sardarshahar"]
  //   },
  //   {
  //     district: "Rajgarh",
  //     schools: ["Govt. Sr. Sec. School, Rajgarh", "Tagore Public School, Rajgarh"]
  //   }

  // ];
  let selectedSchoolAndDistrict = {}
  let selectedSchoolProducts = [{category
: 
"Book",
description
: 
" It is a awesome product.",
id
: 
6,
imgUrl
: 
"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ6v5SbBcLqbOIaX0N7jAwoU9e1RsmtSD7Atg&s",
schoolName
: 
"Bal Mandir Sr. Sec. School, Sujangarh"}];
  const [selectedDistrict, setSelectedDistrict] = useState("default");
  const [selectedSchool, setSelectedSchool] = useState("default");

  function handleDistrictChange(event) {
    setSelectedDistrict(event.target.value);
    setSelectedSchool("default");    console.log("Selected District:", event.target.value);

  }

  function handleSchoolChange(event) {
    selectedSchoolAndDistrict.school = event.target.value;
    selectedSchoolAndDistrict.district = selectedDistrict;
    console.log("Selected School and District:", selectedSchoolAndDistrict);
    setSelectedSchool(event.target.value);
    selectedSchoolProducts = productList.filter((item) => {
      return item.schoolName === event.target.value && item.schoolName.split(', ')[1] === selectedDistrict;
    });
    selectedSchoolAndDistrict = {
      school: event.target.value,
      district: selectedDistrict,
      products: selectedSchoolProducts
    };
    console.log("Selected School Products:", selectedSchoolProducts);
  //   productList.filter((item )=> {
  //    if( item.schoolName === event.target.value){}
  // }

  }

  const districts =[];

  productList.forEach(item => {
    const district = item.schoolName.split(', ')[1];
    if (!districts.includes(district)) {
      districts.push(district);
    }
  });
  const schoolsInSelectedDistrict = selectedDistrict !== "default"
    ? productList.filter(item => item.schoolName.split(', ')[1] === selectedDistrict).map(item => item.schoolName)
    : [];
console.log(schoolsInSelectedDistrict);
  return (
    <>
      <div className="bg-green-100 h-screen w-full flex items-center flex-col">

        <div className="mt-20 flex items-center justify-center flex-col">
          <h2 className="text-green-900 text-4xl font-serif font-bold">Want to see things in your school!</h2>
          <h1 className="text-green-900 text-7xl font-serif font-bold">Select Your School</h1>
        </div>

        <div className="bg-[rgb(201,255,191)] mt-14 p-10 min-w-2xl text-2xl font-serif flex flex-col lg:flex-row justify-between px-20 outline-none items-center shadow-2xl">
          <select className="rounded-md text-green-950 w-fit border-green-900 border-2" name="districtSelector" id="districtSelector" onChange={handleDistrictChange} value={selectedDistrict}>
          <option value="default" className="bg-[rgb(201,255,191)]">Select Your Sub-District</option>
          {districts.map((district, index) => (
            <option className="rounded-md  bg-[rgb(201,255,191)]" key={index} value={district}>{district}</option>
          ))}
        </select>

        <select className="rounded-md text-green-950 w-fit border-green-900 border-2" name="schoolSelector" id="schoolSelector" onChange={handleSchoolChange} value={selectedSchool} disabled={selectedDistrict === "default"}>
          <option value="default" className="bg-[rgb(201,255,191)]">Select Your School</option>
          {schoolsInSelectedDistrict.map((school, index) => (
            <option className="rounded-md  bg-[rgb(201,255,191)]" key={index} value={school}>{school}</option>
          ))}
        </select>
        </div>
      </div>
      <div >
{
  selectedSchoolAndDistrict ? (
    <>
   <h2 className="text-center text-6xl font-bold text-green-800 mb-8 font-serif">
            Available Products
          </h2>
          <div className="flex flex-wrap gap-5 justify-center px-4">
            {selectedSchoolProducts.map(function ({
              category,
              imgUrl,
              description,
              schoolName,
              id,
            }) {
              return (
                <Item
                  category={category}
                  imgUrl={imgUrl}
                  description={description}
                  schoolName={schoolName}
                  key={id}
                  id={id}
                
                 
               
                />
              );
            })}
          </div>
          </>
  ) : null
}
</div>
    </>
  );
};

export default SelectSchool;
