import "./Card.css";
import mediaType from "../interface";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faExclamationCircle } from '@fortawesome/free-solid-svg-icons';
import { faLanguage } from '@fortawesome/free-solid-svg-icons';

//calculating months difference from present month
const handleMonthDiff = (dateFrom:Date , dateTo:Date) => {
  return dateTo.getMonth() - dateFrom.getMonth() + 
  (12 * (dateTo.getFullYear() - dateFrom.getFullYear()))
}

export default function Card(props:mediaType) {
  return (
    <div className="col-lg-4 col-md-6 col-sm-12 col-xs-12">
      <div className="card">
        {props.status === "error" ? (
          <div className="errorCard">
            <p className="errorText">
              <FontAwesomeIcon icon={faExclamationCircle} />
              An error occurred while processing your file. Delete file to try
              again and report issue if the problem persists.
            </p>
            <div className="btnGroup">
              <button type="button" className="btn btn-primary">
                Delete file
              </button>
              <button type="button" className="btn btn-primary">
                Report issue
              </button>
            </div>
          </div>
        ) : (
          <div className={props.status !== "transcribing" ? "content" : ""}>
            {props.status === "ready" && (
              <p className="lang">
                <span>
                  <FontAwesomeIcon icon={faLanguage} />
                </span>
                <span>{props.languages.length} Languages</span>
              </p>
            )}
            {props.status === "transcribing" && (
              <p className="transcribingText">
                Transcribing subtitles<span></span>
              </p>
            )}
            <img
              src={props.cover}  data-testid="hoverEdit"
              alt="banner"
              className={
                props.status === "transcribing" ? "transCard" : "card-image"
              }
            />{" "}
            <button type="button" className="btn btn-edit">
              Edit
            </button>{" "}
          </div>
        )}
        <div className="card-footer">
          <h6 className="card-name">{props.name}</h6>
          <div className="card-status">
            {props.status === "error" ? props.errorMessage :  props.status === "transcribing" ?  props.status.charAt(0).toUpperCase() + props.status.slice(1): "Edited " + handleMonthDiff(new Date(props.updatedAt), new Date()) +" months ago"}
          </div>
        </div>
      </div>
    </div>
  );
}