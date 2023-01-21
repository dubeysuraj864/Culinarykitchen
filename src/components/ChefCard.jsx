function ChefCard(props) {
    return ( <>
    <div className="chef-card w-[400px] text-center flex flex-col items-center justify-center group transition-all cursor-pointer text-white hover:text-[#2B2B2B] rounded-xl hover:bg-slate-100 mx-2 py-10">
    <div className="chef-img">
          <img src={props.image} className="w-[100px]" alt="chefs" />
        </div>
        <div className="chef-name font-bold my-1">{props.name}</div>
        <div className="chef-location text-xs my-1">{props.location}</div>
        <div className="chef-says text-sm px-10 my-1 opacity-0 group-hover:opacity-100 transition-all">{props.says}</div>
    </div>
    </> );
}

export default ChefCard;