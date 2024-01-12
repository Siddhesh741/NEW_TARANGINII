//import styled from "styled-components";
import styled from "styled-components";

const Location = () => {


  return <Wrapper>
    <h2 className="common-heading">Visit here</h2>

    <iframe
      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3791.4362403781647!2d74.
    06888677496612!3d18.
    14380728287821!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.
    1!3m3!1m2!1s0x3bc2f94fd6d09a07%3A0xc94caf885abb7570!2sTarangini%20Farms!5e0!3m2!1sen!2sin!4v1704900997312!5m2!1sen!2sin"
      width="100%"
      height="400"
      style={{ border: 0 }}
      allowfullscreen=""
      loading="lazy"
      referrerPolicy="no-referrer-when-downgrade"></iframe>

  </Wrapper>;
};
export default Location;