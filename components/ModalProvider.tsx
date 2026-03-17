"use client";

import React, { createContext, useContext, useState, ReactNode } from "react";

interface ModalContextType {
  isRegistrationOpen: boolean;
  openRegistration: () => void;
  closeRegistration: () => void;
}

const ModalContext = createContext<ModalContextType | undefined>(undefined);

export function ModalProvider({ children }: { children: ReactNode }) {
  const [isRegistrationOpen, setIsRegistrationOpen] = useState(false);

  const openRegistration = () => setIsRegistrationOpen(true);
  const closeRegistration = () => setIsRegistrationOpen(false);

  return (
    <ModalContext.Provider value={{ isRegistrationOpen, openRegistration, closeRegistration }}>
      {children}
    </ModalContext.Provider>
  );
}

export function useModal() {
  const context = useContext(ModalContext);
  if (context === undefined) {
    throw new Error("useModal must be used within a ModalProvider");
  }
  return context;
}
