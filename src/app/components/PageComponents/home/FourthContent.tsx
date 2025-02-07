'use client'
import React from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';

const locations = [
  {
    category: 'Shopping',
    name: 'Prada',
    image: '/prada.webp'
  },
  {
    category: 'Shopping',
    name: 'Alexis',
    image: '/alexis.webp'
  },
  {
    category: 'Shopping',
    name: 'State of kind',
    image: '/state-of-kind.png'
  },
  {
    category: 'Dining',
    name: 'Uchi',
    image: '/uchi.webp'
  },
  {
    category: 'Dining',
    name: "zz's Club",
    image: '/zzs.webp'
  },
  {
    category: 'Dining',
    name: 'Klaw',
    image: '/klaw.webp'
  },
  {
    category: 'Culture',
    name: 'Frost Museum',
    image: '/frost-museum.webp'
  },
  {
    category: 'Culture',
    name: 'Miami Heat stadium',
    image: '/4-component-img.webp'
  },
  {
    category: 'Culture',
    name: 'Margaret pace park',
    image: '/margaret.webp'
  }
];

function FourthContent() {
  return (
    <div className="bg-grey-100">
      <section className="max-w-7xl mx-auto px-4 py-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Column - Text Content */}
          <div className="space-y-8">
            <div className="space-y-4">
              <p className="text-gray-500 uppercase tracking-wider">neighborhood</p>
              <h2 className="text-4xl font-bold text-gray-900 leading-tight">
                At water's edge, with the best of Miami at your door
              </h2>
              <p className="text-lg text-gray-600 max-w-lg">
                Stroll along the promenade in the morning, dip into a museum midday, sip wine from the Loire Valley and dine on pasta alle vongole in the evening.
              </p>
            </div>
            <button className="bg-[#FF7E22] text-white px-8 py-4 text-lg font-medium hover:bg-[#F6F6F6] transition-colors">
              SCHEDULE A VISIT
            </button>
          </div>
          <div className="relative">
            <Swiper
              modules={[Navigation]}
              spaceBetween={20}
              slidesPerView={2}
              navigation={{
                prevEl: '.swiper-button-prev',
                nextEl: '.swiper-button-next',
              }}
              loop={true}
              breakpoints={{
                320: {
                  slidesPerView: 1,
                },
                768: {
                  slidesPerView: 2,
                },
              }}
              className="w-full"
            >
              {locations.map((location, index) => (
                <SwiperSlide key={index}>
                  <div className="relative group overflow-hidden">
                    <img
                      src={location.image}
                      alt={location.name}
                      className="w-full h-[500px] object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                    <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-6">
                      <p className="text-white/80 text-sm uppercase tracking-wider">
                        {location.category}
                      </p>
                      <h3 className="text-white text-xl font-medium mt-1">
                        {location.name}
                      </h3>
                    </div>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
            
            <button className="swiper-button-prev absolute left-4 top-1/2 -translate-y-1/2 z-10 bg-white/90 p-2 rounded-full shadow-lg hover:bg-white transition-colors">
              <ChevronLeft className="w-6 h-6" />
            </button>
            <button className="swiper-button-next absolute right-4 top-1/2 -translate-y-1/2 z-10 bg-white/90 p-2 rounded-full shadow-lg hover:bg-white transition-colors">
              <ChevronRight className="w-6 h-6" />
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}

export default FourthContent;
