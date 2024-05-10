import React from "react";
import styled from "styled-components";
import Mgs from "../../images/mgs.jpeg";
// img is created by .img
const MgsImage = styled.img`
  width: 50px;
`;
console.log(Mgs);

function UsingImages() {
  return (
    <div>
      <MgsImage src={Mgs} alt="Metal Gear Solid" />
    </div>
  );
}

export default UsingImages;
