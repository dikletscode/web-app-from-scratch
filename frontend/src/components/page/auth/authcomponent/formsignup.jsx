// import React, { useState, useContext } from "react";
// import { Input } from "./microComponent/input";
// import { styles } from "./style/form.style";
// import { AdditionalSignup } from "./microComponent/additional";
// import authService from "../../services/auth.service";
// import { GlobContext } from "../../App";
// import { HandlingError } from "../handlingErrors/handlingError";

// export const Form = () => {
//   const { stateAuth, dispatchAuth } = useContext(GlobContext);

//   const [data, setData] = useState({
//     userName: "",
//     email: "",
//     password: "",
//   });
//   const hangleSignup = (e) => {
//     authService
//       .signUp(data.userName, data.email, data.password)
//       .then(() => {
//         dispatchAuth({ type: "SIGNUP_SUCCESS", payload: "success" });
//         window.location.href = "/login";
//       })
//       .catch((err) => {
//         dispatchAuth({ type: "SIGNUP_ERROR", payload: err.msg });
//       });

//     e.preventDefault();
//   };

//   const handleChange = (e) => {
//     const dataOnChange = { ...data };
//     dataOnChange[e.target.id] = e.target.value;
//     setData(dataOnChange);
//   };
//   console.log(stateAuth);
//   return (
//     <>
//       <div style={styles.container}>
//         <form onSubmit={(e) => hangleSignup(e)}>
//           <div style={styles.input}>
//             <p>SIGN UP</p>
//             <Input
//               name="username : "
//               type="text"
//               id="userName"
//               value={data.userName}
//               change={(e) => handleChange(e)}
//             />
//             <Input
//               name="email : "
//               type="email"
//               id="email"
//               value={data.email}
//               change={(e) => handleChange(e)}
//             />
//             <Input
//               name="password : "
//               type="password"
//               id="password"
//               value={data.password}
//               change={(e) => handleChange(e)}
//             />
//             <AdditionalSignup />
//           </div>
//           <HandlingError message={stateAuth.auth.error} />
//         </form>
//       </div>
//     </>
//   );
// };
