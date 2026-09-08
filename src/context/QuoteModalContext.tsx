"use client";

import React, { createContext, useContext, useState, ReactNode } from "react";

export interface QuoteModalOptions {
  productName?: string;
  title?: string;
  message?: string;
}

interface QuoteModalContextType {
  isOpen: boolean;
  modalData: QuoteModalOptions;
  openQuoteModal: (options?: QuoteModalOptions) => void;
  closeQuoteModal: () => void;
}

const QuoteModalContext = createContext<QuoteModalContextType | undefined>(undefined);

export function QuoteModalProvider({ children }: { children: ReactNode }) {
  const [isOpen, setIsOpen] = useState(false);
  const [modalData, setModalData] = useState<QuoteModalOptions>({});

  const openQuoteModal = (options?: QuoteModalOptions) => {
    setModalData(options || {});
    setIsOpen(true);
  };

  const closeQuoteModal = () => {
    setIsOpen(false);
  };

  return (
    <QuoteModalContext.Provider
      value={{
        isOpen,
        modalData,
        openQuoteModal,
        closeQuoteModal,
      }}
    >
      {children}
    </QuoteModalContext.Provider>
  );
}

export function useQuoteModal(): QuoteModalContextType {
  const context = useContext(QuoteModalContext);
  if (!context) {
    throw new Error("useQuoteModal must be used within a QuoteModalProvider");
  }
  return context;
}
