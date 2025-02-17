import { forwardRef } from "react"
import Input from "./Input"
import Label from "./Label"

const InputForm = forwardRef((props, ref) => {
    const { type, placeholder, name, label } = props
    return (
        <div className='mb-6'>
            <Label htmlFor={name} label={label} />
            <Input name={name} type={type} placeholder={placeholder} ref={ref} />
        </div>
    )
})

export default InputForm