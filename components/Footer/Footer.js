import footerStyle from "../Footer/Footer.module.scss";

const Footer = () => {
  return (
    <div className={footerStyle.footer}>
      <ul className={footerStyle.links}>
        <li>About</li>
        <li>Help</li>
        <li>Press</li>
        <li>API</li>
        <li>Jobs</li>
        <li>Privacy</li>
        <li>Terms</li>
        <li>Locations</li>
        <li>Top Accounts</li>
        <li>Hashtags</li>
        <li>Language</li>
      </ul>
      <div className="copyright">@ 2022 INSTAGRAM FROM FACEBOOK</div>
    </div>
  );
};

export default Footer;
