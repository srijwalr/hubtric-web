import Hubtric from "@/assets/icons/Hubtric.png";
import { routes } from "@/lib/constants";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope, faPhone } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import { faWhatsapp } from "@fortawesome/free-brands-svg-icons";

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
        { path: "tel:+91-7899176414", value: "+91 7899176414" },
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
  ];

  return (
    <footer className="bg-secondary text-white py-6 px-4">
      <div className="flex flex-wrap flex-col md:flex-row justify-even text-sm text-secondary-foreground font-medium gap-8">
        <div className="flex-1">
          <img className="w-24" src={Hubtric} alt="" />
        </div>
        {footerLinks.map((linkSection) => (
          <div className="w-full md:w-auto flex-1">
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
          {socialLinks.map((link) => (
            <div className="flex items-start gap-2 mt-1">
              <span className="font-bold">
                <FontAwesomeIcon icon={link.icon} />
              </span>
              <div className="flex flex-col">
                {link.items.map((contact) => (
                  <Link to={contact.path} className="hover:text-primary block">
                    {contact.value}
                  </Link>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
