import { BrowserRouter } from "react-router-dom";
import ReactGA from "react-ga";
import {
  About,
  Contact,
  Experience,
  Feedbacks,
  Hero,
  Navbar,
  Tech,
  Works,
  StarsCanvas,
} from "./components";

const TRACKING_ID = "G-9Y8C68S3RV";
ReactGA.initialize(TRACKING_ID);

const App = () => {
  return (
    <BrowserRouter>
      <div className="relative z-0 bg-[#151030]">
        <div className="">
          <Navbar />
          <Hero />
        </div>
        <About />
        <Experience />
        <Tech />
        <Works />
        <Feedbacks />
        <div className="relative z-0">
          <Contact />
          <StarsCanvas />
        </div>
      </div>
    </BrowserRouter>
  );
};

export default App;
