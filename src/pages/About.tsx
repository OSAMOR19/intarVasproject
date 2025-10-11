import { Testimonials as TestimonialsSection, VisionStatement as VisionMissionSection, WeThriveComponent as ServicesShowcase } from "@/components/sections";
import { Helmet } from "react-helmet-async";

export default function About() {
  return (
    <main>
      <Helmet>
        <title>About IntarVAS Communications</title>
        <meta
          name="description"
          content="We build reliable telecom solutions: PBX, bulk messaging, and numbers for Nigerian businesses."
        />
        <link rel="canonical" href="/about" />
      </Helmet>
      <section className="relative bg-[#001933] pt-[50px]">
        <div className=" pt-20">
          <h1 className="text-[32px] md:text-[64px] max-w-md md:max-w-xl mx-auto font-inter font-extrabold text-white text-center leading-[1.2] px-4 mb-2">
            About <span className="bg-[#007DFE] rounded-md p-2">IntarvAS</span>{" "}
            Communications
          </h1>
          <p className="text-white text-[16px] md:text-[18px] max-w-md mx-auto text-center">
            Reliable telecom solutions, built to power businesses and government
            agencies
          </p>
        </div>
        <div className="container animate-enter grid grid-cols-2 gap-8 py-12 ">
          <div>
            <img
              src={"/images/left photo.png"}
              alt="Illustration showing a person working on a laptop with various telecom icons around them"
              className="w-auto object-contain"
            />
          </div>

          <div className="flex flex-col justify-between gap-4">
            <img
              src={"/images/right_top.png"}
              alt="Illustration showing a person working on a laptop with various telecom icons around them"
              className="w-full"
            />
            <img
              src={"/images/right_bottom.png"}
              alt="Illustration showing a person working on a laptop with various telecom icons around them"
              className="w-full "
            />
          </div>
        </div>
      </section>

      <section className="bg-muted/30 py-20 md:py-36">
        <div className="container mx-auto px-4">
          <p className="mx-auto font-inter md:text-[38px] text-[#858D9D] max-w-md md:max-w-4xl font-[600] text-center text-lg leading-[1.2] text-muted-foreground">
            Based in Lagos, IntarvAS was built on a vision to simplify how
            Nigerian businesses communicate with their customers. Over the
            years, we’ve become trusted by enterprises, government agencies, and
            SMEs alike helping them build stronger connections with clients
            through reliable, scalable, and locally-tailored telecom solutions.
          </p>
        </div>
      </section>

      <section className="container flex flex-col md:flex-row gap-16 py-9 ">
        <div className="flex flex-col justify-evenly">
          <p className="text-[40px] inline-block bg-gradient-to-br to-[#0B59A9] from-[#53A2F2] bg-clip-text text-transparent font-inter font-[900] ">
            99.9%
          </p>
          <h5 className="font-inter font-[700] text-[20px]">
            Uninterrupted connectivity
          </h5>
          <p>
            Our cloud-powered infrastructure ensures your communications run
            smoothly without interruptions.
          </p>
        </div>
        <div>
          <p className="text-[40px] inline-block bg-gradient-to-br to-[#0B59A9] from-[#53A2F2] bg-clip-text text-transparent font-inter font-[900] ">
            1M+
          </p>
          <h5 className="font-inter font-[700] text-[20px]">
            Messages delivered daily
          </h5>
          <p>
            Large-scale communications with fast, secure, and reliable messaging
            solutions
          </p>
        </div>
        <div>
          <p className="text-[40px] inline-block bg-gradient-to-br to-[#0B59A9] from-[#53A2F2] bg-clip-text text-transparent font-inter font-[900] ">
            3+
          </p>
          <h5 className="font-inter font-[700] text-[20px]">
            Years Experience
          </h5>
          <p>
            Proven success in delivering scalable and innovative communication
            services across Nigeria.
          </p>
        </div>
        <div>
          <p className="text-[40px] inline-block bg-gradient-to-br to-[#0B59A9] from-[#53A2F2] bg-clip-text text-transparent font-inter font-[900] ">
            50+
          </p>
          <h5 className="font-inter font-[700] text-[20px]">
            Businesses served
          </h5>
          <p>
            We empower hundreds of Nigerian businesses and government agencies
            with reliable telecom solutions.
          </p>
        </div>
      </section>

      <VisionMissionSection />

      <ServicesShowcase />

      <TestimonialsSection />
    </main>
  );
}
