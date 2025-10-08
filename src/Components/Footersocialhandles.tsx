import LandingfooterSocialhandle from "../Components/LandingfooterSocialhandle";
import { FacebookIcon, Github, InstagramIcon, TwitterIcon } from "lucide-react";

function Footersocialhandles() {
  return (
    <>
      <div className="flex gap-2.5">
        <LandingfooterSocialhandle
          link="https://x.com/?lang=en"
          icon={<TwitterIcon  />}
        />

        <LandingfooterSocialhandle
          link="https://www.facebook.com/"
          icon={<FacebookIcon/>}
        />

        <LandingfooterSocialhandle
          link="https://www.instagram.com/"
          icon={<InstagramIcon/>}
        />

        <LandingfooterSocialhandle
          link="https://github.com/"
          icon={<Github />}

        />
      </div>
    </>
  );
}

export default Footersocialhandles;
