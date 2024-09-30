import React from "react";
import Slider from "react-slick";

const testimonialData = [
  {
    id: 1,
    name: "Samuel",
    text: "這次的尼泊爾喜馬拉雅山脈之旅真是讓我熱血沸騰！在高海拔的荒野中行走，呼吸著新鮮的山間空氣。當我終於站在山頂。這是我與大自然最真實的對話，每次的登山挑戰都讓我重新認識自己的極限。",
    img: "https://picsum.photos/101/101",
  },
  {
    id: 1,
    name: "Eric ",
    text: "京都是讓人流連忘返的地方，在古老的寺廟裡，我感受到了日本文化的深邃，每一座建築背後都有著百年甚至千年的故事。而在春天，漫步在櫻花盛開的小徑上，彷彿置身於歷史的長河中。",
    img: "https://picsum.photos/102/102",
  },
  {
    id: 1,
    name: "Smith",
    text: "義大利的美食簡直讓我大開眼界！特別是在羅馬，隨處可見的小餐館都藏著驚喜。從香濃的濃湯、手工製作的意大利麵，到新鮮的當地食材製作的比薩，每一口都能感受到義大利人對食物的熱愛。",
    img: "https://picsum.photos/103/103",
  },
];

const Testimonial = () => {
  var settings = {
    dots: true,
    arrows: false,
    infinite: true,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    cssEase: "linear",
    pauseOnHover: true,
    pauseOnFocus: true,
    responsive: [
      {
        breakpoint: 10000,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
        },
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 640,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <>
      <div data-aos="fade-up" data-aos-duration="300" className="py-10">
        <div className="container">
          {/* Header section */}
          <div className="text-center mb-20 max-w-[400px] mx-auto">
            <p className="text-sm bg-clip-text text-transparent bg-gradient-to-r from-primary to-secondary">
              你可能想看
            </p>
            <h1 className="text-3xl font-bold">旅遊分享：探索世界精彩瞬間
            </h1>
            <p className="text-xs text-gray-400">
  旅行，總是充滿著未知的驚喜和美好的回憶。<br />
  每一段旅程，不僅讓我們見證不同的風景，<br />
  還讓我們體驗到多元的文化與風俗。<br />
  在探索新天地的同時，我們也在不斷重新認識自己。
</p>
          </div>
          {/* testimonial section */}
          <div
            data-aos="zoom-in"
            data-aos-duration="300"
            className="grid grid-cols-1 max-w-[800px] mx-auto gap-6"
          >
            <Slider {...settings}>
              {testimonialData.map(({ id, name, text, img }) => {
                return (
                  <div key={id} className="my-6">
                    <div className="flex flex-col justify-center items-center gap-4 text-center shadow-lg p-4 mx-4 rounded-xl dark:bg-gray-800 bg-primary/10 relative">
                      <img
                        src={img}
                        alt=""
                        className="rounded-full block mx-auto"
                      />
                      <h1 className="text-xl font-bold">{name}</h1>
                      <p className="text-gray-500 text-sm">{text}</p>
                      <p className="text-black/20 text-9xl font-serif absolute top-0 right-0">
                        ,,
                      </p>
                    </div>
                  </div>
                );
              })}
            </Slider>
          </div>
        </div>
      </div>
    </>
  );
};

export default Testimonial;
