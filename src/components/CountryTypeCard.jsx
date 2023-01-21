function CountryTypeCard(props) {
  return (
    <>
      <div className="country-type-card mx-auto w-[90vw] lg:h-[280px] lg:w-[29vw] my-6 lg:mx-2 flex flex-col justify-center rounded-lg border lg:bg-transparent p-10 items-start">
        <div className="title text-md font-bold py-4 ">{props.title}</div>
        <div className="description text-xs ">{props.description}</div>
      </div>
    </>
  );
}

export default CountryTypeCard;
