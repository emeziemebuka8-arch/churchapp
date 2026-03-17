"use client";

import React from "react";
import { useModal } from "./ModalProvider";
import { RegistrationModal } from "./RegistrationModal";

export function ClientLayoutWrapper({ children }: { children: React.ReactNode }) {
  const { isRegistrationOpen, closeRegistration } = useModal();

  return (
    <>
      <div className={`transition-all duration-500 ${isRegistrationOpen ? 'blur-md' : ''}`}>
        {children}
      </div>
      <RegistrationModal 
        isOpen={isRegistrationOpen} 
        onClose={closeRegistration} 
      />
    </>
  );
}
