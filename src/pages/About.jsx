function About() {
  return (
    <>
      <section
        className="d-flex justify-content-center align-items-center text-center flex-column"
        style={{ backgroundColor: "#1abc9c", minHeight: "90vh" }}
      >
        <h2 className="text-white text-uppercase">about component</h2>
        <div className="d-flex justify-content-center align-items-center mb-3">
          <div
            className="bg-white"
            style={{ width: "90px", height: "3px" }}
          ></div>
          <span className="mx-3 text-white fs-4">★</span>
          <div
            className="bg-white"
            style={{ width: "90px", height: "3px" }}
          ></div>
        </div>
        <div className="container">
          <div className="row">
            <div className="col-md-6">
              <p className="left text-white">
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Atque
                doloremque rem nisi iste, porro laboriosam cupiditate iure
                accusantium alias quod!
              </p>
            </div>
            <div className="col-md-6 ">
              <p className="left text-white">
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Atque
                doloremque rem nisi iste, porro laboriosam cupiditate iure
                accusantium alias quod!
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
export default About;
