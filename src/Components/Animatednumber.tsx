
import { useSpring, animated } from "@react-spring/web";


type AnimatednumberProps = {
    value:number;
    from?: number;
    delay?:number;
};


const Animatednumber : React.FC<AnimatednumberProps> = ({value, from=0, delay=200 }) =>{
    const { number } = useSpring({
        from: {number: from}, 
        number:value,
        delay,
        config:{mass:1 , tension:20 , friction:20},
    })
     return <animated.span>{number.to((n) => n.toFixed(0))}</animated.span>;
};

export default Animatednumber;
