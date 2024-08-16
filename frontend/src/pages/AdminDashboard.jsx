import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import axios from 'axios';

const AdminDashboard = () => {
  const { loading, error, token, role } = useSelector((state) => state.auth);

  const [formData, setFormData] = useState({
    title: '',
    sub_title: '',
    price: '',
    category: '',
    img: null,
  });
  const [submitError, setSubmitError] = useState(null);

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    setFormData({
      ...formData,
      [name]: files ? files[0] : value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const data = new FormData();
    Object.keys(formData).forEach((key) => {
      data.append(key, formData[key]);
    });

    try {
      const response = await axios.post('http://127.0.0.1:4000/api/products', data, {
        headers: {
          'Content-Type': 'multipart/form-data',
          Authorization: `Bearer ${token}`, // Ensure the token is included
        },
      });
      console.log('Product created:', response.data);
      setFormData({
        title: '',
        sub_title: '',
        price: '',
        category: '',
        img: null,
      });
    } catch (err) {
      console.error('Error creating product:', err);
      setSubmitError(err.response?.data?.error || 'An error occurred');
    }
  };

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;
  if (role !== 'Admin') return <div>Access denied. You do not have permission to view this page.</div>;

  return (
    <div>
      <h1>Admin Dashboard</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="title"
          value={formData.title}
          placeholder="Title"
          onChange={handleChange}
          required
        />
        <input
          type="text"
          name="sub_title"
          value={formData.sub_title}
          placeholder="Subtitle"
          onChange={handleChange}
        />
        <input
          type="number"
          name="price"
          value={formData.price}
          placeholder="Price"
          onChange={handleChange}
          required
        />
        <input
          type="text"
          name="category"
          value={formData.category}
          placeholder="Category"
          onChange={handleChange}
          required
        />
        <input
          type="file"
          name="img"
          onChange={handleChange}
        />
        <button type="submit">Submit</button>
        {submitError && <div>Error: {submitError}</div>}
      </form>
    </div>
  );
};

export default AdminDashboard;
