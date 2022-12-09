
// export const UncontrolledForm = () => {
//     const handleSubmit = (e) => {
//         e.preventDefault();
//         console.log(e.target);
//         console.dir(e.target);
//         console.log(e.target.elements);
//         const {login, password} = e.target.elements;
//         console.log(login.value, password.value);
//         // e.target is a referrence to the form DOM element (which is an object, of course)
//     };

//   return (
//     <form autoComplete="off" onSubmit={handleSubmit}>
//       <label htmlFor="login">
//         Login
//         <input type="text" name="login" />
//       </label>

//       <label htmlFor="password">
//         Password
//         <input type="password" name="password" />
//       </label>

//       <button type="submit">Submit</button>
//     </form>
//   );
// };
