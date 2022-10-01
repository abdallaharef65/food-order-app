import React, { useState } from "react";
import { Button, Modal } from "react-bootstrap";
import img from "../assets/images/ali-inay-y3aP9oo9Pjc-unsplash.jpg";
import About from "./aboutMe";
const Home = () => {
  const [state, setState] = useState(false);

  const showModal = () => {
    console.log(state);
    setState(!state);
  };
  //jsx
  return (
    <React.Fragment>
      <div>
        <Button
          onClick={() => {
            showModal();
          }}
        >
          Click
        </Button>
        <About state={state} setState={setState} />
      </div>
    </React.Fragment>
  );
};

export default Home;
// <img src={img} />
