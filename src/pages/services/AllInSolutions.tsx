import { Helmet } from "react-helmet-async";
import { Button } from "@/components/ui/button";
import bulkMessaging from "@/assets/bulk-messaging.jpg";
import { Link } from "react-router-dom";
import AllInSolutionCard from "@/components/card/AllInSolution";
import Transform from "@/components/common/transform";
import BusinessCom from "@/components/common/BusinessCom";
import { Testimonials as TestimonialsSection } from "@/components/sections";
import AllInOneCTA from "@/components/common/AllInCTA";
import { useEffect, useRef, useState } from "react";

export default function AllInSolutions() {
  const [isHeroVisible, setIsHeroVisible] = useState(false);
  const [isImageVisible, setIsImageVisible] = useState(false);
  const [isDescriptionVisible, setIsDescriptionVisible] = useState(false);
  const [isFeaturesVisible, setIsFeaturesVisible] = useState(false);
  const [hasAnimatedDescription, setHasAnimatedDescription] = useState(false);
  const [activeCard, setActiveCard] = useState(0);
  const [scrollY, setScrollY] = useState(0);
  
  const heroRef = useRef<HTMLDivElement>(null);
  const imageRef = useRef<HTMLDivElement>(null);
  const descriptionRef = useRef<HTMLDivElement>(null);
  const featuresRef = useRef<HTMLDivElement>(null);
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Scroll listener for color changes
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    window.addEventListener('scroll', handleScroll);
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  useEffect(() => {
    // Hero section animation
    const heroObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsHeroVisible(true);
          }
        });
      },
      { threshold: 0.2 }
    );

    if (heroRef.current) {
      heroObserver.observe(heroRef.current);
    }

    // Image section animation
    const imageObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsImageVisible(true);
          }
        });
      },
      { threshold: 0.2 }
    );

    if (imageRef.current) {
      imageObserver.observe(imageRef.current);
    }

    // Description section animation
    const descriptionObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !hasAnimatedDescription) {
            setIsDescriptionVisible(true);
            setHasAnimatedDescription(true);
          }
        });
      },
      { threshold: 0.2 }
    );

    if (descriptionRef.current) {
      descriptionObserver.observe(descriptionRef.current);
    }

    // Features section animation
    const featuresObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsFeaturesVisible(true);
          }
        });
      },
      { threshold: 0.2 }
    );

    if (featuresRef.current) {
      featuresObserver.observe(featuresRef.current);
    }

    // Scroll snapping logic for cards
    const scrollContainer = scrollContainerRef.current;
    if (scrollContainer) {
      const updateActiveCard = () => {
        const scrollTop = scrollContainer.scrollTop;
        const cardHeight = scrollContainer.scrollHeight / 2; // 2 cards
        const newActiveCard = Math.round(scrollTop / cardHeight);
        setActiveCard(Math.min(newActiveCard, 1)); // Max 1 since we have 2 cards (0-indexed)
      };

      scrollContainer.addEventListener('scroll', updateActiveCard);
      updateActiveCard(); // Initial call

      return () => {
        scrollContainer.removeEventListener('scroll', updateActiveCard);
        if (heroRef.current) heroObserver.unobserve(heroRef.current);
        if (imageRef.current) imageObserver.unobserve(imageRef.current);
        if (descriptionRef.current) descriptionObserver.unobserve(descriptionRef.current);
        if (featuresRef.current) featuresObserver.unobserve(featuresRef.current);
      };
    }

    return () => {
      if (heroRef.current) heroObserver.unobserve(heroRef.current);
      if (imageRef.current) imageObserver.unobserve(imageRef.current);
      if (descriptionRef.current) descriptionObserver.unobserve(descriptionRef.current);
      if (featuresRef.current) featuresObserver.unobserve(featuresRef.current);
    };
  }, [hasAnimatedDescription]);

  return (
    <main>
      <Helmet>
        <title>All-in-One Solutions — IntarVAS</title>
        <meta
          name="description"
          content="Explore our comprehensive suite of telecom solutions designed for modern businesses."
        />
        <link rel="canonical" href="/services/bulk-messaging" />
      </Helmet>

      {/* Hero Section */}
      <section ref={heroRef} className="bg-background pt-32 pb-12 relative overflow-hidden">
        {/* Animated background elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-20 left-10 w-72 h-72 bg-blue-500/10 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-cyan-500/5 rounded-full blur-3xl animate-pulse delay-2000"></div>
        </div>
        
        <div className="container mx-auto px-4 text-center relative z-10">
          <div className={`transition-all duration-1000 ${
            isHeroVisible ? 'opacity-100 transform translate-y-0' : 'opacity-0 transform translate-y-8'
          }`}>
            <h1 className="text-4xl font-inter font-semibold tracking-tight md:text-[64px] mb-3">
              All in one solution
            </h1>
            <p className="mx-auto font-inter mt-4 max-w-xl text-lg text-muted-foreground">
              Our All-in-One CRM & Omnichannel Suite helps you manage voice, chat,
              email, and social from a single, powerful platform.
            </p>
            <div className="mt-8">
              <Link to="/contact">
                <Button size="lg" className="hover:scale-105 transition-transform duration-300">Contact Us</Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Image Section */}
      <section ref={imageRef} className="container mx-auto px-4 py-12">
        <div className={`max-full transition-all duration-1000 ${
          isImageVisible ? 'opacity-100 transform translate-y-0' : 'opacity-0 transform translate-y-8'
        }`}>
          <img
            src={"/images/allinsoluheroimg.png"}
            alt="Bulk messaging platform with colorful message illustrations"
            className="w-full rounded-[32px] hover:scale-105 transition-transform duration-500"
          />
        </div>
      </section>

      {/* Description Section */}
      <section ref={descriptionRef} className="bg-muted/30 py-36 relative overflow-hidden">
        {/* Animated background elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-20 right-20 w-64 h-64 bg-blue-500/5 rounded-full blur-2xl animate-pulse"></div>
          <div className="absolute bottom-20 left-20 w-80 h-80 bg-purple-500/5 rounded-full blur-2xl animate-pulse delay-1000"></div>
        </div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className={`transition-all duration-1000 ${
            isDescriptionVisible ? 'opacity-100 transform translate-y-0' : 'opacity-0 transform translate-y-8'
          }`}>
            <p className={`mx-auto max-w-4xl text-center text-[38px] font-inter font-[600] leading-relaxed transition-colors duration-300 ${
              scrollY > 800 ? 'text-blue-600' : 'text-muted-foreground'
            } hover:text-gray-600`}>
              Nigerian businesses and government agencies need simplicity and speed. Our CRM solution centralizes customer communication, so your team saves time, improves response rates, and never loses track of a customer.
            </p>
          </div>
        </div>
      </section>

      <section ref={featuresRef} className="bg-[#F6F6F6] py-20 relative overflow-hidden">
        {/* Animated background elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-10 left-10 w-32 h-32 bg-blue-500/5 rounded-full blur-xl animate-pulse"></div>
          <div className="absolute bottom-10 right-10 w-40 h-40 bg-purple-500/5 rounded-full blur-xl animate-pulse delay-1000"></div>
        </div>
        
        <div className="container grid grid-cols-1 md:grid-cols-2 gap-10 relative z-10">
          <div className={`max-w-lg transition-all duration-1000 ${
            isFeaturesVisible ? 'opacity-100 transform translate-x-0' : 'opacity-0 transform -translate-x-8'
          }`}>
            <div className="inline-block mb-4">
              <span className="px-4 py-2 bg-blue-100 text-blue-600 rounded-full text-sm font-medium">
                Features
              </span>
            </div>
            <h3 className="font-inter text-[38px] font-[600] leading-[1.2] hover:scale-105 transition-transform duration-300">
              Simplifying personalized <br/> conversations.
            </h3>
            <p className="text-[#858D9D] mb-3 hover:text-gray-600 transition-colors duration-300">
              Drive business results with our meaningful customer conversations.
            </p>
            <Button
              variant="hero"
              className="hover:scale-105 transition-transform duration-300"
              size="lg"
            >
              Learn More
            </Button>
          </div>
          <div className={`h-[80vh] overflow-y-scroll snap-y snap-mandatory scrollbar-hide transition-all duration-1000 delay-300 ${
            isFeaturesVisible ? 'opacity-100 transform translate-x-0' : 'opacity-0 transform translate-x-8'
          }`} ref={scrollContainerRef}>
            <div className="snap-start h-[80vh] flex items-center justify-center hover:scale-105 transition-transform duration-300">
              <AllInSolutionCard
                icon={<img src={"/icon/CRM.svg"} alt="Bulk Messaging" />}
                title="Smart CRM"
                description="Personalize every customer interaction with a smart, unified CRM that keeps your history organized."
                img={"/images/image1.png"}
              />
            </div>
            <div className="snap-start h-[80vh] flex items-center justify-center hover:scale-105 transition-transform duration-300">
              <AllInSolutionCard
                icon={<img src={"/icon/tick.svg"} alt="Bulk Messaging" />}
                title="Security & Compliance"
                description="We use enterprise-grade encryption, guarantee 99.9% uptime, and are fully compliant with telecom standards."
                img={"/images/image2.png"}
              />
            </div>
            <div className="snap-start h-[80vh] flex items-center justify-center hover:scale-105 transition-transform duration-300">
              <AllInSolutionCard
                icon={<img src={"/icon/ticket.svg"} alt="Bulk Messaging" />}
                title="Ticketing & Automation"
                description="We use enterprise-grade encryption, guarantee 99.9% uptime, and are fully compliant with telecom standards."
                img={"/images/ticketingimg.svg"}
              />
            </div>
            <div className="snap-start h-[80vh] flex items-center justify-center hover:scale-105 transition-transform duration-300">
              <AllInSolutionCard
                icon={<img src={"/icon/headset.svg"} alt="Bulk Messaging" />}
                title="Omnichannel Support"
                description="We use enterprise-grade encryption, guarantee 99.9% uptime, and are fully compliant with telecom standards."
                img={"/images/omniimg.svg"}
              />
            </div>
          </div>
          
          {/* Scroll indicators */}
          <div className="flex justify-center mt-4 space-x-2">
            <div className={`w-3 h-3 rounded-full transition-all duration-300 ${
              activeCard === 0 ? 'bg-blue-500 scale-125' : 'bg-gray-300'
            }`}></div>
            <div className={`w-3 h-3 rounded-full transition-all duration-300 ${
              activeCard === 1 ? 'bg-blue-500 scale-125' : 'bg-gray-300'
            }`}></div>
          </div>
        </div>
      </section>

      <Transform />
      <AllInOneCTA />
      <TestimonialsSection />
      <BusinessCom />
    </main>
  );
}
