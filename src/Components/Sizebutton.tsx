type SizebuttonProps ={
    text?:string
    onClick?: ()=> void
}


function Sizebutton ({text, onClick}:SizebuttonProps ){
    return(
        <>
        <button
        onClick={onClick} 
        className="px-7 py-2 rounded-[20px] bg-gray-500">{text}</button>
        </>
    )
}

export default Sizebutton;