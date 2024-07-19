import ISO from "@/assets/images/ISO.png";

const Certifications = () => {
    return (
        <section className="certifications bg-secondary text-secondary-foreground py-12 px-10 md:px-20 lg:px-40">
        <div className="text-center">
          <h2 className="text-3xl font-bold mb-5">Certifications</h2>
          <p className=" text-sm 2xl:text-xl leading-loose">
            We are officially certified according to ISO-9001 standards. This
            rigorous process demonstrates our commitment to delivering the
            highest quality products and services to our customers. By adhering
            to ISO guidelines, we ensure consistent performance, efficiency, and
            continuous improvement across all aspects of our operations.
          </p>
          <img
            className="w-32 md:w-36 h-32 md:h-36 mx-auto mt-10"
            src={ISO}
            alt="ISO Certification Badge"
          />
        </div>
      </section>
    )
}

export default Certifications;