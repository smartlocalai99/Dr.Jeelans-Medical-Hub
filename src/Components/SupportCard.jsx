import {
  Headphones,
  MessageCircle,
  Mail,
  MapPin,
} from "lucide-react";

export default function SupportCard() {
  const mapUrl =
    "https://maps.app.goo.gl/aFmnUXYJWBrDjJHPA?g_st=ac";

  return (
    <section className="support-section" id="contact">

      {/* CONTACT CARD */}

      <div className="support-card">

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

        {/* SOCIAL MEDIA */}

        <div className="support-socials">

  {/* Instagram */}

  <a
    href="https://www.instagram.com/dr.jeelansmedicalhub/"
    target="_blank"
    rel="noopener noreferrer"
    aria-label="Instagram"
  >
    <img src="/social/instagram.png" alt="Instagram" />
  </a>

  {/* Facebook */}

  <a
    href="https://www.facebook.com/share/1EZt9AVQb1/"
    target="_blank"
    rel="noopener noreferrer"
    aria-label="Facebook"
  >

    <svg viewBox="0 0 24 24" fill="currentColor">

      <path d="M22.675 0h-21.35C.593 0 0 .593 0 1.325v21.351C0 23.407.593 24 1.325 24H12.82v-9.294H9.692v-3.622h3.128V8.413c0-3.1 1.893-4.788 4.659-4.788 1.325 0 2.464.099 2.795.143v3.24l-1.918.001c-1.504 0-1.795.715-1.795 1.763v2.312h3.587l-.467 3.622h-3.12V24h6.116C23.407 24 24 23.407 24 22.676V1.325C24 .593 23.407 0 22.675 0z"/>

    </svg>

  </a>

  {/* YouTube */}

  <a
    href="https://youtube.com/@dr.jeelansmedicalhub?si=ASdMZeQFleB9UKMM"
    target="_blank"
    rel="noopener noreferrer"
    aria-label="Youtube"
  >

    <svg viewBox="0 0 24 24" fill="currentColor">

      <path d="M23.5 6.2a3.1 3.1 0 00-2.2-2.2C19.3 3.5 12 3.5 12 3.5s-7.3 0-9.3.5A3.1 3.1 0 00.5 6.2 32.8 32.8 0 000 12a32.8 32.8 0 00.5 5.8 3.1 3.1 0 002.2 2.2c2 .5 9.3.5 9.3.5s7.3 0 9.3-.5a3.1 3.1 0 002.2-2.2A32.8 32.8 0 0024 12a32.8 32.8 0 00-.5-5.8zM9.75 15.5v-7L16 12l-6.25 3.5z"/>

    </svg>

  </a>

</div>

        </div>

      {/* LOCATION CARD */}

      <div className="location-card">

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