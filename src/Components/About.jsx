import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function About() {
  const [expandedCard, setExpandedCard] = useState(null);

  const stats = [
    { number: "10k+", label: "Happy Patients" },
    { number: "1.5k+", label: "Appointments" },
    { number: "24.1k+", label: "Treatments" },
  ];

  const cards = [
    {
      title: "Patient Care",
      desc: "Personalized treatment plans focused on comfort, trust, and long-term wellness.",
      active: true,
      expanded:
        "Our patient care approach focuses on comfort, trust, and continuous support. Every treatment plan is designed around the patient’s condition, lifestyle, and recovery goals.",
      items: [
        "Personalized treatment guidance",
        "Compassionate patient support",
        "Long-term wellness focus",
      ],
    },
    {
      title: "Expert Doctors",
      desc: "Consult qualified medical professionals with reliable diagnosis and care.",
      expanded:
        "Our healthcare professionals provide reliable consultation, accurate guidance, and evidence-based care to help patients recover safely and confidently.",
      items: [
        "Qualified healthcare professionals",
        "Reliable diagnosis and care",
        "Professional medical guidance",
      ],
    },
    {
      title: "About Us",
      desc: "Learn more about Dr. Jeelan's Medical Hub and our commitment to patient-centered healthcare.",
      wide: true,
      expanded:
        "Dr. Jeelan's Medical Hub is dedicated to providing the highest quality healthcare services with a patient-centered approach. We offer comprehensive medical and rehabilitation solutions designed to improve mobility, manage pain, enhance recovery, and promote overall well-being.",
      items: [
        "Advanced Physiotherapy Services",
        "Home Nursing Care",
        "Cancer Palliative Care",
        "Diabetic Care & Chronic Disease Monitoring",
        "Pre & Post Surgical Rehabilitation",
        "Pain Management & Recovery Programs",
      ],
    },
  ];

  return (
    <section className="about-pro" id="about">
      <div className="about-pro-top">
        <div
          initial={{ opacity: 0, x: -60, skewX: -4 }}
          whileInView={{ opacity: 1, x: 0, skewX: 0 }}
          viewport={{ once: true }}
        >
          <p className="about-pro-label">About Our Clinic</p>

          <h2>
            Modern Healthcare
            <br />
            Designed Around You
          </h2>
        </div>

        <div className="about-pro-stats">
          {stats.map((stat) => (
            <div
              key={stat.label}
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h3>{stat.number}</h3>
              <p>{stat.label}</p>
            </div>
          ))}
        </div>
      </div>

      <div className="about-pro-bottom">
        <div
          className="about-pro-image"
          initial={{ opacity: 0, scale: 0.88, y: 30 }}
          whileInView={{ opacity: 1, scale: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <img src="/about-clinic.jpg" alt="Dr. Jeelan consulting patient" />
        </div>

        <div className="about-pro-cards">
          {cards.map((card, index) => (
            <div
              className={`about-pro-card ${card.active ? "active" : ""} ${
                card.wide ? "wide" : ""
              }`}
              key={card.title}
              initial={{ opacity: 0, y: 55, rotate: index % 2 === 0 ? -2 : 2 }}
              whileInView={{ opacity: 1, y: 0, rotate: 0 }}
              viewport={{ once: true }}
            >
              <h3>{card.title}</h3>
              <p>{card.desc}</p>

              <button
                type="button"
                onClick={() =>
                  setExpandedCard(
                    expandedCard === card.title ? null : card.title
                  )
                }
              >
                <span className="about-btn-text">
                  {expandedCard === card.title ? "Show Less" : "Read More"}
                </span>
                <span className="about-btn-arrow">›</span>
              </button>

              <AnimatePresence>
                {expandedCard === card.title && (
                  <div
                    className="about-expanded-content"
                    initial={{ opacity: 0, height: 0, y: -10 }}
                    exit={{ opacity: 0, height: 0, y: -10 }}
                  >
                    <p>{card.expanded}</p>

                    <ul>
                      {card.items.map((item) => (
                        <li key={item}>{item}</li>
                      ))}
                    </ul>
                  </div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}