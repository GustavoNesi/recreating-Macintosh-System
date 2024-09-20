import HeaderWindow from "./Header";

// Definindo os tipos das props recebidas pelo componente
interface SystemInfoProps {
    window: string;
    onClose: (id: string) => void;
}

export default function SystemInfo({ window, onClose }: SystemInfoProps) {
  const name = "SystemInfo"

  return (
    <div className="absolute bg-white text-black w-96 border-2 border-black h-26 shadow-[3px_2px_0px_0.25px_rgba(0,0,0,1)]">
      <HeaderWindow onClose={onClose} window={window} name={name} widthLeftLineBar={20} widthRightLineBar={36}/>
      <div className="h-10 p-2 font-light text-center">
        <p>Gustavo Nesi, Version 1.0.0 (18 Set 24)</p>
      </div>
    </div>
  );
}
