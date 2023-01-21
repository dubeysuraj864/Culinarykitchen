import Bg from "../images/food-guide-bg.png";
import GuideItem from "./GuideItem";
import Veggies from "../images/veggy.png";
import Fruits from "../images/fruits.png";
import Wholegrain from "../images/wholegrains.png";
import Protein from "../images/protein.png";
function FoodGuide() {
  return (
    <>
      <div className="food-guide relative flex flex-col items-center">
        <img
          src={Bg}
          className="absolute w-[100vw] h-full md:h-[90vh] object-cover left-0 -z-10"
          alt="background_image"
        />
        <div className="varieties text-center px-0 uppercase border-b-2 border-[#000000] w-[80px] pb-2 flex justify-center text-xl tracking-[8px] m-6 drop-shadow-2xl shadow-black">
          Food&nbsp;Guide
        </div>
        <div className="guides w-[90vw] flex flex-col md:flex-row items-center justify-between">
          <div className="left">
            <GuideItem
              image={Veggies}
              title="VEGETABLES"
              description="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard."
            />
            <GuideItem
              image={Fruits}
              title="FRUITS"
              description="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's."
            />
          </div>
          <div className="right">
            <GuideItem
              image={Wholegrain}
              title="WHOLE GRAINS"
              description="Lorem Ipsum is simply dummy text of the printing and typesetting industry."
            />
            <GuideItem
              image={Protein}
              title="HEALTHY PROTEIN"
              description="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard."
            />
          </div>
        </div>
      </div>
    </>
  );
}

export default FoodGuide;
