import React from "react";

export const VideoCard=()=>{

    return(
        <div>
            <div className="grid grid-cols-12" >
                <div className="col-span-1 bg-red-500 justify-center">
                    <img className={"rounded-full w-40 h-40"} src="../../../public/unnamed.jpg" alt="dfvd" />
                </div>
                
                <div className="col-span-11 pl-5">
                <div>
                    abjkdbvjkskv
                </div>
                <div className="col-span-11  text-gray-600 text-base">
                    vdvndfklvndsklnvklds:vdsfjkvbndfk
                </div>
                <div className="col-span-11 text-gray-500 text-base">
                    kljweaio | 13 days ago
                </div>
                </div>
            </div>
        </div>
    )
}
