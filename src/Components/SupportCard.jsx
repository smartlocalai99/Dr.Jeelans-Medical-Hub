import { motion } from "framer-motion";
import { Headphones, MessageCircle, Mail, MapPin } from "lucide-react";

export default function SupportCard() {
  const mapUrl =
    "https://maps.app.goo.gl/aFmnUXYJWBrDjJHPA?g_st=ac";

  return (
    <section className="support-section" id="contact">
      <div
        className="support-card"
        initial={{ opacity: 0, y: 60, scale: 0.96 }}
        whileInView={{ opacity: 1, y: 0, scale: 1 }}
        viewport={{ once: true }}
      >
        <h3>Contact Us</h3>

        <a href="tel:+919494403103" className="support-link">
          <div className="support-info">
            <Headphones size={22} />
            <div>
              <strong>Phone:</strong>
              <p>+91 94944 03103</p>
            </div>
          </div>
        </a>

        <a
          href="https://wa.me/919494403103"
          target="_blank"
          rel="noopener noreferrer"
          className="support-link"
        >
          <div className="support-info">
            <MessageCircle size={22} />
            <div>
              <strong>SMS / WhatsApp</strong>
              <p>+91 94944 03103</p>
            </div>
          </div>
        </a>

        <a
          href="mailto:drjeelansmedicalhub@gmail.com"
          className="support-link"
        >
          <div className="support-info">
            <Mail size={22} />
            <div>
              <strong>Email:</strong>
              <p>drjeelansmedicalhub@gmail.com</p>
            </div>
          </div>
        </a>

        <div className="support-line"></div>
      </div>

      <div
        className="location-card"
        initial={{ opacity: 0, y: 60, scale: 0.96 }}
        whileInView={{ opacity: 1, y: 0, scale: 1 }}
        viewport={{ once: true }}
      >
        <div className="location-heading">
          <span>Our Clinic</span>
          <h3>Location</h3>
        </div>

        <div className="map-preview">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d3863.222921567957!2d78.834865!3d14.471884999999999!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMTTCsDI4JzE4LjgiTiA3OMKwNTAnMDUuNSJF!5e0!3m2!1sen!2sin!4v1781292392960!5m2!1sen!2sin"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="Dr Jeelan Medical Hub Location"
          />
        </div>

        <a
          href={mapUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="map-pin-card"
        >
          <MapPin size={34} />
          <div>
            <strong>Dr. Jeelan&apos;s Medical Hub</strong>
            <p>Open in Google Maps</p>
          </div>
        </a>
      </div>
    </section>
  );
}