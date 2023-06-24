import EmailForm from "./subcomponents/EmailForm.js";
import SocialsSub from "./subcomponents/SocialsSub.js";
import { useState } from "react";
import Skeleton, { SkeletonTheme } from "react-loading-skeleton";

function Contacts() {
  const [isLoading, setLoading] = useState(true);

  useState(() => {
    setTimeout(() => {
      setLoading(false);
    }, 500);
  });
  return (
    <SkeletonTheme baseColor="#a2d2ff" highlightColor="#444">
      <section className="container-fluid">
        <div className="px-1 py-3 px-lg-5 py-xl-4 row justify-content-center">
          <div className="container">
            {isLoading ? (
              <h1>
                <Skeleton />
              </h1>
            ) : (
              <h1>Contacts</h1>
            )}
            <EmailForm />
            <div className="px-md-2 px-xl-3">
              {isLoading ? (
                <h3>
                  <Skeleton />
                </h3>
              ) : (
                <h3 className="text-primary">Socials</h3>
              )}
              <SocialsSub />
            </div>
          </div>
        </div>
      </section>
    </SkeletonTheme>
  );
}

export default Contacts;
