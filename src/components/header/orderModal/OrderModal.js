import React, {useCallback, useEffect, useRef, useState} from 'react';
import close from "../../../assets/images/x.svg"
import img from "../../../assets/images/modalImg.png"
import emailjs from 'emailjs-com';
import useForm from "../../../assets/hooks/useForm";
import {Button, TextField} from "@material-ui/core";

const OrderModal = ({showModal, setShowModal}) => {

    //regex
    const email = useForm(
        '',
        'email',
        {isEmpty: true, isEmail: false}
    )

    const onSubmit = (e) => {
        e.preventDefault()
        return null
    }

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
                                                        {/*<input type={"text"} name={"name"}  className={"modalInputs"} placeholder={"name"}/>*/}
                                                        <TextField id="standard-basic" label="Name" variant="standard" name={"name"} className={"modalInputs"}/>
                                                    </div>
                                                    <div>
                                                        {/*<input type={"text"} name={"surnamename"}  className={"modalInputs"} placeholder={"surname"}/>*/}
                                                        <TextField id="standard-basic" label="Surname" variant="standard" name={"surnamename"} className={"modalInputs"}/>
                                                    </div>
                                                </div>
                                                <div className="nameSur">
                                                    <div>
                                                        {/*<input type={"text"} name={"email"}  className={"modalInputs"} placeholder={"email"}/>*/}
                                                        <TextField id="standard-basic" label="Email" variant="standard" name={"email"} className={"modalInputs"}/>
                                                    </div>
                                                    <div>
                                                        {/*<input type={"text"} name={"number"} className={"modalInputs"} placeholder={"number"}/>*/}
                                                        <TextField id="standard-basic" label="Number" variant="standard" name={"number"} className={"modalInputs"}/>
                                                    </div>
                                                </div>
                                                    <div className="textAreaBox">
                                                        <textarea className="modalTextArea" name={"message"} placeholder={"message"} rows="4" cols="50"/>
                                                    </div>
                                                    <div className="modealSendBtnBox">
                                                        {/*<input className="modealSendBtn" type={"submit"}  value={"talk to our team"}/>*/}
                                                        <Button variant="contained"  type={"submit"} type={"submit"}>talk to our team</Button>
                                                    </div>
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