import { useEffect, useRef } from 'react'
function useScroll<T extends HTMLElement>(arg: T | null) {
    const ref = useRef<T>(arg)
    const scrollToBottom = () => {
        if (ref.current !== null) {
            ref.current.scrollIntoView({ behavior: 'smooth' });
        }
    };
    useEffect(scrollToBottom, []);

    return ref
}

export default useScroll
