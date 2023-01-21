import BigFoodCard from "./BigFoodCard";
import SmallFoodCard from "./SmallFoodCard";
import Image4 from "../images/Bitmap.png";
import Image3 from "../images/Bitmap-3.png";
import Image2 from "../images/Bitmap-2.png";
import Image1 from "../images/Bitmap-1.png";

function FoodCards() {
  return (
    <>
      <div className="food-cards flex flex-col items-center justify-start ">
        <div className="varieties uppercase border-b-2 border-[#000000] w-[80px] pb-2 flex justify-center text-xl tracking-[8px] m-6 drop-shadow-2xl shadow-black">
          varieties
        </div>
        <div className="food-items flex justify-center">
          <div className="left-card m-2 ">
            <BigFoodCard />
          </div>
          <div className="right-cards grid grid-rows-2 grid-flow-col">
            <SmallFoodCard title="Crispy French Fries" image={Image1} description=" Lorem Ipsum is simply dummy text of the printing and typesetting industry." />
            <SmallFoodCard title="Crispy French Fries" image={Image2} description=" Lorem Ipsum is simply dummy text of the printing and typesetting industry." />
            <SmallFoodCard title="Crispy French Fries" image={Image3} description=" Lorem Ipsum is simply dummy text of the printing and typesetting industry." />
            <SmallFoodCard  title="Crispy French Fries" image={Image4} description=" Lorem Ipsum is simply dummy text of the printing and typesetting industry." />
          </div>
        </div>
      </div>
    </>
  );
}

export default FoodCards;
