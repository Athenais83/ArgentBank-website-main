import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useNavigate } from "react-router-dom";

import Transactions from '../components/Transactions';
import EditUser from '../components/EditUser';

function User() {

   const token = useSelector((state) => state.auth.token);
   const navigate = useNavigate();

   useEffect(() => {
      if (!token) {
         navigate("/signin");
      }
   }, [token, navigate]);

   return (
      <main className="main bg-dark-user">

         <EditUser />
         
         <Transactions />
      
      </main>
   )
}
 
export default User
