import { ReactElement, ReactNode, useEffect } from 'react';

import styles from './modalOverlay.module.css';

import { clsxm } from '@/shared/lib';

type ModalOverlayProps = {
  children: ReactNode;
  modalPosition?: 'center' | 'left' | 'right';
  hideModal: () => void;
};

export default function ModalOverlay({
  children,
  modalPosition = 'left',
  hideModal,
}: ModalOverlayProps): ReactElement {
  const activeModalPosition = {
    center: 'justify-center',
    left: 'justify-start',
    right: 'justify-end',
  };

  const overlayClasses = clsxm(
    styles.overlay,
    activeModalPosition[modalPosition]
  );

  useEffect(() => {
    document.body.classList.add('overflow-y-hidden');

    return () => document.body.classList.remove('overflow-y-hidden');
  }, []);

  return (
    <div tabIndex={0} onClick={hideModal} className={overlayClasses}>
      <div onClick={(e) => e.stopPropagation()}>{children}</div>
    </div>
  );
}
