import React from "react";
import BlogCard from "./BlogCard";
import Img1 from "../../assets/places/tajmahal.jpg";
import Img2 from "../../assets/places/us.jpg";
import Img3 from "../../assets/places/japan.jpg";

// Use a helper function to render HTML safely
// eslint-disable-next-line no-unused-vars
const createMarkup = (html) => {
  return { __html: html };
};

const BlogsData = [
  {
    id: 1,
    image: Img1,
    title: "印度的熱門景點",
    description: "印度是一個充滿神秘色彩的國家，擁有豐富的文化遺產和壯麗的自然風光。這次旅程對我來說是一個徹底的心靈震撼，從繁華的城市到寧靜的鄉村，印度展現了她千變萬化的一面。毫無疑問，泰姬陵是印度最具代表性的地標之一。當我親眼見到這座宏偉的白色大理石陵墓時，我被其完美的對稱性和細緻的雕刻工藝深深打動。這座建築不僅象徵著愛，也承載著印度豐富的歷史與文化。齋浦爾，又被稱為'粉紅之城'，是我此行最令人難忘的城市之一。這裡的琥珀堡壘（Amber Fort）和風之宮殿（Hawa Mahal）令人驚歎。城市裡的每一條街道、每一個市場，都充滿了色彩和活力。走在齋浦爾的街頭，彷彿置身於一個活生生的文化展覽館。瓦拉納西是印度教的聖城，被視為靈魂得以解脫的地方。在恆河岸邊，我見證了印度教徒的晨浴儀式，那種虔誠的氛圍讓人感到無比震撼。日落時分，恆河的燈光祈禱儀式（Ganga Aarti）更是充滿靈性，讓我深刻體會到這個古老城市的神秘力量。如果你喜歡大自然，那麼喀什米爾絕對是不能錯過的地方。這裡的雪山、湖泊和翠綠的山谷美得像明信片一樣。搭乘小船遊覽達爾湖（Dal Lake），遠離喧囂，感受平靜的時光，是我整趟旅程中最為放鬆的一刻。每個城市都有自己的故事，無論是印度北部的莊嚴寺廟，還是南部的熱帶海灘，都讓我難以忘懷。印度是一個充滿矛盾的國家，但正是這樣的多樣性讓她顯得如此迷人。我迫不及待地想再次踏上這片神奇的土地，探索更多未知的風景。",
    author: "Sarah Chen",
    date: "April 15, 2024",
  },
  {
    id: 2,
    image: Img2,
    title: "美國熱門景點",
    description: "美國提供了一系列令人難以置信的目的地，每個目的地都有其獨特的魅力和美麗。從充滿活力的城市到令人驚嘆的自然奇觀，這裡不乏值得探索的地方。大峽谷是美國最具代表性的自然地標之一，景色宜人。其巨大的規模和令人驚嘆的景色讓我驚嘆不已。無論是健行還是只是欣賞全景，這種體驗都是令人難忘的。紐約被譽為不夜城，充滿生機。從時代廣場到中央公園，總有值得一看、值得做的事情。我個人的亮點是參觀自由女神像和步行穿過布魯克林大橋。作為美國第一個國家公園，黃石公園是自然愛好者的天堂。間歇泉、溫泉和豐富的野生動物讓這次旅行真正變得非凡。看到老忠實泉噴發是我此行的一個特別亮點。",
    author: "Kelly Wu",
    date: "March 22, 2024",
  },
  {
    id: 3,
    image: Img3,
    title: "日本熱門景點",
    description: "日本是一個現代與傳統交融的國家，你走過的每個角落都會展現出新的奇蹟。在旅途中，我探索了繁華的城市景觀和寧靜的鄉村。日本的首都東京是一座獨一無二的城市。傳統寺廟與現代摩天大樓的融合營造出獨特的氛圍。不要錯過參觀標誌性的澀谷十字路口並在歷史悠久的淺草區漫步。京都以其美麗的寺廟和寧靜的花園而聞名，在這裡您可以一睹日本豐富的歷史。穿過伏見稻荷神社的鳥居，參觀金閣寺，都是令人難忘的體驗。沒有看到富士山的日本之旅就不算完整。這座標誌性的火山雄偉地矗立在地形之上，無論您是攀登它還是只是從遠處觀看，它都會給人留下深刻的印象。",
    author: "Emma Liu",
    date: "February 10, 2024",
  }
];

const BlogsComp = () => {
  return (
    <div className="dark:bg-gray-900 dark:text-white py-10">
      <section data-aos="fade-up" className="container ">
        <h1 className="my-8 border-l-8 border-primary/50 py-2 pl-2 text-3xl font-bold">
          我們最新的部落格
        </h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3">
          {BlogsData.map((item) => (
            <BlogCard key={item.id} {...item} />
          ))}
        </div>
      </section>
    </div>
  );
};

export default BlogsComp;
