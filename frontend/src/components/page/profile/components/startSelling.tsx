// import React, { useEffect, useState, ChangeEvent, FC } from "react";

// import foto from "../assets/3.png";
// import "../assets/profile.css";
// import { EditProfile, HandleImage } from "./input";
// import { ProfileTypes } from "../../../../services/profile.service";
// import style from "../assets/profile.style";
// import { updateProfile } from "../../../../services/profile.service";
// import { FormEvent } from "react";

// export const StartSelling = (props: { profile: ProfileTypes[] }) => {
//   const [isEditing, setIsEditing] = useState({
//     fullName: false,
//     address: false,
//     noTelp: false,
//   });
//   const [data, setData] = useState(props.profile);
//   const [img, setImg] = useState(props.profile);

//   const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
//     const dataOnChange: ProfileTypes[] = {
//       ...data,
//       [e.target.id]: e.target.value,
//     };
//     setData(dataOnChange);
//   };
//   const imageOnChange = (e: ChangeEvent<HTMLInputElement>) => {
//     if (e.target.files) {
//       const dataOnChange = { ...img, [e.target.id]: e.target.files[0] };
//       setImg(dataOnChange);
//     }
//   };
//   console.log(data);

//   return (
//     <>
//       {data.map((info: any) => {
//         return (
//           <div style={style.infoData}>
//             <div className="foto">
//               <label style={style.upload}>
//                 <HandleImage
//                   change={(e: any) => imageOnChange(e)}
//                   id="images"
//                   value={""}
//                 />
//               </label>
//               <br />
//               Upload Image
//             </div>
//             <div className="mydata">
//               <h3> change your information</h3>
//               <table>
//                 <tbody>
//                   <tr>
//                     <td>FullName </td>
//                     {isEditing.fullName ? (
//                       <td>
//                         <EditProfile
//                           value={data[0].profile.fullname}
//                           change={(e: any) => handleChange(e)}
//                           id="fullName"
//                         />
//                       </td>
//                     ) : (
//                       <td>: {info.profile.fullname}</td>
//                     )}
//                     <td>
//                       <button>edit</button>
//                     </td>
//                   </tr>
//                   <tr>
//                     <td>Username </td>
//                     <td>: {info.username}</td>
//                   </tr>

//                   <tr>
//                     <td>Address</td>
//                     {isEditing.address ? (
//                       <td>
//                         <EditProfile
//                           value={data[0].profile.address}
//                           change={(e: any) => handleChange(e)}
//                           id="address"
//                         />
//                       </td>
//                     ) : (
//                       <td>: {info.profile.address}</td>
//                     )}
//                     <td>
//                       <button>edit</button>
//                     </td>
//                   </tr>
//                   <tr>
//                     <td>No Telephone</td>
//                     {isEditing.noTelp ? (
//                       <td>
//                         <EditProfile
//                           value={data[0].profile.noTelp}
//                           change={(e: any) => handleChange(e)}
//                           id="noTelp"
//                         />
//                       </td>
//                     ) : (
//                       <td>: {info.profile.notelp}</td>
//                     )}
//                     <td>
//                       <button>edit</button>
//                     </td>
//                   </tr>
//                   <tr>
//                     <td></td>
//                     <td></td>
//                   </tr>
//                 </tbody>
//               </table>
//             </div>
//           </div>
//         );
//       })}
//     </>
//   );
// };
export default {};
