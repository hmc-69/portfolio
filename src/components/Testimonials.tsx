import { useRef } from 'react';
import { useInView } from '../hooks/useInView';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';

const testimonials = [
  {
    name: 'John Smith',
    designation: 'Tech Lead at InnovateX',
    message: 'Hemanth is an exceptional developer who consistently delivers high-quality work. His attention to detail and problem-solving skills are remarkable.',
    image: 'https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
  },
  {
    name: '[Confidential]',
    designation: 'Client',
    message: 'Working with Hemanth was a pleasure. He understood our requirements perfectly and delivered beyond expectations.',
    image: 'https://images.pexels.com/photos/3785079/pexels-photo-3785079.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    blur: true
  },
  {
    name: 'Sarah Johnson',
    designation: 'Product Manager at TechCorp',
    message: 'Hemanth\'s expertise in Angular and his commitment to creating user-friendly interfaces made our project a success.',
    image: 'https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
  }
];

const Testimonials = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const isInView = useInView(sectionRef, { threshold: 0.1 });

  return (
    <section
      id="testimonials"
      ref={sectionRef}
      className="py-20 bg-gray-100 dark:bg-gray-800/50"
    >
      <div className="container mx-auto px-4 md:px-8">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-16">
          <span className="bg-gradient-to-r from-blue-600 to-purple-600 dark:from-blue-400 dark:to-purple-400 text-transparent bg-clip-text">
            Client Testimonials
          </span>
        </h2>

        <div className={`max-w-4xl mx-auto transition-opacity duration-1000 ${isInView ? 'opacity-100' : 'opacity-0'}`}>
          <Swiper
            modules={[Autoplay, Pagination]}
            spaceBetween={30}
            slidesPerView={1}
            pagination={{ clickable: true }}
            autoplay={{
              delay: 5000,
              disableOnInteraction: false,
            }}
            loop={true}
          >
            {testimonials.map((testimonial, index) => (
              <SwiperSlide key={index}>
                <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-8 mb-12">
                  <div className="flex flex-col items-center text-center">
                    <img
                      src={testimonial.image}
                      alt={testimonial.blur ? "Anonymous" : testimonial.name}
                      className={`w-20 h-20 rounded-full mb-4 object-cover ${testimonial.blur ? 'filter blur-sm' : ''}`}
                    />
                    <p className="text-gray-700 dark:text-gray-300 text-lg mb-6 italic">
                      "{testimonial.message}"
                    </p>
                    <h4 className={`text-xl font-semibold mb-1 ${testimonial.blur ? 'filter blur-sm' : ''}`}>
                      {testimonial.name}
                    </h4>
                    <p className="text-blue-600 dark:text-blue-400">
                      {testimonial.designation}
                    </p>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;