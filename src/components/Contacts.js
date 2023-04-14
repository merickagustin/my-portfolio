import EmailForm from "./subcomponents/EmailForm";

function Contacts() {
  return (
    <section className="container-fluid">
      <div className="px-1 py-3 px-lg-5 py-xl-4 row justify-content-center">
        <div className="container">
          <h1>Contacts</h1>
          <EmailForm />
        </div>
      </div>
    </section>
  );
}

export default Contacts;
