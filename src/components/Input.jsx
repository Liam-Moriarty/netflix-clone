import "../Netflix-Styles/input.css";

function Input() {
  return (
    <>
      <input type="email" placeholder="Enter Email: " className="input-email" />
      <button className="get-started-btn">
        Get Started <i className="fa-solid fa-arrow-right"></i>
      </button>
    </>
  );
}

export default Input;
