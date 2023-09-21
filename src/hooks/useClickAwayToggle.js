import { useState, useEffect, useRef } from 'react';

const useClickAwayToggle = () => {
    const [show, setShow] = useState(false);
    const ref = useRef(null);

    useEffect(() => {
        const handleClickAway = (event) => {
            if (ref.current && !ref.current.contains(event.target)){
                setShow(false);
            }
        };

        document.addEventListener('mouseup', handleClickAway);
        return () => {
            document.removeEventListener('mouseup', handleClickAway);
        };
    }, [ref]);

  return {
    show,
    setShow,
    ref
  };
};

export default useClickAwayToggle;