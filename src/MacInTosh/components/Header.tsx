interface HeaderWindowProps {
    name: string;
    onClose: (id: string) => void;
    window: string;
    widthLeftLineBar?: number;
    widthRightLineBar: number;
}

export default function HeaderWindow({ name, onClose, window, widthLeftLineBar, widthRightLineBar }: HeaderWindowProps) {
    return (
        <div className='w-full flex border-b-2 p-[1px] justify-between border-black items-center'>
            <div className='flex items-center'>
                <div className='flex flex-col justify-center items-center space-y-[2px] mr-[1px]'>
                    <div className='bg-black w-2 h-[1px]'/>
                    <div className='bg-black w-2 h-[1px]'/>
                    <div className='bg-black w-2 h-[1px]'/>
                    <div className='bg-black w-2 h-[1px]'/>
                    <div className='bg-black w-2 h-[1px]'/>
                    <div className='bg-black w-2 h-[1px]'/>
                </div>
                <div className='border-black border w-4 h-4 flex items-center justify-center hover:bg-black'>
                    <button
                        onClick={() => onClose(window)}
                        className="px-2 py-1 rounded text-white"
                    >
                        X
                    </button>
                </div>
                <div className='flex-1 flex flex-col justify-center items-center space-y-[2px] ml-[1px]'>
                    <div className={`bg-black w-${widthLeftLineBar} min-w-[${widthLeftLineBar}px] h-[1px]`}/>
                    <div className={`bg-black w-${widthLeftLineBar} min-w-[${widthLeftLineBar}px] h-[1px]`}/>
                    <div className={`bg-black w-${widthLeftLineBar} min-w-[${widthLeftLineBar}px] h-[1px]`}/>
                    <div className={`bg-black w-${widthLeftLineBar} min-w-[${widthLeftLineBar}px] h-[1px]`}/>
                    <div className={`bg-black w-${widthLeftLineBar} min-w-[${widthLeftLineBar}px] h-[1px]`}/>
                    <div className={`bg-black w-${widthLeftLineBar} min-w-[${widthLeftLineBar}px] h-[1px]`}/>
                </div>
            </div>
            
            <div className='flex-shrink-0'>
                <p className='font-bold'>{name}</p>
            </div>

            <div className='flex flex-col justify-center items-center space-y-[2px]'>
                <div className={`bg-black w-${widthRightLineBar} min-w-[${widthRightLineBar}px] h-[1px]`}/>
                <div className={`bg-black w-${widthRightLineBar} min-w-[${widthRightLineBar}px] h-[1px]`}/>
                <div className={`bg-black w-${widthRightLineBar} min-w-[${widthRightLineBar}px] h-[1px]`}/>
                <div className={`bg-black w-${widthRightLineBar} min-w-[${widthRightLineBar}px] h-[1px]`}/>
                <div className={`bg-black w-${widthRightLineBar} min-w-[${widthRightLineBar}px] h-[1px]`}/>
                <div className={`bg-black w-${widthRightLineBar} min-w-[${widthRightLineBar}px] h-[1px]`}/>
            </div>
        </div>
    )
}
