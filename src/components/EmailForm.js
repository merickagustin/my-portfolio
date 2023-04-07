//import React from "react";

function EmailForm() {
  return (
    <form className="cta-form px-3">
      <h3 className="text-primary">Contact Me</h3>
      <div className="mb-3 row">
        <label for="exampleFormControlInput1" className="form-label">
          Subject
        </label>
        <input type="text" className="form-control mb-1" />
        <div className="col">
          <label for="exampleFormControlInput1" className="form-label">
            Your Email
          </label>
          <input
            type="email"
            className="form-control"
            placeholder="name@example.com"
          />
        </div>
        <div className="col">
          <label for="exampleFormControlInput1" className="form-label">
            CC
          </label>
          <input
            type="cc"
            className="form-control"
            placeholder="name@example.com"
          />
        </div>
      </div>
      <div class="mb-3">
        <label for="exampleFormControlTextarea1" className="form-label">
          Message
        </label>
        <textarea
          className="form-control"
          id="exampleFormControlTextarea1"
          rows="3"
        ></textarea>
      </div>
      <div class="col-auto">
        <button type="submit" class="btn btn-primary mb-3">
          Submit
        </button>
      </div>
    </form>
  );
}

export default EmailForm;
