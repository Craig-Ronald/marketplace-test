import React, { createContext, useCallback, useContext, useState } from "react"

type Context = {
  isOpen: boolean
  open: () => void
  close: () => void
}

type ModalProviderProps = {
  children: React.ReactNode
}
  
  const ModalContext = createContext({} as Context);

  export const ModalProvider = ({ children }: ModalProviderProps) => {
    
    const [isOpen, setIsOpen] = useState(false);

    const open = useCallback(() => {
      setIsOpen(true); 
      document.body.style.overflow = 'hidden'; // prevent scrolling
    }, [])
    const close = useCallback(() => {
      setIsOpen(false);
      document.body.style.overflow = 'auto'; // enable scrolling
    }, [])

    return (
      <ModalContext.Provider value={{ isOpen, open, close }}>
        {children}
      </ModalContext.Provider>
    )
  }
  
  export const useModal = () => useContext(ModalContext)