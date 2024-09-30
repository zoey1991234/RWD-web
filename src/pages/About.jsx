import React from "react";
import BlogsComp from "../components/Blogs/BlogsComp";
import Location from "../components/Location/Location";

const About = () => {
  return (
    <>
      <div className="container pt-14">
        <div className="py-10">
          <h1 className=" my-8 border-l-8 border-primary/50 py-2 pl-2 text-3xl font-bold">
            關於我們
          </h1>
          <p>
          我們是一家專業的旅遊公司，致力於為您提供獨一無二的旅行體驗。無論您是熱愛冒險、渴望探索新奇之地，還是享受放鬆的度假時光，我們都能為您量身打造完美的行程。

我們的旅行專家精心挑選世界各地的熱門景點和隱秘寶藏，從壯麗的自然風光到豐富的文化體驗，每一個目的地都充滿了無限驚喜。無論是雪山徒步、熱帶島嶼度假，還是穿越古老城市的文化之旅，我們都能幫助您發現並體驗最真實的世界。

我們不僅提供專業的行程規劃與建議，還提供個性化服務，確保每一次旅行都能超出您的期望。從機票預訂到酒店住宿，從當地導遊服務到特色活動安排，我們將每一個細節打理妥當，讓您能夠無憂無慮地享受您的假期。

與我們一起探索世界的每一個角落，讓您的旅行不僅僅是一段旅程，而是人生中最珍貴的回憶。現在就聯繫我們，開啟屬於您的奇幻旅程吧！


          </p>
          <br />
          {/* <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Commodi
            suscipit minus similique aliquam recusandae quisquam id nulla
            tempora voluptate vero.
          </p> */}
        </div>
      </div>
      <Location />
      <BlogsComp />
    </>
  );
};

export default About;
