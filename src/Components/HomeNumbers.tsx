import { useInView } from "react-intersection-observer";
import Animatednumber from "./Animatednumber";

type HomeNumberProps = {
  number?: number;
  text?: string;
};

function HomeNumber({ number = 0, text }: HomeNumberProps) {

    const {ref, inView} =useInView({
        triggerOnce:true,
        threshold:1,
    });


  return (
    <>
      <div ref={ref} >
        <h1 className='text-3xl'>
          {inView ? <Animatednumber value={number} /> :0}+
        </h1>

        <h1>{text}</h1>
      </div>
    </>
  );
}
export default HomeNumber;
