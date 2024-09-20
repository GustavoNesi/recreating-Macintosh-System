import HeaderWindow from "./Header";

interface ControlPanelProps {
    window: string;
    onClose: (id: string) => void;
}

export default function ControlPanel({ window, onClose }: ControlPanelProps) {
    const name = "Control Panel";

    return (
        <div className="absolute bg-white text-black w-96 border-2 border-black h-52 shadow-[3px_2px_0px_0.25px_rgba(0,0,0,1)]">
            <HeaderWindow onClose={onClose} window={window} name={name} widthLeftLineBar={24} widthRightLineBar={24}/>
            <div className="h-2/4 flex justify-between p-2 font-light border-b border-black">
                <p>Gustavo Nesi</p>
                <p>Cidade: Capivari De Baixo</p>
            </div>
            <div className="p-2">
                <p>Manolo</p>
             </div>
        </div>
    );
}
