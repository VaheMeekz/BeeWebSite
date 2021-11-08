import React, {useCallback, useEffect, useRef} from 'react';
import close from "../../../assets/images/x.svg"
import img from "../../../assets/images/modalImg.png"

const OrderModal = ({showModal, setShowModal}) => {

    //modal

    const modalRef = useRef();

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

                            <div className="modealContentBox">
                                <div className="modalText">
                                    <div className="modalHHH">
                                        <h3>Free consultations to increase</h3>
                                        <h3> the conversion of your site</h3>
                                    </div>
                                    <div className="modalForms">
                                        <div className="nameSur">
                                            <div>
                                                <input type={"text"} placeholder={"name"} className="modalInputs"/>
                                            </div>
                                            <div>
                                                <input type={"text"} placeholder={"name"} className="modalInputs"/>
                                            </div>
                                        </div>
                                        <div className="nameSur">
                                            <div>
                                                <input type={"text"} placeholder={"name"} className="modalInputs"/>
                                            </div>
                                            <div>
                                                <input type={"text"} placeholder={"name"} className="modalInputs"/>
                                            </div>
                                        </div>
                                        <div>
                                            <textarea className="modalTextArea" rows="4" cols="50"/>
                                        </div>
                                        <div>
                                            <button className="modealSendBtn">talk to our team</button>
                                        </div>
                                    </div>
                                </div>
                                <div className="modalImg">
                                    <img src={img} alt={'img'}/>
                                </div>
                            </div>
                            <button className="closeBtn"
                                    onClick={() => setShowModal(prev => !prev)}
                            ><img src={close} alt="close"/></button>
                        </div>
                    )
                    : null
            }
        </>
    );
};

export default OrderModal;