// import React, { useState, useEffect } from "react";
// import "./App.css";
// import { Link } from "react-router-dom";
// import { db, auth } from "./firebase";
// import { Button, Input } from "@material-ui/core";
// import ImageUpload from "./ImageUpload";
// import Logo2 from './Logo2.png';
// import ChatIcon from '@material-ui/icons/Chat';
// import Home from './Home';


// function Nav() {
//     const [user, setUser] = useState(null);
//     const [openSignIn, setOpenSignIn] = useState(false);
//     const [open, setOpen] = useState(false);
//     useState(() =>
//     {user ? (
//         <div className="icon_div">
//             <Link to='/Chatbox'>
//               <div className="chaticon">
//             <ChatIcon />
//              </div>
//             </Link>
//             <Link to='/AboutUs'>
//               <div className="aboutus">
//               About Us
//              </div>
//             </Link>
//       <Button onClick={() => auth.signOut()}>Logout</Button>
//       </div>
//     ) : (
//       <div className="apploginContainer">
//         <Button onClick={() => setOpenSignIn(true)}>Sign In</Button>
//         <Button onClick={() => setOpen(true)}>Sign Up</Button>
//       </div>
//     )}
//     )
//     useState(() =>
//     {user?.displayName ? (
//         <ImageUpload username={user.displayName} />
//       ) : (
//         <div className="errtext">
//           <center>
//             <h2></h2><br></br>
//           </center>
//         </div>
//       )}
//     )
 
//     return (
//         <><div className="appheader">
//              <img
//                  className="appheaderImage"
//                  src={Logo2}
//                  alt="" />
//          </div><div className="heading">
//                  <center>
//                      <h2><i>Welcome to TravelGram</i></h2>
//                  </center>
//              </div></>
      
//       );
// }

// export default Nav;