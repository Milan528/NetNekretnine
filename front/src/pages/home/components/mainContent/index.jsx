import React from "react";
import FeaturedSection from "./components/featuredSection";
import NewestSection from "./components/newestSection";
import SearchSection from "./components/searchSection";
import SubscribeSection from "./components/subscribeSection";
import { Main } from "./styles";

const MainContent = () => {
  return (
    <Main>
      <SearchSection />
      <FeaturedSection />
      <NewestSection />
      <SubscribeSection />
    </Main>
  );
};

export default MainContent;
