import { AiOutlinePlus } from 'react-icons/Ai';
import { AiOutlineMinus } from 'react-icons/Ai';

import React from "react";
import { Modal, Input, Row, Checkbox, Button, Text } from "@nextui-org/react";

export default function Inform() {
    const [visible, setVisible] = React.useState(false);
    const [increment, setIncrement] = React.useState(1);
    const [decrement, setDecrment] = React.useState(1);

    function PlusValue() {
        setIncrement(increment + 1);
    }
    function MinusValue() {
        if (increment > 1)
            setIncrement(increment - 1);
    }
    function IncrementChild() {
        setDecrment(decrement + 1);
    }
    function DecrementChild() {
        if (decrement > 1)
            setDecrment(decrement - 1);
    }


    const handler = () => setVisible(true);
    const closeHandler = () => {
        setVisible(false);
        console.log("closed");
    };
    return (
        <div>
            <Button auto color="warning" shadow onPress={handler}>
                {increment}Adult {decrement}Children
            </Button>
            <Modal
                closeButton
                blur
                aria-labelledby="modal-title"
                open={visible}
                onClose={closeHandler}
            >
                <Modal.Header>
                    <Text id="modal-title" size={18}>
                        Room1:
                    </Text>
                </Modal.Header>
                <Modal.Body>
                    <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                        <div>
                            <p style={{ fontWeight: 'bold' }}>Adult</p>
                            <p style={{ paddingBottom: '1em' }}>Above 12 years</p>
                            <div style={{ display: 'flex' }}>
                                <div style={{ paddingRight: '10px' }}>
                                    <AiOutlineMinus size={20} color="orange" onClick={MinusValue} />
                                </div>
                                <div style={{ fontSize: '1em' }}>
                                    {increment}
                                </div>
                                <div style={{ paddingLeft: '10px' }}>
                                    <AiOutlinePlus size={20} color="orange" onClick={PlusValue} />
                                </div>
                            </div>

                        </div>
                        <div>
                            <p style={{ fontWeight: 'bold' }}>Children</p>
                            <p style={{ paddingBottom: '1em' }}>Below 12 years</p>
                            <div style={{ display: 'flex' }}>
                                <div style={{ paddingRight: '10px' }}>
                                    <AiOutlineMinus size={20} color="orange" onClick={DecrementChild} />
                                </div>
                                <div style={{ fontSize: '1em' }}>
                                    {decrement}
                                </div>
                                <div style={{ paddingLeft: '10px' }}>
                                    <AiOutlinePlus size={20} color="orange" onClick={IncrementChild} />
                                </div>
                            </div>
                        </div>
                    </div>



                </Modal.Body>
                <Modal.Footer>
                    <Button auto flat color="error" onPress={closeHandler}>
                        Close
                    </Button>
                    <Button auto onPress={closeHandler}>
                        Add a Room
                    </Button>
                </Modal.Footer>
            </Modal>
        </div>
    );
}