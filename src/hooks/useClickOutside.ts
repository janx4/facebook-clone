import { useEffect } from "react";

export default function useClickOutside(
    ref: React.MutableRefObject<HTMLElement | null>,
    func: () => void
) {
    useEffect(() => {
        const listener = (e: MouseEvent | TouchEvent) => {
            if (!ref.current || ref.current.contains(e.target as HTMLElement)) {
                return;
            }

            func();
        };

        document.addEventListener("mousedown", listener);
        document.addEventListener("touchstart", listener);

        // cleanup event listener
        return () => {
            document.removeEventListener("mousedown", listener);
            document.removeEventListener("touchstart", listener);
        };
    }, [ref]);
}
