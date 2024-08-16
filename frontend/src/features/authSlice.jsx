// import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
// import axios from 'axios';

// const initialState = {
//   user: null,
//   token: null,
//   loading: false,
//   error: null,
// };

// export const signupUser = createAsyncThunk(
//   'auth/signup',
//   async (userData, { rejectWithValue }) => {
      
//       try {
//           const response = await axios.post('https://rentify-rose-theta.vercel.app/api/signup', userData);
//         //   console.log(response.data);
          
//       return response.data;
//     } catch (err) {
//       return rejectWithValue(err.response.data);
//     }
//   }
// );

// export const loginUser = createAsyncThunk(
//   'auth/login',
//   async (loginData, { rejectWithValue }) => {
//     try {
//       const response = await axios.post('https://rentify-rose-theta.vercel.app/api/signup', loginData);
//       return response.data;
//     } catch (err) {
//       return rejectWithValue(err.response.data);
//     }
//   }
// );

// const authSlice = createSlice({
//   name: 'auth',
//   initialState,
//   reducers: {
//     logout: (state) => {
//       state.user = null;
//       state.token = null;
//     },
//   },
//   extraReducers: (builder) => {
//     builder
//       .addCase(signupUser.pending, (state) => {
//         state.loading = true;
//         state.error = null;
//       })
//       .addCase(signupUser.fulfilled, (state, action) => {
//         state.loading = false;
//         state.user = action.payload.user;
//         state.token = action.payload.token;
//       })
//       .addCase(signupUser.rejected, (state, action) => {
//         state.loading = false;
//         state.error = action.payload;
//       })
//       .addCase(loginUser.pending, (state) => {
//         state.loading = true;
//         state.error = null;
//       })
//       .addCase(loginUser.fulfilled, (state, action) => {
//         state.loading = false;
//         state.user = action.payload.user;
//         state.token = action.payload.token;
//       })
//       .addCase(loginUser.rejected, (state, action) => {
//         state.loading = false;
//         state.error = action.payload;
//       });
//   },
// });

// export const { logout } = authSlice.actions;
// export default authSlice.reducer;






// import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
// import axios from 'axios';

// const initialState = {
//   user: null,
//   token: null,
//   loading: false,
//   error: null,
//   success: false, // Add success state
// };

// export const signupUser = createAsyncThunk(
//   'auth/signup',
//   async (userData, { rejectWithValue }) => {
//     try {
//       const response = await axios.post('https://rentify-rose-theta.vercel.app/api/signup', userData);
//       return response.data;
//     } catch (err) {
//       return rejectWithValue(err.response.data);
//     }
//   }
// );

// export const loginUser = createAsyncThunk(
//   'auth/login',
//   async (loginData, { rejectWithValue }) => {
//     try {
//       const response = await axios.post('https://rentify-rose-theta.vercel.app/api/login', loginData); 
//       console.log(response.data);
      
//       return response.data;
//     } catch (err) {
//       return rejectWithValue(err.response.data);
//     }
//   }
// );

// const authSlice = createSlice({
//   name: 'auth',
//   initialState,
//   reducers: {
//     logout: (state) => {
//       state.user = null;
//       state.token = null;
//     },
//     resetSuccess: (state) => {
//       state.success = false; // Reset success state
//     },
//   },
//   extraReducers: (builder) => {
//     builder
//       .addCase(signupUser.pending, (state) => {
//         state.loading = true;
//         state.error = null;
//         state.success = false;
//       })
//       .addCase(signupUser.fulfilled, (state, action) => {
//         state.loading = false;
//         state.user = action.payload.user;
//         state.token = action.payload.token;
//         state.success = true; // Set success to true on signup
//       })
//       .addCase(signupUser.rejected, (state, action) => {
//         state.loading = false;
//         state.error = action.payload;
//       })
//       .addCase(loginUser.pending, (state) => {
//         state.loading = true;
//         state.error = null;
//       })
//       .addCase(loginUser.fulfilled, (state, action) => {
//         state.loading = false;
//         state.user = action.payload.user;
//         state.token = action.payload.token;
//       })
//       .addCase(loginUser.rejected, (state, action) => {
//         state.loading = false;
//         state.error = action.payload;
//       });
//   },
// });

// export const { logout, resetSuccess } = authSlice.actions;
// export default authSlice.reducer;



import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const initialState = {
  user: null,
  token: null,
  role: null, // Add role to initial state
  loading: false,
  error: null,
  success: false,
};

export const signupUser = createAsyncThunk(
  'auth/signup',
  async (userData, { rejectWithValue }) => {
    try {
      const response = await axios.post('https://rentify-rose-theta.vercel.app/api/signup', userData);
      return response.data;
    } catch (err) {
      return rejectWithValue(err.response.data);
    }
  }
);

export const loginUser = createAsyncThunk(
  'auth/login',
  async (loginData, { rejectWithValue }) => {
    try {
      const response = await axios.post('https://rentify-rose-theta.vercel.app/api/login', loginData);
      console.log(response.data);
      
      return response.data;
    } catch (err) {
      return rejectWithValue(err.response.data);
    }
  }
);

// const authSlice = createSlice({
//   name: 'auth',
//   initialState,
//   reducers: {
//     logout: (state) => {
//       state.user = null;
//       state.token = null;
//       state.role = null;
//     },
//     resetSuccess: (state) => {
//       state.success = false;
//     },
//   },
//   extraReducers: (builder) => {
//     builder
//       .addCase(signupUser.pending, (state) => {
//         state.loading = true;
//         state.error = null;
//         state.success = false;
//       })
//       .addCase(signupUser.fulfilled, (state, action) => {
//         state.loading = false;
//         state.user = action.payload.user;
//         state.token = action.payload.token;
//         state.role = action.payload.user.role; // Set the role from the response
//         state.success = true;
//       })
//       .addCase(signupUser.rejected, (state, action) => {
//         state.loading = false;
//         state.error = action.payload;
//       })
//       .addCase(loginUser.pending, (state) => {
//         state.loading = true;
//         state.error = null;
//       })
//       .addCase(loginUser.fulfilled, (state, action) => {
//         state.loading = false;
//         state.user = action.payload.user;
//         state.token = action.payload.token;
//         state.role = action.payload.user.role; // Set the role from the response
//       })
//       .addCase(loginUser.rejected, (state, action) => {
//         state.loading = false;
//         state.error = action.payload;
//       });
//   },
// });

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    logout: (state) => {
      state.user = null;
      state.token = null;
      state.role = null;
    },
    resetSuccess: (state) => {
      state.success = false;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(signupUser.pending, (state) => {
        state.loading = true;
        state.error = null;
        state.success = false;
      })
      .addCase(signupUser.fulfilled, (state, action) => {
        state.loading = false;
        state.user = action.payload.user;
        state.token = action.payload.token;
        state.role = action.payload.user?.role ?? null; // Safely access role
        state.success = true;
      })
      .addCase(signupUser.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })
      .addCase(loginUser.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(loginUser.fulfilled, (state, action) => {
        state.loading = false;
        state.user = action.payload.user;
        state.token = action.payload.token;
        state.role = action.payload.user?.role ?? null; // Safely access role
      })
      .addCase(loginUser.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });
  },
});

export const { logout, resetSuccess } = authSlice.actions;
export default authSlice.reducer;
