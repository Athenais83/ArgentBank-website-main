import "../sass/_home.scss";

import iconChat from '../img/icon-chat.png'
import iconMoney from '../img/icon-money.png'
import iconSecurity from '../img/icon-security.png'

function Home() {
   return (

      <main>
         
         <section className="banner">
            <article className="banner__content">
               <p className="banner__subtitle">No fees.</p>
               <p className="banner__subtitle">No minimum deposit.</p>
               <p className="banner__subtitle">High interest rates.</p><br></br>
               <p className="banner__text">Open a savings account with Argent Bank today!</p>
            </article>
         </section>

         <section className="feature">
            <div className="feature__item">
               <img src={iconChat} alt="Chat Icon" className="feature__icon" />
               <h2 className="feature__item-title">You are our #1 priority</h2>
               <p className="feature__item-text">Need to talk to a representative? You can get in touch through our 24/7 chat or through a phone call in less than 5 minutes.</p>
            </div>

            <div className="feature__item">
               <img src={iconMoney} alt="Chat Icon" className="feature__icon"/>
               <h2 className="feature__item-title">More savings means higher rates</h2>
               <p className="feature__item-text">The more you save with us, the higher your interest rate will be!</p>
            </div>

            <div className="feature__item">
               <img src={iconSecurity} alt="Chat Icon" className="feature__icon"/>
               <h2 className="feature__item-title">Security you can trust</h2>
               <p className="feature__item-text">We use top of the line encryption to make sure your data and money is always safe.
               </p>
            </div>
      </section>
         
      </main>

   )
 }
 
export default Home