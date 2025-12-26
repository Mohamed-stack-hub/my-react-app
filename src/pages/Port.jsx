import Card from "../components/Card";
import img1 from "../assets/imgs/img1.png";
import img2 from "../assets/imgs/img2.png";
import img3 from "../assets/imgs/img3.png";
function Port() {
  const cards = Array(6).fill(0);
  const images = [img1, img2, img3];

  return (
    <>
      <section className="text-center ">
        <h2 className="dark-color text-center fs-1 text-uppercase fw-bolder">
          portfolio component
        </h2>
        <div className="d-flex justify-content-center align-items-center mb-3">
          <div
            className="bg-dark"
            style={{ width: "90px", height: "3px" }}
          ></div>
          <span className="mx-3 text-dark fs-4">★</span>
          <div
            className="bg-dark"
            style={{ width: "90px", height: "3px" }}
          ></div>
        </div>
        <div className="container">
          <div className="row">
            {images.map((image, index) => (
              <Card key={index} imgSrc={image} />
            ))}
          </div>
        </div>
      </section>
    </>
  );
}

export default Port;
