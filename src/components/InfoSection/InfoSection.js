import React from "react";
import { Container } from "../../globalStyles";
import { InfoSec } from "./InfoSection.elements";
const InfoSection = ({ lightBg }) => {
  return (
    <div>
      <InfoSec lightBg={lightBg}>
        <Container>
          <InfoRow imgStart={imgStart}>
            <InfoColumn>
              <TextWrapper></TextWrapper>
            </InfoColumn>
          </InfoRow>
        </Container>
      </InfoSec>
    </div>
  );
};

export default InfoSection;
