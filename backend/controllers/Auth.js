// const bcrypt = require('bcrypt');
// const User = require('../models/User');
// const jwt = require('jsonwebtoken');
// require('dotenv').config();

// // Signup
// exports.signup = async (req, res) => {
//     try {
//         const { name, email, password, role = 'User' } = req.body; // Default role to 'User'
        
//         const existingUser = await User.findOne({ email });
//         if (existingUser) {
//           return res.status(400).json({ error: 'User already exists' });
//         }

//         const hashedPassword = await bcrypt.hash(password, 10);
        
//         const user = await User.create({
//           name,
//           email,
//           password: hashedPassword,
//           role // role will be 'User' by default if not provided
//         });
        
//         res.status(201).json({
//           success: true,
//           message: 'User created successfully'
//         });
//       } catch (error) {
//         console.error(error);
//         res.status(500).json({
//           success: false,
//           message: 'User cannot be registered, please try again'
//         });
//       }
//       console.log(req.body);
//     };

// // Login
// exports.login = async (req, res) => {
//     try {
//         const { email, password } = req.body;

//         if (!email || !password) {
//             return res.status(400).json({ success: false, message: 'Please fill up all the required fields' });
//         }

//         const user = await User.findOne({ email });
//         if (!user) {
//             return res.status(401).json({ success: false, message: 'User is not registered with us. Please sign up to continue' });
//         }

//         if (await bcrypt.compare(password, user.password)) {
//             const token = jwt.sign({ email: user.email, id: user._id, role: user.role }, process.env.JWT_SECRET, {
//                 expiresIn: '24h'
//             });

//             user.password = undefined;
//             res.status(200).json({
//                 success: true,
//                 token,
//                 user,
//                 message: 'User login successful'
//             });
//         } else {
//             res.status(401).json({ success: false, message: 'Invalid password' });
//         }
//     } catch (error) {
//         console.error(error);
//         res.status(500).json({ success: false, message: 'Login failure. Please try again' });
//     }
// };


const bcrypt = require('bcrypt');
const User = require('../models/User');
const jwt = require('jsonwebtoken');
require('dotenv').config();

// Signup
exports.signup = async (req, res) => {
    try {
        const { name, email, password, confirmPassword, role = 'User' } = req.body; // Default role to 'User'
        
        // Check if passwords match
        if (password !== confirmPassword) {
            return res.status(400).json({ success: false, message: 'Passwords do not match' });
        }

        // Check if user already exists
        const existingUser = await User.findOne({ email });
        if (existingUser) {
            return res.status(400).json({ success: false, message: 'User already exists' });
        }

        // Hash the password
        const hashedPassword = await bcrypt.hash(password, 10);

        // Create the new user
        const user = await User.create({
            name,
            email,
            password: hashedPassword,
            role // role will be 'User' by default if not provided
        });

        res.status(201).json({
            success: true,
            message: 'User created successfully',
        });
    } catch (error) {
        console.error(error);
        res.status(500).json({
            success: false,
            message: 'User cannot be registered, please try again',
        });
    }
};

// Login
exports.login = async (req, res) => {
    try {
        const { email, password } = req.body;

        // Ensure email and password are provided
        if (!email || !password) {
            return res.status(400).json({ success: false, message: 'Please fill up all the required fields' });
        }

        // Find user by email
        const user = await User.findOne({ email });
        if (!user) {
            return res.status(401).json({ success: false, message: 'User is not registered with us. Please sign up to continue' });
        }

        // Compare the provided password with the stored hashed password
        const isPasswordValid = await bcrypt.compare(password, user.password);
        if (isPasswordValid) {
            // Generate JWT token
            const token = jwt.sign(
                { email: user.email, id: user._id, role: user.role },
                process.env.JWT_SECRET,
                { expiresIn: '24h' }
            );

            // Exclude the password from the user object in the response
            user.password = undefined;

            res.status(200).json({
                success: true,
                token,
                user,
                message: 'User login successful',
            });
        } else {
            res.status(401).json({ success: false, message: 'Invalid password' });
        }
    } catch (error) {
        console.error(error);
        res.status(500).json({ success: false, message: 'Login failure. Please try again' });
    }
};
