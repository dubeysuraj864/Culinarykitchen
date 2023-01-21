import Right from "../images/right.png";
import Star from "../images/star.png";

function SmallFoodCard(props) {
  return (
    <>
      <div className="small-food-card w-[22vw] h-[39vh] m-2 relative flex justify-center items-end text-white rounded-[20px] cursor-pointer">
        <img
          src={props.image}
          className="absolute top-0 w-[22vw] h-[39vh] object-cover rounded-[20px]"
          alt="food"
        />
        <div className="content group bg-[#fff] hover:bg-[#000] text-black hover:text-white transition-all  opacity-[0.8] p-2 px-4 rounded-b-[20px]">
          <div className="title py-2 font-bold text-xs">{props.title}</div>
          <div className="description py-2 text-xs">{props.description}</div>
          <hr className="text-white my-2 border-[1.2px]" />
          <div className="buttons py-2 flex justify-between text-xs">
            <button className=" py-2 rounded-[15px] flex items-center">
              Explore <img src={Right} className="w-[18px] mx-2 invert group-hover:invert-0 " alt="Right" />
            </button>
            <button className=" flex flex-row-reverse items-center">
              Rated <img src={Star} className="w-[18px] mx-2 invert group-hover:invert-0  " alt="Star" />
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default SmallFoodCard;
