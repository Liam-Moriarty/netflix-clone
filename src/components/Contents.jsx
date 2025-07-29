import "../Netflix-Styles/contents.css";

function Contents(props) {
  return (
    <>
      <section className="contents">
        <div className="contents-container">
          <div className="contents-title">
            <h1>{props.title}</h1>
            <p className="contents-p">{props.description}</p>
          </div>

          <div className="contents-img">
            <img src={props.image} alt="" />
          </div>
        </div>
      </section>
    </>
  );
}

export default Contents;
