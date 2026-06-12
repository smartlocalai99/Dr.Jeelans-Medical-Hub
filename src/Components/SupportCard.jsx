import { motion } from "framer-motion";
import { Headphones, MessageCircle, Mail, MapPin } from "lucide-react";

export default function SupportCard() {
  const mapUrl =
    "https://maps.app.goo.gl/aFmnUXYJWBrDjJHPA?g_st=ac";

  return (
    <section className="support-section" id="contact">
      <motion.div
        className="support-card"
        initial={{ opacity: 0, y: 60, scale: 0.96 }}
        whileInView={{ opacity: 1, y: 0, scale: 1 }}
        viewport={{ once: true }}
      >
        <h3>Contact Us</h3>

        {/* Phone */}
        <a href="tel:+919494403103" className="support-link">
          <div className="support-info">
            <Headphones size={22} />
            <div>
              <strong>Phone:</strong>
              <p>+91 94944 03103</p>
            </div>
          </div>
        </a>

        {/* WhatsApp */}
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

        {/* Email */}
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
      </motion.div>

      <motion.div
        className="location-card"
        initial={{ opacity: 0, y: 60, scale: 0.96 }}
        whileInView={{ opacity: 1, y: 0, scale: 1 }}
        viewport={{ once: true }}
      >
        <div className="location-heading">
          <span>Our Clinic</span>
          <h3>Location</h3>
        </div>

        <a
          className="map-preview"
          href={mapUrl}
          target="_blank"
          rel="noopener noreferrer"
        >
          <div className="map-grid-bg"></div>

          <div className="map-pin-card">
            <MapPin size={34} />
            <div>
              <strong>Dr. Jeelan&apos;s Medical Hub</strong>
              <p>Click to open in Google Maps</p>
            </div>
          </div>
        </a>
      </motion.div>
    </section>
  );
}