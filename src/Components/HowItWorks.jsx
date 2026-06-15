export default function HowItWorks() {
const steps = [
  {
    num: "01",
    title: "Choose Service",
    desc: "Select the right healthcare service and share your health concerns with our team.",
    img: "/how-it-works/choose-service.png",
  },
  {
    num: "02",
    title: "Get Consultation",
    desc: "Consult with trusted doctors and receive clear guidance for your condition.",
    img: "/how-it-works/get-consultation.png",
  },
  {
    num: "03",
    title: "Start Treatment",
    desc: "Begin a personalized treatment plan designed for recovery, mobility, and comfort.",
    img: "/how-it-works/start-treatment.png",
  },
  {
    num: "04",
    title: "Recover Better",
    desc: "Get continuous follow-up support and recovery guidance for long-term wellness.",
    img: "/how-it-works/recover-better.png",
  },
];

  return (
    <section className="how-premium" id="how">
      <div className="how-premium-top">
        <div>
          <span className="how-label">HOW IT WORKS</span>
          <h2>
            Better Healthcare
            <br />
            in Four Steps
          </h2>
        </div>

        <p>
          A simple, guided process designed to make your care smooth,
          transparent, and stress-free.
        </p>
      </div>

      <div className="how-premium-grid">
        {steps.map((step) => (
          <div className="how-premium-card" key={step.num}>
            <img src={step.img} alt={step.title} />

            <div className="how-card-content">
              <span className="how-big-number">{step.num}</span>
              <h3>{step.title}</h3>
              <p>{step.desc}</p>
            </div>
          </div>
        ))}
      </div>

      <div className="how-premium-bottom">
        <div>
          <h4>READY TO GET STARTED?</h4>
          <p>
            Call us now and our team will guide you through the next step.
          </p>
        </div>

        <a href="tel:+919494403103">Book Appointment</a>
      </div>
    </section>
  );
}