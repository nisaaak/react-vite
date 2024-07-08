import InputForm from "../Elements/Input"
import Button from "../Elements/Button"

const FormLogin = () => {
    return (
        <form action=''>
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

            <Button classname='bg-blue-600 w-full'>Login</Button>
        </form>
    )
}

export default FormLogin