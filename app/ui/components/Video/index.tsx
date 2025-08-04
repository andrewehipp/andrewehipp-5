import React from 'react';

export type VideoProps = {
    children: React.ReactNode;
} & React.ComponentPropsWithoutRef<'video'>

const Video = ({
    children,
    ...props
}: VideoProps) => {
    const video = React.useRef<HTMLVideoElement>(null);

    React.useEffect(() => {
        const options = {
            rootMargin: "0px",
            scrollMargin: "0px",
            threshold: 1.0,
        };

        const handleInView: IntersectionObserverCallback = (entries) => {
            entries.forEach((entry: IntersectionObserverEntry) => {
                if (entry.intersectionRatio === 1) {
                    (entry.target as HTMLVideoElement).play();
                } else {
                    (entry.target as HTMLVideoElement).pause();
                }
            });
        }

        const observer = new IntersectionObserver(handleInView, options);

        if (video.current) {
            observer.observe(video.current);
        }

        return () => {
            observer.disconnect();
        };
    }, []);

    return (
        <video ref={video} {...props} muted>
            {children}
        </video>
    );
}

export default Video;
