import { useState } from "react";

interface CalculatorProps {
    window: string;
    onClose: (id: string) => void;
  }
  

export default function Calculator({ window, onClose }: CalculatorProps) {
    const [input, setInput] = useState(""); // Estado para armazenar a entrada do usuário

    const handleClick = (value: string) => {
        if (value === "C") {
          setInput(""); // Limpa a entrada
        } else if (value === "=") {
          try {
            // Avalia a expressão e atualiza o input com o resultado
            const result = eval(input);
            // Verifica se o resultado é um número e limita a 2 casas decimais
            setInput(result % 1 === 0 ? result.toString() : parseFloat(result).toFixed(2));
          } catch {
            setInput("Erro"); // Exibe "Erro" se a expressão for inválida
          }
        } else {
          // Concatena os valores clicados na expressão
          setInput((prev) => prev + value);
        }
    };

    return (
      <div
        className="absolute bg-black text-black w-44 border rounded-2xl p-[2px] border-black h-72 flex flex-col"
      >
        <div className="flex h-8 p-2 items-center ">
          <div className="flex items-center justify-center h-4 w-4 border border-white hover:bg-white">
            <button
              onClick={() => onClose(window)}
            >
              X
            </button>
          </div>
          <span className="text-white ml-4 mb-[2px] font-bold">Calculator</span>
        </div>
        <div className="flex-1 bg-[#d7d7d7]  dotted-background px-3 pt-3 rounded-xl rounded-bl-2xl">
            <div className="w-full bg-white h-8 border-2 border-black">
                <input type="text" value={input} disabled className="text-end h-full w-full p-[2px] focus:border-transparent"/>
            </div>
            <div className="grid gap-2 grid-cols-4 mt-2">
                {["C", "E", "=", "*", "7", "8", "9", "/", "4", "5", "6", "-"].map((item) => (
                    <div key={item} onClick={() => handleClick(item)} className="bg-white text-center border-2 border-black w-7 h-7 shadow-[3px_2px_0px_0.25px_rgba(0,0,0,1)] hover:bg-black hover:border-white hover:text-white">{item}</div>
                ))}
            </div>
            <div className="flex-1 flex gap-2 mt-2">
                <div>
                    <div className="grid gap-5 grid-cols-3 w-24">
                        {["3", "2", "1"].map((item) => (
                            <div key={item} onClick={() => handleClick(item)} className="bg-white text-center border-2 border-black w-7 h-7 shadow-[3px_2px_0px_0.25px_rgba(0,0,0,1)] hover:bg-black hover:border-white hover:text-white">{item}</div>
                        ))}
                    </div>
                    <div className="flex gap-[10px] mt-2">
                        <div onClick={() => handleClick("0")} className="bg-white pl-2 text-start border-2 border-black w-[67px] h-7 shadow-[3px_2px_0px_0.25px_rgba(0,0,0,1)] hover:bg-black hover:border-white hover:text-white">0</div>
                        <div onClick={() => handleClick(".")} className="bg-white text-center border-2 border-black w-7 h-7 shadow-[3px_2px_0px_0.25px_rgba(0,0,0,1)] hover:bg-black hover:border-white hover:text-white">.</div>
                    </div>          
                </div>
                <div>
                    <div onClick={() => handleClick("+")} className="bg-white pt-8 ml-[3px] pl-[6px] border-2 border-black w-7 h-16 shadow-[3px_2px_0px_0.25px_rgba(0,0,0,1)] hover:bg-black hover:border-white hover:text-white">+</div>
                </div>
            </div>
        </div>
      </div>
    );
  }
  