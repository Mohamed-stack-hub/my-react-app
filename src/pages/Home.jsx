import avatarImg from "../assets/imgs/imageye___-_imgi_1_avataaars.png";

function Home() {
  return (
    <>
      <section
        className="d-flex justify-content-center align-items-center text-center"
        style={{ backgroundColor: "#1abc9c", minHeight: "100vh" }}
      >
        <div className="container">
          <div className="d-flex justify-content-center mb-4">
            <div>
              <img
                src={avatarImg}
                alt="avatar"
                className="img-fluid"
                style={{ maxWidth: "260px" }}
              />
            </div>
          </div>

          <h1 className="text-white fw-bold text-uppercase mb-3 display-5">
            START FRAMEWORK
          </h1>

          <div className="d-flex justify-content-center align-items-center mb-3">
            <div
              className="bg-white"
              style={{ width: "90px", height: "3px", borderRadius: "3px" }}
            ></div>
            <span className="mx-3 text-white fs-4">★</span>
            <div
              className="bg-white"
              style={{ width: "90px", height: "3px", borderRadius: "3px" }}
            ></div>
          </div>

          <p className="text-white">
            Graphic Artist - Web Designer - Illustrator
          </p>
        </div>
      </section>
    </>
  );
}
export default Home;
