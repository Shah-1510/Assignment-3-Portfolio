import React from "react";

export default function Contact() {
  return (
    <section id="contact" className="contact">
      <div className="container">
        <div className="row">
          <div className="col-md-6">
            <div className="contact-info">
              <h3>CONTACT ME</h3>
            </div>
          </div>
          <div className="col-md-6">
            <div className="contactfrom">
              <form id="signup" class="form">
                <div className="form-field">
                  <label for="username">Username:</label>
                  <input
                    type="text"
                    name="username"
                    id="username"
                    autocomplete="off"
                  ></input>
                  <small></small>
                </div>

                <div className="form-field">
                  <label for="email">Email:</label>
                  <input
                    type="text"
                    name="email"
                    id="email"
                    autocomplete="off"
                  ></input>
                  <small></small>
                </div>

                <div className="form-field">
                  <label for="password">Password:</label>
                  <input
                    type="password"
                    name="password"
                    id="password"
                    autocomplete="off"
                  ></input>
                  <small></small>
                </div>

                <div className="form-field">
                  <label for="confirm-password">Confirm Password:</label>
                  <input
                    type="password"
                    name="confirm-password"
                    id="confirm-password"
                    autocomplete="off"
                  ></input>
                  <small></small>
                </div>

                <div className="form-field">
                  <input id="submitBtn" type="submit" value="SUBMIT"></input>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
