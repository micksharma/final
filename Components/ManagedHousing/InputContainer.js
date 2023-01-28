import React from "react";
import { Input, useInput, Grid } from "@nextui-org/react";


export default function InputContainer() {
    const { value, reset, bindings } = useInput("");

    const validateEmail = (value) => {
        return value.match(/^[A-Z0-9._%+-]+@[A-Z0-9.-]+.[A-Z]{2,4}$/i);
    };

    const helper = React.useMemo(() => {
        if (!value)
            return {
                text: "",
                color: "",
            };
        const isValid = validateEmail(value);
        return {
            text: isValid ? "Correct email" : "Enter a valid email",
            color: isValid ? "success" : "error",
        };
    }, [value]);
    return (
        <Grid.Container gap={4}>
            <div style={{flexDirection:'row',paddingLeft:'2em'}}>
                <div style={{display:'flex',justifyContent:'space-evenly'}}>
                    <Grid>
                        <Input
                            clearable
                            placeholder="Name"
                            width="28em"
                        />
                    </Grid>
                    <Grid>
                        <Input
                            {...bindings}
                            clearable
                            shadow={false}
                            onClearClick={reset}
                            status={helper.color}
                            color={helper.color}
                            helperColor={helper.color}
                            helperText={helper.text}
                            type="email"
                            placeholder="Email"
                            width="28em"
                        />
                    </Grid>
                    <Grid>
                        <Input
                            clearable
                            placeholder="Number"
                            width="22em"
                        />
                    </Grid>

                </div>
                <div style={{flexDirection:'row'}}>
                <Grid>
                        <Input
                            clearable
                            contentRightStyling={false}
                            placeholder="Company"
                            width="28em"
                            size="xl"
                            
                        />
                    </Grid>
                    <Grid>
                        <Input
                            clearable
                            contentRightStyling={false}
                            placeholder="Type your message..."
                            width="28em"
                            size="xl"
                        />
                    </Grid>
                </div>
            </div>
        </Grid.Container>
    );
}