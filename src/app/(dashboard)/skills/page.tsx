"use client";

import React from "react";
import SkillForm from "@/components/SkillForm";

const PostSkill = () => {
  const handleSave = () => {};

  return (
    <div>
      <h1 className="text-2xl font-bold mb-4">Post a New Skill</h1>
      <SkillForm onSave={handleSave} />
    </div>
  );
};

export default PostSkill;
