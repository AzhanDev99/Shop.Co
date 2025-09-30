import { products } from "../Data/Product";
import Categorypage from "./Categorypage";

function Gym (){

    const gymdata = products.filter((p)=>p.category ==="gym")
return(
        <>
        <Categorypage
        text="Gym Wear" 
        data={gymdata}
        filters={["tshirt" ,"hoodie" ,"shorts" ,"tanktop"]}
        />
        </>
)

}
export default Gym;