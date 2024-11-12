import React from 'react';

export const useElementOnScreen =  ( options?:any )  => {
    const containerRef:any = React.useRef<any>(null)
    const [isOnscreen, setIsOnscreen] = React.useState(false);
    const [height, setHeight] = React.useState<number>();

    React.useEffect(() => {
        const container = containerRef.current
        const observer = new IntersectionObserver((entries:any) => {
            const [entry] = entries;
            setIsOnscreen(entry.isIntersecting)
            setHeight(height)
        }, options);

        if(container) observer.observe(container)
        return () => {
            if(container) observer.unobserve(container)
        };

    }, [])

    return [containerRef, isOnscreen];    
}