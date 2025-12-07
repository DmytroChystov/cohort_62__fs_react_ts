import Input from "components/Input/Input";
import Button from "components/Button/Button";

function Homework08() {
    return (
        <div style={{display: "flex", flexDirection: "column", gap: 30 }}>
            <h2>Input Gross</h2>
            
            <Input
            label="Normal Input"
            name="normal_input"
            placeholder="Enter text here"
            />

            <Input
            label="Disabled Input"
            name="disabled_input"
            placeholder="Can't type here"
            disabled
            />

            <Input
            label="Input with Error"
            name="error_input"
            placeholder="Enter text here"
            error="This field is required"
            />

            <h2>Button Gross</h2>

            <Button name="Default Button" />

            <Button name="Red Button" isRed />

            <Button name="Disabled Button" isDisabled />        
        </div>

    );
}

export default Homework08;
