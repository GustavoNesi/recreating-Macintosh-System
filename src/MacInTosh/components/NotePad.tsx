import { useState } from "react";
import HeaderWindow from "./Header";

interface NotePadProps {
    window: string;
    onClose: (id: string) => void;
}

export default function NotePad({ window, onClose }: NotePadProps) {
    const name = "Note Pad";
    
    // Estado para armazenar várias páginas
    const [pages, setPages] = useState<string[]>([
        "Keep up to eight pages of notes here in the Note Pad. Click on the dog-ear to turn to the following page. Click in the lower left corner to turn to the previous page."
    ]);

    // Estado para acompanhar a página atual
    const [currentPage, setCurrentPage] = useState(0);

    // Função para atualizar o conteúdo da página atual
    const handleInputChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
        const newPages = [...pages];
        newPages[currentPage] = e.target.value;
        setPages(newPages);
    };

    // Função para ir para a próxima página
    const handleNextPage = () => {
        if (currentPage < 4) { // Limita o número de páginas a 5
            if (currentPage === pages.length - 1) {
                setPages([...pages, ""]); // Adiciona uma nova página em branco
            }
            setCurrentPage(currentPage + 1);
        }
    };

    // Função para ir para a página anterior
    const handlePrevPage = () => {
        if (currentPage > 0) {
            setCurrentPage(currentPage - 1);
        }
    };

    return (
        <div className="absolute bg-white text-black w-80 border-2 border-black h-72 shadow-[3px_2px_0px_0.25px_rgba(0,0,0,1)] flex flex-col">
            <HeaderWindow onClose={onClose} window={window} name={name} widthLeftLineBar={20} widthRightLineBar={20}/>
            <div className="flex-1 p-2">
                <textarea
                    value={pages[currentPage]} // Mostra o conteúdo da página atual
                    onChange={handleInputChange} // Atualiza o conteúdo ao digitar
                    className="w-full h-full text-black font-extralight text-xs p-2 resize-none leading-tight"
                />
            </div>
            <div className="p-0 justify-between items-center">
                <div className="flex justify-between items-center">
                    <div className="pl-0">
                        <button 
                            onClick={handlePrevPage} 
                            className="w-0 h-0 mb-[11px] border-l-[22px] border-l-transparent border-r-[22px] border-r-transparent border-b-[22px] border-b-black rotate-45"
                        ></button>
                    </div>
                    <p className="text-base mt-3">
                        {currentPage + 1} / {pages.length}
                    </p>
                    <div className="pl-0">
                        <button 
                            onClick={handleNextPage} 
                            className="w-0 h-0 mb-[11px] border-l-[22px] border-l-transparent border-r-[22px] border-r-transparent border-b-[22px] border-b-black -rotate-45"
                        ></button>
                    </div>
                </div>
                <div className="mb-[2px] space-y-[2px]">
                    <div className='bg-black w-full min-w-[100px] h-[1px]'/>
                    <div className='bg-black w-full min-w-[100px] h-[1px]'/>
                    <div className='bg-black w-full min-w-[100px] h-[1px]'/>
                </div>
            </div>
        </div>
    );
}
