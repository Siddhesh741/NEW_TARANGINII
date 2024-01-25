
//import React from "react";
import img from "../assets/img/contact.jpg";
import Button from "../layouts/Button";
import React, { useState } from 'react';
//import Popup from "./Popup";
//import styled from "styled-component";


/*const backgroundColor = `bg-brightColor`;
const Contact = () => {
  const [userName, setUserName] = useState('');



  const handleInputChange7 = (e) => {
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

  /*const [city, setCity] = useState('');
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
*/
/* const [selectedDate, setSelectedDate] = useState('');

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





 const initialFormData = {
   userName: '',
   //ClientName: '',
   phoneNumber: '',
   photographerName: '',
   phphoneNumber: '',
   //selectedDate:'',
   //inputCity:'',
   // Add other form fields here
 };

 const [formData, setFormData] = useState(initialFormData);
 const [isFormSubmitted, setIsFormSubmitted] = useState(false);

 const handleInputChange = (e) => {
   const { name, value } = e.target;
   // Add validation for other fields as needed
   if (name === 'userName' && /[^a-zA-Z]/.test(value)) {
     alert('Please enter only text, no numbers allowed.');
     setFormData((prevData) => ({ ...prevData, [name]: '' }));
   } else {
     setFormData((prevData) => ({ ...prevData, [name]: value }));
   }
 }
 const handleInput22 = (e) => {
   const inputValue = e.target.value;
   if (!isNaN(inputValue)) {
     setFormData((prevData) => ({ ...prevData, phoneNumber: inputValue }));
   }
 }
 const handleInput33 = (e) => {
   const { name, value } = e.target;
   // Add validation for other fields as needed
   if (name === 'photographerName' && /[^a-zA-Z]/.test(value)) {
     alert('Please enter only text, no numbers allowed.');
     setFormData((prevData) => ({ ...prevData, [name]: '' }));
   } else {
     setFormData((prevData) => ({ ...prevData, [name]: value }));
   }
 }

 const handleInput44 = (e) => {
   const inputValue = e.target.value;
   if (!isNaN(inputValue)) {
     setFormData((prevData) => ({ ...prevData, phphoneNumber: inputValue }));
   }

 }
 const handleInput55 = (e) => {
   const selectedDate = new Date(e.target.value);
   const currentDate = new Date();

   // Check if the selected date is today or later
   if (selectedDate >= currentDate) {
     // You can proceed with setting the date in the state or taking further actions
     //alert('Selected date is valid:', selectedDate);
   } else {
     // Display an error message or take other actions for an invalid date
     //alert('Selected date is invalid:', selectedDate);
   }
 }
 const [cityName, setCityName] = useState('');

 const handleInputCity = (e) => {
   const inputCity = e.target.value;

   // Check if the city name contains any numbers
   if (!/\d/.test(inputCity)) {
     // You can proceed with setting the city name in the state or taking further actions
     setCityName(inputCity);
   } else {
     // Display an error message or take other actions for an invalid city name
     alert('Number is not allowed enter only text');
   }
 };

 const handleSubmit = (e) => {
   e.preventDefault();
   console.log("formdata", formData);
   // Add validation for other fields as needed
   if (formData.userName.trim().length == 0 || formData.phoneNumber.trim().length >= 11 || formData.photographerName.trim().length == 0 || formData.phphoneNumber.trim().length >= 11 || selectedDate.length == 0||cityName.length == 0) {
     alert('Please fill  the required field.');
     return;
   }

   // If all validations pass, show success message
   setIsFormSubmitted(true);

   // Simulate submitting data to the server
   setTimeout(() => {
     alert('Successfully submitted your form! Your booking ID is SBNP-20240001');
     setIsFormSubmitted(false);
     setFormData(initialFormData);
   }, 1000);
 };

 const handleCancel = () => {
   // Reset form fields
   setFormData(initialFormData);
 };


 return (


   <div className=" min-h-screen flex flex-col items-center justify-center md:mx-32 mx-5 mt-10">

     <div className=" flex flex-col lg:flex-row justify-between w-full">
       <form className=" w-full lg:w-2/5 space-y-5 bg-[#F2F2F2] p-5 rounded-xl">



         <h4 className="text-2x2 font-semibold text-center">👇Book Now Photoshoot Slots👇</h4>
         <div className="form-group mb-4">

         </div>

         {/* <div className="form-group mb-4">
           <label htmlFor="userName" className="mr-20">Client Name</label>
           <input
             className="py-1 px-1 rounded-lg hover:shadow-[rgba(0,_0,_0,_0.24)_0px_3px_8px] transition-all"
             type="text"
             name="userName"
             id="userName"
             placeholder="Enter your name"
             style={{ '::placeholder': { fontSize: '10px' } }}
             value={userName}
             onChange={handleInputChange7}
           />
         </div>

         <div className="form-group mb-4"> 
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
         </div>*/
{/* <div className="form-group mb-4"> 
            <label htmlFor="userName1" className="mr-4">Photographer Name</label>
            <input
              className="py-1 px-1 rounded-lg hover:shadow-[rgba(0,_0,_0,_0.24)_0px_3px_8px] transition-all"
              type="text"
              name="userName1"
              id="userName1"
              placeholder="Enter PH Name"
              style={{ '::placeholder': { fontSize: '10px' } }}
              value={userName1}
              onChange={handleInputChange1}
            />
          </div>
      
          <div className="form-group mb-4">
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
          
          <div className="form-group mb-4">
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
          
         
          
          <div className="form-group mb-4">
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


          <div className="form-group mb-4">
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
      
          <div className="form-group mb-4">
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
          
          <div className="form-group mb-4">
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

          <div className="form-group mb-4">
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
          </div>*/}





