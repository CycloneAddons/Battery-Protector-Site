import React from "react";

import App from "./view/App";
import Background from "./view/background/bg";
import Footer from "./view/background/footer";
import { BrowserRouter } from 'react-router';

const Battery = () => {
  return (
  <>
    <Background />
    <BrowserRouter>
    <App />
    </BrowserRouter>
    <Footer />
</>

  );
};

export default Battery;
