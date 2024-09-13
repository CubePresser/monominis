import { useEffect } from 'react';

// https://stackoverflow.com/questions/54989513/react-prevent-scroll-when-modal-is-open
export const useDisableBodyScroll = (disable: boolean) => {
  useEffect(() => {
    if (disable) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
  }, [disable]);
};