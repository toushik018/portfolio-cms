"use client";
import BlogForm from "@/components/BlogForm";
import React from "react";


const PostBlog = () => {
  const handleSave = () => {
  
  };

  return (
    <div>
      <h1 className="text-2xl font-bold mb-4">Post a New Blog</h1>
      <BlogForm onSave={handleSave} />
    </div>
  );
};

export default PostBlog;
