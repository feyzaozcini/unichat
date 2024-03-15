"use client";
import { CreateServerModal } from "@/components/modals/create-server-modal";

import { useEffect, useState } from "react";
import { EditServerModal } from "@/components/modals/edit-server-modal";
import { InviteModal } from "@/components/modals/invite-modal";
import { EditServerModal } from "@/components/modals/edit-server-modal copy";

export const ModalProvider = () => {
    const[isMounted, setIsMounted]=useState(false);

    useEffect(() => {
        setIsMounted(true);
    }, []);


    if(!isMounted){
        return null;
    }


    return(
        <>
        <CreateServerModal />
        <InviteModal />
        </>
    )
}