const Label = (props) => {
    const { htmlFor, label } = props
    return (
        <label
            htmlFor={htmlFor}
            className='block text-slate-700 text-sm font-bold mb-2'>
            {label}
        </label>
    )
}

export default Label