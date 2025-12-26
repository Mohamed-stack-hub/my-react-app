function Footer() {
  return (
    <>
      <footer
        className="text-white text-center pt-5"
        style={{ backgroundColor: "#2c3e50" }}
      >
        <div className="container pb-4">
          <div className="row g-4">
            <div className="col-md-4">
              <h4 className="text-uppercase mb-3">Location</h4>
              <p className="mb-1">2215 John Daniel Drive</p>
              <p className="mb-0">Clark, MO 65243</p>
            </div>

            <div className="col-md-4">
              <h4 className="text-uppercase mb-3">Around the Web</h4>
              <div className="d-flex justify-content-center gap-3">
                <span
                  className="d-inline-flex justify-content-center align-items-center border rounded-circle"
                  style={{ width: "40px", height: "40px" }}
                >
                  <i className="fab fa-facebook-f"></i>
                </span>
                <span
                  className="d-inline-flex justify-content-center align-items-center border rounded-circle"
                  style={{ width: "40px", height: "40px" }}
                >
                  <i className="fab fa-twitter"></i>
                </span>
                <span
                  className="d-inline-flex justify-content-center align-items-center border rounded-circle"
                  style={{ width: "40px", height: "40px" }}
                >
                  <i className="fab fa-linkedin-in"></i>
                </span>
                <span
                  className="d-inline-flex justify-content-center align-items-center border rounded-circle"
                  style={{ width: "40px", height: "40px" }}
                >
                  <i className="fas fa-globe"></i>
                </span>
              </div>
            </div>

            <div className="col-md-4">
              <h4 className="text-uppercase mb-3">About Freelancer</h4>
              <p className="mb-0">
                Freelance is a free to use, licensed Bootstrap theme created by
                Route
              </p>
            </div>
          </div>
        </div>

        <div className="py-3" style={{ backgroundColor: "#1a252f" }}>
          <small>Copyright © Your Website 2021</small>
        </div>
      </footer>
    </>
  );
}
export default Footer;
