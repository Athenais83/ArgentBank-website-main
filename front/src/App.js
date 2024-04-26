// IMPORTS 
import { Route, Routes } from "react-router-dom";

// PAGES
import Home from "../src/pages/Home";
import SignIn from "../src/pages/SignIn";
import SignUp from "../src/pages/SignUp";
import User from "../src/pages/User";
import Error from "../src/pages/Error";

// LAYOUTS
import Header from "../src/components/Header";
import Footer from "../src/components/Footer";

// COMPONENTS
// import EditUser from "./components/EditUser/EditUser";
// import Transactions from "./components/Transactions/Transactions";

// STYLES
import "../src/sass/_app.scss";


// ROUTES & HEADER / FOOTER
function App() {
  return (
    <>
    <div className="contenair">
      <Header />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/signin" element={<SignIn />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/user" element={<User />} />

        <Route path="*" element={<Error />} />
      </Routes>
    
    </div>
      
    <Footer />
    </>
  );
}

export default App;