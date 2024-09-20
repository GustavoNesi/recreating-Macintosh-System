import { createContext, useState, useContext, ReactNode } from 'react';

// Define o tipo para cada janela
interface WindowType {
  id: number;
  title: string;
  component: JSX.Element;
  x: number;
  y: number;
}

// Define o tipo para o valor do contexto
interface WindowContextType {
  windows: WindowType[];
  openWindow: (title: string, component: JSX.Element) => void;
  closeWindow: (id: number) => void;
}

// Define o valor inicial do contexto como undefined
const WindowContext = createContext<WindowContextType | undefined>(undefined);

interface WindowProviderProps {
  children: ReactNode;
}

// Cria o Provider com tipagem
export function WindowProvider({ children }: WindowProviderProps) {
  const [windows, setWindows] = useState<WindowType[]>([]);

  const openWindow = (title: string, component: JSX.Element) => {
    setWindows([...windows, { title, component, x: 50, y: 50, id: Date.now() }]);
  };

  const closeWindow = (id: number) => {
    setWindows(windows.filter((window) => window.id !== id));
  };

  return (
    <WindowContext.Provider value={{ windows, openWindow, closeWindow }}>
      {children}
    </WindowContext.Provider>
  );
}

// Hook para usar o contexto
export function useWindowContext() {
  const context = useContext(WindowContext);
  
  if (!context) {
    throw new Error('useWindowContext must be used within a WindowProvider');
  }

  return context;
}