import NetflixLogo from "./Netflix-Logo";
import Language from "./Language";
import Input from "./Input";
import SignIn from "./Sign-In";

function Header() {
  return (
    <>
      <header className="netflix-header">
        <nav>
          <NetflixLogo />
          <div className="lang-sign">
            <Language />
            <SignIn />
          </div>
        </nav>

        <section className="title-section">
          <div className="title-container">
            <h1>Unlimited movies, TV shows, and more</h1>
            <h3>Watch anywhere. Cancel anytime.</h3>
            <h3>
              Ready to watch? Enter your email to create or restart your
              membership.
            </h3>

            <Input />
          </div>
        </section>
      </header>
    </>
  );
}

export default Header;
