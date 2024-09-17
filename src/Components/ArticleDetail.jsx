import React from "react";
import { fontStyles, styles } from "../style";
import Para1 from "../styles/Para1";
import { useGlobalContext } from "../context";

const ArticleDetail = () => {
  const { articleData } = useGlobalContext();
  return (
    <section className={`${styles.marginY}`}>
      <div className={`${styles.marginX} ${styles.flexResponsive} gap-4`}>
        {/* Left */}
        <div className={`${styles.flexCol} gap-6 md:basis-[60%] lg:basis-[70%] w-full`}>
          <img
            src="./images/Random Imgs/img1.jpg"
            className="w-full h-[320px] md:h-[420px] lg:h-[512px] rounded-lg object-cover"
            alt=""
          />
          <h2 className={`${fontStyles.h2} font-bold text-blue`}>
            Lorem ipsum dolor sit amet consectetur. Ornare dolor ut.{" "}
          </h2>
          <Para1 fontWeight="font-normal" style="!max-w-full">
            Lorem ipsum dolor sit amet consectetur. In euismod feugiat nulla
            vitae dictum. Sit hendrerit velit cras faucibus aenean eget diam.
            Volutpat consectetur ut eu gravida adipiscing eget faucibus sed.
            Vehicula elementum amet sem at proin morbi leo amet. Integer
            ultrices morbi quis molestie sagittis mauris. Elit eget et est morbi
            duis. Hendrerit dignissim vulputate consequat pellentesque id. Purus
            nulla sit massa ornare pulvinar. Vulputate suspendisse urna
            adipiscing pellentesque euismod amet aliquam nec massa. Cum maecenas
            elementum eros nunc at orci faucibus urna. Egestas quam eget
            penatibus mauris. Nibh aenean adipiscing consectetur gravida. Tellus
            lorem pretium eget tortor sagittis ultricies maecenas morbi. Enim et
            tincidunt quis pharetra id vel donec tincidunt id. Sem amet
            consequat congue est luctus consequat. Id sit sed neque ultricies
            malesuada turpis in platea. Aliquam nec sit lectus in donec.
            Pulvinar vitae sed tristique lorem elit pharetra vel pellentesque.
            Vulputate adipiscing consectetur velit elementum platea diam
            hendrerit vehicula rutrum. Amet praesent ut mi eu non urna. Quis
            ultricies posuere commodo auctor malesuada. Vivamus tortor egestas
            vivamus faucibus vel ultrices. Venenatis volutpat auctor massa sed
            dictumst tristique turpis sapien. Ut tellus placerat lectus massa
            quam. Urna maecenas aliquet et vitae rutrum hendrerit nunc massa.
            Elementum diam fermentum aliquam sed purus turpis. Egestas ac velit
            massa amet in sed nam a. Pellentesque pharetra gravida adipiscing
            proin. Donec gravida aliquet id sapien laoreet sit fermentum nisl
            cursus. Dui tristique suscipit eleifend sed turpis velit pretium.
            Nisl.
          </Para1>
          <img
            src="./images/Random Imgs/img2.jpg"
            className="w-full rounded-lg h-[300px] md:h-[380px] lg:h-[450px] object-cover"
            alt=""
          />
          <Para1 fontWeight="font-normal" style="!max-w-full">
            Lorem ipsum dolor sit amet consectetur. Elit amet penatibus
            adipiscing lacus urna nisl in cursus. Non sapien mattis arcu amet
            tortor pharetra vulputate in. Vel dignissim dui posuere urna. Vitae
            semper adipiscing cursus sodales. Purus suspendisse rhoncus id
            congue. Pharetra tellus molestie non tortor leo. Id ipsum eget eget
            consectetur augue mauris sit iaculis enim. Eu nibh imperdiet enim
            magna. Sagittis leo sit in nibh. Interdum urna ac euismod amet nec
            etiam at vitae. Hendrerit euismod odio metus amet. Id elit tellus
            interdum lacus sed amet ornare donec. Nunc cursus convallis pharetra
            risus ac. Amet est ultrices morbi semper dictum tortor. Vel egestas
            nunc pretium at cras aliquet arcu. Nulla tortor ultrices justo lorem
            feugiat. Sed vitae iaculis est cursus arcu tristique. Neque et sed
            feugiat duis. Sollicitudin auctor fermentum lectus cursus nunc mi
            dui ut. Malesuada arcu in rutrum malesuada in. A arcu mattis
            elementum ac enim rhoncus magnis mauris.
          </Para1>
        </div>
        {/* Right */}
        <div className={`${styles.flexCol} flex-1 w-full gap-6`}>
          <h3 className={`${fontStyles.h3} font-bold text-blue`}>Lorem</h3>
          {articleData?.map(({ img, author, comments, title }, index) => (
            <div key={index} className={`${styles.flexCol}`}>
              <img
                src={img}
                className="w-full h-[240px] md:h-[220px] lg:h-[267px] object-cover rounded-lg"
                alt={title}
              />
              <div className={`${styles.flexCol} gap-4 mt-4`}>
                <div className={`${styles.flexRow} gap-12`}>
                  <Para1 fontWeight="font-normal">{author}</Para1>
                  <div className={`${styles.flexRow} gap-2`}>
                    <span className="bg-lightBlue w-4 h-[1px]"></span>
                    <Para1 fontWeight="font-normal">{comments} Comments</Para1>
                  </div>
                </div>
                <h4 className={`${fontStyles.h4} font-bold text-blue`}>
                  {title}
                </h4>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ArticleDetail;
