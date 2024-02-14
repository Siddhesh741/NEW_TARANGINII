
//import React from "react";
import img from "../assets/img/contact.jpg";
import Button from "../layouts/Button";
import React, { useState } from 'react';
import "../components/Contact.css"
import axios from 'axios';

const backgroundColor = `bg-brightColor`;
const Contact = () => {
  const [formData, setFormData] = useState({
    clientName: '',
    phoneNumber: '',
    photographerName: '',
    pHphoneNumber: '',
    selectedDate: '',
    cityName: '',
    selectedOption: '',
    carCount: '',
    advanceAmount: '',
    pendingAmount: '',
    visitors: '',
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;

    // Validate that the clientName does not contain numbers
    if (name === 'clientName' && /\d/.test(value)) {
      alert('clientName should not contain numbers.');
      return;
    }

    setFormData({ ...formData, [name]: value });
  };

  const handleNumberChange = (e) => {
    const value = e.target.value;

    if (/^\d*$/.test(value) && value.length <= 10) {
      setFormData({ ...formData, phoneNumber: value });
    } else {
      alert('Phone number should only contain digits and be up to 10 Number.');
    }
  };


  const handleInputChange1 = (e) => {
    const { name, value } = e.target;

    // Validate that the clientName does not contain numbers
    if (name === 'photographerName' && /\d/.test(value)) {
      alert('photographerName should not contain numbers.');
      return;
    }

    setFormData({ ...formData, [name]: value });
  };

  const handleNumberChange1 = (e) => {
    const value = e.target.value;

    if (/^\d*$/.test(value) && value.length <= 10) {
      setFormData({ ...formData, pHphoneNumber: value });
    } else {
      alert('PHphone number should only contain digits and be up to 10 Number.');
    }
  };




  const handleDateChange = (e) => {
    const selectedDate = new Date(e.target.value);
    const currentDate = new Date();

    if (selectedDate >= currentDate) {
      setFormData({ ...formData, selectedDate: e.target.value });
    } else {
      alert('Please select a date from today or onwards.');
    }
  };
  


  const handleCityChange = (e) => {
    const { name, value } = e.target;

    // Validate that the clientName does not contain numbers
    if (name === 'cityName' && /\d/.test(value)) {
      alert('city name should not contain numbers.');
      return;
    }

    setFormData({ ...formData, [name]: value });
  };

  const handleAdvanceAmount = (e) => {
    const value = e.target.value;
    const selectedPackagePrice = {
      option1: 4000,
      option2: 2500,
      option3: 2500
      // Add more options as needed
    };
    if (formData.selectedOption === '') {
      alert('Please select a package first.');
    }else if (value === '') {
      // If the advance amount is cleared, reset the pending amount
      setFormData({ ...formData, advanceAmount: '', pendingAmount: '' });
    } else if (/^\d*$/.test(value) && value.length <= 10) {
      const packagePrice = selectedPackagePrice[formData.selectedOption];
    if (parseInt(value) > packagePrice) {
      alert('❌ Advance amount cannot be greater than the package price.');
      // Optionally, you can clear the field or handle it differently here
    } else {
      const pending = packagePrice - value;
      setFormData({
        ...formData,
        advanceAmount: value,
        pendingAmount: pending >= 0 ? pending : 0
      });
    }
    } else {
      alert('Character not allowed. Advance Amount should have to pay 50% of package.');
    }
  };


  const handlePendingAmount = (e) => {
    const value = e.target.value;

    if (formData.selectedOption === '') {
      alert('Please select a package first.');
      // Optionally, you can clear the field or handle it differently here
    } else if (/^\d*$/.test(value) && value.length <= 10) {
      setFormData({ ...formData, pendingAmount: value });
    } else {
      alert('Character not allowed.');
    }
  };

  const handlevisitors = (e) => {
    const value = e.target.value;

    if (/^\d*$/.test(value) && value.length <= 10) {
      setFormData({ ...formData, visitors: value });
    } else {
      alert('Visitors count should not be allow character.');
    }
  };

  const handleCarCountChange = (e) => {
    const value = e.target.value;

    if (/^\d*$/.test(value) && value.length <= 10) {
      setFormData({ ...formData, carCount: value });
    } else {
      alert('Car count should be a non-negative number.');
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Validate all fields
    {/* if (
      formData.clientName.trim() === '' ||
      formData.phoneNumber.trim() === '' ||
      formData.photographerName.trim() === '' ||
      formData.PHphoneNumber.trim() === '' ||
      formData.selectedDate.trim() === '' ||
      formData.cityName.trim() === '' ||
      formData.selectedOption.trim() === '' ||
      formData.advanceAmount.trim() === '' 
      //formData.pendingAmount.trim() === ''||
      //formData.visitors.trim() === ''||
      //formData.carCount.trim() === '' 
    ) {
      alert('❌ Please fill all required fields.');
      return;
    }

    // Perform additional checks for other required fields if needed
    console.log(formData)
    alert('✅Registration successful!✅ Your Booking ID is 1521');
    setFormData({
      clientName: '',
      photographerName: '',
      phoneNumber: '',
      PHphoneNumber: '',
      selectedDate: '',
      cityName: '',
      selectedOption: '',
      carCount: '',
      advanceAmount: '',
      pendingAmount: '',
      visitors: '',
    });
  };

  const handleCancel = () => {
    setFormData({
      clientName: '',
      photographerName: '',
      phoneNumber: '',
      PHphoneNumber: '',
      selectedDate: '',
      cityName: '',
      selectedOption: '',
      carCount: '',
      advanceAmount: '',
      pendingAmount: '',
    visitors: '',  */}

    try {
      const response = await axios.post("http://localhost:8080/api/clients/createClient", formData);
      console.log('Registration successful!', response.setFormData);
      setFormData({
        clientName: '',
        photographerName: '',
        phoneNumber: '',
        pHphoneNumber: '',
        selectedDate: '',
        cityName: '',
        selectedOption: '',
        carCount: '',
        advanceAmount: '',
        pendingAmount: '',
        visitors: '',
      })
      // Optionally, you can redirect the user or show a success message here
    } catch (error) {
      console.error('Registration failed!', error);
      // Handle error: show error message to the user, log it, etc.
    }
  };




  
  return (
    
    <div className=" min-h-screen flex flex-col items-center justify-center md:mx-32 mx-5 mt-10">
       
      <div className=" flex flex-col lg:flex-row justify-between w-full">
        <form className=" w-full lg:w-2/5 space-y-5 bg-[#a5f3fc] p-5 rounded-xl">



          <h4 className="text-2x2 font-semibold text-center">👇Book Now Photoshoot Slots👇</h4>
          <div className="form-group mb-4">

          </div>

          <form>
            <div className="form-group mb-4">
              <label htmlFor="clientName" className="mr-40">
                Client Name<span className="text-red-500">*</span>
              </label>
              <input
                className="py-1 px-1 rounded-lg hover:shadow-[rgba(0,_0,_0,_0.24)_0px_3px_8px] transition-all"
                type="text"
                name="clientName"
                id="clientName"
                placeholder="Enter your name"
                style={{ '::placeholder': { fontSize: '8px' } }}
                value={formData.clientName}
                onChange={handleInputChange}
                required
              />
            </div>


            <div className="form-group mb-4">
              <label htmlFor="phoneNumber" className="mr-36">
                Phone Number<span className="text-red-500">*</span>
              </label>
              <input
                className="py-1 px-1 rounded-lg hover:shadow-[rgba(0,_0,_0,_0.24)_0px_3px_8px] transition-all"
                type="text"
                name="phoneNumber"
                id="phoneNumber"
                placeholder="Enter your ph number"
                style={{ '::placeholder': { fontSize: '10px' } }}
                value={formData.phoneNumber}
                onChange={handleNumberChange}
                required
              />
            </div>

            <div className="form-group mb-4">
              <label htmlFor="photographerName" className="mr-24">
                Photographer Name<span className="text-red-500">*</span>
              </label>
              <input
                className="py-1 px-1 rounded-lg hover:shadow-[rgba(0,_0,_0,_0.24)_0px_3px_8px] transition-all"
                type="text"
                name="photographerName"
                id="photographerName"
                placeholder="Ente Photographer name"
                style={{ '::placeholder': { fontSize: '10px' } }}
                value={formData.photographerName}
                onChange={handleInputChange1}
                required
              />
            </div>




            <div className="form-group mb-4">
              <label htmlFor="pHphoneNumber" className="mr-28">
                PHphone Number<span className="text-red-500">*</span>
              </label>
              <input
                className="py-1 px-1 rounded-lg hover:shadow-[rgba(0,_0,_0,_0.24)_0px_3px_8px] transition-all"
                type="text"
                name="pHphoneNumber"
                id="pHphoneNumber"
                placeholder="Enter PH phone Number"
                style={{ '::placeholder': { fontSize: '10px' } }}
                value={formData.pHphoneNumber}
                onChange={handleNumberChange1}
                required
              />
            </div>
          
            <div className="form-group mb-4">
              <label htmlFor="datePicker" className="mr-40">
                Select Date<span className="text-red-500">*</span>
              </label>
              <input
                className="py-1 px-1 rounded-lg hover:shadow-[rgba(0,_0,_0,_0.24)_0px_3px_8px] transition-all"
                type="date"
                id="datePicker"
                name="selectedDate"
                onChange={handleDateChange}
                min={new Date().toISOString().split('T')[0]} // Set min attribute to today
                required
              />
            </div>

            <div className="form-group mb-4">
              <label htmlFor="cityInput0" className="mr-44">
                City Name
              </label>
              <input
                className="py-1 px-1 rounded-lg hover:shadow-[rgba(0,_0,_0,_0.24)_0px_3px_8px] transition-all"
                type="text"
                name="cityName"
                id="cityInput"
                placeholder="Enter city name"
                style={{ '::placeholder': { fontSize: '10px' } }}
                value={formData.cityName}
                onChange={handleCityChange}

              />
            </div>



            <div className="form-group mb-4">
              <label htmlFor="selectOption" className="mr-36 w-40 text-right">
                Select Option<span className="text-red-500">*</span>
              </label>
              <select
                className="py-1 px-1 rounded-lg hover:shadow-[rgba(0,_0,_0,_0.24)_0px_3px_8px] transition-all"
                id="selectOption"
                name="selectedOption"
                onChange={handleInputChange}
                value={formData.selectedOption}
                required
              >
                <option value=''>Select a package</option>
                <option value="option1">Full Package - 4000</option>
                <option value="option2">Sunset Package - 2500</option>
                <option value="option3">Night Package - 2500</option>
                {/* Add more options as needed */}
              </select>
            </div>

            <div className="form-group mb-4">
              <label htmlFor="advanceAmount" className="mr-28">
                Advance Amount<span className="text-red-500">*</span>
              </label>
              <input
                className="py-1 px-1 rounded-lg hover:shadow-[rgba(0,_0,_0,_0.24)_0px_3px_8px] transition-all"
                type="number"
                name="advanceAmount"
                id="advanceAmount"
                placeholder="Enter advance Amount"
                style={{ '::placeholder': { fontSize: '10px' } }}
                value={formData.advanceAmount}
                onChange={handleAdvanceAmount}
                min="0"
                // Ensure the value is a positive number
                required
              />
            </div>



            <div className="form-group mb-4">
              <label htmlFor="pendingAmount" className="mr-28 w-40 text-right">
                Pending Amount<span className="text-red-500">*</span>
              </label>
              <input
                className="py-1 px-1 rounded-lg hover:shadow-[rgba(0,_0,_0,_0.24)_0px_3px_8px] transition-all"
                type="number"
                name="pendingAmount"
                id="pendingAmount"
                placeholder="pending Amount"
                style={{ '::placeholder': { fontSize: '10px' } }}
                value={formData.pendingAmount}
                onChange={handlePendingAmount}
                disabled
                //min="0"
                // Ensure the value is a positive number
                required
              />
            </div>


            <form className="flex flex-col items-center"></form>
            <div className="form-group mb-4">
              <label htmlFor="visitors" className="mr-40 w-40 text-right">
                Total Visitors
              </label>
              <input
                className="py-1 px-1 rounded-lg hover:shadow-[rgba(0,_0,_0,_0.24)_0px_3px_8px] transition-all"
                type="number"
                name="visitors"
                id="visitors"
                placeholder="Total visitors"
                style={{ '::placeholder': { fontSize: '10px' } }}
                value={formData.visitors}
                onChange={handlevisitors}
                min="0"
              // Ensure the value is a positive number

              />
            </div>
            <form className="flex flex-col items-center"></form>
            <div className="form-group mb-4 ">
              <label htmlFor="carCount" className="mr-44 w-40 text-right">
                Total Cars
              </label>
              <input
                className="py-1 px-1 rounded-lg hover:shadow-[rgba(0,_0,_0,_0.24)_0px_3px_8px] transition-all"
                type="number"
                name="carCount"
                id="carCount"
                placeholder="Enter car count"
                style={{ '::placeholder': { fontSize: '10px' } }}
                value={formData.carCount}
                onChange={handleCarCountChange}
              />
            </div>



            <div className="flex flex-row justify-between">
              {/* <div className="form-buttons"> */}

              <button type="submit" onClick={handleSubmit} className="mr-3 bg-blue-500 text-white p-3 rounded">
                Submit
              </button>
              {/* <button type="button" onClick={handleCancel} className="ml-3 bg-blue-500 text-white p-3 rounded"> 
                Cancel
              </button>*/}
            </div>

          </form>
        </form>
        <div className=" flex flex-col items-center w-full lg:w-2/5 my-5 ">
          <div className=" rounded-xl shadow-[0_50px_100px_rgba(255,_110,_199,_0.7)]">
            <img className=" rounded-lg" src={img} alt="" />

            <p className="text-lightweight text-center text-base pt-5 text-[#898888]">
              We'd love to hear from you! Whether you have questions, feedback, or
              need assistance with your shoot, please don't hesitate to
              reach out. Our team is here to assist you every step of the way.
              Simply fill out the form below and we'll be in touch shortly.
            </p>
          </div>
        </div>
      </div>

    </div>
    
  );
};
export default Contact;
























