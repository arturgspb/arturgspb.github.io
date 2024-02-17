"use client"

import { useCallback, useState } from "react";

export const useOpen = () => {
    const [isOpen, setIsOpen] = useState<boolean>(false);
    const handleToggleClick = useCallback(() => {
        setIsOpen(prev => !prev);
    }, [])

    return {
        isOpen,
        handleToggleClick,
    }
}