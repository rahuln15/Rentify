// import React, { useEffect, useState } from 'react';
// import { useDispatch, useSelector } from 'react-redux';
// import { Link, useNavigate } from 'react-router-dom';
// import { loginUser } from '../features/authSlice'; // Adjust the import path if necessary

// const Login = () => {
//   const dispatch = useDispatch();
//   const navigate = useNavigate();
//   const { loading, error, token } = useSelector((state) => state.auth);

//   const [formData, setFormData] = useState({
//     email: '',
//     password: '',
//   });

//   const { email, password } = formData;

//   const handleChange = (e) => {
//     setFormData({
//       ...formData,
//       [e.target.name]: e.target.value,
//     });
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     dispatch(loginUser({ email, password }));
//   };

//   useEffect(() => {
//     if (token) {
//       navigate('/admindashboard'); // Navigate to user dashboard upon successful login
//     }
//   }, [token, navigate]);

//   return (
//     <div>
//       <h2>Login</h2>
//       <form onSubmit={handleSubmit}>
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
//         <button type="submit" disabled={loading}>
//           {loading ? 'Logging in...' : 'Login'}
//         </button>
//         {error && <p>{error}</p>}
//       </form>
//       <p>Don't have an account? <Link to="/signup">Sign Up</Link></p>
//     </div>
//   );
// };

// export default Login;




import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import { loginUser } from '../features/authSlice'; // Adjust the import path if necessary

const Login = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { loading, error, token, role } = useSelector((state) => state.auth);

  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });

  const { email, password } = formData;

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(loginUser({ email, password }));
  };

  useEffect(() => {
    if (token) {
      if (role === 'Admin') {
        navigate('/admindashboard'); // Redirect to admin dashboard
      } else {
        navigate('/userdashboard'); // Redirect to user dashboard
      }
    }
  }, [token, role, navigate]);

  return (
    <div>
      <h5>Login</h5>
      <form onSubmit={handleSubmit}>
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
        <button type="submit" disabled={loading}>
          {loading ? 'Logging in...' : 'Login'}
        </button>
        {error && <p>{error}</p>}
      </form>
      <p>Don't have an account? <Link to="/signup">Sign Up</Link></p>
    </div>
  );
};

export default Login;
