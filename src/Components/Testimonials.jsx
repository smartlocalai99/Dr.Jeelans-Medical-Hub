export default function Testimonials() {
  const reviews = [
    {
      name: "Priya Sharma",
      date: "2 months ago",
      image:
        "https://img.magnific.com/free-photo/indian-woman-posing-cute-stylish-outfit-camera-smiling_482257-122351.jpg?semt=ais_hybrid&w=740&q=80",
      text: "The experience was smooth, professional and stress-free. Booking a doctor was easier than ever.",
    },
    {
      name: "Ravi Kumar",
      date: "5 months ago",
      image:
        "https://static.vecteezy.com/system/resources/thumbnails/049/174/246/small/a-smiling-young-indian-man-with-formal-shirts-outdoors-photo.jpg",
      text: "Excellent care and support from the entire team. The doctors were highly professional.",
    },
    {
      name: "Anjali Reddy",
      date: "1 month ago",
      image:
        "https://i.pinimg.com/474x/de/4f/35/de4f3544efc31261987251db81e771c9.jpg",
      text: "The online consultation process was extremely convenient and easy to use.",
    },
    {
      name: "Mohammed Arif",
      date: "3 months ago",
      image:
        "https://media.istockphoto.com/id/1138008134/photo/indian-man-headshot.jpg?s=612x612&w=0&k=20&c=ttUUhnXwTVhGqEi6QU4zSkp1KP44lCK4WIwoSo-LXpY=",
      text: "From appointment booking to follow-up care, everything was handled perfectly.",
    },
    {
      name: "Sneha Patel",
      date: "4 months ago",
      image:
        "https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=300",
      text: "The staff was friendly and helpful. I felt comfortable throughout the consultation.",
    },
    {
      name: "Kiran Reddy",
      date: "6 months ago",
      image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSvSkI-4hfsmmJnwjrL-FSNbdffMKCPJXmVkQRutlz3CQ&s=10",

      text: "Very easy appointment process and good response from the team. Highly recommended.",
    },
    {
      name: "Lakshmi Devi",
      date: "2 weeks ago",
      image:
        "https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?auto=compress&cs=tinysrgb&w=300",
      text: "Doctor explained everything clearly and gave proper guidance. Great experience.",
    },
    {
      name: "Sameer Khan",
      date: "1 week ago",
      image:
        "https://t3.ftcdn.net/jpg/03/77/30/16/360_F_377301660_ClhyVNc3ThqShLjkfk7zq0SeCenc4xb7.jpg",
      text: "Clean, professional and patient-friendly service. The whole process was simple.",
    },
  ];

  return (
    <section
      id="testimonials"
      className="!w-full !bg-[#ecf2f9] !px-6 !py-20 lg:!px-[90px] lg:!py-[110px]"
    >
      <div className="!mx-auto !grid !w-full !grid-cols-1 !items-center !gap-14 xl:!grid-cols-[32%_68%]">
        <div className="!flex !flex-col !justify-center !text-center xl:!min-h-[620px] xl:!text-left">
          <p className="!text-sm !font-black !uppercase !tracking-[2px]">
            Google Reviews
          </p>

          <h2 className="!mt-4 !text-4xl !font-black !leading-[1.08] !text-slate-900 md:!text-5xl">
            What Our <br className="hidden xl:block" />
            Patients Say
          </h2>

          <p className="!mx-auto !mt-5 !max-w-sm !text-lg !leading-relaxed !text-slate-500 xl:!mx-0">
            Trusted by hundreds of happy patients.
          </p>
        </div>

        <div className="!grid !w-full !grid-cols-1 !gap-7 md:!grid-cols-2">
          {reviews.map((review) => (
            <div
              key={review.name}
              className="!min-h-[245px] !rounded-[28px] !bg-white !p-7 !shadow-[0_18px_45px_rgba(15,23,42,0.10)]"
            >
              <div className="!flex !items-start !justify-between !gap-4">
                <div className="!flex !gap-4">
                  <img
                    src={review.image}
                    alt={review.name}
                    className="!h-14 !w-14 !shrink-0 !rounded-full !object-cover"
                  />

                  <div>
                    <h3 className="!font-black !text-[#4285F4]">
                      {review.name}
                    </h3>

                    <p className="!mt-1 !text-lg !leading-none !text-[#F4B400]">
                      ★★★★★
                    </p>

                    <p className="!mt-1 !text-sm !text-slate-400">
                      {review.date}
                    </p>
                  </div>
                </div>

                <GoogleIcon />
              </div>

              <p className="!mt-6 !text-[15px] !leading-relaxed !text-slate-600">
                {review.text}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function GoogleIcon() {
  return (
    <svg width="26" height="26" viewBox="0 0 48 48" className="!shrink-0">
      <path fill="#FFC107" d="M43.6 20.5H42V20H24v8h11.3C33.7 32.7 29.2 36 24 36c-6.6 0-12-5.4-12-12s5.4-12 12-12c3.1 0 5.9 1.2 8 3.1l5.7-5.7C34.1 6.1 29.3 4 24 4 12.9 4 4 12.9 4 24s8.9 20 20 20 20-8.9 20-20c0-1.3-.1-2.4-.4-3.5z" />
      <path fill="#FF3D00" d="M6.3 14.7l6.6 4.8C14.7 15.1 19 12 24 12c3.1 0 5.9 1.2 8 3.1l5.7-5.7C34.1 6.1 29.3 4 24 4 16.3 4 9.6 8.3 6.3 14.7z" />
      <path fill="#4CAF50" d="M24 44c5.1 0 9.8-2 13.3-5.2l-6.2-5.2C29.1 35.1 26.7 36 24 36c-5.2 0-9.6-3.3-11.3-7.9l-6.5 5C9.4 39.6 16.1 44 24 44z" />
      <path fill="#1976D2" d="M43.6 20.5H42V20H24v8h11.3c-.8 2.3-2.3 4.2-4.2 5.6l6.2 5.2C36.9 39.1 44 34 44 24c0-1.3-.1-2.4-.4-3.5z" />
    </svg>
  );
}