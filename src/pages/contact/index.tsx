import Map from "@/components/shared/map";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { faEnvelope, faPhone } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";
import ContactUsImg from "@/assets/images/ContactUs.jpg";

const Contact = () => {
  return (
    <section className="container px-4 py-6">
      <div className="flex flex-col md:flex-row">
        <div className="w-full">
          <img
            src={ContactUsImg}
            alt="People discussing a project"
            className="w-full"
          />
        </div>
        <div className="flex flex-col gap-6 w-full">
          <div>
            <h1 className="text-xl md:text-2xl text-center md:text-left font-light">
              Contact Us <br />
            </h1>
            <h2 className="text-xl md:text-2xl font-bold">
              Call us or book an Appointment
            </h2>
          </div>
          <div className="flex flex-col md:flex-row gap-6">
            <form action="" className="w-full flex flex-col gap-3">
              <Input type="text" id="name" placeholder="Name" />
              <Input type="email" id="email" placeholder="Email" />
              <Input type="tel" id="phone" placeholder="Phone" />
              <Textarea placeholder="How can we help?" />
              <Button type="submit">Submit</Button>
              <div className="flex items-center gap-6 pb-4">
                <Link to="mailto:info@hubtric.com" className="text-black">
                  <div className="flex flex-row">
                    <span className="font-bold mr-2">
                      <FontAwesomeIcon icon={faEnvelope} />
                    </span>
                    <span>info@hubtric.com</span>
                  </div>
                </Link>
                <Link to="tel:+91-7899176414" className="text-black">
                  <div className="flex flex-row">
                    <span className="font-bold mr-2">
                      <FontAwesomeIcon icon={faPhone} />
                    </span>
                    <span>+91 7899176414</span>
                  </div>
                </Link>
              </div>
            </form>
          </div>
        </div>
      </div>
      <div className="w-full">
        <Map />
      </div>
    </section>
  );
};

export default Contact;
