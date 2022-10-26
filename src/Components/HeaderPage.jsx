import * as React from "react";
import IconButton from "@mui/material/IconButton";
import Tooltip from "@mui/material/Tooltip";
import FeedbackIcon from "@mui/icons-material/Feedback";
import ShareIcon from "@mui/icons-material/Share";
import DetailsIcon from "@mui/icons-material/Details";
import pic from "./images/content.JPG";

const HeaderPage = () => {
  const butStyle = {
    backgroundColor: "#ea4c89",
    border: "none",
    padding: 10,
    borderRadius: 5
  };
  return (
    <>
      <div className="row mt-5">
        <div className="col-11" style={{ paddingBottom: 20 }}>
          <div
            class="d-flex bd-highlight justify-content-center"
            style={{ marginLeft: 100 }}
          >
            <div class="p-2 bd-highlight">
              <img src={pic} alt="Something Wrong..." width={70} height={60} />
            </div>
            <div class="p-2 bd-highlight" style={{ width: 500 }}>
              <p>
                <b>Onboarding #Exploration</b>
              </p>
              <p>
                Eren ツ<a href="#">Follow</a>
                <a href="#">Hire Me</a>
              </p>
            </div>
            <div class="p-2 flex-shrink-1 bd-highlight">
              <button style={butStyle}>Share</button>
            </div>
            <div class="p-2 flex-shrink-1 bd-highlight">
              <button style={butStyle}>Like</button>
            </div>
          </div>
        </div>

        <div className="col-1" style={{ height: 100 }}>
          <nav className="navbar">
            <ul className="nav navbar-nav">
              <Tooltip
                title=""
                placement="left-start"
                style={{ background: "#ffffff" }}
              >
                <IconButton>
                  <img
                    src={pic}
                    alt="Something Wrong..."
                    width={50}
                    height={50}
                  />
                </IconButton>
              </Tooltip>
              <Tooltip
                title="Feedback"
                placement="left-start"
                style={{ background: "#ffffff" }}
              >
                <IconButton>
                  <FeedbackIcon />
                </IconButton>
              </Tooltip>
              <Tooltip
                title="Share"
                placement="left-start"
                style={{ background: "#ffffff" }}
              >
                <IconButton>
                  <ShareIcon />
                </IconButton>
              </Tooltip>
              <Tooltip
                title="Shot Details"
                placement="left-start"
                style={{ background: "#ffffff" }}
              >
                <IconButton>
                  <DetailsIcon />
                </IconButton>
              </Tooltip>
            </ul>
          </nav>
        </div>
      </div>
    </>
  );
};
export default HeaderPage;
