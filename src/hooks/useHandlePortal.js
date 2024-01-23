import { useState } from 'react';

export default function useHandlePortal() {
    const [isInsertedToDOM, setIsInsertedToDOM] = useState(false)
    const [isVisibleToScreen, setIsVisibleToScreen] = useState(false)

    const open = () => {
        setIsInsertedToDOM(true)
        setTimeout(() => {
            setIsVisibleToScreen(true)
        }, 50);
    }

    const close = () => {
        setIsVisibleToScreen(false)
        setTimeout(() => {
            setIsInsertedToDOM(false)
        }, 1000);
    }

    return [isInsertedToDOM, isVisibleToScreen, open, close]
}
