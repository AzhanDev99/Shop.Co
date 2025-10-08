import type { ReactNode } from "react";

type LandingfooterSocialhandleProps = {
  icon: ReactNode;
  bgcolor?: string;
  link?: string;
};

function LandingfooterSocialhandle({
  bgcolor,
  link,
  icon,
}: LandingfooterSocialhandleProps) {
  return (
    <>
      <a
        href={link}
        target='_blank'
        rel='noopener noreferrer'
        className='h-[34px] w-[34px] center rounded-[50px] 
        text-black hover:text-white hover:bg-black transition-colors duration-300'
        style={{ backgroundColor: bgcolor }}>
        <h1 className=" h-[22px] w-[22px] center ">{icon}</h1>
        
      </a>
    </>
  );
}

export default LandingfooterSocialhandle;
