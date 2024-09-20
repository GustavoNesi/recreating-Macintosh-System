import HeaderWindow from "../Header";

interface ControlPanelProps {
    window: string;
    onClose: (id: string) => void;
}

export default function SystemSetup({ window, onClose }: ControlPanelProps) {
    const name = "About the Bookintosh®";

    return (
        <div className="absolute bg-white text-black w-[30rem] border-2 border-black h-52 shadow-[3px_2px_0px_0.25px_rgba(0,0,0,1)]">
            <HeaderWindow onClose={onClose} window={window} name={name} widthLeftLineBar={20} widthRightLineBar={24}/>
            <div className="flex-1"> 
                <div className="p-2 flex-1">
                    <p>Gustavo Nesi</p>
                    <p>19 Years</p>
                    <p>gustavo.nesi@gmail.com</p>
                    <p className="mt-6">Book Compute, Inc. 2024</p>
                </div>
                <div className="flex justify-between border-t-2 border-t-black p-2">
                    <div className="flex justify-between items-center gap-3">
                        <p>Total Memory:</p>
                        <p>3,43k</p>
                    </div>
                    <div className="flex justify-between items-center gap-3">
                        <p>Largest Unused Block:</p>
                        <p>4,43k</p>
                    </div>
                </div>
            </div>
        </div>
    );
}
