import Image from "next/image";
import React from "react";
import articles1 from "@/public/Images/homeImg/articlesImg/articles1.png";
import articles2 from "@/public/Images/homeImg/articlesImg/articles2.png";
import articles3 from "@/public/Images/homeImg/articlesImg/articles3.png";

const articles = [
  {
    id: 1,
    image: articles1,
    title: "Find Better Experience",
    description:
      "There are many variations of passages of Lorem Ipsum available but the majority have suffered alteration in some form by injected humour orbit randomised.",
  },
  {
    id: 2,
    image: articles2,
    title: "Things To Do In Beaches",
    description:
      "There are many variations of passages of Lorem Ipsum available but the majority have suffered alteration in some form by injected humour orbit randomised.",
  },
  {
    id: 3,
    image: articles3,
    title: "Best in Desert Safari",
    description:
      "There are many variations of passages of Lorem Ipsum available but the majority have suffered alteration in some form by injected humour orbit randomised.",
  },
];

const TravelArticles = () => {
  return (
    <section className="pb-16 bg-white px-4 sm:px-6 lg:px-8">
      <div className="container mx-auto text-start">
        <h2 className="text-sm text-[#0E3D4D] tracking-wide mb-2">
          WHERE DO YOU WANT TO GO
        </h2>
        <h1 className="text-2xl sm:text-3xl font-bold text-[#0E3D4D] mb-6 sm:mb-8 font-Playfair-Display">
          Find the travel articles
        </h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {articles.map((article) => (
            <div
              key={article.id}
              className="relative bg-white rounded-2xl shadow-lg overflow-hidden transform transition duration-300 hover:scale-105"
            >
              {/* Category Label (Positioned at the top right) */}
              <span className="absolute top-4 right-4 bg-white text-[#0E3D4D] text-xs font-semibold px-3 py-1 rounded-md shadow-md">
                CATEGORY
              </span>
              <div className="relative h-48 sm:h-56">
                <Image
                  src={article.image}
                  alt={article.title}
                  className="w-full h-full object-cover"
                  // layout="fill"
                  fill
                />
              </div>
              <div className="p-4 sm:p-6">
                <h3 className="text-lg sm:text-xl font-semibold text-gray-800 mt-2">
                  {article.title}
                </h3>
                <p className="text-sm sm:text-base text-gray-600 mt-2">{article.description}</p>
                <a
                  href="#"
                  className="text-[#FF4C00] hover:underline mt-3 sm:mt-4 block text-left text-sm sm:text-base"
                >
                  LEARN MORE
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TravelArticles;
