import { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import Map from "@/components/shared/map";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { faEnvelope, faPhone } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";
import ContactUsImg from "@/assets/images/ContactUs.jpg";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const serviceId = 'service_ed9bylm';
const templateId = 'template_ynr79sm';
const publicKey = '1SHNtat8qpNwynMlN';

const Contact = () => {
  const formRef = useRef<HTMLFormElement>(null);
  const initialForm = {
    from_name: '',
    mail: '',
    phone: '',
    message: ''
  }
  const [formData, setFormData] = useState(initialForm);
  // const [showError, setShowError] = useState(false);

  const handleChange = (e: any) => {
    // setShowError(false)
    const { name, value } = e.target;
    setFormData((prevState: any) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const sendEmail = (e: any) => {
    e.preventDefault();

    /**
     * Emailjs keys:
     * Service id: service_ed9bylm
     * Template id: template_ynr79sm
     * Public Key: 1SHNtat8qpNwynMlN
     */
    emailjs
      .sendForm(serviceId, templateId, (formRef?.current || ''), publicKey)
      .then(
        () => {
          setFormData(initialForm);
          toast.success("Submitted successfully", {
            position: "top-right"
          });
        },
        (error) => {
          // setShowError(error);
          console.error(error)
          toast.error("Something went wrong!", {
            position: "top-right"
          });
        }
      );
  };

  return (
    <section className="container px-4 py-6">
      <div className="flex flex-col md:flex-row gap-8">
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
            <form
              className="w-full flex flex-col gap-3"
              onSubmit={sendEmail}
              ref={formRef}
            >
              <Input type="text" id="name" name="from_name" value={formData.from_name} placeholder="Name" onChange={handleChange} required />
              <Input type="email" id="email" name="mail" value={formData.mail} placeholder="Email" onChange={handleChange} required />
              <Input type="tel" id="phone" name="phone" value={formData.phone} placeholder="Phone" onChange={handleChange} required />
              <Textarea name="message" value={formData.message} placeholder="How can we help?" onChange={handleChange} required />
              {/* { showError && <p className='text-[red] text-sm 2xl:text-md'>Something went wrong. Please try again later.</p>} */}
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
                <Link to="tel:+91-9945678414" className="text-black">
                  <div className="flex flex-row">
                    <span className="font-bold mr-2">
                      <FontAwesomeIcon icon={faPhone} />
                    </span>
                    <span>+91 9945678414</span>
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
      <ToastContainer />
    </section>
  );
};

export default Contact;
