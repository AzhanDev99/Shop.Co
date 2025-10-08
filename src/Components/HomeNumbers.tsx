import { useInView } from "react-intersection-observer";
import Animatednumber from "./Animatednumber";

type HomeNumberProps = {
  number?: number;
  text?: string;
  margintop?:string;
};

function HomeNumber({ number = 0, text ,margintop }: HomeNumberProps) {
    const {ref, inView} =useInView({
        triggerOnce:true,
        threshold:1,
    }); 
  return (
    <>
      <div ref={ref} >
        <h1 className={`text-3xl font-bold md:font-normal ${margintop}`} >
          {inView ? <Animatednumber value={number} /> :0}+
        </h1>

        <h1>{text}</h1>
      </div>
    </>
  );
}
export default HomeNumber;
