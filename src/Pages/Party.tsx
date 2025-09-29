import { products } from "../Data/Product";
import Categorypage from "./Categorypage";

function Party (){

    const formaldata = products.filter((p)=>p.category ==="party")
return(
        <>
        <Categorypage
        text="Party" 
        data={formaldata}
        filters={["blazer", "suit", "coat"]}
        />
        </>
)

}
export default Party;