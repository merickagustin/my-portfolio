import { useRef } from "react";
import emailjs from "@emailjs/browser";
import { useState } from "react";
import Skeleton from "react-loading-skeleton";

function EmailForm() {
  const [isLoading, setLoading] = useState(true);

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
          alert("Email Sent.");
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );

    e.target.reset();
  };

  useState(() => {
    setTimeout(() => {
      setLoading(false);
    }, 500);
  });
  return (
    <form className="cta-form px-md-2 px-xl-3" ref={form} onSubmit={sendEmail}>
      {isLoading ? (
        <h3>
          <Skeleton className="text-primary" />
        </h3>
      ) : (
        <h3 className="text-primary">Contact Me</h3>
      )}
      <div className="mb-1 row">
        <div className="col">
          {isLoading ? (
            <Skeleton height={55} />
          ) : (
            <>
              <label htmlFor="full-name-control-form" className="form-label">
                Full Name
              </label>
              <input
                id="full-name-control-form"
                name="from-name"
                type="input"
                className="form-control"
                required
              />
            </>
          )}
        </div>
        <div className="col">
          {isLoading ? (
            <Skeleton height={55} />
          ) : (
            <>
              <label htmlFor="email-control-form" className="form-label">
                Your Email
              </label>
              <input
                id="email-control-form"
                name="email-from"
                type="email"
                className="form-control"
                placeholder="name@example.com"
                required
              />
            </>
          )}
        </div>
      </div>
      <div className="col">
        {isLoading ? (
          <Skeleton height={55} />
        ) : (
          <>
            <label htmlFor="subject-control-form" className="form-label">
              Subject
            </label>
            <input
              id="subject-control-form"
              name="subject"
              type="text"
              className="form-control"
            />
          </>
        )}
      </div>
      <div className="mb-1">
        {isLoading ? (
          <Skeleton height={200} />
        ) : (
          <>
            <label htmlFor="message-control-form" className="form-label">
              Message
            </label>
            <textarea
              id="message-control-form"
              name="message"
              className="form-control"
              rows="8"
              required
            ></textarea>
          </>
        )}
      </div>
      <div className="col-auto">
        {isLoading ? (
          <Skeleton height={45} className="mb-3" />
        ) : (
          <button
            type="submit"
            className="btn btn-primary btn-lg text-dark mb-3"
            value="Send"
          >
            Submit
          </button>
        )}
      </div>
    </form>
  );
}

export default EmailForm;
