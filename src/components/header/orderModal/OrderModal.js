import React, {useCallback, useEffect, useRef, useState} from 'react';
import close from "../../../assets/images/x.svg"
import img from "../../../assets/images/modalImg.png"
import emailjs from 'emailjs-com';

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
    //send email

    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm('service_wk41r2f',  'template_htax8fr', e.target, 'user_YB1ZfeSkFNlnDkV6epXcE')
            .then((result) => {
                console.log(result);
            }).catch(err => console.log(err));
    };

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
                                            <form ref={form} onSubmit={sendEmail}>

                                                <div className="nameSur">
                                                    <div>
                                                        <label>Name</label>
                                                        <input type={"text"} name={"name"}  className={"modalInputs"} placeholder={"name"}/>
                                                    </div>
                                                    <div>
                                                        <label>Surname</label>
                                                        <input type={"text"} name={"surnamename"}  className={"modalInputs"} placeholder={"surname"}/>
                                                    </div>
                                                </div>
                                                <div className="nameSur">
                                                    <div>
                                                        <label>Email</label>
                                                        <input type={"text"} name={"email"}  className={"modalInputs"} placeholder={"email"}/>
                                                    </div>
                                                    <div>
                                                        <label>Phone</label>
                                                        <input type={"text"} name={"number"} className={"modalInputs"} placeholder={"number"}/>
                                                    </div>
                                                </div>
                                                    <div className="textAreaBox">
                                                        <textarea className="modalTextArea" name={"message"} placeholder={"message"} rows="4" cols="50"/>
                                                    </div>
                                                    <div className="modealSendBtnBox">
                                                        <input className="modealSendBtn" type={"submit"}  value={"talk to our team"}/>
                                                    </div>



                                                {/*<div className="nameSur">*/}
                                                {/*    <div>*/}
                                                {/*                <input type={"text"} name={"name"}  className={"modalInputs"} placeholder={"name"}/>*/}
                                                {/*            </div>*/}
                                                {/*            <div>*/}
                                                {/*                <input type={"text"} name={"surnamename"}  className={"modalInputs"} placeholder={"name"}/>*/}
                                                {/*            </div>*/}
                                                {/*</div>*/}
                                                {/*<div className="nameSur">*/}
                                                {/*    <div>*/}
                                                {/*        <input type={"text"} placeholder={"email"} value={curEmail} onChange={e => setCurEmail(e.target.value)} className={"modalInputs"}/>*/}
                                                {/*    </div>*/}
                                                {/*    <div>*/}
                                                {/*        <input type={"text"} placeholder={"phone"} value={curNumb} onChange={e => setCurNumb(e.target.value)}   className={"modalInputs"}/>*/}
                                                {/*    </div>*/}
                                                {/*</div>*/}

                                                {/*<div className="textAreaBox">*/}
                                                {/*    <textarea className="modalTextArea"  rows="4" cols="50"/>*/}
                                                {/*</div>*/}
                                                {/*<div className="modealSendBtnBox">*/}
                                                {/*    <button className="modealSendBtn"   onClick={() =>  setShowModal(prev => !prev)}>talk to our team</button>*/}
                                                {/*</div>*/}


                                            </form>
                                    </div>
                                </div>
                                <div className="modalImg">
                                    <img src={img} alt={'img'}/>
                                </div>
                            </div>
                            <button className="closeBtn"
                                    onClick={() =>  setShowModal(prev => !prev)}
                            ><img src={close} alt="close"/></button>

                        </div>
                    )
                    : null
            }
        </>
    );
};

export default OrderModal;