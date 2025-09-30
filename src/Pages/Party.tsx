import { products } from "../Data/Product";
import Categorypage from "./Categorypage";

function Party (){

    const Partydata = products.filter((p)=>p.category ==="party")
return(
        <>
        <Categorypage
        text="Party" 
        data={Partydata}
        filters={["jacket" , "traditional" , "shirt" , "jumpsuit"]}
        />
        </>
)

}
export default Party;