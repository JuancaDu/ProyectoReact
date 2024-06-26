import React, { Children } from "react";

interface LabelProps{
    children: React.ReactNode;
}

export const Label: React.FC<LabelProps> = ({children})=>{
    return(
        <div className="w-24 h-12 rounded-full bg-white flex items-center justify-center">
            {children}
        </div>
    )
}