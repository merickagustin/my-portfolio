import EmailForm from "./subcomponents/EmailForm.js";
import SocialsSub from "./subcomponents/SocialsSub.js";

function Contacts() {
  return (
    <section className="container-fluid">
      <div className="px-1 py-3 px-lg-5 py-xl-4 row justify-content-center">
        <div className="container">
          <h1>Contacts</h1>
          <EmailForm />
          <div className="px-md-2 px-xl-3">
            <h3 className="text-primary">Socials</h3>
            <SocialsSub />
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contacts;
