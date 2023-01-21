function CountryTypeCard(props) {
  return (
    <>
      <div className="country-type-card w-[29vw] my-6 mx-2 ">
        <div className="title text-md font-bold py-4" >{props.title}</div>
        <div className="description text-xs ">{props.description}</div>
      </div>
    </>
  );
}

export default CountryTypeCard;
