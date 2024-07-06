// components/ProjectForm.tsx
"use client";
import { createProject } from "@/services/api";
import React, { useState } from "react";
import { toast } from "sonner"; // Import toast from Sonner

interface ProjectFormProps {
  onSave: () => void;
}

const ProjectForm: React.FC<ProjectFormProps> = ({ onSave }) => {
  const [title, setTitle] = useState("");
  const [repo, setRepo] = useState("");
  const [thumbnail, setThumbnail] = useState("");
  const [description, setDescription] = useState("");
  const [tags, setTags] = useState<string[]>([]);
  const [live, setLive] = useState("");

  const handleTagChange = (index: number, value: string) => {
    const newTags = [...tags];
    newTags[index] = value;
    setTags(newTags);
  };

  const addTagField = () => {
    setTags([...tags, ""]);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const newProject = {
      title,
      repo,
      thumbnail,
      description,
      tags,
      live,
    };

    try {
      await createProject(newProject);
      onSave();
      setTitle("");
      setRepo("");
      setThumbnail("");
      setDescription("");
      setTags([]);
      setLive("");
      toast.success("Project added successfully!");
    } catch (error) {
      console.error("Failed to save the project:", error);
      toast.error("Failed to save the project.");
    }
  };

  return (
    <div className="max-w-md mx-auto bg-white shadow-md rounded-lg p-8">
      <h2 className="text-2xl font-bold mb-6 text-gray-800">Add New Project</h2>
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
          <label htmlFor="repo" className="block text-gray-700 font-bold mb-2">
            Repository URL
          </label>
          <input
            type="url"
            id="repo"
            className="w-full p-2 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500"
            value={repo}
            onChange={(e) => setRepo(e.target.value)}
            required
          />
        </div>
        <div className="mb-4">
          <label
            htmlFor="thumbnail"
            className="block text-gray-700 font-bold mb-2"
          >
            Thumbnail URL
          </label>
          <input
            type="url"
            id="thumbnail"
            className="w-full p-2 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500"
            value={thumbnail}
            onChange={(e) => setThumbnail(e.target.value)}
            required
          />
        </div>
        <div className="mb-4">
          <label
            htmlFor="description"
            className="block text-gray-700 font-bold mb-2"
          >
            Description
          </label>
          <textarea
            id="description"
            className="w-full p-2 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            required
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 font-bold mb-2">Tags</label>
          {tags.map((tag, index) => (
            <div key={index} className="flex mb-2">
              <input
                type="text"
                className="w-full p-2 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500"
                value={tag}
                onChange={(e) => handleTagChange(index, e.target.value)}
                required
              />
            </div>
          ))}
          <button
            type="button"
            onClick={addTagField}
            className="py-1 px-3 bg-blue-500 text-white font-bold rounded-lg hover:bg-blue-600 focus:outline-none focus:bg-blue-600"
          >
            Add Tag
          </button>
        </div>
        <div className="mb-6">
          <label htmlFor="live" className="block text-gray-700 font-bold mb-2">
            Live URL
          </label>
          <input
            type="url"
            id="live"
            className="w-full p-2 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500"
            value={live}
            onChange={(e) => setLive(e.target.value)}
            required
          />
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

export default ProjectForm;
