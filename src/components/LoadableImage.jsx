import React, {useEffect, useRef, useState} from 'react';
import cn from 'classnames';
import styles from '../assets/LoadableImage.module.css'
import useOnScreen from "../hooks/use-on-screen";

const LoadableImage = props => {
    const {src, alt = ''} = props;
    const [isLoaded, setIsLoaded] = useState(false);
    const imageRef = useRef(null);
    const containerRef = useRef(null);
    const isVisible = useOnScreen(containerRef);

    useEffect(() => {
        if (!isVisible || isLoaded) {
            return;
        }

        if (imageRef.current) {
            setIsLoaded(true);
        }
    }, [isVisible, isLoaded]);

    return (
        <div ref={containerRef} className={cn(
            styles.containerImg,
            {
                [styles.containerImgLoaded]: isLoaded
            }
        )}>
            {(isVisible || isLoaded) && (<img ref={imageRef} className={cn(
                styles.image,
                {
                    [styles.imageLoaded]: isLoaded
                }
            )} src={src} alt={alt}/>)}
        </div>
    );
};

export default LoadableImage;

// import React, {useEffect, useRef, useState} from 'react';
// import cn from 'classnames';
// import styles from '../assets/LoadableImage.module.css'
// import useOnScreen from "../hooks/use-on-screen";
//
// const LoadableImage = (props) => {
//     const {
//         src, alt = '', onLoad = () => {
//         }
//     } = props;
//     const [isLoaded, setIsLoaded] = useState(false);
//     const imageRef = useRef(null);
//     const containerRef = useRef(null);
//     const isVisible = useOnScreen(containerRef);
//
//     useEffect(() => {
//         if (!isVisible || isLoaded) {
//             return;
//         }
//
//         if (imageRef.current) {
//             imageRef.current.onload = () => {
//                 setIsLoaded(true);
//                 onLoad();
//             }
//         }
//     }, [isVisible, onLoad, isLoaded]);
//
//     return (
//         <div ref={containerRef} className={cn(
//             styles.containerImg,
//             {
//                 [styles.containerImgLoaded]: isLoaded
//             }
//         )}>
//             {(isVisible || isLoaded) && (<img ref={imageRef} className={cn(
//                 styles.image,
//                 {
//                     [styles.imageLoaded]: isLoaded
//                 }
//             )} src={src} alt={alt}/>)}
//         </div>
//     );
// };
//
// export default LoadableImage;