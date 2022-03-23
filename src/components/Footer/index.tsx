import logo from "../../assets/logo/logo-xbox.svg";
function Footer() {
  return (
    <footer>
      <div className="container">
        <div className="logo">
          <img src={logo} alt="" />
        </div>
        <div className="copyright">
          <span>© Microsoft 2022</span>
          <span>Todos os direitos reservados</span>
        </div>
      </div>
    </footer>
  );
}
export default Footer;
