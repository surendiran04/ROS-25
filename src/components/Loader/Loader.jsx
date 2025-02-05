// import styles from "./Loader.module.css";

// const Loader = () => {
//   return (
//     <div>
//       <div className={`${styles.body}`}>
//         <span></span>
//         <span></span>
//         <span></span>
//         <span></span>
//         <span></span>
//         <div className={`${styles.base}`}>
//           <span></span>
//           <div className={`${styles.face}`}></div>
//         </div>
//       </div>

//       <div className={`${styles.longfazers} overflow-hidden`}>
//         <span></span>
//         <span></span>
//         <span></span>
//         <span></span>
//       </div>

//       <h1 className={`${styles.loader} font-subtitle text-3xl text-center`}>
//         Loading...
//       </h1>
//     </div>
//   );
// };

// export default Loader;
import React from "react";

const Loader = () => {
  return (
    <div className="flex items-center justify-center h-screen bg-gray-900">
      <div className="flex space-x-2">
        <div className="w-3 h-3 bg-blue-500 rounded-full animate-bounce"></div>
        <div className="w-3 h-3 bg-blue-500 rounded-full animate-bounce delay-150"></div>
        <div className="w-3 h-3 bg-blue-500 rounded-full animate-bounce delay-300"></div>
      </div>
    </div>
  );
};

export default Loader;

