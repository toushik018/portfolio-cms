"use client";

import React, { useState } from "react";
import BlogForm from "../../components/BlogForm";

const Blogs = () => {
  const handleSave = () => {
    // Redirect or refresh the page after saving
    alert("Blog saved successfully!");
  };

  return (
    <div>
      <h1>Manage Blogs</h1>
      <BlogForm onSave={handleSave} />
    </div>
  );
};

export default Blogs;
