import { products } from "../Data/Product";
import Categorypage from "./Categorypage";

function Casual (){

    const casualdata = products.filter((p)=>p.category ==="casual")
return(
        <>
        <Categorypage
        text="Casual" 
        data={casualdata}
        filters={["T-shirt", "Hoodie", "Short-tshirt", "Oversize"]}
        />
        </>
)

}
export default Casual;