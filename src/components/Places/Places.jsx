import React from "react";
import PlaceCard from "./PlaceCard";
import Img1 from "../../assets/places/boat.jpg";
import Img2 from "../../assets/places/tajmahal.jpg";
import Img3 from "../../assets/places/water.jpg";
import Img4 from "../../assets/places/place4.jpg";
import Img5 from "../../assets/places/place5.jpg";
import Img6 from "../../assets/places/place6.jpg";

const PlacesData = [
  {
  
        img: Img1,
        title: "富國島",
        location: "Vietnam",
        description: "越南超夯旅遊勝地，奇幻珍珠島富國島。又名玉島，柬埔寨稱爲國多島，是越南實際控制的最大島嶼。",
        price: 6700,  // 合理：越南距離較近，旅遊需求旺盛
        // type: "Cultural Relax",
      },
      {
        img: Img2,
        title: "泰姬陵",
        location: "India",
        description: "泰姬陵是一座象牙白色大理石陵墓，是印度知名度最高的古蹟之一，位於印度阿格拉市亞穆納河南岸。",
        price: 13000,  // 合理：印度距離較遠，機票和住宿費用偏高
        // type: "Cultural Relax",
      },
      {
        img: Img3,
        title: "馬爾地夫",
        location: "MDV",
        description: "馬爾地夫絕對是一生必去的夢幻度假天堂，蔚藍的天空、白色的沙灘、清澈的海水，每分每秒都是幸福的時刻。",
        price: 25000,  // 合理：馬爾地夫為高端度假地，機票和度假村價格較高
        // type: "Cultural Relax",
      },
      {
        img: Img4,
        title: "雪梨",
        location: "AUS",
        description: "雪梨是南半球最受歡迎的旅遊城市之一。知名的雪梨歌劇院、邦迪海灘、塔龍加動物園等等，都相當值得一探。",
        price: 18000,  // 合理：澳大利亞距離遠，價格包括機票和住宿
        // type: "Cultural Relax",
      },
      {
        img: Img5,
        title: "洛杉磯",
        location: "United States",
        description: "洛杉磯是加州的一座多元文化城市，以迪士尼樂園和好萊塢星光大道、美麗海灘聞名，生活充滿活力。",
        price: 24000,  // 合理：飛往美國的航班價格偏高，加州屬於熱門地區
        // type: "Cultural Relax",
      },
      {
        img: Img6,
        title: "拉斯維加斯",
        location: "United States",
        description: "拉斯維加斯以其璀璨的夜景和豪華的賭場聞名於世，提供豐富的娛樂活動、美食和表演，是世界旅客的熱門度假勝地。",
        price: 26000,  // 合理：拉斯維加斯距離洛杉磯不遠，但娛樂成本較高
        // type: "Cultural Relax",
      },
    ];
    

const Places = ({ handleOrderPopup }) => {
  return (
    <>
      <div className="dark:bg-gray-900 dark:text-white bg-gray-50 py-10">
        <section data-aos="fade-up" className="container ">
          <h1 className=" my-8 border-l-8 border-primary/50 py-2 pl-2 text-3xl font-bold">
          最佳遊覽地點
          </h1>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
            {PlacesData.map((item, index) => (
              <PlaceCard
                handleOrderPopup={handleOrderPopup}
                key={index}
                {...item}
              />
            ))}
          </div>
        </section>
      </div>
    </>
  );
};

export default Places;
