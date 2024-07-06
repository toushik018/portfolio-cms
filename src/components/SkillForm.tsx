"use client";
import { createSkill } from "@/services/api";
import React, { useState } from "react";
import { toast } from "sonner"; // Import toast from Sonner

interface SkillFormProps {
  onSave: () => void;
}

const categories = [
  "Programming Languages",
  "Frameworks & Libraries",
  "Software & Applications",
  "Third Party Services",
  "Hardware",
];

const SkillForm: React.FC<SkillFormProps> = ({ onSave }) => {
  const [title, setTitle] = useState("");
  const [url, setUrl] = useState("");
  const [category, setCategory] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const newSkill = { title, url, category };

    try {
      await createSkill(newSkill);
      onSave();
      setTitle("");
      setUrl("");
      setCategory("");
      toast.success("Skill added successfully!");
    } catch (error) {
      console.error("Failed to save the skill:", error);
      toast.error("Failed to save the skill.");
    }
  };

  return (
    <div className="max-w-md mx-auto bg-white shadow-md rounded-lg p-8">
      <h2 className="text-2xl font-bold mb-6 text-gray-800">Add New Skill</h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label htmlFor="title" className="block text-gray-700 font-bold mb-2">
            Title
          </label>
          <input
            type="text"
            id="title"
            className="w-full p-2 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            required
          />
        </div>
        <div className="mb-4">
          <label htmlFor="url" className="block text-gray-700 font-bold mb-2">
            URL
          </label>
          <input
            type="url"
            id="url"
            className="w-full p-2 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500"
            value={url}
            onChange={(e) => setUrl(e.target.value)}
            required
          />
        </div>
        <div className="mb-6">
          <label
            htmlFor="category"
            className="block text-gray-700 font-bold mb-2"
          >
            Category
          </label>
          <select
            id="category"
            className="w-full p-2 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500"
            value={category}
            onChange={(e) => setCategory(e.target.value)}
            required
          >
            <option value="">Select a category</option>
            {categories.map((cat) => (
              <option key={cat} value={cat}>
                {cat}
              </option>
            ))}
          </select>
        </div>
        <button
          type="submit"
          className="w-full py-2 px-4 bg-blue-500 text-white font-bold rounded-lg hover:bg-blue-600 focus:outline-none focus:bg-blue-600"
        >
          Save
        </button>
      </form>
    </div>
  );
};

export default SkillForm;
