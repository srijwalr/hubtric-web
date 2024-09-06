import Hubtric from "@/assets/icons/Hubtric.png";
import { routes } from "@/lib/constants";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope, faPhone } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import { faWhatsapp, faInstagram } from "@fortawesome/free-brands-svg-icons";

const Footer = () => {
  const footerLinks = [
    {
      heading: "Quick Links",
      links: [
        { name: "Home", path: routes.home() },
        { name: "About Us", path: routes.aboutUs() },
        { name: "Capabilities", path: routes.capabilities() },
        { name: "Industries", path: routes.industries() },
      ],
    },
    {
      heading: "Capabilities",
      links: [
        { name: "Precision CNC Machining", path: routes.capabilities() },
        { name: "Advanced Tooling Solutions", path: routes.capabilities() },
        { name: "Injection Molding", path: routes.capabilities() },
        { name: "Sub Assembly Service", path: routes.capabilities() },
        { name: "Design and Prototyping", path: routes.capabilities() },
        { name: "Research and Development", path: routes.capabilities() },
      ],
    },
  ];

  const socialLinks = [
    {
      icon: faPhone,
      items: [
        { path: "tel:+91-9945678414", value: "+91 9945678414" },
        // { path: 'tel:+49-15772902328', value: '+49 15772902328'},
      ],
    },
    {
      icon: faWhatsapp,
      items: [{ path: "https://wa.me/919901392219", value: "+91 9901392219" }],
    },
    {
      icon: faEnvelope,
      items: [
        { path: "mailto:info@hubtric.com", value: "info@hubtric.com" },
        { path: "mailto:sales@hubtric.com", value: "sales@hubtric.com" },
      ],
    },
    {
      icon: faInstagram,
      items: [{ path: "https://www.instagram.com/invites/contact/?igsh=1oy5smj9931ka&utm_content=vd2nly0", value: "@hubtric_manufacturing"}]
    }
  ];

  return (
    <footer>
      <div className="flex flex-wrap flex-col md:flex-row bg-secondary justify-even text-sm text-secondary-foreground font-medium gap-8 py-6 px-4">
        <div className="flex-1">
          <img className="w-24" src={Hubtric} alt="" />
        </div>
        {footerLinks.map((linkSection, idx) => (
          <div className="w-full md:w-auto flex-1" key={idx}>
            <h2 className="text-lg font-semibold">{linkSection.heading}</h2>
            <ul className="flex flex-col gap-1 mt-1">
              {linkSection.links.map((link) => (
                <li key={link.name}>
                  <Link to={link.path} className="hover:text-primary block">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        ))}
        <div className="w-full md:w-auto flex-1">
          <h2 className="text-lg font-semibold">Contact Us</h2>
          {socialLinks.map((link, idx) => (
            <div className="flex items-start gap-2 mt-1" key={idx}>
              <span className="font-bold">
                <FontAwesomeIcon icon={link.icon} />
              </span>
              <div className="flex flex-col">
                {link.items.map((contact, idx) => (
                  <Link to={contact.path} className="hover:text-primary block" key={idx}>
                    {contact.value}
                  </Link>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="p-4 bg-black text-white text-sm">
        <p>
          Copyrights © 2024{" "}
          <Link
            className="hover:text-primary transition-colors"
            to={routes.home()}
          >
            Hubtric Manufacturing Pvt. Ltd.
          </Link>{" "}
          All rights reserved
        </p>
      </div>
    </footer>
  );
};

export default Footer;
