import classes from "../../css/Projects.module.css";
import Skeleton from "react-loading-skeleton";

function SkeletonCard() {
  return (
    <div className="col-10 col-sm-8 col-lg-12 col-xl-7">
      <div className="card border-primary shadow">
        <div className="card-header">
          <p className={classes["project-title"]}>
            <Skeleton />
          </p>
        </div>
        <div className="card-body">
          <p className="card-text">
            <Skeleton />
          </p>
          <div>
            <Skeleton height={30} />
          </div>
          <div className="d-flex flex-column gap-2 mt-2">
            <Skeleton height={50} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default SkeletonCard;
