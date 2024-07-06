"use client";
import ProjectForm from "@/components/ProjectForm";
import React from "react";

const Peojects = () => {
  const handleSave = () => {
    // Any additional actions to perform on save
  };

  return (
    <>
      <ProjectForm onSave={handleSave} />
    </>
  );
};

export default Peojects;
