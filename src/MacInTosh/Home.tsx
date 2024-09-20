import logo from "/src/MacInTosh/public/ugly-monster.png";
import TrashIcon from "/src/MacInTosh/public/trash-removebg-preview.png";
import SoftareSystemIcon from "/src/MacInTosh/public/SystemCard.png";

import { useWindowContext, WindowProvider } from "./hooks/WindowContext"
import Calculator from "./components/Calculator";
import SystemInfo from "./components/SystemInfo"; 
import Draggable from "react-draggable";
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuLabel, DropdownMenuTrigger } from "@/components/ui/dropdown-menu";
import ControlPanel from "./components/ControlPanel";
import NotePad from "./components/NotePad";
import ScrapBook from "./components/ScrapBook";
import { useEffect, useState } from "react";
import SystemSetup from "./components/Icons/SystemSetup";

function HomePage() {
    const { windows, openWindow, closeWindow } = useWindowContext();
    const [showAnimation, setShowAnimation] = useState(true);
    const [activeMenu, setActiveMenu] = useState<string | null>(null);

    useEffect(() => {
        const timer = setTimeout(() => {
            setShowAnimation(false);
        }, 3000);

        return () => clearTimeout(timer); // Limpa o timer ao desmontar
    }, []);

    const handleMenuOpen = (menu: string | null) => {
        setActiveMenu(menu);
    }

    // Fechar o menu ao clicar fora
    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            const dropdowns = document.querySelectorAll('.dropdown-menu');
            const isClickInside = Array.from(dropdowns).some(dropdown => dropdown.contains(event.target as Node));

            if (!isClickInside) {
                setActiveMenu(null);
            }
        };

        document.addEventListener('mousedown', handleClickOutside);
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, []);

    const handleOpenWindow = (type: string) => {
        let component: JSX.Element;
    
        switch (type) {
          case 'Calculadora':
            component = (
              <Calculator
                window={(Date.now()).toString()}
                key={type}
                onClose={() => closeWindow(Date.now())} // Ajustar a função de fechar passando o ID
              />
            );
            break;
          case 'SystemConfig':
            component = (
              <SystemInfo
                window={(Date.now()).toString()} // Adicionando a propriedade window
                key={type}
                onClose={() => closeWindow(Date.now())}
              />
            );
            break;
          case 'ControlPanel':
            component = (
                <ControlPanel
                    window={(Date.now()).toString()}
                    key={type}
                    onClose={() => closeWindow(Date.now())}
                />
            );
            break;
           case 'NotePad':
            component = (
                <NotePad
                    window={(Date.now()).toString()}
                    key={type}
                    onClose={() => closeWindow(Date.now())}
                />
            );
            break;
            case 'ScrapBook':
            component = (
                <ScrapBook
                    window={(Date.now()).toString()}
                    key={type}
                    onClose={() => closeWindow(Date.now())}
                />
            );
            break;
            case 'System1.0.0':
            component = (
                <SystemSetup
                    window={(Date.now()).toString()}
                    key={type}
                    onClose={() => closeWindow(Date.now())}
                />
            );
            break
            case 'Puzzle':
            component = (
                <SystemSetup
                    window={(Date.now()).toString()}
                    key={type}
                    onClose={() => closeWindow(Date.now())}
                />
            );
            break
          default:
            return;
        }
        openWindow(type, component);
      }

  return (
    <div className='h-screen w-full flex items-center justify-center bg-[#000000] overflow-hidden'>
        <div className='h-[670px] mt-10 pt-6 w-[740px] rounded-xl flex  justify-center bg-[#b2a87c]'>
            {showAnimation ? (
                <div className="h-[580px] old-screen w-[660px] justify-center items-center dotted-background-background bg-[#808080] shadow-[0px_0px_3px_7px_rgba(0,0,0,0.2)] border-2 flex flex-col border-black rounded-xl relative overflow-hidden">
                    <div className="text-center bg-white w-[30rem] h-32 border-2 border-black p-[2px]">
                        <div className="h-full w-full border-2 border-black flex items-center justify-center">
                            <p>Welcome to BookIntosh®</p>
                        </div>
                    </div>
                </div>
            ) : (
                <div className="h-[580px] w-[660px] old-screen dotted-background-background bg-[#808080] shadow-[0px_0px_3px_7px_rgba(0,0,0,0.2)] border-2 flex flex-col border-black rounded-xl relative overflow-hidden">
                    <div className="flex justify-between bg-[#ffffff] w-full h-10 border-b-2 rounded-tl-xl rounded-tr-xl p-1 border-black">
                        <div className="flex space-x-4 text-sm items-center ml-2">
                            {/* Logo Dropdown */}
                            <DropdownMenu onOpenChange={() => handleMenuOpen('logo')}>
                                <DropdownMenuTrigger asChild>
                                    <div className="p-1"> 
                                        <img src={logo} alt="Logo" className="h-6" />
                                    </div>
                                </DropdownMenuTrigger>
                                <DropdownMenuContent className="w-48 h-64 space-y-1  shadow-[3px_2px_0px_0.25px_rgba(0,0,0,1)] p-0 font-bold text-start left-20 rounded-none border-2 border-black relative bottom-[1px]">
                                    <DropdownMenuLabel className="border-b-2 pl-3 border-black text-base border-dotted hover:bg-black hover:text-white">Sobre o Portifólio</DropdownMenuLabel>
                                    <DropdownMenuItem className="hover:bg-black rounded-none font-light text-base hover:text-white pl-3" onClick={() => handleOpenWindow('SystemConfig')}>Made By</DropdownMenuItem>
                                    <DropdownMenuItem className="hover:bg-black rounded-none font-light text-base hover:text-white pl-3" onClick={() => handleOpenWindow('Calculadora')}>Calculator</DropdownMenuItem>
                                    <DropdownMenuItem className="hover:bg-black rounded-none font-light text-base hover:text-white pl-3" onClick={() => handleOpenWindow('NotePad')}>Note Pad</DropdownMenuItem>
                                    <DropdownMenuItem className="hover:bg-black rounded-none font-light text-base hover:text-white pl-3" onClick={() => handleOpenWindow('ControlPanel')}>Control Panel</DropdownMenuItem>
                                    <DropdownMenuItem className="hover:bg-black rounded-none font-light text-base hover:text-white pl-3" onClick={() => handleOpenWindow('ScrapBook')}>ScrapBook</DropdownMenuItem>
                                    <DropdownMenuItem className="hover:bg-black rounded-none font-light text-base hover:text-white pl-3" onClick={() => handleOpenWindow('Puzzle')}>Puzzle</DropdownMenuItem>
                                </DropdownMenuContent>
                            </DropdownMenu>

                            {/* File Dropdown */}
                            <DropdownMenu onOpenChange={() => handleMenuOpen('file')}>
                                <DropdownMenuTrigger asChild>
                                    <a href="#" className={`text-xl ${activeMenu === 'file' ? 'bg-black text-white h-10 border-t-[6px] border-white' : ''}`}>File</a>
                                </DropdownMenuTrigger>
                                <DropdownMenuContent className="w-48 h-32  shadow-[3px_2px_0px_0.25px_rgba(0,0,0,1)] p-0 text-sm font-bold text-start left-[76px] rounded-none bg-white border-2 border-black relative bottom-[5px]">
                                    <DropdownMenuLabel className="border-b-2 pl-3 border-black text-base border-dotted hover:bg-black hover:text-white">File Options</DropdownMenuLabel>
                                    <DropdownMenuItem className="hover:bg-black rounded-none font-light text-base hover:text-white pl-3">New</DropdownMenuItem>
                                    <DropdownMenuItem className="hover:bg-black rounded-none font-light text-base hover:text-white pl-3">Open</DropdownMenuItem>
                                    <DropdownMenuItem className="hover:bg-black rounded-none font-light text-base hover:text-white pl-3">Save</DropdownMenuItem>
                                </DropdownMenuContent>
                            </DropdownMenu>

                            {/* Edit Dropdown */}
                            <DropdownMenu onOpenChange={() => handleMenuOpen('Edit')}>
                                <DropdownMenuTrigger asChild>
                                    <a href="#" className={`text-xl ${activeMenu === 'Edit' ? 'bg-black text-white h-10 border-t-[6px] border-white' : ''}`}>Edit</a>
                                </DropdownMenuTrigger>
                                <DropdownMenuContent className="w-48 h-40 space-y-1 shadow-[3px_2px_0px_0.25px_rgba(0,0,0,1)] p-0 text-sm font-bold text-start  left-[74px] rounded-none bg-white border-2 border-black relative bottom-[5px]">
                                    <DropdownMenuLabel className="border-b-2 pl-3 border-black text-base border-dotted hover:bg-black hover:text-white">Edit Options</DropdownMenuLabel>
                                    <DropdownMenuItem className="hover:bg-black rounded-none font-light text-base hover:text-white pl-3">Undo</DropdownMenuItem>
                                    <DropdownMenuItem className="hover:bg-black rounded-none font-light text-base hover:text-white pl-3">Redo</DropdownMenuItem>
                                    <DropdownMenuItem className="hover:bg-black rounded-none font-light text-base hover:text-white pl-3">Cut</DropdownMenuItem>
                                    <DropdownMenuItem className="hover:bg-black rounded-none font-light text-base hover:text-white pl-3">Copy</DropdownMenuItem>
                                    <DropdownMenuItem className="hover:bg-black rounded-none font-light text-base hover:text-white pl-3">Paste</DropdownMenuItem>
                                </DropdownMenuContent>
                            </DropdownMenu>

                            {/* View Dropdown */}
                            <DropdownMenu onOpenChange={() => handleMenuOpen('View')}>
                                <DropdownMenuTrigger asChild>
                                    <a href="#" className={`text-xl ${activeMenu === 'View' ? 'bg-black text-white h-10 border-t-[6px] border-white' : ''}`}>View</a>
                                </DropdownMenuTrigger>
                                <DropdownMenuContent className="w-48 h-32 space-y-1 shadow-[3px_2px_0px_0.25px_rgba(0,0,0,1)] p-0 text-sm font-bold text-start left-[70px] rounded-none bg-white border-2 border-black relative bottom-[5px]">
                                    <DropdownMenuLabel className="border-b-2 pl-3 border-black text-base border-dotted hover:bg-black hover:text-white">View Options</DropdownMenuLabel>
                                    <DropdownMenuItem className="hover:bg-black rounded-none font-light text-base hover:text-white pl-3">Zoom In</DropdownMenuItem>
                                    <DropdownMenuItem className="hover:bg-black rounded-none font-light text-base hover:text-white pl-3">Zoom Out</DropdownMenuItem>
                                </DropdownMenuContent>
                            </DropdownMenu>

                            {/* Help Dropdown */}
                            <DropdownMenu onOpenChange={() => handleMenuOpen('Help')}>
                                <DropdownMenuTrigger asChild>
                                    <a href="#" className={`text-xl ${activeMenu === 'Help' ? 'bg-black text-white h-10 border-t-[6px] border-white' : ''}`}>Help</a>
                                </DropdownMenuTrigger>
                                <DropdownMenuContent className="w-48 h-32 space-y-1 shadow-[3px_2px_0px_0.25px_rgba(0,0,0,1)] p-0 text-sm font-bold text-start left-[72px] rounded-none bg-white border-2 border-black relative bottom-[5px]">
                                    <DropdownMenuLabel className="border-b-2 pl-3 border-black text-base border-dotted hover:bg-black hover:text-white">Help Options</DropdownMenuLabel>
                                    <DropdownMenuItem className="hover:bg-black rounded-none font-light text-base hover:text-white pl-3">Documentation</DropdownMenuItem>
                                    <DropdownMenuItem className="hover:bg-black rounded-none font-light text-base hover:text-white pl-3">Report Issue</DropdownMenuItem>
                                </DropdownMenuContent>
                            </DropdownMenu>
                        </div>
                    </div>
                    <div className="relative flex-1 overflow-hidden">
                    {/* Renderizando ícones dinamicamente */}
                    {windows.map(win => (
                        <Draggable key={win.id} defaultPosition={{ x: win.x, y: win.y }}>
                            <div style={{ position: 'absolute' }}>
                                {win.component}
                            </div>
                        </Draggable>
                    ))}
                        <div className="h-full w-full flex flex-col items-end justify-between p-6">
                            <div className="flex flex-col justify-center items-center -mr-4">
                               <button onClick={() => handleOpenWindow('System1.0.0')}>
                                    <img src={SoftareSystemIcon} alt="TrashIcon" className="h-14" />
                                </button>
                                <div className="bg-white w-">
                                    <p className="text-xs">System 1.0.0</p>
                                </div> 
                            </div>
                            <div className="flex flex-col justify-center items-center">
                               <button>
                                    <img src={TrashIcon} alt="TrashIcon" className="h-16" />
                                </button>
                                <div className="bg-white w-14 text-center">
                                    <p className="text-xs">Trash</p>
                                </div> 
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </div>
    </div>
  );
}

export default function Home() {
    return (
      <WindowProvider>
        <HomePage />
      </WindowProvider>
    );
  }