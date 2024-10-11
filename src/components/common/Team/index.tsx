import { FC } from "react";
import {
  faArrowUpRightFromSquare,
  faCode,
  faDesktop,
  faDna,
  faFileCode,
  faIndustry,
  faWifi,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Image from "next/image";
import Link from "next/link";
import {
  faFacebook,
  faInstagram,
  faLinkedin,
  faSquareXTwitter,
} from "@fortawesome/free-brands-svg-icons";
const Team: FC = () => {
  return (
    <div className="flex flex-col items-center">
      <div className="text-light-purple text-xl font-bold text-center">
        Our Team
      </div>
      <div className=" text-4xl font-bold text-center">
        Meet our expert Team
      </div>
      <div className="py-10 grid md:grid-cols-3 gap-10">
        <div className="shadow-xl flex flex-col items-center justify-center p-10 rounded-lg gap-4 bg-white max-w-[300px]">
          <div className="bg-light-purple rounded-full p-1">
            <Image
              src="https://images.unsplash.com/photo-1518623489648-a173ef7824f3?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2762&q=80"
              alt="image 1"
              width={250}
              height={250}
              unoptimized
              className="w-auto h-auto aspect-square object-cover rounded-full border-8 border-light-blue"
            />
          </div>
          <div className="font-bold text-center text-xl">Full Name</div>
          <div className="text-center text-gray-500">Designation</div>
          <div className="flex justify-between gap-3">
            <Link href="/#">
              <FontAwesomeIcon
                className="text-light-purple w-[30px] h-[30px] text-center"
                icon={faInstagram}
              />
            </Link>
            <Link href="/#">
              <FontAwesomeIcon
                className="text-light-purple w-[30px] h-[30px] text-center"
                icon={faFacebook}
              />
            </Link>
            <Link href="/#">
              <FontAwesomeIcon
                className="text-light-purple w-[30px] h-[30px] text-center"
                icon={faLinkedin}
              />
            </Link>
            <Link href="/#">
              <FontAwesomeIcon
                className="text-light-purple w-[30px] h-[30px] text-center"
                icon={faSquareXTwitter}
              />
            </Link>
          </div>
        </div>
        <div className="shadow-xl flex flex-col items-center justify-center p-10 rounded-lg gap-4 bg-white max-w-[300px]">
          <div className="bg-light-purple rounded-full p-1">
            <Image
              src="https://images.unsplash.com/photo-1518623489648-a173ef7824f3?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2762&q=80"
              alt="image 1"
              width={250}
              height={250}
              unoptimized
              className="w-auto h-auto aspect-square object-cover rounded-full border-8 border-light-blue"
            />
          </div>
          <div className="font-bold text-center text-xl">Full Name</div>
          <div className="text-center text-gray-500">Designation</div>
          <div className="flex justify-between gap-3">
            <Link href="/#">
              <FontAwesomeIcon
                className="text-light-purple w-[30px] h-[30px] text-center"
                icon={faInstagram}
              />
            </Link>
            <Link href="/#">
              <FontAwesomeIcon
                className="text-light-purple w-[30px] h-[30px] text-center"
                icon={faFacebook}
              />
            </Link>
            <Link href="/#">
              <FontAwesomeIcon
                className="text-light-purple w-[30px] h-[30px] text-center"
                icon={faLinkedin}
              />
            </Link>
            <Link href="/#">
              <FontAwesomeIcon
                className="text-light-purple w-[30px] h-[30px] text-center"
                icon={faSquareXTwitter}
              />
            </Link>
          </div>
        </div>
        <div className="shadow-xl flex flex-col items-center justify-center p-10 rounded-lg gap-4 bg-white max-w-[300px]">
          <div className="bg-light-purple rounded-full p-1">
            <Image
              src="https://images.unsplash.com/photo-1518623489648-a173ef7824f3?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2762&q=80"
              alt="image 1"
              width={250}
              height={250}
              unoptimized
              className="w-auto h-auto aspect-square object-cover rounded-full border-8 border-light-blue"
            />
          </div>
          <div className="font-bold text-center text-xl">Full Name</div>
          <div className="text-center text-gray-500">Designation</div>
          <div className="flex justify-between gap-3">
            <Link href="/#">
              <FontAwesomeIcon
                className="text-light-purple w-[30px] h-[30px] text-center"
                icon={faInstagram}
              />
            </Link>
            <Link href="/#">
              <FontAwesomeIcon
                className="text-light-purple w-[30px] h-[30px] text-center"
                icon={faFacebook}
              />
            </Link>
            <Link href="/#">
              <FontAwesomeIcon
                className="text-light-purple w-[30px] h-[30px] text-center"
                icon={faLinkedin}
              />
            </Link>
            <Link href="/#">
              <FontAwesomeIcon
                className="text-light-purple w-[30px] h-[30px] text-center"
                icon={faSquareXTwitter}
              />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Team;
