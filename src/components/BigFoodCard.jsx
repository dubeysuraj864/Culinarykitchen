import Image1 from "../images/Bitmap-4.png";
import Right from "../images/right.png";
import Star from "../images/star.png";
function BigFoodCard() {
    return ( <>
    <div className="big-food-card w-[45vw] h-[80vh] relative flex justify-center items-end text-white rounded-[20px]">
        <img src={Image1} className="absolute top-0 w-[45vw] h-[80vh] object-cover rounded-[20px]"  alt="pizza" />
        <div className="content bg-[#342679] opacity-[0.8] p-6 px-8 rounded-b-[20px]">
            <div className="title py-2 font-bold">Pizza is a savory dish of Italian origin</div>
            <div className="description py-2">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry.</div>
            <hr className="text-white my-2 border-[1.2px]" />
            <div className="buttons py-2 flex justify-between ">
                <button className="border px-4 py-2 rounded-[15px] flex items-center">Explore <img src={Right} className="w-[22px] mx-2" alt="Right" /></button>
                <button className=" flex flex-row-reverse items-center">Rated <img src={Star} className="w-[22px] mx-2" alt="Star" /></button>
            </div>
        </div>
    </div>
    </> );
}

export default BigFoodCard;