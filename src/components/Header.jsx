import Logo from "../images/Logo.png";
function Header() {
  return (
    <>
      <header className="flex justify-center items-center shadow p-2">
        <img src={Logo} alt="Culinary-kitchen" className="w-5 mx-2" />
        <span className="brand-name mx-2">Culinary kitchen</span>
      </header>
    </>
  );
}

export default Header;
