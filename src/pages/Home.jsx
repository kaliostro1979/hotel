import React from 'react';
import SlideList from "../components/page-list/SlideList";
import { LIST_ITEMS } from "../mock_data/home.data";

const Home = () => {
  return (
    <div className={"Home"}>
      <SlideList sectionClass={"List"} data={LIST_ITEMS}/>
    </div>
  );
};

export default Home;
