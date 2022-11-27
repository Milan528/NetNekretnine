import React from "react";
import {
  Container,
  FillerContent,
  Section,
  SubscribeButton,
  SubscribeContent,
} from "./styles";
import { useNavigate } from "react-router-dom";
import * as routes from "../../../../../../app/router/routes.js";
const SubscribeSection = () => {
  const navigate = useNavigate();

  const handleRegisterClick = () => {
    navigate(routes.loginRoute, {
      state: {
        displayLogin: false,
      },
    });
  };
  return (
    <Section>
      <Container>
        <FillerContent />
        <SubscribeContent>
          <h2>Find Great Places To Stay at your favorite destinations</h2>
          <p>
            Our rentals offer comfort with world class facilities to travelers
            around the globe. Explore best place to stay around your favorite
            destination and get great deals.{" "}
          </p>
          <SubscribeButton
            onClick={handleRegisterClick}
            background="var(--first-color)"
            hover="var(--first-color-alt)"
          >
            Register
          </SubscribeButton>

          <SubscribeButton
            background="var(--second-color)"
            hover="var(--second-color-alt)"
          >
            Realestates
          </SubscribeButton>
        </SubscribeContent>
      </Container>
    </Section>
  );
};

export default SubscribeSection;
