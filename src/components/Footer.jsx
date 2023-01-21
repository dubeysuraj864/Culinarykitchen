import Facebook from "../images/facebook.png";
import Instagram from "../images/instagram.png";
import Twitter from "../images/twitter.png";

function Footer() {
  return (
    <>
      <footer className="flex justify-center items-center p-4">
        <a href="https://facebook.com" target="blank">
          <img src={Facebook} className="mx-4  w-[50px] h-[50px]" alt="Facebook" />
        </a>
        <a href="https://instagram.com" target="blank">
          <img src={Instagram} className="mx-4 w-[50px] h-[50px]" alt="Instagram" />
        </a>
        <a href="https://twitter.com" target="blank">
          <img src={Twitter} className="mx-4  w-[50px] h-[50px]" alt="Twitter" />
        </a>
      </footer>
    </>
  );
}

export default Footer;
