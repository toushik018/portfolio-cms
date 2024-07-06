"use client";

import DescriptionForm from "@/components/DescriptionForm";
import React from "react";
import { Toaster } from "sonner";

const Description = () => {
  const handleSave = () => {};

  return (
    <>
      <DescriptionForm onSave={handleSave} />
    </>
  );
};

export default Description;
