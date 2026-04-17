import { Mail, MapPin, Phone } from "lucide-react";
import React from "react";

const ContactSection = () => {
  return (
    // Added your custom fade-in animation to the section wrapper and standard padding
    <section id="contact" className="py-20 animate-fade-in">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
          {/* Added your custom text-glow utility for a nice effect */}
          Get In <span className="text-primary text-glow">Touch</span>
        </h2>
        <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
          Have a project in mind or want to collaborate? Feel free to reach out.
          I'm always open to discussing new opportunities.
        </p>

        {/* Wrapped the info in a card and used your card-hover utility */}
        <div className="max-w-md mx-auto bg-card border border-border p-8 rounded-2xl shadow-sm card-hover">
          <h3 className="text-2xl font-semibold mb-8 text-center">Contact Information</h3>
          
          <div className="flex flex-col space-y-6">
            <div className="flex items-center space-x-4">
              <div className="p-3 rounded-full bg-primary/10">
                <Mail className="h-6 w-6 text-primary" />
              </div>
              <div className="text-left">
                <h4 className="font-medium">Email</h4>
                <a
                  href="mailto:halabykareem@gmail.com"
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  halabykareem@gmail.com
                </a>
              </div>
            </div>

            <div className="flex items-center space-x-4">
              <div className="p-3 rounded-full bg-primary/10">
                <Phone className="h-6 w-6 text-primary" />
              </div>
              <div className="text-left">
                <h4 className="font-medium">Phone</h4>
                <p
                  
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  +20 102 310 7421
                </p>
              </div>
            </div>

            <div className="flex items-center space-x-4">
              <div className="p-3 rounded-full bg-primary/10">
                <MapPin className="h-6 w-6 text-primary" />
              </div>
              <div className="text-left">
                <h4 className="font-medium">Location</h4>
                {/* Added a Google Maps search link for the location */}
                <p 
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  Cairo, Egypt
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;