export default function Testimonials() {
  const reviews = [
    {
      text: "The experience was smooth, professional and stress-free. Booking a doctor was easier than ever. The entire process felt organized and patient-focused.",
      name: "Priya Sharma",
      role: "Verified Patient",
      date: "2 weeks ago",
      avatar: "/reviews/priya.png",
    },
    {
      text: "Excellent care and support from the entire team. The doctors were highly professional and genuinely concerned about my recovery journey.",
      name: "Ravi Kumar",
      role: "Physiotherapy Patient",
      date: "1 month ago",
      avatar: "/reviews/ravi.png",
    },
    {
      text: "The online consultation process was extremely convenient. I received expert medical advice without leaving my home.",
      name: "Anjali Reddy",
      role: "Consultation Patient",
      date: "3 weeks ago",
      avatar: "/reviews/anjali.png",
    },
    {
      text: "From appointment booking to follow-up care, everything was handled perfectly. Highly recommended for anyone seeking quality healthcare.",
      name: "Mohammed Arif",
      role: "General Checkup Patient",
      date: "4 weeks ago",
      avatar: "/reviews/arif.png",
    },
  ];

  return (
    <section className="google-reviews-section" id="testimonials">
      <div className="reviews-header">
        <div className="reviews-pill">Testimonials</div>

        <h2>What Our Patients Say</h2>

        <span className="reviews-heading-line"></span>

        <p>
          Real stories from patients who experienced our care, support, and
          recovery-focused healthcare services.
        </p>
      </div>

      <div className="reviews-summary">
        <div className="google-brand">
          <span className="g-blue">G</span>
          <span className="g-red">o</span>
          <span className="g-yellow">o</span>
          <span className="g-blue">g</span>
          <span className="g-green">l</span>
          <span className="g-red">e</span>
          <strong> Reviews</strong>
        </div>

        <div className="rating-box">
          <strong>4.9</strong>
          <span>★★★★★</span>
          <p>Average Rating</p>
        </div>
      </div>

      <div className="google-review-grid">
        {reviews.map((review) => (
          <div className="google-review-card" key={review.name}>
            <div className="review-card-top">
              <div className="review-avatar">

            <img
              src={review.avatar}
              alt={review.name}
            />

              </div>

              <div className="review-name-line">
              <strong>{review.name}</strong>
              <small>{review.role}</small>
              </div>

              <div className="google-mini">

            <img
             src="/google-logo.png"
             alt="Google"
            />

            </div>
            </div>

            <div className="review-stars">★★★★★</div>

            <p>{review.text}</p>

            <div className="review-date">{review.date}</div>
          </div>
        ))}
      </div>
    </section>
  );
}