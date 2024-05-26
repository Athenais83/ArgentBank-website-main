import { Route, Routes } from "react-router-dom";
import Home from "../src/pages/Home";
import SignIn from "../src/pages/SignIn";
import User from "../src/pages/User";
import Error from "../src/pages/Error";
import Header from "../src/components/Header";
import Footer from "../src/components/Footer";

import "../src/sass/_app.scss";

function App() {
  return (
    <>
    <div className="contenair">
      <Header />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/signin" element={<SignIn />} />
        <Route path="/user" element={<User />} />

        <Route path="*" element={<Error />} />
      </Routes>
    
    </div>
      
    <Footer />
    </>
  );
}

export default App;