const Button = (props) => {
    const {children, handleClick} = props;
    return (
        
            <button className='border border-grqay-700 bg-gray-300 flex justify-center items-center rounded-md px-4 py-2 text-gray-80 hover:bg-gray-500' onClick={ handleClick} >{children}</button>
    )

    
}

export default Button