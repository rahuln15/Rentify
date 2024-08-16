// // import React, { useState } from 'react';
// // import { useDispatch, useSelector } from 'react-redux';
// // import { Link } from 'react-router-dom';
// // import { signupUser } from '../features/authSlice'; 

// // const SignUp = () => {
// //   const dispatch = useDispatch();
// //   const { loading, error } = useSelector((state) => state.auth);

// //   const [formData, setFormData] = useState({
// //     name: '',
// //     email: '',
// //     password: '',
// //     confirmPassword: '',
// //   });

// //   const { name, email, password, confirmPassword } = formData;

// //   const handleChange = (e) => {
// //     setFormData({
// //       ...formData,
// //       [e.target.name]: e.target.value,
// //     });
// //   };

// //   const handleSubmit = (e) => {
// //     e.preventDefault();
// //     if (password !== confirmPassword) {
// //       alert("Passwords do not match");
// //       return;
// //     }
// //     dispatch(signupUser({ name, email, password }));
// //   };

// //   return (
// //     <div>
// //       <h2>Sign Up</h2>
// //       <form onSubmit={handleSubmit}>
// //         <div>
// //           <label>Name</label>
// //           <input
// //             type="text"
// //             name="name"
// //             value={name}
// //             onChange={handleChange}
// //             required
// //           />
// //         </div>
// //         <div>
// //           <label>Email</label>
// //           <input
// //             type="email"
// //             name="email"
// //             value={email}
// //             onChange={handleChange}
// //             required
// //           />
// //         </div>
// //         <div>
// //           <label>Password</label>
// //           <input
// //             type="password"
// //             name="password"
// //             value={password}
// //             onChange={handleChange}
// //             required
// //           />
// //         </div>
// //         <div>
// //           <label>Confirm Password</label>
// //           <input
// //             type="password"
// //             name="confirmPassword"
// //             value={confirmPassword}
// //             onChange={handleChange}
// //             required
// //           />
// //         </div>
// //         <button type="submit" disabled={loading}>
// //           {loading ? 'Signing up...' : 'Sign Up'}
// //         </button>
// //         {error && <p>{error}</p>}
// //       </form>
// //       <p>Already have an account? <Link to="/login">Login</Link></p>
// //     </div>
// //   );
// // };

// // export default SignUp;

// import React, { useState, useEffect } from 'react';
// import { useDispatch, useSelector } from 'react-redux';
// import { Link, useNavigate } from 'react-router-dom';
// import { signupUser } from '../features/authSlice'; 

// const SignUp = () => {
    
//     const dispatch = useDispatch();
//     const navigate = useNavigate();
//     const { loading, error, success } = useSelector((state) => state.auth);
    
//     const [formData, setFormData] = useState({
//         name: '',
//         email: '',
//         password: '',
//         confirmPassword: '',
//     });
    
//     const { name, email, password, confirmPassword } = formData;
    
//     const handleChange = (e) => {
//         setFormData({
//             ...formData,
//             [e.target.name]: e.target.value,
//         });
//     };
    
//     const handleSubmit = (e) => {
//         e.preventDefault();
//         if (password !== confirmPassword) {
//             alert("Passwords do not match");
//             return;
//         }
//         dispatch(signupUser({ name, email, password, confirmPassword }));
//     };
    
//     useEffect(() => {
//         if (success) {
//             navigate('/login'); 
//         }
//     }, [success, navigate]);
    
    
//     return (
//     <div>
//       <h2>Sign Up</h2>
//       <form onSubmit={handleSubmit}>
//         <div>
//           <label>Name</label>
//           <input
//             type="text"
//             name="name"
//             value={name}
//             onChange={handleChange}
//             required
//           />
//         </div>
//         <div>
//           <label>Email</label>
//           <input
//             type="email"
//             name="email"
//             value={email}
//             onChange={handleChange}
//             required
//           />
//         </div>
//         <div>
//           <label>Password</label>
//           <input
//             type="password"
//             name="password"
//             value={password}
//             onChange={handleChange}
//             required
//           />
//         </div>
//         <div>
//           <label>Confirm Password</label>
//           <input
//             type="password"
//             name="confirmPassword"
//             value={confirmPassword}
//             onChange={handleChange}
//             required
//           />
//         </div>
//         <button type="submit" disabled={loading}>
//           {loading ? 'Signing up...' : 'Sign Up'}
//         </button>
//         {error && <p style={{ color: 'red' }}>{error}</p>} {/* Display error messages */}
//       </form>
//       <p>Already have an account? <Link to="/login">Login</Link></p>
//     </div>
//   );
// };

// export default SignUp;


import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import { signupUser, resetSuccess } from '../features/authSlice'; 

const SignUp = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { loading, error, success } = useSelector((state) => state.auth);

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    confirmPassword: '',
  });

  const { name, email, password, confirmPassword } = formData;

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (password !== confirmPassword) {
      alert("Passwords do not match");
      return;
    }
    dispatch(signupUser({ name, email, password, confirmPassword })); // Do not send confirmPassword to the server
  };

  useEffect(() => {
    if (success) {
      dispatch(resetSuccess()); // Reset success state
      navigate('/login'); 
    }
  }, [success, navigate, dispatch]);

  return (
    <div>
      <h2>Sign Up</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Name</label>
          <input
            type="text"
            name="name"
            value={name}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label>Email</label>
          <input
            type="email"
            name="email"
            value={email}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label>Password</label>
          <input
            type="password"
            name="password"
            value={password}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label>Confirm Password</label>
          <input
            type="password"
            name="confirmPassword"
            value={confirmPassword}
            onChange={handleChange}
            required
          />
        </div>
        <button type="submit" disabled={loading}>
          {loading ? 'Signing up...' : 'Sign Up'}
        </button>
        {error && <p style={{ color: 'red' }}>{error}</p>} {/* Display error messages */}
      </form>
      <p>Already have an account? <Link to="/login">Login</Link></p>
    </div>
  );
};

export default SignUp;