/*         <div>
           <div className="form-group mb-4">
             <label htmlFor="userName" className="mr-20">
               Client Name<span className="text-red-500">*</span>
             </label>
             <input
               className="py-1 px-1 rounded-lg hover:shadow-[rgba(0,_0,_0,_0.24)_0px_3px_8px] transition-all"
               type="text"
               name="userName"
               id="userName"
               placeholder="Enter your name"
               style={{ '::placeholder': { fontSize: '10px' } }}
               value={formData.userName}
               onChange={handleInputChange}
               required
             />
           </div>
           <div className="form-group mb-4">
             <label htmlFor="phoneNumber" className="mr-5">CL Contact Number<span className="text-red-500">*</span></label>
             <input
               className="py-1 px-1 rounded-lg hover:shadow-[rgba(0,_0,_0,_0.24)_0px_3px_8px] transition-all"
               type="text"
               id="phoneNumber"
               maxLength={10}
               name="phoneNumber"
               placeholder="Enter PH Phone No"
               style={{ '::placeholder': { fontSize: '10px' } }}
               value={formData.phoneNumber}
               onChange={handleInput22}
               required
             />
           </div>
           <div className="form-group mb-4">
             <label htmlFor="photographerName" className="mr-21">
               Photographer Name<span className="text-red-500">*</span>
             </label>
             <input
               className="py-1 px-1 rounded-lg hover:shadow-[rgba(0,_0,_0,_0.24)_0px_3px_8px] transition-all"
               type="text"
               name="photographerName"
               id="photographerName"
               placeholder="Enter PH Name"
               style={{ '::placeholder': { fontSize: '10px' } }}
               value={formData.photographerName}
               onChange={handleInput33}
               required
             />
           </div>
           <div className="form-group mb-4">
             <label htmlFor="phphoneNumber" className="mr-5">PH Contact Number<span className="text-red-500">*</span></label>
             <input
               className="py-1 px-1 rounded-lg hover:shadow-[rgba(0,_0,_0,_0.24)_0px_3px_8px] transition-all"
               type="text"
               id="phphoneNumber"
               maxLength={10}
               name="phphoneNumber"
               placeholder="Enter PH phone No"
               style={{ '::placeholder': { fontSize: '10px' } }}
               value={formData.phphoneNumber}
               onChange={handleInput44}
               required
             />
           </div>
           <div className="form-group mb-4">
             <label htmlFor="datePicker" className="mr-5">
               Select Date<span className="text-red-500">*</span>
             </label>
             <input
               className="py-1 px-1 rounded-lg hover:shadow-[rgba(0,_0,_0,_0.24)_0px_3px_8px] transition-all"
               type="date"
               id="datePicker"
               name="datePicker"
               onChange={handleInput55}
               min={new Date().toISOString().split('T')[0]} // Set min attribute to today
               required
             />
           </div>
           <div className="form-group mb-4">
             <label htmlFor="cityInput" className="mr-5">
               Enter City Name<span className="text-red-500">*</span>
             </label>
             <input
               className="py-1 px-1 rounded-lg hover:shadow-[rgba(0,_0,_0,_0.24)_0px_3px_8px] transition-all"
               type="text"
               id="cityInput"
               name="cityInput"
               value={cityName}
               onChange={handleInputCity}
               required
             />
           </div>
           {/* Repeat similar pattern for other form fields */



