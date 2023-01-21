import ChefCard from "./ChefCard";
import Chef1 from "../images/chef1.png";
import Chef2 from "../images/chef2.png";
import Chef3 from "../images/chef3.png";
import Bg from "../images/top-chef-bg.png";
function TopChefs() {
  return (
    <>
     <div className="top flex justify-center">
     <div className="varieties text-center px-0 uppercase border-b-2 border-[#000000] w-[80px] pb-2 flex justify-center text-xl tracking-[8px] my-12 drop-shadow-2xl shadow-black">
          top&nbsp;chefs
        </div>
     </div>
    
      <div className="top-chefs relative md:min-h-[60vh] flex flex-col md:flex-row items-center justify-center my-0 transition-all px-4">
      <img src={Bg} className=" absolute w-[100vw] h-[100vh]  -z-10 md:h-fit object-cover" alt="bg" />
        <ChefCard
          image={Chef1}
          name="Eileen Johnson"
          location="Executive Chef, USA"
          says="Lorem Ipsum is simply dummy text of the printing and typesetting industry."
        />
        <ChefCard
          image={Chef2}
          name="Amanda Dority"
          location="ESous Chef, India"
          says="Lorem Ipsum is simply dummy text of the printing and typesetting industry."
        />
        <ChefCard
          image={Chef3}
          name="Robert Downey Jr"
          location="Executive Chef, USA"
          says="Lorem Ipsum is simply dummy text of the printing and typesetting industry."
        />
      </div>
    </>
  );
}

export default TopChefs;
