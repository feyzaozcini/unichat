import React from "react";

const  AuthLayout= ({children}: {children: React.ReactNode}) => {
    return ( 
        <div className="bg-red-500 h-full">
            {children}
        </div>
     );
}
 
export default AuthLayout;