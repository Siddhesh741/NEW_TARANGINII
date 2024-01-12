
//import React from "react";
import img from "../assets/img/contact.jpg";
import Button from "../layouts/Button";
import React, { useState } from 'react';
//import styled from "styled-component";


const backgroundColor = `bg-brightColor`;
const Contact = () => {
  const [userName, setUserName] = useState('');



  const handleInputChange = (e) => {
    const inputValue = e.target.value;

    // Use a regular expression to check for only text (no numbers)
    if (/[^a-zA-Z]/.test(inputValue)) {
      // If there are numbers, you can handle it as needed
      alert('Please enter only text, no numbers allowed.');

      // Optionally, you can clear the input
      setUserName('');
    } else {
      // If the input is valid, update the state
      setUserName(inputValue);

    }
  }
  const [userName1, setUserName1] = useState('');
  const handleInputChange1 = (e) => {
    const inputValue = e.target.value;

    // Use a regular expression to check for only text (no numbers)
    if (/[^a-zA-Z]/.test(inputValue)) {
      // If there are numbers, you can handle it as needed
      alert('Please enter only text, no numbers allowed.');

      // Optionally, you can clear the input
      setUserName1('');
    } else {
      // If the input is valid, update the state
      setUserName1(inputValue);

    }
  }
  const [phoneNumber, setPhoneNumber] = useState('');
  const handleInput1 = (e) => {
    const inputValue = e.target.value;
    if (/^\d+$/.test(inputValue) && inputValue.length <= 10) {
      // If valid, update the state
      setPhoneNumber(inputValue);
    } else {
      // If invalid, you can handle it as needed
      // For example, show an error message or clear the input
      alert('Please enter a (Number Only) valid phone number with a maximum length of 10 digits.');

      // Optionally, you can clear the input
      setPhoneNumber('');
    }
  }
  const [phoneNumber2, setPhoneNumber2] = useState('');
  const handleInput2 = (e) => {
    const inputValue = e.target.value;
    if (/^\d+$/.test(inputValue) && inputValue.length <= 10) {
      // If valid, update the state
      setPhoneNumber2(inputValue);
    } else {
      // If invalid, you can handle it as needed
      // For example, show an error message or clear the input
      alert('Please enter a (Number Only) valid phone number with a maximum length of 10 digits.');

      // Optionally, you can clear the input
      setPhoneNumber2('');
    }
  }
  const [ClientName3, setPhoneNumber3] = useState('');

  const handleInput3 = (e) => {
    const inputValue = e.target.value;
    if (/^\d+$/.test(inputValue) && inputValue.length <= 10) {
      // If valid, update the state
      setPhoneNumber3(inputValue);
    } else {
      // If invalid, you can handle it as needed
      // For example, show an error message or clear the input
      alert('Please enter Numbers Only. (Character Not allowed) At least 50% Amount you hav to pay');

      // Optionally, you can clear the input
      setPhoneNumber3('');
    }
  }
  const [ClientName4, setPhoneNumber4] = useState('');

  const handleInput4 = (e) => {
    const inputValue = e.target.value;
    if (/^\d+$/.test(inputValue) && inputValue.length <= 10) {
      // If valid, update the state
      setPhoneNumber4(inputValue);
    } else {
      // If invalid, you can handle it as needed
      // For example, show an error message or clear the input
      alert('Please enter Numbers Only. (Character Not allowed) At least 50% Amount you hav to pay');

      // Optionally, you can clear the input
      setPhoneNumber4('');
    }
  }

  const [carsCount, setCarsCount] = useState('');

  const handleInput5 = (e) => {
    const inputValue = e.target.value;

    // Validate that the entered value is a positive integer
    if (/^[1-9]\d*$/.test(inputValue) || inputValue === '') {
      // If valid or empty, update the state
      setCarsCount(inputValue);
    } else {
      // If invalid, you can handle it as needed
      // For example, show an error message or clear the input
      alert('Please enter a valid positive integer count No.');

      // Optionally, you can clear the input
      setCarsCount('');
    }
  };
  const [carsCount6, setCarsCount6] = useState('');

  const handleInput6 = (e) => {
    const inputValue = e.target.value;

    // Validate that the entered value is a positive integer
    if (/^[1-9]\d*$/.test(inputValue) || inputValue === '') {
      // If valid or empty, update the state
      setCarsCount6(inputValue);
    } else {
      // If invalid, you can handle it as needed
      // For example, show an error message or clear the input
      alert('Please enter a valid positive integer count No.(Character Not allowed)');

      // Optionally, you can clear the input
      setCarsCount6('');
    }
  };

  const [city, setCity] = useState('');
  const [suggestions, setSuggestions] = useState([]);

  const cities = ['Saswad', 'Pune', 'Mumbai', 'Satara', 'Sangli', 'Kolhapur'];

  const handleCityChange = (e) => {
    const inputCity = e.target.value;
    setCity(inputCity);

    // Filter suggestions based on input
    const filteredSuggestions = cities.filter((suggestion) =>
      suggestion.toLowerCase().includes(inputCity.toLowerCase())
    );
    setSuggestions(filteredSuggestions);
  };

  const handleSuggestionClick = (selectedCity) => {
    setCity(selectedCity);
    setSuggestions([]); // Clear suggestions when a suggestion is clicked
  };

  const [selectedDate, setSelectedDate] = useState('');

  const handleDateChange = (event) => {
    const selectedDate = event.target.value;
    // Perform date validation here
    if (isValidBookingDate(selectedDate)) {
      // Valid date, you can update state or perform other actions
      setSelectedDate(selectedDate);
    } else {
      // Invalid date, handle accordingly (e.g., show an error message)
      console.log('Invalid booking date');
    }
  };

  const isValidBookingDate = (selectedDate) => {
    const currentDate = new Date();
    const selectedDateTime = new Date(selectedDate);

    // Compare the selected date with the current date
    if (selectedDateTime >= currentDate) {
      // Valid date
      return true;
    } else {
      alert('You enterd the Invalid date');
      // Invalid date
      return false;
    }
  };

  return (


    <div className=" min-h-screen flex flex-col items-center justify-center md:mx-32 mx-5 mt-10">

      <div className=" flex flex-col lg:flex-row justify-between w-full">
        <form className=" w-full lg:w-2/5 space-y-5 bg-[#F2F2F2] p-5 rounded-xl">



          <h4 className="text-2x2 font-semibold text-center">👇Book Now Photoshoot Slots👇</h4>
          <div className="form-group">

          </div>

          <div className="form-group">
            <label htmlFor="userName" className="mr-20">Client Name</label>
            <input
              className="py-1 px-1 rounded-lg hover:shadow-[rgba(0,_0,_0,_0.24)_0px_3px_8px] transition-all"
              type="text"
              name="userName"
              id="userName"
              placeholder="Enter your name"
              style={{ '::placeholder': { fontSize: '14px' } }}
              value={userName}
              onChange={handleInputChange}
            />
          </div>
          {/* <div className=" form-group"> 
        <label htmlFor="userName" className="mr-16" >Client Name</label>
        <input
          className=" py-1 px-1 rounded-lg hover:shadow-[rgba(0,_0,_0,_0.24)_0px_3px_8px] transition-all"
          type="text"
          name="userName"
          id="userName"
          placeholder="Enter your name"
          style={{ '::placeholder': { fontSize: '14px' } }}
        />
      </div>
          <div className=" form-group">
            <label htmlFor="userName" className="mr-2">CL Contact Number</label>
            <input
              className=" py-1 px-1 rounded-lg hover:shadow-[rgba(0,_0,_0,_0.24)_0px_3px_8px] transition-all"
              type="number"
              id="userName"
              placeholder="Enter your Phone No"
            />
          </div>*/}
          <div className="form-group">
            <label htmlFor="ClientName" className="mr-5">CL Contact Number</label>
            <input
              className="py-1 px-1 rounded-lg hover:shadow-[rgba(0,_0,_0,_0.24)_0px_3px_8px] transition-all"
              type="text"
              id="ClientName"
              name="ClientName"
              placeholder="Enter PH Phone No"
              value={phoneNumber}
              onChange={handleInput1}
            />
          </div>
          <div className="form-group">
            <label htmlFor="userName1" className="mr-4">Photographer Name</label>
            <input
              className="py-1 px-1 rounded-lg hover:shadow-[rgba(0,_0,_0,_0.24)_0px_3px_8px] transition-all"
              type="text"
              name="userName1"
              id="userName1"
              placeholder="Enter PH Name"
              style={{ '::placeholder': { fontSize: '14px' } }}
              value={userName1}
              onChange={handleInputChange1}
            />
          </div>
          {/* <div className=" form-group"> 
            <label htmlFor="ClientName" className="mr-2">Photographer Name</label>
            <input
              className=" py-1 px-1 rounded-lg hover:shadow-[rgba(0,_0,_0,_0.24)_0px_3px_8px] transition-all"
              type="text"
              name="ClientName"
              id="ClientName"
              placeholder="Enter PH Name"
            />
          </div>*/}

          {/* <div className="form-group">
          <label htmlFor="ClientName" className="mr-2">PH Contact Number</label>
          <input
            className=" py-1 px-1 rounded-lg hover:shadow-[rgba(0,_0,_0,_0.24)_0px_3px_8px] transition-all"
            type="number"
            id="ClientName"
            name="ClientName"
            placeholder="Enter PH Phone No"
          />
        </div> */}
          <div className="form-group">
            <label htmlFor="ClientName" className="mr-5">PH Contact Number</label>
            <input
              className="py-1 px-1 rounded-lg hover:shadow-[rgba(0,_0,_0,_0.24)_0px_3px_8px] transition-all"
              type="text"
              id="ClientName"
              name="ClientName"
              placeholder="Enter PH Phone No"
              value={phoneNumber2}
              onChange={handleInput2}
            />
          </div>
          {/* <div className="form-group"> 
            <label htmlFor="Bookingdate" className="mr-20">Booking Date</label>
            <input
              className=" py-1 px-1 rounded-lg hover:shadow-[rgba(0,_0,_0,_0.24)_0px_3px_8px] transition-all"
              type="date"
              id="Bookingdate"
              name="Bookingdate"
              placeholder="Enter Date"
            />
          </div>*/}
          <div className="form-group">
            <label htmlFor="Bookingdate" className="mr-20">
              Booking Date
            </label>
            <input
              className="py-1 px-1 rounded-lg hover:shadow-[rgba(0,_0,_0,_0.24)_0px_3px_8px] transition-all"
              type="date"
              id="Bookingdate"
              name="Bookingdate"
              placeholder="Enter Date"
              value={selectedDate}
              onChange={handleDateChange}
            />
          </div>
          
          {/* <div className=" form-group"> 
            <label htmlFor="city" className="mr-20">City Name</label>
            <input
              className=" py-1 px-1 rounded-lg hover:shadow-[rgba(0,_0,_0,_0.24)_0px_3px_8px] transition-all"
              type="text"
              name="city"
              id="city"
              placeholder="Enter city name"
            />
          </div>*/}
          <div className="form-group">
            <label htmlFor="city" className="mr-24">
              City Name
            </label>
            <input
              className="py-1 px-1 rounded-lg hover:shadow-[rgba(0,_0,_0,_0.24)_0px_3px_8px] transition-all"
              type="text"
              name="city"
              id="city"
              placeholder="Enter city name"
              value={city}
              onChange={handleCityChange}
            />
            {suggestions.length > 0 && (
              <ul className="suggestion-list">
                {suggestions.map((suggestion, index) => (
                  <li key={index} onClick={() => handleSuggestionClick(suggestion)}>
                    {suggestion}
                  </li>
                ))}
              </ul>
            )}
          </div>

          <div className="form-group mb-4">
            <label htmlFor="package" className="mr-28">Package</label>
            <select
              className="py-1 px-1 rounded-lg hover:shadow-[rgba(0,_0,_0,_0.24)_0px_3px_8px] transition-all"
              name="package"
              id="package"
            >
              <option value="" disabled selected>Select a Package</option>
              <option value="package1">Package 1</option>
              <option value="package2">Package 2</option>
              <option value="package3">Package 3</option>

            </select>
          </div>


          <div className="form-group">
            <label htmlFor="ClientName" className="mr-28">Advance</label>
            <input
              className="py-1 px-1 rounded-lg hover:shadow-[rgba(0,_0,_0,_0.24)_0px_3px_8px] transition-all"
              type="text"
              id="ClientName"
              name="ClientName"
              placeholder="Enter Advance Amount"
              value={ClientName3}
              onChange={handleInput3}
            />
          </div>
          {/* <div className=" form-group mb-10"> 
            <label htmlFor="advance" className="mr-24">Advance</label>
            <input
              className=" py-1 px-1 rounded-lg hover:shadow-[rgba(0,_0,_0,_0.24)_0px_3px_8px] transition-all"
              type="number"
              name="advance"
              id="advance"
              placeholder="Enter Advance Amount"
            />
          </div>

          <div className=" form-group mb-4">
            <label htmlFor="advance" className="mr-8">Pending Amount</label>
            <input
              className=" py-1 px-1 rounded-lg hover:shadow-[rgba(0,_0,_0,_0.24)_0px_3px_8px] transition-all"
              type="number"
              name="advance"
              id="advance"
              placeholder="Enter Pending Amount"
            />
          </div>*/}
          <div className="form-group">
            <label htmlFor="ClientName" className="mr-12">Pending Amount</label>
            <input
              className="py-1 px-1 rounded-lg hover:shadow-[rgba(0,_0,_0,_0.24)_0px_3px_8px] transition-all"
              type="text"
              id="ClientName"
              name="ClientName"
              placeholder="Enter Advance Amount"
              value={ClientName4}
              onChange={handleInput4}
            />
          </div>
          {/* <div className=" form-group">
            <label htmlFor="visitor" className="mr-16">Total Visitors</label>
            <input
              className=" py-1 px-1 rounded-lg hover:shadow-[rgba(0,_0,_0,_0.24)_0px_3px_8px] transition-all"
              type="number"
              name="visitor"
              id="visitor"
              placeholder="Visitors Count"
            />
          </div> 

          <div className=" form-group">
            <label htmlFor="cars" className="mr-20">Total Cars</label>
            <input
              className=" py-1 px-1 rounded-lg hover:shadow-[rgba(0,_0,_0,_0.24)_0px_3px_8px] transition-all"
              type="number"
              name="cars"
              id="cars"
              placeholder="Cars Count"
            />
          </div>*/}
          <div className="form-group">
            <label htmlFor="cars" className="mr-20">Total Visitors</label>
            <input
              className="py-1 px-1 rounded-lg hover:shadow-[rgba(0,_0,_0,_0.24)_0px_3px_8px] transition-all"
              type="text"
              name="cars"
              id="cars"
              placeholder="Total Car Count"
              value={carsCount6}
              onChange={handleInput6}
            />
          </div>

          <div className="form-group">
            <label htmlFor="cars" className="mr-24">Total Cars</label>
            <input
              className="py-1 px-1 rounded-lg hover:shadow-[rgba(0,_0,_0,_0.24)_0px_3px_8px] transition-all"
              type="text"
              name="cars"
              id="cars"
              placeholder="Total Car Count"
              value={carsCount}
              onChange={handleInput5}
            />
          </div>


          <div className="flex flex-row justify-between">
            <Button title="Submit" className="mr-1" backgroundColor={backgroundColor} />
            <Button title="Cancel" className="ml-1" backgroundColor={backgroundColor} />
          </div>

        </form>

        <div className=" flex flex-col items-center w-full lg:w-2/5 my-5 ">
          <div className=" rounded-xl shadow-[0_20px_50px_rgba(8,_112,_184,_0.7)]">
            <img className=" rounded-lg" src={img} alt="" />

            <p className="text-lightweight text-center text-base pt-5 text-[#898888]">
              We'd love to hear from you! Whether you have questions, feedback, or
              need assistance with your shoot, please don't hesitate to
              reach out. Our team is here to assist you every step of the way.
              Simply fill out the form below and we'll be in touch shortly.
            </p>

            {/*<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3791.4362403781647!2d74.
            06888677496612!3d18.
            14380728287821!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.
            1!3m3!1m2!1s0x3bc2f94fd6d09a07%3A0xc94caf885abb7570!2sTarangini%20Farms!5e0!3m2!1sen!2sin!4v1704897054211!5m2!1sen!2sin"
            width="600" 
            height="450"
            style="border:0;" 
            allowfullscreen=""
            loading="lazy"
            referrerpolicy="no-referrer-when-downgrade"></iframe> */}
          </div>
        </div>
      </div>




      {/*<p className=" text-1xl  text-lightweight text-right text-white leading-tight">
      Visit Us</p>
      <p>https://maps.app.goo.gl/HbxApM58nZTN51mJ9</p></div>*/}
    </div>


  );

};



export default Contact;
