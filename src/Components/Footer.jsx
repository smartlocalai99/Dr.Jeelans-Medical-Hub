import { motion } from "framer-motion";
import { Mail, MessageCircle } from "lucide-react";

export default function Footer() {
  return (
    <footer className="footer">
      {/* Top bar: dissolves in with a downward drift and blur */}
      <motion.div
        className="footer-top"
        initial={{ opacity: 0, y: -30, filter: "blur(8px)" }}
        whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
        viewport={{ once: true }}
      >
        <div className="footer-brand">
          <img
            src="/Logo.png"
            alt="Dr. Jeelan's Medical Hub"
          />
        </div>

        <div className="footer-social">
          <span>Follow Us</span>

          {/* Instagram */}
          <a href="https://www.instagram.com/dr.jeelansmedicalhub/" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
            </svg>
          </a>

          {/* YouTube */}
          <a href="https://youtube.com/@YOUR_CHANNEL"target="_blank"rel="noopener noreferrer"aria-label="YouTube">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
             <path d="M23.498 6.186a2.994 2.994 0 0 0-2.107-2.12C19.505 3.5 12 3.5 12 3.5s-7.505 0-9.391.566A2.994 2.994 0 0 0 .502 6.186C0 8.083 0 12 0 12s0 3.917.502 5.814a2.994 2.994 0 0 0 2.107 2.12C4.495 20.5 12 20.5 12 20.5s7.505 0 9.391-.566a2.994 2.994 0 0 0 2.107-2.12C24 15.917 24 12 24 12s0-3.917-.502-5.814zM9.75 15.568V8.432L15.818 12 9.75 15.568z"/>
            </svg>
          </a>

          {/* Facebook */}
          <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" aria-label="Facebook">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
              <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
            </svg>
          </a>
        </div>
      </motion.div>

      <div className="footer-line"></div>

      {/* Main content: contact slides from left, links fan in from right */}
      <div className="footer-main">
        <motion.div
          className="footer-contact"
          initial={{ opacity: 0, x: -55, filter: "blur(6px)" }}
          whileInView={{ opacity: 1, x: 0, filter: "blur(0px)" }}
          viewport={{ once: true }}
        >
          <h4>Reach out to us</h4>

          <div className="telegram-card">
            <MessageCircle size={28} />

            <div>
              <strong>24/7 Medical Support</strong>

              <p>
                Our healthcare team is available to
                assist you whenever you need help.
              </p>
            </div>
          </div>

          <div className="telegram-card">
            <Mail size={28} />

            <div>
              <strong>Email Support</strong>

              <p>
                Contact us for appointments,
                consultations and general inquiries.
              </p>
            </div>
          </div>
        </motion.div>

        <motion.div
          className="footer-links"
          initial={{ opacity: 0, x: 55, filter: "blur(6px)" }}
          whileInView={{ opacity: 1, x: 0, filter: "blur(0px)" }}
          viewport={{ once: true }}
        >
          <div>
            <h4>Services</h4>

            <a>General Consultation</a>
            <a>Cardiology</a>
            <a>Dermatology</a>
            <a>Neurology</a>
          </div>

          <div>
            <h4>Explore</h4>

            <a>Home</a>
            <a>About Us</a>
            <a>Doctors</a>
            <a>FAQs</a>
          </div>

          <div>
            <h4>Support</h4>

            <a>Contact</a>
            <a>Appointments</a>
            <a>Privacy Policy</a>
            <a>Terms & Conditions</a>
          </div>
        </motion.div>
      </div>

      {/* Watermark: swells up from below, very slow and ghostly */}
      <motion.h1
        className="footer-watermark"
        initial={{ opacity: 0, y: 40, scale: 0.95 }}
        whileInView={{ opacity: 1, y: 0, scale: 1 }}
        viewport={{ once: true }}
      >
        Dr.Jeelan&apos;s Medical Hub
      </motion.h1>

      <div className="footer-bottom">
        <p>
          © 2026 Dr. Jeelan&apos;s Medical Hub.
          All Rights Reserved.
        </p>

        <div>
          <a>Terms</a>
          <a>Privacy</a>
          <a>Cookies</a>
        </div>
      </div>
    </footer>
  );
}