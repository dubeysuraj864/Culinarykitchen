function GuideItem(props) {
  return (
    <>
      <div className="guide card  md:w-[400px] text-center flex flex-col items-center justify-center group transition-all cursor-pointer text-[#2B2B2B] rounded-xl mx-2 py-10 backdrop-blur-[5px] border md:border-0 my-2 md:backdrop-blur-0">
        <div className="guide-img">
          <img src={props.image} className="w-[100px]" alt="chefs" />
        </div>
        <div className="guide-name font-bold my-4">{props.title}</div>
        <div className="guide-para text-sm px-10 my-1 transition-all">
          {props.description}
        </div>
      </div>
    </>
  );
}

export default GuideItem;
