import { products } from "../Data/Product";
import Categorypage from "./Categorypage";

function Formal (){

    const formaldata = products.filter((p)=>p.category ==="formal")
return(
        <>
        <Categorypage
        text="Formal" 
        data={formaldata}
        filters={["blazer", "suit", "coat"]}
        />
        </>
)

}
export default Formal;