import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookF, faTwitter, faInstagram } from '@fortawesome/free-brands-svg-icons';

interface TeamMember {
  name: string;
  designation: string;
  imageUrl: string;
  fbUrl: string,

}

const OurTeam = ({ teamMembers }: { teamMembers: TeamMember[] }) => {
  return (
    <div className="our-team flex flex-col md:flex-row gap-8 px-4 py-16 bg-black text-white">
      <div className="container mx-auto flex flex-col lg:flex-row">
        <div className="text-section w-full lg:w-1/2 mr-8 mb-8 lg:mb-0 flex flex-col justify-center items-center lg:items-end text-center lg:text-right">
          <h2 className="text-base mb-4 font-light">Our Team</h2>
          <p className="text-xl lg:text-2xl font-bold mb-4">
            Global Expertise, Precision Excellence: Delivering Innovative
            Manufacturing Solutions with Passion and Dedication.
          </p>
          <p className="text-base mb-4 font-light">
            Our leadership team, with extensive international experience, guides
            a dedicated group of professionals in precision manufacturing.
            Together, we bring diverse expertise and a commitment to excellence,
            ensuring top-quality results for our clients worldwide
          </p>
        </div>
        <div className="image-section flex flex-col md:flex-row justify-center lg:justify-start align-center lg:align-start gap-10">
          {teamMembers.map((member, index) => (
            <div
              key={index}
              className="team-member mb-8 flex flex-col items-center w-full md:w-1/2"
            >
              <img
                className="w-28 2xl:w-40 h-28 2xl:h-40 mx-auto mb-4 object-cover rounded-full"
                src={member.imageUrl}
                alt={member.name}
              />
              <h3 className="text-xl font-medium mb-1 text-center">{member.name}</h3>
              <p className="text-sm text-center">{member.designation}</p>
              <div className="social-links flex justify-around align-start space-x-4 mt-2">
                <a
                    href={member.fbUrl}
                    className="text-white hover:text-gray-300"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <FontAwesomeIcon icon={faFacebookF}/>
                  </a>
                  <a
                    href={member.fbUrl}
                    className="text-white hover:text-gray-300"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <FontAwesomeIcon icon={faTwitter} />
                  </a>
                  <a
                    href={member.fbUrl}
                    className="text-white hover:text-gray-300"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <FontAwesomeIcon icon={faInstagram} />
                  </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default OurTeam;
