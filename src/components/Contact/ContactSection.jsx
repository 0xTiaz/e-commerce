import {
  Instagram,
  Linkedin,
  Mail,
  MapPin,
  Phone,
  Send,
  Twitch,
  Twitter,
} from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import { cn } from "@/lib/utils";
import React, { useState } from "react";

const ContactSection = () => {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const SERVICE_ID = "service_xltuyy7";
  const TEMPLATE_ID = "template_j3qgmnf";
  const PUBLIC_KEY = "UAK-QvV225MpjdfCi";

  const handleSumbit = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(SERVICE_ID, TEMPLATE_ID, e.target, PUBLIC_KEY)
      .then(() => {
        toast({
          title: "Message sent!",
          description: "Thank you for your message, I'll get back to you soon.",
        });
        setFormData({ name: "", email: "", message: "" });
      })
      .catch(() =>
        toast({
          title: "Message sent!",
          description: "Thank you for your message, I'll get back to you soon.",
        })
      );

    setIsSubmitting(true);

    setTimeout(() => {
      setIsSubmitting(false);
    }, 1500);
  };

  return (
    <section className="min-h-screen flex flex-col p-20 items-center bg-white">
      <div className="container mx-auto max-x-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
          Contact us
        </h2>
        <p>Have a problem, collabs, ideas in mind?</p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <div className="space-y-8">
            <h3 className="text-2xl font-semibold mb-6">Contact Information</h3>
            <div className="space-y-6 justify-center">
              <div className="flex items-center space-x-4">
                <div className="p-3 rounded-full bg-black/10 backdrop-blur-lg">
                  <Mail className="h-6 w-6" />
                </div>
                <div>
                  <h4 className="font-medium">Email</h4>
                  <a
                    href="mailto:kevinmsotof@gmail.com"
                    className="text-muted-foreground hover:text-primary transition-colors duration-300"
                  >
                    nombre@empresa.com
                  </a>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <div className="p-3 rounded-full bg-black/10 backdrop-blur-lg">
                  <Phone className="h-6 w-6" />
                </div>
                <div>
                  <h4 className="font-medium">Phone</h4>
                  <a
                    href="tel:+56991469805"
                    className="text-muted-foreground hover:text-primary transition-colors duration-300"
                  >
                    +56 (x) xxxx xxxx
                  </a>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <div className="p-3 rounded-full bg-black/10 backdrop-blur-lg">
                  <MapPin className="h-6 w-6" />
                </div>
                <div>
                  <h4 className="font-medium">Location</h4>
                  <a className="text-muted-foreground hover:text-primary transition-colors duration-300">
                    Region Metropolitana, Santiago, Chile
                  </a>
                </div>
              </div>
            </div>
            <div className="pt-8">
              <h4 className="font-medium mb-4">Connect With Me</h4>
              <div className="flex space-x-4 justify-center">
                <a href="" target="_blank">
                  <Linkedin />
                </a>
                <a href="#" target="_blank">
                  <Twitter />
                </a>
                <a href="" target="_blank">
                  <Instagram />
                </a>
                <a href="#" target="_blank">
                  <Twitch />
                </a>
              </div>
            </div>
          </div>
          {/*  */}
          <div
            className="bg-card p-8 rounded-lg shaddow-xs"
            onSubmit={handleSumbit}
          >
            <h3 className="text-2xl font-semibold mb-6">Send a Message</h3>
            <form action="" className="space-y-6" onSubmit={handleSumbit}>
              <div>
                <label
                  htmlFor="name"
                  className="block text-sm font-medium mb-2"
                >
                  Your Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  required
                  value={formData.name}
                  className="w-full px-4 py-3 rounded-md border-input bg-background focus:outline-hidden focus:ring-2 focus:ring-primary"
                  placeholder="Nombre"
                  onChange={(e) =>
                    setFormData({ ...formData, name: e.target.value })
                  }
                />
              </div>
              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium mb-2"
                >
                  Your Email
                </label>
                <input
                  type="text"
                  id="email"
                  name="email"
                  required
                  value={formData.email}
                  className="w-full px-4 py-3 rounded-md border-input bg-background focus:outline-hidden focus:ring-2 focus:ring-primary"
                  placeholder="nombre@empresa.com"
                  onChange={(e) =>
                    setFormData({ ...formData, email: e.target.value })
                  }
                />
              </div>
              <div>
                <label
                  htmlFor="message"
                  className="block text-sm font-medium mb-2"
                >
                  Your Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  required
                  value={formData.message}
                  className="w-full px-4 py-3 rounded-md border-input bg-background focus:outline-hidden focus:ring-2 focus:ring-primary resize-none"
                  placeholder="Solicitud, reclamo y/o colaboracion"
                  onChange={(e) =>
                    setFormData({ ...formData, message: e.target.value })
                  }
                />
              </div>
              <button
                type="sumbit"
                disabled={isSubmitting}
                className={cn(
                  "cosmic-button text-white w-full flex items-center justify-center gap-2"
                )}
              >
                {isSubmitting ? "sending..." : "Send Message"}
                <Send size={16} className="text-white" />
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
