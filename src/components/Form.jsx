import { useState } from "react";

function Form() {
  const [name, setUserName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [userAge, setuserAge] = useState("");

  return (
    <>
      <section className="min-vh-100">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-md-9">
              <form className="mt-5">
                <div className="form-group mb-5">
                  <input
                    type="text"
                    className="form-control"
                    id="userName"
                    placeholder="User name"
                    value={name}
                    onChange={(e) => setUserName(e.target.value)}
                  />
                  {name && (
                    <label htmlFor="userName" className="floating-label">
                      User name
                    </label>
                  )}
                </div>
                <div className="form-group mb-5 ">
                  <input
                    type="email"
                    className="form-control"
                    id="email"
                    placeholder="Enter email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                  {email && (
                    <label htmlFor="email" className="floating-label">
                      Email address
                    </label>
                  )}
                </div>

                <div className="form-group mb-5">
                  <input
                    type="password"
                    className="form-control"
                    id="password"
                    placeholder="Password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                  />
                  {password && (
                    <label className="floating-label" htmlFor="password">
                      Password
                    </label>
                  )}
                </div>

                <div className="form-group mb-5">
                  <input
                    type="text"
                    className="form-control"
                    id="userAge"
                    placeholder="Age"
                    value={userAge}
                    onChange={(e) => setuserAge(e.target.value)}
                  />
                  {userAge && (
                    <label className="floating-label" htmlFor="userAge">
                      User age
                    </label>
                  )}
                </div>

                <button type="submit" className="my-btn">
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Form;