/*        <div className="flex flex-row justify-between">
          <button type="submit" onClick={handleSubmit} className="mr-1 bg-blue-500 text-white p-2 rounded">
            Submit
          </button>
          <button type="button" onClick={handleCancel} className="ml-1 bg-blue-500 text-white p-2 rounded">
            Cancel
          </button>
        </div>

        {/* {isFormSubmitted && <p>Successfully submitted your form! Your booking ID is SBNP-20240001</p>} */
/*         </div>



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
           referrerpolicy="no-referrer-when-downgrade"></iframe> */
/*         </div>
       </div>
     </div>




     {/*<p className=" text-1xl  text-lightweight text-right text-white leading-tight">
     Visit Us</p>
     <p>https://maps.app.goo.gl/HbxApM58nZTN51mJ9</p></div>*/
/*   </div>


 );

};



export default Contact;  */

const backgroundColor = `bg-brightColor`;
const Contact = () => {
  const [formData, setFormData] = useState({
    userName: '',
    phoneNumber: '',
    photographerName: '',
    PHphoneNumber: '',
    selectedDate: '',
    cityName: '',
    selectedOption: '',
    carCount: '',
    advanceAmount: '',
    pendingAmount: '',
    visitors:'',
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;

    // Validate that the username does not contain numbers
    if (name === 'userName' && /\d/.test(value)) {
      alert('Username should not contain numbers.');
      return;
    }

    setFormData({ ...formData, [name]: value });
  };

  const handleNumberChange = (e) => {
    const value = e.target.value;

    if (/^\d+$/.test(value) && value.length <= 10) {
      setFormData({ ...formData, phoneNumber: value });
    } else {
      alert('Phone number should only contain digits and be up to 10 Number.');
    }
  };


  const handleInputChange1 = (e) => {
    const { name, value } = e.target;

    // Validate that the username does not contain numbers
    if (name === 'photographerName' && /\d/.test(value)) {
      alert('photographerName should not contain numbers.');
      return;
    }

    setFormData({ ...formData, [name]: value });
  };

  const handleNumberChange1 = (e) => {
    const value = e.target.value;

    if (/^\d+$/.test(value) && value.length <= 10) {
      setFormData({ ...formData, PHphoneNumber: value });
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

    // Validate that the username does not contain numbers
    if (name === 'cityName' && /\d/.test(value)) {
      alert('city name should not contain numbers.');
      return;
    }

    setFormData({ ...formData, [name]: value });
  };


  const handleCarCountChange = (e) => {
    const value = e.target.value;

    if (/^\d+$/.test(value) && parseInt(value) >= 0) {
      setFormData({ ...formData, carCount: value });
    } else {
      alert('Car count should be a non-negative number.');
    }
  };

  const handleAdvanceAmount = (e) => {
    const value = e.target.value;

    if (/^\d+$/.test(value) && value.length <= 10) {
      setFormData({ ...formData, advanceAmount: value });
    } else {
      alert('Character not allowed . Advance Amount should have to pay 50 % of package.');
    }
  };

  const handlePendingAmount = (e) => {
    const value = e.target.value;

    if (/^\d+$/.test(value) && value.length <= 10) {
      setFormData({ ...formData, pendingAmount: value });
    } else {
      alert('Character not allowed ');
    }
  };

  const handlevisitors = (e) => {
    const value = e.target.value;

    if (/^\d+$/.test(value) && parseInt(value) >= 0) {
      setFormData({ ...formData, visitors: value });
    } else {
      alert('Visitors count should not be allow character.');
    }
  };


  const handleSubmit = (e) => {
    e.preventDefault();

    // Validate all fields
    if (
      formData.userName.trim() === '' ||
      formData.phoneNumber.trim() === '' ||
      formData.photographerName.trim() === '' ||
      formData.PHphoneNumber.trim() === '' ||
      formData.selectedDate.trim() === '' ||
      formData.cityName.trim() === '' ||
      formData.selectedOption.trim() === '' ||
      formData.carCount.trim() === '' ||
      formData.advanceAmount.trim() === '' ||
      formData.pendingAmount.trim() === ''||
      formData.visitors.trim() === ''
    ) {
      alert('❌ Please fill in all fields.');
      return;
    }

    // Perform additional checks for other required fields if needed

    alert('✅Registration successful!✅');
    setFormData({
      userName: '',
      photographerName: '',
      phoneNumber: '',
      PHphoneNumber: '',
      selectedDate: '',
      cityName: '',
      selectedOption: '',
      carCount: '',
      advanceAmount: '',
      pendingAmount: '',
      visitors:'',
    });
  };

  const handleCancel = () => {
    setFormData({
      userName: '',
      photographerName: '',
      phoneNumber: '',
      PHphoneNumber: '',
      selectedDate: '',
      cityName: '',
      selectedOption: '',
      carCount: '',
      advanceAmount: '',
      pendingAmount: '',
      visitors:'',
    });
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
              <label htmlFor="userName" className="mr-44">
                Client Name<span className="text-red-500">*</span>
              </label>
              <input
                className="py-1 px-1 rounded-lg hover:shadow-[rgba(0,_0,_0,_0.24)_0px_3px_8px] transition-all"
                type="text"
                name="userName"
                id="userName"
                placeholder="Enter your name"
                style={{ '::placeholder': { fontSize: '8px' } }}
                value={formData.userName}
                onChange={handleInputChange}
                required
              />
            </div>


            <div className="form-group mb-4">
              <label htmlFor="phoneNumber" className="mr-40">
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
              <label htmlFor="photographerName" className="mr-28">
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
              <label htmlFor="PHphoneNumber" className="mr-32">
                PHphone Number<span className="text-red-500">*</span>
              </label>
              <input
              className="py-1 px-1 rounded-lg hover:shadow-[rgba(0,_0,_0,_0.24)_0px_3px_8px] transition-all"
                type="text"
                name="PHphoneNumber"
                id="PHphoneNumber"
                placeholder="Enter PH phone number"
                style={{ '::placeholder': { fontSize: '10px' } }}
                value={formData.PHphoneNumber}
                onChange={handleNumberChange1}
                required
              />
            </div>
            <div className="form-group mb-4">
              <label htmlFor="datePicker" className="mr-44">
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
              <label htmlFor="cityInput0" className="mr-48">
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
              <label htmlFor="selectOption" className="mr-40">
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
                <option value="">Select a package</option>
                <option value="option1">Full Package - 4000</option>
                <option value="option2">Sunset Package - 2500</option>
                <option value="option3">Night Package - 2500</option>
                {/* Add more options as needed */}
              </select>
            </div>

            <div className="form-group mb-4">
              <label htmlFor="advanceAmount" className="mr-32">
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
              <label htmlFor="pendingAmount" className="mr-36">
                Pending Amount<span className="text-red-500">*</span>
              </label>
              <input
              className="py-1 px-1 rounded-lg hover:shadow-[rgba(0,_0,_0,_0.24)_0px_3px_8px] transition-all"
                type="number"
                name="pendingAmount"
                id="pendingAmount"
                placeholder="Enter pending Amount"
                style={{ '::placeholder': { fontSize: '10px' } }}
                value={formData.pendingAmount}
                onChange={handlePendingAmount}
                //min="0"
                // Ensure the value is a positive number
                required
              />
            </div>

            <div className="form-group mb-4">
              <label htmlFor="visitors" className="mr-44">
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
            <div className="form-group mb-4">
              <label htmlFor="carCount" className="mr-48">
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
              <button type="button" onClick={handleCancel} className="ml-3 bg-blue-500 text-white p-3 rounded">
                Cancel
              </button>
            </div>

          </form>
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
          </div>
        </div>
      </div>
    </div>
  );
};
export default Contact;
























