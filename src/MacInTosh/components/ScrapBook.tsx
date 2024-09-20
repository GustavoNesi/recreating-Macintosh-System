import { useState } from "react";
import HeaderWindow from "./Header";

// Importe suas imagens
import img1 from "../public/img1.png";
import img2 from "../public/img2.png";

interface ScrapBookProps {
    window: string;
    onClose: (id: string) => void;
}

export default function ScrapBook({ window, onClose }: ScrapBookProps) {
    const name = "ScrapBook";

    // Array de imagens
    const images = [img1, img2];

    // Estado para acompanhar a página atual
    const [currentPage, setCurrentPage] = useState(0);

    // Função para ir para a próxima página
    const handleNextPage = () => {
        if (currentPage < images.length - 1) {
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
        <div className="absolute bg-white text-black w-[30rem] border-2 border-black h-[24rem] shadow-[3px_2px_0px_0.25px_rgba(0,0,0,1)] flex flex-col">
            <HeaderWindow onClose={onClose} window={window} name={name} widthLeftLineBar={36} widthRightLineBar={48}/>
            <div className="flex-1 p-2">
                <div className="bg-black w-full h-full p-2 flex items-center justify-center">
                    <div className="bg-white w-full h-full flex items-center justify-center overflow-hidden">
                        <div className="border border-black w-full h-full flex items-center justify-center">
                            {images.length > 0 && (
                                <img
                                    src={images[currentPage]}
                                    alt={`Page ${currentPage + 1}`}
                                    className="max-w-full max-h-full object-contain"
                                    style={{ maxHeight: "70%", maxWidth: "70%" }}
                                />
                            )}
                        </div>
                    </div>
                </div>
            </div>
            <div className="h-20 w-full p-2 px-5 space-y-2">
                <div className="w-full h-6 flex justify-between dotted-background-background border border-black relative">
                    <div className="h-full w-6 flex items-center justify-center bg-white border-r border-black hover:bg-black hover:text-white">
                        <button onClick={handlePrevPage} disabled={currentPage === 0}>◄</button>
                    </div>
                    <div className="relative flex-1">
                        {/* Quadrado que se move com base na página atual */}
                        <div
                            className="absolute h-[22px] bg-white border-x border-black transition-all duration-300"
                            style={{
                                width: `${100 / images.length}%`,
                                left: `${(currentPage * 100) / images.length}%`,
                                bottom: 0,
                            }}
                        />
                        
                    </div>
                    <div className="h-full w-6 flex items-center justify-center bg-white border-l border-black hover:bg-black hover:text-white">
                        <button onClick={handleNextPage} disabled={currentPage >= images.length - 1}>►</button>
                    </div>
                </div>
                <div className="flex justify-center">
                    <p className="text-sm text-start pl-1">
                        {currentPage + 1} of {images.length}
                    </p>
                </div>
            </div>
        </div>
    );
}
