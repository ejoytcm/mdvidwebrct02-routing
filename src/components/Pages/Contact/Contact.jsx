import React from "react";

const Contact = () => {
  return (
    <div className="container mt-5 mh-75vh">
      <div className="row">
      <h6 className="display-6 fw-bold mb-4 text-center mt-4">Say hello!</h6>
        <div className="col-lg-7 mx-auto">
          <div className="card mt-2 mx-auto p-4 bg-light">
            <div className="card-body bg-light">
              <div className="container">
                <form id="contact-form">
                  <div className="controls">
                    <div className="row">
                      <div className="col-md-6">
                        <div className="form-group mb-4">
                          <label htmlFor="form_name">Full name *</label>
                          <input
                            id="form_name"
                            type="text"
                            name="name"
                            className="form-control"
                            placeholder="Please enter your full name *"
                          />
                        </div>
                      </div>
                      <div className="col-md-6">
                        <div className="form-group mb-4">
                          <label htmlFor="form_email">Email *</label>
                          <input
                            id="form_email"
                            type="text"
                            name="email"
                            className="form-control"
                            placeholder="Please enter your email *"
                          />
                        </div>
                      </div>
                    </div>
                    <div className="row">
                      <div className="col-md-12">
                        <div className="form-group mb-4">
                          <label htmlFor="form_message">Message *</label>
                          <textarea
                            id="form_message"
                            name="message"
                            className="form-control"
                            placeholder="Write your message here."
                            rows="4"
                          ></textarea>
                        </div>
                      </div>
                      <div className="col-md-12">
                        <input
                          type="submit"
                          className="btn btn-secondary btn-send pt-2 btn-block "
                          value="Send Message"
                        />
                      </div>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
