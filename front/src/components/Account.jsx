import { NavLink } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux';
import React, { useEffect } from 'react';


import '../sass/_account.scss'


function Account() {

   const dispatch = useDispatch();

   const token = useSelector((state) => state.auth.token);
   const username = useSelector((state) => state.name.username);

   const handleLogout = () => {
      dispatch({
         type: 'LOGOUT',
      });
   };
 
   useEffect(() => {
      if (token) {
         const fetchData = async () => {
            try {
            const response = await fetch('http://localhost:3001/api/v1/user/profile', {
               method: 'POST',
               headers: {
                  'Content-Type': 'application/json',
                  'Authorization': `Bearer ${token}`,
               },
            });
   
            if (response.ok) {
               const data = await response.json();
               console.log(data);

               dispatch({
                  type: 'SET_USER',
                  payload: {
                     username: data.body.userName,
                     firstname: data.body.firstName,
                     lastname: data.body.lastName,
                  },
               });
               
            } else {
               console.log("Erreur lors de la récupération du profil de l'utilisateur");
            }
            } catch (error) {
               console.log("Erreur lors de la récupération du profil de l'utilisateur");
            }
         };
         
         fetchData();

      }
      }, [dispatch, token]);

   return (
      <>
         {username ? (
            <div className='cont-user'>
               <i className="fa fa-user-circle icon-sign-in"></i>
               <NavLink className='btn-user' to="/user">   
                  <p>{username}</p>
               </NavLink>
               <button className='sign-in-button' onClick={handleLogout}>Sign out</button>
            </div>
         ) : (
            <div className='cont-user'>
               <NavLink className='btn-user' to="/signin">
                  <p>Sign In</p>
               </NavLink>
            </div>
            
         )}
      </>
   )
 }
 
export default Account