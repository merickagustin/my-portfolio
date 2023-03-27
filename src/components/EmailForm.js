//import React from "react";

function EmailForm() {
  return (
    <form className="cta-form">
      <div className="mb-3">
        <label for="exampleFormControlInput1" className="form-label">
          Email address
        </label>
        <input
          type="email"
          className="form-control"
          placeholder="name@example.com"
        />
      </div>
      <div class="mb-3">
        <label for="exampleFormControlTextarea1" className="form-label">
          Example textarea
        </label>
        <textarea
          className="form-control"
          id="exampleFormControlTextarea1"
          rows="3"
        ></textarea>
      </div>
      <div class="col-auto">
        <button type="submit" class="btn btn-primary mb-3">
          Confirm identity
        </button>
      </div>
    </form>
  );
}

export default EmailForm;
