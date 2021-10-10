import React from "react";

export const CountryTable = ({ id, title, url }) => {
  return (
    <>
      <div key={id} className="itemBox row">
        <div className="col-md-4">
          <img src={url} alt={title} />
        </div>
        <div className="col-md-8">
          <h3>{title}</h3>

          <p>
            <strong>City/Locality: </strong>
            <span className="orange-text-color"> {title.substr(0, 12)}</span>
          </p>

          <p>
            <strong>Total Capacity:</strong>{" "}
            <span className="orange-text-color">{id}</span>
          </p>

          <p>
            <strong>Mobile Number:</strong>{" "}
            <span className="orange-text-color">{Math.round(id * 59)}</span>
          </p>

          <p>
            <strong>Pincode:</strong>{" "}
            <span className="orange-text-color">
              {id}
              {id}
              {id}
              {id}
            </span>
          </p>

          <p>
            <strong>Address:</strong> 17, Shri S.R. Marg, Ballard Estate, Fort,
            Mumbai, Maharashtra
          </p>

          <a
            data-toggle="collapse"
            href="#details-box1"
            role="button"
            aria-expanded="false"
            aria-controls="details-box1"
            className="btn btn-primary"
          >
            More Details
          </a>
        </div>
      </div>
    </>
  );
};
