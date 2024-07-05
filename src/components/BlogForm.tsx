"use client";

import React, { useState } from "react";
import { createBlog } from "../services/api";
import RichTextEditor from "./RichTextEditor";

const BlogForm = ({ onSave }: { onSave: () => void }) => {
  const [title, setTitle] = useState("");
  const [summary, setSummary] = useState("");
  const [content, setContent] = useState("");
  const [publishedAt, setPublishedAt] = useState(
    new Date().toISOString().slice(0, 10)
  );
  const [images, setImages] = useState<string[]>([""]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const newBlog = { title, summary, publishedAt, content, images };

    try {
      await createBlog(newBlog);
      onSave(); // Call the onSave function passed from the parent component
    } catch (error) {
      console.error("Failed to save the blog:", error);
    }
  };

  const handleImageChange = (index: number, value: string) => {
    const newImages = [...images];
    newImages[index] = value;
    setImages(newImages);
  };

  const addImageField = () => {
    setImages([...images, ""]);
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="max-w-2xl mx-auto bg-white p-8 shadow-md rounded-lg"
    >
      <div className="mb-6">
        <label
          htmlFor="title"
          className="block text-gray-700 text-sm font-bold mb-2"
        >
          Title
        </label>
        <input
          type="text"
          id="title"
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          required
        />
      </div>
      <div className="mb-6">
        <label
          htmlFor="summary"
          className="block text-gray-700 text-sm font-bold mb-2"
        >
          Summary
        </label>
        <textarea
          id="summary"
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          value={summary}
          onChange={(e) => setSummary(e.target.value)}
          required
        />
      </div>
      <div className="mb-6">
        <label
          htmlFor="publishedAt"
          className="block text-gray-700 text-sm font-bold mb-2"
        >
          Published At
        </label>
        <input
          type="date"
          id="publishedAt"
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          value={publishedAt}
          onChange={(e) => setPublishedAt(e.target.value)}
          required
        />
      </div>
      <div className="mb-6">
        <label
          htmlFor="content"
          className="block text-gray-700 text-sm font-bold mb-2"
        >
          Content
        </label>
        <RichTextEditor value={content} onChange={setContent} />
      </div>
      <div className="mb-6">
        <label className="block text-gray-700 text-sm font-bold mb-2">
          Images
        </label>
        {images.map((image, index) => (
          <div key={index} className="mb-2">
            <input
              type="text"
              placeholder="Image URL"
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              value={image}
              onChange={(e) => handleImageChange(index, e.target.value)}
            />
          </div>
        ))}
        <button
          type="button"
          onClick={addImageField}
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
        >
          Add Image
        </button>
      </div>
      <button
        type="submit"
        className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
      >
        Save
      </button>
    </form>
  );
};

export default BlogForm;
