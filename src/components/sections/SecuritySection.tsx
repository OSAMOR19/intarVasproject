interface SecuritySectionProps {
  title?: string;
  certificationImageSrc?: string;
  certificationImageAlt?: string;
}

const SecuritySection = ({
  title = "Built on a foundation of security and compliance.",
  certificationImageSrc = "/images/CertLogos.png",
  certificationImageAlt = "Security certifications"
}: SecuritySectionProps) => {
  return (
    <section className="max-w-2xl mx-auto my-20 text-center px-4">
      <h3 className="font-inter text-[35px] md:text-[48px] text-center font-[800] max-w-md md:max-w-4xl mx-auto leading-[1.2] mb-[30px] animate-fade-in-up">
        {title}
      </h3>
      <div className="animate-fade-in-up delay-300">
        <img 
          src={certificationImageSrc} 
          alt={certificationImageAlt} 
        />
      </div>
    </section>
  );
};

export default SecuritySection;

