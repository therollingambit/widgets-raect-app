import React, { useState } from "react";
import Accordion from "./Accordion";
import Search from "./Search";
import Dropdown from "./Dropdown";
import Translate from "./Translate";

const items = [
  {
    title: "What is React?",
    content: "React is a JS library",
  },
  {
    title: "Why use React?",
    content: "React is a fav among devs",
  },
  {
    title: "How dyou use React?",
    content: "By creating components using JSX",
  },
];

const options = [
  {
    label: "The colour red",
    value: "red",
  },
  {
    label: "The colour green",
    value: "green",
  },
  {
    label: "A shade of blue",
    value: "blue",
  },
];

const App = () => {
  return (
    <div>
      <Translate />
    </div>
  );
};

export default App;
