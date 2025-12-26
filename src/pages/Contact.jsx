import Form from "../components/Form";
function Contact() {
  return (
    <>
      <section className=" ">
        <h2 className="dark-color text-center fs-1 text-uppercase fw-bolder mt-3">
          contact section
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
        <div>
          <Form />
        </div>
      </section>
    </>
  );
}

export default Contact;
