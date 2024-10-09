import Image from "next/image";
import Logo from "../public/images/idintech.png";
export default function Home() {
  return (
    <div className="bg-light-cyan">
      <div className="h-[calc(100vh-64px)] ">
        <Image src={Logo} alt="logo" height={50} />
      </div>
      <div className="px-20">
        <div>About us</div>
        <div>Services</div>
        <div>Projects</div>
        <div>Team Member</div>
        <div>Contact</div>
      </div>
    </div>
  );
}
