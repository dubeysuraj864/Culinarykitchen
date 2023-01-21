function ChefCard(props) {
  return (
    <>
      <div className="chef-card md:w-[400px]  text-center flex flex-col items-center justify-center group transition-all cursor-pointer backdrop-blur-[10px] my-2 md:backdrop-blur-0 md:bg-transparent text-white md:hover:text-[#2B2B2B] rounded-xl md:hover:bg-slate-100 mx-2 py-6 md:py-10 border md:border-0">
        <div className="chef-img">
          <img src={props.image} className="w-[100px]" alt="chefs" />
        </div>
        <div className="chef-name font-bold my-1">{props.name}</div>
        <div className="chef-location text-xs my-1">{props.location}</div>
        <div className="chef-says text-sm px-10 my-1 md:opacity-0 group-hover:opacity-100 transition-all">
          {props.says}
        </div>
      </div>
    </>
  );
}

export default ChefCard;
