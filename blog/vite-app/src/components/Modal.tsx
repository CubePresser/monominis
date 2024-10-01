import React, { useRef, useEffect } from "react";
import { useDisableBodyScroll } from "../hooks";

export type ModalProps = {
  open: boolean;
  onClose: () => void;
} & React.PropsWithChildren;

const Modal: React.FC<ModalProps> = ({
  open,
  onClose,
  children
}) => {
  useDisableBodyScroll(open);

  const dialogRef = useRef<HTMLDialogElement>(null);

  const handleDialogClick: React.MouseEventHandler<HTMLDialogElement> =
    (event) => {
      if (dialogRef.current) {
        const rect = (event.target as HTMLElement).getBoundingClientRect();

        if (
          rect.left > event.clientX ||
          rect.right < event.clientX ||
          rect.top > event.clientY ||
          rect.bottom < event.clientY
        ) {
          dialogRef.current.close();
        }
      }
    };

  useEffect(() => {
    if (dialogRef.current) {
      if (open) {
        dialogRef.current.showModal();
      } else {
        dialogRef.current.close();
      }
    }
  }, [open]);

  return (
    <dialog className="Modal" ref={dialogRef} onClick={handleDialogClick} onClose={onClose}>
      {children}
    </dialog>
  );
};

export default Modal;
