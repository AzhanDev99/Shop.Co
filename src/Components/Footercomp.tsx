import { Link } from "react-router-dom";

type FootercompProps ={
    heading?:string;
    text1?:string;
    text2?:string;
    text3?:string;
    text4?:string;
    link1?:string;
    link2?:string;
    link3?:string;
}

function Footercomp ({heading ,text1,text2,text3,text4,link1,link2,link3}:FootercompProps){
    return (
    <>
    <div className='flex flex-col justify-between gap-4 whitespace-nowrap'>
        <h1 className='font-black pb-4'>{heading}</h1>
        {link1 ? (<Link to={link1}><h3>{text1}</h3></Link>) : <h3>{text1}</h3> }
        {link2 ? (<Link to={link2}><h3>{text2}</h3></Link>) : <h3>{text2}</h3> }
        {link3 ? (<Link to={link3}><h3>{text3}</h3></Link>) : <h3>{text3}</h3> }
        <h3>{text4}</h3>
    </div>
    </>
    )}

export default Footercomp;