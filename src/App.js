import "./App.css";
import Avatar from "./my-avatar.jpg";
import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
import EmailOutlinedIcon from "@mui/icons-material/EmailOutlined";
import AccountBoxOutlinedIcon from "@mui/icons-material/AccountBoxOutlined";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import SpeakerIcon from '@mui/icons-material/Speaker';
import MusicAva from "./test.jpg";

function App() {
  return (
    <div className="App">
      <div className="container">
        <div className="info-container">
          <div className="info-section">
            <div className="avatar">
              <img alt="my-avatar" src={Avatar} />
              <p className="my-name"> Duan Hoang </p>
              <p className="my-job"> Front-End Dev </p>
            </div>

            <div className="info">
              <div className="info-location">
                <p>
                  {" "}
                  <HomeOutlinedIcon style={{ width: 26, height: 26 }} />{" "}
                  Location:{" "}
                </p>
                <div className="info-des"> District 7, HCM City, Vietnam </div>
              </div>
              <div className="info-email">
                <p>
                  {" "}
                  <EmailOutlinedIcon
                    style={{ width: 26, height: 26 }}
                  /> Email:{" "}
                </p>
                <div className="info-des"> chrishoan99@gmail.com </div>
              </div>
              <div className="info-social">
                <p>
                  {" "}
                  <AccountBoxOutlinedIcon
                    style={{ width: 26, height: 26 }}
                  />{" "}
                  Social:{" "}
                </p>
                <div className="info-des">
                  <div
                    className="item-row"
                    style={{
                      display: "flex",
                      textDecoration: "none",
                      color: "inherit",
                    }}
                  >
                    <a target={"_blank"}>
                      <LinkedInIcon
                        style={{ width: 35, height: 35, cursor: "pointer" }}
                      />
                    </a>
                    <a target={"_blank"}>
                      <FacebookIcon
                        style={{ width: 35, height: 35, cursor: "pointer" }}
                      />
                    </a>
                    <a target={"_blank"}>
                      <InstagramIcon
                        style={{ width: 35, height: 35, cursor: "pointer" }}
                      />
                    </a>
                    <a target={"_blank"}>
                      <EmailOutlinedIcon
                        style={{ width: 36, height: 36, cursor: "pointer" }}
                      />
                    </a>
                  </div>
                </div>
              </div>

              <div className="info-music">
                <a target={"_blank"}>
                <div className="music-des">
                      <SpeakerIcon
                        style={{ width: 20, height: 20, cursor: "pointer" }}
                      />
                      <p style={{fontSize: 22, margin: 0, marginLeft: 4}}> Last listen to: </p>
                </div>

                <div className="music-item">
                  <img alt="Tom" style={{width: 70, height: 70, borderRadius: 8}} src={MusicAva}/>
              
                <div style={{marginLeft: 15}}>
                  <div style={{fontWeight: 700, fontSize: 18}}> Tom </div>
                  <div style={{fontWeight: 600, fontSize: 18}}> Maroon 5 </div>
                </div>   
                </div>   
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
