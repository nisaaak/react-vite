import InputForm from "../Elements/Input"
import Button from "../Elements/Button"
import { useEffect, useRef } from "react"

const FormLogin = () => {
    const emailRef = useRef(null)

    useEffect(() => {
        emailRef.current.focus()
    }, [])

    const handleLogin = (event) => {
        event.preventDefault()
        localStorage.setItem('email', event.target.email.value)
        localStorage.setItem('password', event.target.password.value)
        console.log('on press login', event.target.email.value)
        window.location.href = '/products'
    }

    return (
        <form onSubmit={handleLogin}>
            <InputForm
                name={'email'}
                type={'email'}
                label={'Email'}
                placeholder={'example@mail.com'}
                ref={emailRef} />

            <InputForm
                name={'password'}
                type={'password'}
                label={'Password'}
                placeholder={'*********'} />

            <Button
                classname='bg-blue-600 w-full'
                type={'submit'}>
                Login
            </Button>
        </form>
    )
}

export default FormLogin