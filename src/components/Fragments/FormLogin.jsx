import InputForm from "../Elements/Input"
import Button from "../Elements/Button"
import { useEffect, useRef, useState } from "react"
import { login } from "../../services/auth.services"

const FormLogin = () => {
    const usernameRef = useRef(null)
    const [loginFailed, setLoginFailed] = useState('')

    useEffect(() => {
        usernameRef.current.focus()
    }, [])

    const handleLogin = (event) => {
        event.preventDefault()
        // localStorage.setItem('email', event.target.email.value)
        // localStorage.setItem('password', event.target.password.value)
        // console.log('on press login', event.target.email.value)

        const data = {
            username: event.target.username.value,
            password: event.target.password.value,
        }
        login(data, (status, res) => {
            if (status) {
                localStorage.setItem('token', res)
                window.location.href = '/products'
            } else {
                console.log('error', res.response.data)
                setLoginFailed(res.response.data)
            }
        })
    }

    return (
        <form onSubmit={handleLogin}>
            <InputForm
                name={'username'}
                type={'text'}
                label={'Username'}
                placeholder={'Your Name'}
                ref={usernameRef} />

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
            {loginFailed && <p className="text-red-500 text-center mt-5">{loginFailed}</p>}
        </form>
    )
}

export default FormLogin