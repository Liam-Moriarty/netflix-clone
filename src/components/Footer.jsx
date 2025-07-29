import "../Netflix-Styles/footer.css";
import Language from "./Language";

function Footer() {
  return (
    <>
      <footer className="footer">
        <div className="section-container">
          <div className="section">
            <ul>
              <li>
                <a href="#">Questions? Contact us.</a>
              </li>
              <li>
                <a href="#">FAQ</a>
              </li>
              <li>
                <a href="#">Investor Relations</a>
              </li>
              <li>
                <a href="#">Ways to Watch</a>
              </li>
              <li>
                <a href="#">Corporate Information</a>
              </li>
              <li>
                <a href="#">Only on Netflix</a>
              </li>
            </ul>
          </div>
          <div className="section">
            <ul>
              <li>
                <a href="#">Help Center</a>
              </li>
              <li>
                <a href="#">Jobs</a>
              </li>
              <li>
                <a href="#">Terms of Use</a>
              </li>
              <li>
                <a href="#">Contact Us</a>
              </li>
            </ul>
          </div>
          <div className="section">
            <ul>
              <li>
                <a href="#">Account</a>
              </li>
              <li>
                <a href="#">Redeem Gift Cards</a>
              </li>
              <li>
                <a href="#">Privacy</a>
              </li>
              <li>
                <a href="#">Speed Test</a>
              </li>
            </ul>
          </div>
          <div className="section">
            <ul>
              <li>
                <a href="#">Media Center</a>
              </li>
              <li>
                <a href="#">Buy Gift Cards</a>
              </li>
              <li>
                <a href="#">Cookie Preferences</a>
              </li>
              <li>
                <a href="#">Legal Notices</a>
              </li>
            </ul>
          </div>
          <div className="netflix-ph">
            <Language />
            <p>Netflix Philippines</p>
          </div>
        </div>
      </footer>
    </>
  );
}

export default Footer;
