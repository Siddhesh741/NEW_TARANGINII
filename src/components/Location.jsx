import React from 'react';
import './Location.css';


const Location = () => {
  return (
    <div>
      {/* Address details */}
      <div className="location-details text-center">
        <h2 style={{ fontSize: '28px' }}>👇Location Address👇</h2><br></br>
        <p style={{ fontSize: '20px' }}><strong>📍 At post Veer Samgirwadi, Taluka-Purandar, Dist-Pune,  Taranginii Farms & Set by nature paradise, behind ZP school. </strong></p>
      </div>
      <br></br>
      {/* Map container */}
      <div className="map-container">
        <div className="map-container">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3791.436240378164!2d74.06888677518258!3d18.143807282878257!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc2f94fd6d09a07%3A0xc94caf885abb7570!2sTarangini%20Farms!5e0!3m2!1sen!2sin!4v1706352485544!5m2!1sen!2sin"
            width="100%"
            height="300"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="Location"
          ></iframe>
        </div>
      </div>
      <br></br>
      {/* Video container */}
      <div className="video-container">
       
        <video
          src="./src/assets/img/1.mp4"
          width="100%"
          height="auto"
          autoPlay
          loop
          muted
        ></video>
        <video
          src="./src/assets/img/5.mp4"
          width="100%"
          height="auto"
          autoPlay
          loop
          muted
        ></video>
      </div>

      <br></br>
      <div className="instagram-link text-center">
        <p style={{ fontSize: '18px', fontWeight: 'bold', marginBottom: '10px' }}>Watch more videos & photos on Instagram click..<a href="https://www.instagram.com/sets_by_nature_paradise?igsh=MXdsZWF0em0zcHFoZA==" target="_blank" rel="noopener noreferrer" className="hover:text-blue-500 transition-all cursor-pointer"> here ↗️</a></p>
      </div>

    </div>
  );
};

export default Location;