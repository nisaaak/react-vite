import { Link } from "react-router-dom"
import FormLogin from "../Fragments/FormLogin"
import { useState } from "react";

const AuthLayout = (props) => {
    const [user, setUser] = useState({
        name: 'John',
        info: {
            address: 'Jakarta',
            age: 25,
        }
    });

    const { children, title, type } = props
    return (
        <div className='flex justify-center min-h-screen items-center'>
            <div className='w-full max-w-xs'>
                <h1 className='text-3xl font-bold mb-2 text-blue-600'>{title}</h1>
                <p className='font-medium text-slate-500 mb-8'>
                    Welcome, Please enter your details
                </p>
                {children}
                <Navigation type={type} />
            </div>
        </div>
    )
}

const Navigation = ({ type }) => {
    if (type === 'register') {
        return (
            <p className="text-sm mt-5 text-center">
                Already have an account?{' '}
                <Link to="/login" className="font-bold text-blue-500">
                    Login
                </Link>
            </p>
        )
    } else {
        return (
            <p className="text-sm mt-5 text-center">
                Don't have an account?{' '}
                <Link to="/register" className="font-bold text-blue-500">
                    Sign up
                </Link>
            </p>
        )
    }
}
export default AuthLayout