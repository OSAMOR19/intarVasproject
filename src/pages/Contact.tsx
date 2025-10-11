import { Helmet } from "react-helmet-async";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
import ContactUsSection from "@/components/common/getIntouch";

export default function Contact() {
  const { toast } = useToast();
  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    toast({
      title: "Message sent",
      description: "We will get back to you shortly.",
    });
  };
  return (
    <main className="pt-20">
      <Helmet>
        <title>Contact IntarVAS</title>
        <meta
          name="description"
          content="Talk to our team about PBX, bulk messaging, and numbers. We're here to help."
        />
        <link rel="canonical" href="/contact" />
      </Helmet>

      <ContactUsSection />
    </main>
  );
}
