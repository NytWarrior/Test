"use client"
import Image from "next/image";
import bedimage from "../assets/PH171699-crop001.jpeg";
import bedimage1 from "../assets/1.jpeg";
import bedimage2 from "../assets/2.jpeg";
import bedimage3 from "../assets/3.jpeg";
import bedimage4 from "../assets/4.jpeg";
import bedimageh from "../assets/h.jpeg";
import bedimagex1 from "../assets/x1.jpg";
import bedimagex2 from "../assets/x2.jpg";
import bedimagex3 from "../assets/x3.jpg";
import bedimagex4 from "../assets/x4.jpg";
import bedimagex5 from "../assets/x5.jpg";
import bedimagex6 from "../assets/x6.jpg";
import bedimagex7 from "../assets/x7.jpg";


import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/scrollbar';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import './styles.css';

// import required modules
import { Keyboard, Scrollbar, Navigation, Pagination } from 'swiper/modules';



export default function page() {
  return (
    <div className="w-full flex justify-center ">
      <div className="w-10/12  p-5 p flex flex-col">
        <h1 className="text-2xl font-semibold">Beds</h1>
        <p className="mt-5 w-7/12">
          Our bedroom furniture includes single bed, double bed or king-size
          beds perfect for everyone. Many of our beds come with storage options.
          Also, our cots and children's beds are perfect for kids. And our
          sofa:beds, guests are a solution to a tight space.
        </p>
        <a className="mt-5" href="/">
          click here for size guide
        </a>
        <h1 className="mt-20 text-2xl font-semibold">
          Double bed comfort, as you like it
        </h1>
        <div className="mt-5  flex justify-between items-end">
          <p className="w-7/12">
            Whatever its style, a double bed with headboard always creates an inviting centrepiece.
            Whether you’re after a sleek, timeless finish, the warmth of cosy upholstery, or prefer
            elegantly curved metal, explore our range to find one for your dream bedroom, and your budget.
          </p>
          <button className="border-2 border-black rounded-full p-3">
            see all double beds
          </button>
        </div>
        <div className="mt-5 gap-3  flex  ">
          <div className="w-1/2   ">
            <Image
              className="w-full h-[640px] object-cover  "
              src={bedimage}
              alt="Image of bed"
            />
          </div>
          <div className="w-1/2  columns-2 gap-3">
            <Image
              src={bedimage1}
              width={500}
              className=""
              height={100}
              alt="Image of bed"
            />
            <Image
              src={bedimage3}
              width={500}
              className="mt-4"
              height={100}
              alt="Image of bed"
            />
            <Image
              src={bedimage2}
              width={500}
              className=""
              height={100}
              alt="Image of bed"
            />
            <Image
              src={bedimage4}
              width={500}
              className="mt-4"
              height={100}
              alt="Image of bed"
            />
          </div>
        </div>
        <div className="mt-20  flex justify-between items-center">
          <h1 className=" text-2xl font-semibold">
            Looking for Bedroom Storage options ?
          </h1>
          <button className="border-2 border-black rounded-full p-3">
            Explore all Bedroom storage solution
          </button>
        </div>
        <div className="mt-20 flex bg-orange-500">
          <Image
            src={bedimageh}
            width={850}
            className=""
            height={100}
            alt="Image of bed"
          />
          <div className="py-20 pl-10 flex flex-col  justify-between ">
            <h1 className="text-xl  w-3/4 font-semibold">
              Explore all Bedroom storage solution
            </h1>
            <div className="bg-black w-14 h-14 flex justify-center items-center text-white rounded-full">
              A
            </div>
          </div>
        </div>
        <div className="mt-20">
          <h1 className="mt-20 text-2xl font-semibold">
            Guests Beds & Day Beds for your guest
          </h1>
          <div className="mt-5  flex justify-between items-end">
            <p className="w-7/12">
              Family or friends staying over can mean a lot of fun and a lot of things going on.
              A good day bed is more than just a sofa. It also gives guests the comfort they need
              to sleep well so you can all make the most of your time together.
            </p>
            <button className="border-2 border-black rounded-full p-3">
              See all guest beds & day beds
            </button>
          </div>
        </div>
        <div className="flex gap-3 mt-5">
          <div className="w-1/2">
            <Image
              className="w-full  object-cover  "
              src={bedimagex1}
              alt="Image of bed"
            />
          </div>
          <div className="w-1/2">
            <Image
              className="w-full  object-cover  "
              src={bedimagex2}
              alt="Image of bed"
            />
          </div>
        </div>
        <div className="mt-20">
          <h1 className="text-2xl font-semibold">
            Essentials to help your guests feel at home
          </h1>
          <div className="mt-5  flex justify-between items-end">
            <p className="w-7/12 mb-10">
              From soft bed linen to hangers for party dresses,
              here are a few ideas to help you make sure that when family and
              friends visit, they have the practical things they need.
            </p>
          </div>
        </div>

        <Swiper
          centeredSlides={false}
          slidesPerGroupSkip={1}
          grabCursor={true}
          keyboard={{
            enabled: true,
          }}
          breakpoints={{
            769: {
              slidesPerView: 3,
              slidesPerGroup: 3,
            },
          }}
          scrollbar={true}
          navigation={true}
          modules={[Keyboard, Scrollbar, Navigation, Pagination]}
          className="mySwiper"
        >
          <div className="mt-20 overflow-x-auto flex justify-around">
            {Array.from({ length: 6 }, (_, index) => (
              <SwiperSlide key={index}>
                <div className="flex flex-col">
                  <div className="object-cover w-80 h-80">
                    <Image
                      className="object-cover"
                      src={bedimage4}
                      alt="Image of bed"
                    />
                  </div>
                  <div className="details mb-10">
                    <span className="mt-5 font-semibold">Product {index + 1}</span>
                    <span className="font-xs font-light">Bed Frame</span>
                    <span className="font-xs font-light">160cm*120cm</span>
                    <div className="w-1/4">
                      <span className="text-semibold">Rs.</span>
                      <span className="text-xl font-bold">1000</span>

                    </div>
                    <span className="font-xs font-light">Regular price: 13000</span>
                    <span className="font-xs font-light">Save 23%</span>
                    <div className="flex mt-5 mb-10 gap-3">
                      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 bg-indigo-900 rounded-2xl text-white">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 0 0-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 0 0-16.536-1.84M7.5 14.25 5.106 5.272M6 20.25a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Zm12.75 0a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Z" />
                      </svg>
                      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12Z" />
                      </svg>
                    </div>

                  </div>
                </div>
              </SwiperSlide>
            ))}
          </div>
        </Swiper>

        <div className="mt-20">
          <h1 className="mt-20 text-2xl font-semibold">
            Handy storage that fits under your bed
          </h1>
          <div className="mt-5  flex justify-between items-end">
            <p className="w-7/12">
              Need to put away seasonal clothes or store extra bedding for guests?
              You can find lots of storage cases and under bed boxes in the IKEA range, including
              an option that doubles as a space-saving bedside table.Need to put away seasonal clothes
              or store extra bedding for guests? You can find lots of storage cases and under bed
              boxes in the IKEA range, including an option that doubles as a space-saving bedside table.
            </p>
            <button className="border-2 border-black rounded-full p-3">
              See all guest beds & day beds
            </button>
          </div>
        </div>
        <div className="flex gap-3 mt-5">
          <div className="w-1/2">
            <Image
              className="w-full  object-cover  "
              src={bedimagex4}
              alt="Image of bed"
            />
          </div>
          <div className="w-1/2">
            <Image
              className="w-full  object-cover  "
              src={bedimagex5}
              alt="Image of bed"
            />
          </div>
        </div>

        <div className="mt-20">
          <h1 className="mt-20 text-2xl font-semibold">
            A bed with storage for added space – and calm
          </h1>
          <div className="mt-5  flex justify-between items-end">
            <p className="w-7/12">
              When you need extra room to keep things neatly tidied away,
              bring on a bed with storage. Our range gives you lots of options to suit
              different needs – and budgets, so it’s easy for you to make an affordable
              choice that helps everyone relax.
            </p>
            <button className="border-2 border-black rounded-full p-3">
              See all guest beds & day beds
            </button>
          </div>
        </div>
        <div className="flex gap-3 mt-5">
          <div className="w-1/2">
            <Image
              className="w-full  object-cover  "
              src={bedimagex6}
              alt="Image of bed"
            />
          </div>
          <div className="w-1/2">
            <Image
              className="w-full  object-cover  "
              src={bedimagex7}
              alt="Image of bed"
            />
          </div>
        </div>

        <div className="mt-20 mb-10">
          <h1 className="text-2xl font-semibold">
            Recommendation for you
          </h1>

        </div>

        <Swiper
          centeredSlides={false}
          slidesPerGroupSkip={1}
          grabCursor={true}
          keyboard={{
            enabled: true,
          }}
          breakpoints={{
            769: {
              slidesPerView: 3,
              slidesPerGroup: 3,
            },
          }}
          scrollbar={true}
          navigation={true}
          modules={[Keyboard, Scrollbar, Navigation, Pagination]}
          className="mySwiper"
        >
          <div className="mt-20 overflow-x-auto flex justify-around">
            {Array.from({ length: 6 }, (_, index) => (
              <SwiperSlide key={index}>
                <div className="flex flex-col">
                  <div className="object-cover w-80 h-80">
                    <Image
                      className="object-cover"
                      src={bedimage4}
                      alt="Image of bed"
                    />
                  </div>
                  <div className="details mb-10">
                    <span className="mt-5 font-semibold">Product {index + 1}</span>
                    <span className="font-xs font-light">Bed Frame</span>
                    <span className="font-xs font-light">160cm*120cm</span>
                    <div className="w-1/4">
                      <span className="text-semibold">Rs.</span>
                      <span className="text-xl font-bold">1000</span>

                    </div>
                    <span className="font-xs font-light">Regular price: 13000</span>
                    <span className="font-xs font-light">Save 23%</span>
                    <div className="flex mt-5 mb-10 gap-3">
                      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 bg-indigo-900 rounded-2xl text-white">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 0 0-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 0 0-16.536-1.84M7.5 14.25 5.106 5.272M6 20.25a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Zm12.75 0a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Z" />
                      </svg>
                      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12Z" />
                      </svg>
                    </div>

                  </div>
                </div>
              </SwiperSlide>
            ))}
          </div>
        </Swiper>

        <h1 className="mt-10 text-2xl font-semibold">Buy Beds Online at IKEA</h1>

        <p className="mt-5 w-7/12">
          A good night's sleep is a cornerstone of a healthy and productive life, and
          at the heart of a restful slumber lies the bed. Few pieces of furniture are
          as vital to our well-being as the place where we lay our heads each night.
          The significance of a comfortable and supportive bed cannot be overstated;
          it directly influences our physical and mental health, daily performance,
          and overall quality of life.
        </p>
        <p className="mt-5 w-7/12">
          At IKEA, we understand the paramount importance of a quality bed, and we
          are dedicated to providing a diverse selection of beds online within our
          furniture category that cater to various preferences and needs. From classic
          to contemporary designs, we offer an array of beds designs to help you find
          the perfect bed that will transform your nights and, by extension, your
          days.
        </p>
        <h1 className="mt-10 text-2xl font-semibold">Types of Beds Available at IKEA</h1>
        <p className="mt-5 w-7/12">
          At IKEA we have an extensive selection of beds to meet a wide range of needs.
          We understand that everyone has unique requirements when it comes to their
          sleeping arrangements, and our goal is to provide the perfect bed for each
          and every one of you. Whether you're looking for a cozy haven, excellent back
          support, or a stylish addition to your bedroom, our diverse range of beds has
          something for everyone.
        </p>
        <ul className="list-disc">
          <li className="mt-5 w-7/12">
            <strong>Double Beds:</strong> Double beds, also known as full-size beds,
            provide ample sleeping space for couples or spacious sleeping comfort for
            individuals. Their versatility makes them a popular choice in bedrooms of
            various sizes.
          </li>
          <li className="mt-5 w-7/12">
            <strong>Sofa Cum Beds:</strong> Sofa-beds offer a practical solution for
            homes with limited space. By day, they function as comfortable seating
            and can be easily converted into a bed when needed, making them ideal for
            guest rooms or small apartments.
          </li>
          <li className="mt-5 w-7/12">
            <strong>Beds with Storage:</strong> Beds with built-in storage options
            provide efficient space utilization by offering drawers, shelves, or
            under-bed storage solutions. They help declutter bedrooms and maximize organization.
          </li>
          <li className="mt-5 w-7/12">
            <strong>Divan Beds:</strong> Divan beds are known for their simplicity and
            comfort. Comprising a mattress and base, they provide solid support and often
            feature storage options. Their minimalist design complements various decor styles.
          </li>
          <li className="mt-5 w-7/12">
            <strong>Single Beds:</strong> Single beds are designed for individual sleepers,
            making them ideal for children's bedrooms, guest rooms, or small living spaces.
            They come in various styles to suit different preferences.
          </li>
          <li className="mt-5 w-7/12">
            <strong>Guest Beds & Day Beds:</strong> Guest beds and day beds serve dual purposes
            in guest rooms or home offices. By day, they function as seating and can be extended
            into a bed for guests, making them versatile additions to your home.
          </li>
          <li className="mt-5 w-7/12">
            <strong>Upholstered Beds:</strong> Upholstered beds offer a touch of luxury and comfort.
            Their soft, padded headboards and frames provide a cosy and stylish focal point in the
            bedroom, often with various fabric and colour choices.
          </li>
          <li className="mt-5 w-7/12">
            <strong>Children's Beds:</strong> Children's beds are designed with safety and fun in mind.
            They come in various shapes and themes, often with built-in safety features to create a
            secure and appealing sleeping environment for kids.
          </li>
          <li className="mt-5 w-7/12">
            <strong>Loft Beds & Bunk Beds:</strong> Loft beds and bunk beds maximize vertical space in
            bedrooms, making them great choices for children's rooms or shared spaces. They provide
            extra room for play or study areas.
          </li>
          <li className="mt-5 w-7/12">
            <strong>Baby Cots:</strong> Baby cots are designed to provide a safe and comfortable
            sleeping space for infants. They come with adjustable mattress heights and often
            convert into toddler beds as the child grows.
          </li>
          <li className="mt-5 w-7/12">
            <strong>Headboards:</strong> Headboards come in various styles and materials, serving
            as decorative and functional elements for beds. They provide back support while reading
            or sitting up in bed and contribute to the bedroom's aesthetics.
          </li>
        </ul>

        <h2 className="text-2xl font-semibold mt-10">Things to Consider Before You Buy a Bed</h2>
        <p className="mt-5 w-7/12">
          Choosing the right bed is crucial for ensuring a good night's sleep and overall comfort.
          Here are some steps to help you select the perfect bed:
        </p>
        <ul className="list-disc">
          <li className="mt-5 w-7/12">
            <strong>Consider Your Needs:</strong> Think about your specific needs and preferences.
            Are you looking for a bed for a single person or a couple? Do you need extra storage
            space beneath the bed? Are you interested in a specific style or design?
          </li>
          <li className="mt-5 w-7/12">
            <strong>Determine Your Budget:</strong> Set a budget for your bed purchase. Beds come
            in a wide range of prices, so having a budget in mind will help you narrow down your options.
          </li>
          <li className="mt-5 w-7/12">
            <strong>Measure Your Space:</strong> Measure the space where the bed will go,
            including the room's dimensions and any potential constraints like doorways or
            windows. Ensure that the bed will fit comfortably within the room.
          </li>
          <li className="mt-5 w-7/12">
            <strong>Choose the Right Size:</strong> Select the appropriate bed size based on
            your needs. Common bed sizes include twin, full (double), queen, and king. Consider
            your sleeping space requirements and room size when making this decision.
          </li>
          <li className="mt-5 w-7/12">
            <strong>Think About Mattress Type:</strong> The mattress is an essential component
            of the bed. Consider whether you prefer an innerspring mattress, memory foam, latex,
            or another type. Test different mattress types to find the one that offers the right
            level of support and comfort for you.
          </li>
          <li className="mt-5 w-7/12">
            <strong>Check Bed Frame and Style:</strong> Consider the style and design of the bed
            frame. Different styles can drastically change the look and feel of your bedroom.
            Choose a frame that complements your decor and personal style.
          </li>
          <li className="mt-5 w-7/12">
            <strong>Evaluate Support and Comfort:</strong> Ensure that the bed offers the right
            level of support and comfort. Lie down on the mattress, preferably in the sleeping
            position you use most often, to see how it feels.
          </li>
          <li className="mt-5 w-7/12">
            <strong>Consider Storage Options:</strong> If storage is a concern, look for wooden
            bed designs with built-in storage drawers or under-bed storage options. This can be
            especially helpful in smaller spaces.
          </li>
          <li className="mt-5 w-7/12">
            <strong>Test the Bed:</strong> Whenever possible, visit a store and test the bed in
            person. Lay down on the mattress and assess how it feels. Spend some time on it to
            ensure it remains comfortable.
          </li>
        </ul>
        <p className="mt-5 w-7/12">
          Choosing the right bed is a personal decision, and it's important to prioritize your
          comfort and sleep quality. By considering these factors and taking the time to test
          and research your options, you can find the bed that best suits your needs and helps
          you get the restful sleep you deserve.
        </p>


        <h2 className="text-xl font-semibold mt-10">Bedroom Styling Tips: Choosing the Perfect Bed for Your Room</h2>
        <ol className="list-decimal mt-5 w-7/12">
          <li className="mt-5">
            <strong>Choosing the Perfect IKEA Bed for Your Room</strong>
            <p className="mt-5">Matching your bed to your existing bedroom decor is a fundamental step in creating a cohesive and visually pleasing space.</p>
            <ul className="list-disc">
              <li className="mt-5 ml-5">Begin by considering the current colour palette in your room and select a bed that either complements, contrasts or incorporates these hues.</li>
              <li className="mt-5 ml-5">Align the chosen bed with the overall style of your bedroom, whether it's traditional, modern, rustic, or eclectic. The bed should seamlessly blend in.</li>
              <li className="mt-5 ml-5">If you have other furniture pieces in the room, like nightstands and dressers, ensure your bed complements their style and finishes.</li>
              <li className="mt-5 ml-5">Personalize the bed's appearance with accessories, such as decorative pillows, blankets and throws, to tie it into the existing decor.</li>
            </ul>
          </li>
          <li className="mt-5">
            <strong>Creating a Focal Point</strong>
            <p className="mt-5">Creating a focal point with your bed is an excellent way to enhance the room's aesthetics.</p>
            <ul className="list-disc">
              <li className="mt-5 ml-5">Whether it's an elegant upholstered headboard or a dramatic canopy bed, make sure it stands out to enhance the room's atmosphere.</li>
              <li className="mt-5 ml-5">Opt for versatile or neutral bed choices if your decor tastes tend to change frequently, as these can adapt to various colour schemes and styles.</li>
              <li className="mt-5 ml-5">Ensure that lighting fixtures and wall art in the vicinity of the bed complement the chosen bed design to create a cohesive and balanced visual effect.</li>
            </ul>
          </li>
          <li className="mt-5">
            <strong>Visualizing the Bed in Your Room</strong>
            <p className="mt-5">Before making a final decision, visualize how the bed will fit into your bedroom by using room design tools or creating a mood board to see how everything comes together. In doing so, you can create a bedroom that's not only comfortable but also aesthetically pleasing, where the bed seamlessly integrates into the existing decor.</p>
          </li>
        </ol> <h2 className="text-xl font-semibold mt-10">Bedroom Styling Tips: Choosing the Perfect Bed for Your Room</h2>
        <ol className="list-decimal mt-5 w-7/12">
          <li className="mt-5">
            <strong>Choosing the Perfect IKEA Bed for Your Room</strong>
            <p className="mt-5">Matching your bed to your existing bedroom decor is a fundamental step in creating a cohesive and visually pleasing space.</p>
            <ul className="list-disc">
              <li className="mt-5 ml-5">Begin by considering the current colour palette in your room and select a bed that either complements, contrasts or incorporates these hues.</li>
              <li className="mt-5 ml-5">Align the chosen bed with the overall style of your bedroom, whether it's traditional, modern, rustic, or eclectic. The bed should seamlessly blend in.</li>
              <li className="mt-5 ml-5">If you have other furniture pieces in the room, like nightstands and dressers, ensure your bed complements their style and finishes.</li>
              <li className="mt-5 ml-5">Personalize the bed's appearance with accessories, such as decorative pillows, blankets and throws, to tie it into the existing decor.</li>
            </ul>
          </li>
          <li className="mt-5">
            <strong>Creating a Focal Point</strong>
            <p className="mt-5">Creating a focal point with your bed is an excellent way to enhance the room's aesthetics.</p>
            <ul className="list-disc">
              <li className="mt-5 ml-5">Whether it's an elegant upholstered headboard or a dramatic canopy bed, make sure it stands out to enhance the room's atmosphere.</li>
              <li className="mt-5 ml-5">Opt for versatile or neutral bed choices if your decor tastes tend to change frequently, as these can adapt to various colour schemes and styles.</li>
              <li className="mt-5 ml-5">Ensure that lighting fixtures and wall art in the vicinity of the bed complement the chosen bed design to create a cohesive and balanced visual effect.</li>
            </ul>
          </li>
          <li className="mt-5">
            <strong>Visualizing the Bed in Your Room</strong>
            <p className="mt-5">Before making a final decision, visualize how the bed will fit into your bedroom by using room design tools or creating a mood board to see how everything comes together. In doing so, you can create a bedroom that's not only comfortable but also aesthetically pleasing, where the bed seamlessly integrates into the existing decor.</p>
          </li>
        </ol>


        <h2 className="text-xl font-semibold mt-10">Bed Care and Maintenance Tips</h2>
        <p className="mt-5 w-7/12">
          Maintaining and caring for your bed is essential to ensure its longevity, cleanliness, and overall comfort. Here are some key tips to keep your bed in excellent condition:
        </p>
        <ul className="list-disc mt-5 w-7/12">
          <li className="mt-5">
            <strong>Regular Cleaning:</strong> Keep your beds clean by regularly dusting and vacuuming the area around the bed, including under the bed and the mattress. Dust and debris can accumulate over time, which may affect air quality and hygiene.
          </li>
          <li className="mt-5">
            <strong>Wash Bedding:</strong> Wash your bed linens, including sheets, pillowcases, and duvet covers, on a weekly or bi-weekly basis. Follow the care instructions on the labels and consider using mattress and pillow protectors to prevent stains and allergens.
          </li>
          <li className="mt-5">
            <strong>Rotate the Mattress:</strong> To ensure even wear and tear on the mattress, rotate it every few months. If you have a two-sided mattress, flip it over as well. This helps to maintain mattress integrity and comfort.
          </li>
          <li className="mt-5">
            <strong>Use a Mattress Topper:</strong> A mattress topper can help protect your mattress from spills and stains, as well as provide an extra layer of comfort. Ensure that the topper is regularly cleaned or replaced as needed.
          </li>
          <li className="mt-5">
            <strong>Air Out the Mattress:</strong> Every few months, strip the bed and let the mattress air out for a few hours. This helps prevent moisture buildup and odors.
          </li>
          <li className="mt-5">
            <strong>Rotate and Wash Pillows:</strong> Pillows can accumulate dust mites and allergens. Rotate and fluff them regularly, and follow care instructions to wash or replace them as needed.
          </li>
          <li className="mt-5">
            <strong>Address Stains and Spills:</strong> If spills or stains occur on the mattress or bedding, address them promptly. Blot liquids with a clean, dry cloth, and use a mild detergent for cleaning, following care instructions.
          </li>
          <li className="mt-5">
            <strong>Professional Cleaning:</strong> Consider having your mattress professionally cleaned and sanitized every few years, especially if allergies are a concern.
          </li>
        </ul>
        <p className="mt-5 w-7/12">
          By following these maintenance and care tips, you can prolong the life of your bed, ensure a clean and comfortable sleeping environment, and enjoy a good night's sleep for years to come.
        </p>
        <h2 className="text-xl font-semibold mt-10">FAQs</h2>
        <ol className="list-decimal mt-5 w-7/12">
          <li className="mt-5">
            <strong>How do I choose the right bed for my room?</strong>
            <p>To choose the right bed for your room, consider your room's size, style, and personal comfort preferences, then match them with the bed's size, style, and features.</p>
          </li>
          <li className="mt-5">
            <strong>Can I purchase a bed frame separately, or are they sold as part of a set?</strong>
            <p>Bed frames are available both as part of bedroom sets and separately, allowing you to mix and match to suit your needs and existing decor.</p>
          </li>
          <li className="mt-5">
            <strong>Do you offer mattresses with the beds, or do I need to purchase them separately?</strong>
            <p>IKEA offers mattresses with beds as part of a bundle and sells them separately, giving you the flexibility to choose what suits you the best.</p>
          </li>
          <li className="mt-5">
            <strong>What materials are used in bed frames?</strong>
            <p>Bed frames are typically constructed from materials like wooden beds, metal, upholstered fabric, or a combination of these. The choice depends on your style, durability, and budget preferences.</p>
          </li>
          <li className="mt-5">
            <strong>What is the recommended care and maintenance for beds?</strong>
            <p>Recommended care and maintenance for bed furniture includes regular cleaning, rotating the mattress, using mattress protectors, and addressing stains promptly. Check the manufacturer's guidelines for specific care instructions.</p>
          </li>
        </ol>


      </div>


    </div>
  );
}
