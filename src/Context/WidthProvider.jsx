import { useEffect, useState } from 'react';
import WidthContext from './WidthContext';

const WidthProvider = ({children})=> {
    const [screenWidth, setScreenWidth] = useState(window.innerWidth);

    useEffect(()=> {
        window.addEventListener("resize", ()=> {
            setScreenWidth(window.innerWidth);
        })

        return ()=> {
            window.removeEventListener("resize", ()=> {
                setScreenWidth(window.innerWidth)
            });
        }

    }, [])

    return <WidthContext value={screenWidth}>
        {children}
    </WidthContext>
}

export default WidthProvider;