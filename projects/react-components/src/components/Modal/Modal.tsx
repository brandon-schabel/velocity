import React, { useEffect, useRef, ReactNode } from "react";
import { Portal } from "./Portal";
import {
  ModalBackground,
  ModalContentContainer,
  ModalPositioner
} from "./styles";
import { responsiveStyleAndVariantsProps } from "../sharedPropTypes";

export interface ModalProps {
  modalContentContainer: responsiveStyleAndVariantsProps;
  modalBackDrop: responsiveStyleAndVariantsProps;
  children: ReactNode;
  handleCloseModal: () => void;
  isOpen: boolean;
}

export const Modal = ({
  children,
  handleCloseModal = () => {},
  modalContentContainer,
  modalBackDrop,
  isOpen = false
}: ModalProps) => {
  const modalContentRef = useRef(null);

  const handleClickOutside = (event: any) => {
    if (
      modalContentRef.current &&
      // @ts-ignore
      !modalContentRef.current.contains(event.target)
    ) {
      handleCloseModal();
    }
  };

  useEffect(() => {
    // Bind the event listener
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      // Unbind the event listener on clean up
      document.removeEventListener("mousedown", handleClickOutside);
    };
  });

  return (
    <Portal isOpen={isOpen}>
      {isOpen && (
        <ModalBackground {...modalBackDrop}>
          <ModalPositioner>
            <ModalContentContainer
              ref={modalContentRef}
              {...modalContentContainer}
            >
              {/*<CloseButton />*/}
              {children}
            </ModalContentContainer>
          </ModalPositioner>
        </ModalBackground>
      )}
    </Portal>
  );
};
