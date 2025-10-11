interface ClientLogosSectionProps {
  title?: string;
  logoImageSrc?: string;
  logoImageAlt?: string;
}

const ClientLogosSection = ({
  title = "Innovators worldwide trust us",
  logoImageSrc = "/images/innovators.png",
  logoImageAlt = "Client logos"
}: ClientLogosSectionProps) => {
  return (
    <section className="border-y bg-muted/30 py-12">
      <div className="container mx-auto px-4">
        <p className="mb-8 text-center text-sm font-medium text-muted-foreground animate-fade-in-up">
          {title}
        </p>
        <div className="flex items-center justify-center animate-fade-in-up delay-300">
          <img
            src={logoImageSrc}
            alt={logoImageAlt}
            className="h-10 md:h-16 w-auto md:w-[1200px]"
          />
        </div>
      </div>
    </section>
  );
};

export default ClientLogosSection;

