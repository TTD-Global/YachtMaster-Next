import React from 'react'

interface UseElementOnCheckerProps {
    checkerRef: any;
}
export const UseElementOnChecker = ({ checkerRef }:UseElementOnCheckerProps) => {
    // const checkerRef:any = React.useRef<any>()
    const containerRef:any = React.useRef<any>()
    const [onscreen, setOnscreen] = React.useState(false);

    React.useEffect(() => {
        (()=>{
            let height = checkerRef?.current?.offsetHeight + 104;
            const topMargin = height;
            const container = containerRef?.current

            const observer = new IntersectionObserver((entries:any) => {
                const [entry] = entries;
                if(entry.isIntersecting) {
                    window.addEventListener('scroll', onScroll);
                    return () => window.removeEventListener('scroll', onScroll);
                }
            }, { threshold: 0});
                
            const onScroll = () => {
                const rect = container.getBoundingClientRect();
                // if (rect.top <= topMargin  && rect.bottom + height - 110  > topMargin ) {
                if (rect.top <= topMargin ) {
                        setOnscreen(true)
                } else {
                setOnscreen(false)
                }
            };
            if(container) observer.observe(container)
            return () => {
                if(container) observer.unobserve(container)
            };
        })()
    }, [])

    return [containerRef, onscreen];
}

