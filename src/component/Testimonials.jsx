const testimonials = [
  {
    id: 1,
    name: "John Doe",
    title: "CEO of Company",
    testimonial:
      "This product is amazing! It has changed the way we do business. I can't imagine going back to the way we used to work. The features are incredible and the support team is top-notch.",
    image: "https://randomuser.me/api/portraits/men/1.jpg",
    content: "This product is amazing! It has changed the way we do business.",
  },
  {
    id: 2,
    name: "Jane Smith",
    title: "Marketing Director",
    testimonial:
      "I love how easy this is to use. It has saved me so much time.The user interface is intuitive and the performance is outstanding. I highly recommend this product to anyone looking for a reliable solution. It's been a game-changer for our team.",
    image: "https://randomuser.me/api/portraits/women/2.jpg",
    content: "I love how easy this is to use. It has saved me so much time.",
  },
  {
    id: 3,
    name: "Bob Johnson",
    title: "Software Engineer",
    testimonial:
      "The customer support is fantastic. They helped me with all my questions. I highly recommend this product to anyone looking for a reliable solution. It's been a game-changer for our team.",
    image: "https://randomuser.me/api/portraits/men/3.jpg",
    content:
      "The customer support is fantastic. They helped me with all my questions.",
  },
];

export default function Testimonials() {
  return (
    <section
      id="about"
      className="py-16 sm:py-20 px-10 sm:px-6 lg:px-8 relative border-t border-white/20 mt-20"
    >
      <>
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col lg:flex-row items-center sm:gap-12 lg:gap-16">
            {/* left side - header  */}
            <div className="lg:w-1/2 w-full text-center lg:text-left">
              <h2 className="text-5xl sm:text-4xl mb:text-5xl lg:text-6xl font-bold mb-4 sm:mb-6">
                What developers are saying about our product
              </h2>

              <p className="text-gray-400 text-base text-xl sm:text-lg mx-w-2xl mx-auto">
                Our product has received rave reviews from developers around the
                world. Here are just a few of the testimonials we've received:
              </p>
            </div>

            {/* right side - testimonials */}
            <div className="lg:w-1/2 w-full">
              <div className=" space-y-2 sm:space-y-4 lg:space-y-6">
                {testimonials.map((testml, key) => (
                  <div
                    key={key}
                    className="bg-slate-900/50 p-4 sm:p-6 backdrop-blur-sm border border-slate-800 rounded-xl sm:rounded-2xl"
                  >
                    <div className="flex items-start space-x-3 sm:space-x-4">
                      <div className="flex-shrink-0">
                        <div className="text-2xl sm:text-3xl lg:text-4xl font-bold bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
                          "
                        </div>
                      </div>
                      <div className="flex-grow">
                        <p className="text-white text-base sm:text-lg leading-relaxed mb-3 sm:mb-4">
                          {" "}
                          {testml.testimonial}{" "}
                        </p>
                        <div className="flex items-center space-x-2sm:space-x-3">
                          <img
                            src={testml.image}
                            alt={testml.name}
                            className="w-12 h-12 rounded-full object-cover"
                          />
                          <div className="text-sm sm:text-base ml-2  sm:ml-3 leading-relaxed">
                            <h4 className="text-white font-semibold">
                              {testml.name}
                            </h4>
                            <p className="text-gray-400 text-sm">
                              {testml.title}
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </>
    </section>
  );
}
