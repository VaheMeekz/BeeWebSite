import React, {useCallback, useEffect, useRef} from 'react';

const OrderModal = ({showModal, setShowModal}) => {

    //modal

    const modalRef = useRef();

    const closeModal = e => {
        if (modalRef.current === e.target) {
            setShowModal(false);
        }
    };

    const keyPress = useCallback(
        e => {
            if (e.key === 'Escape' && showModal) {
                setShowModal(false);
                console.log('I pressed');
            }
        },
        [setShowModal, showModal]
    );

    useEffect(
        () => {
            document.addEventListener('keydown', keyPress);
            return () => document.removeEventListener('keydown', keyPress);
        },
        [keyPress]
    );

    return (
        <>
            {
                showModal
                    ?
                    (<div ref={modalRef} className="modalBox">
                            Modal
                        </div>
                    )
                    : null
            }
        </>
    );
};

export default OrderModal;