import InputForm from "../Elements/Input"
import Button from "../Elements/Button"

const FormRegister = () => {
    return (
        <form action=''>
            <InputForm
                name={'fullname'}
                type={'text'}
                label={'Full Name'}
                placeholder={'insert your name here ...'} />

            <InputForm
                name={'email'}
                type={'email'}
                label={'Email'}
                placeholder={'example@mail.com'} />

            <InputForm
                name={'password'}
                type={'password'}
                label={'Password'}
                placeholder={'*********'} />

            <InputForm
                name={'confirmPassword'}
                type={'password'}
                label={'Confirm Password'}
                placeholder={'*********'} />

            <Button classname='bg-blue-600 w-full'>Register</Button>
        </form>
    )
}

export default FormRegister