import ClientProvider from "@/providers/ClientProvider";
import {
  faEnvelope,
  faLocationDot,
  faPhone,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { FC } from "react";
import ContactForm from "./components/ContactForm";
import {
  ContactAddress,
  ContactDescription,
  ContactEmail,
  ContactImage,
  ContactPhone,
  ContactTitle,
} from "./components/ContactInfo";

const Contact: FC = () => {
  return (
    <div className="bg-light-cyan">
      <div className="px-5 md:px-20 flex flex-col gap-10 pt-10">
        <h1 className="text-3xl font-bold underline">Contact</h1>
      </div>
      <div className="px-5 md:px-20 grid grid-cols-1 xl:grid-cols-2 gap-10 py-10">
        <div className="w-full shadow-xl flex flex-col items-start justify-start p-10 rounded-lg gap-5  bg-white">
          <div className="flex gap-5 items-center">
            <ClientProvider>
              <ContactImage />
            </ClientProvider>
            <div className="font-bold text-4xl text-light-purple">
              <ClientProvider>
                <ContactTitle />
              </ClientProvider>
            </div>
          </div>
          <p>
            <ClientProvider>
              <ContactDescription />
            </ClientProvider>
          </p>
          <div className="flex gap-5 items-center justify-start w-full">
            <FontAwesomeIcon
              className="w-[20px] h-[20px] text-light-purple shrink-0"
              icon={faLocationDot}
            />
            <div className="text-justify">
              <ClientProvider>
                <ContactAddress />
              </ClientProvider>
            </div>
          </div>
          <hr className="bg-white w-full" />
          <div className="flex gap-5 items-center justify-start">
            <FontAwesomeIcon
              className="w-[20px] h-[20px] text-light-purple  shrink-0"
              icon={faPhone}
            />
            <div>
              <ClientProvider>
                <ContactPhone />
              </ClientProvider>
            </div>
          </div>
          <hr className="bg-white w-full" />
          <div className="flex gap-5 items-center justify-start">
            <FontAwesomeIcon
              className="w-[20px] h-[20px] text-light-purple  shrink-0"
              icon={faEnvelope}
            />
            <div>
              <ClientProvider>
                <ContactEmail />
              </ClientProvider>
            </div>
          </div>
          <hr className="bg-white w-full" />
        </div>
        <div className="w-full shadow-xl flex flex-col items-start justify-center p-10 rounded-lg gap-5  bg-white">
          <div className="font-bold text-4xl text-light-purple">
            CONTACT US!
          </div>
          <ClientProvider>
            <ContactForm />
          </ClientProvider>
        </div>
      </div>
    </div>
  );
};
export default Contact;
