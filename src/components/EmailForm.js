import { useRef } from "react";
import emailjs from "@emailjs/browser";

function EmailForm() {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_9byxg2c",
        "template_r2qs1zh",
        form.current,
        "cdwyIR0B5nfD5Kcgb"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );

    e.target.reset();
  };

  return (
    <form className="cta-form px-md-2 px-xl-3" ref={form} onSubmit={sendEmail}>
      <h3 className="text-primary">Contact Me</h3>
      <div className="mb-1 row">
        <div className="col">
          <label htmlFor="exampleFormControlInput1" className="form-label">
            Full Name
          </label>
          <input
            name="from-name"
            type="input"
            className="form-control"
            required
          />
        </div>
        <div className="col">
          <label htmlFor="exampleFormControlInput1" className="form-label">
            Your Email
          </label>
          <input
            name="email-from"
            type="email"
            className="form-control"
            placeholder="name@example.com"
            required
          />
        </div>
      </div>
      <div className="col">
        <label htmlFor="exampleFormControlInput1" className="form-label">
          Subject
        </label>
        <input name="subject" type="text" className="form-control" />
      </div>
      <div className="mb-1">
        <label htmlFor="exampleFormControlTextarea1" className="form-label">
          Message
        </label>
        <textarea
          name="message"
          className="form-control"
          id="exampleFormControlTextarea1"
          rows="8"
          required
        ></textarea>
      </div>
      <div className="col-auto">
        <button
          type="submit"
          className="btn btn-primary btn-lg text-dark mb-3"
          value="Send"
        >
          Submit
        </button>
      </div>
    </form>
  );
}

export default EmailForm;
