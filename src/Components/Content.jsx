import "./contentStyle.css";
import pic from "./images/content.JPG";

function Content() {
  return (
    <div className="Box">
      <div className="Box_content">
        <p>Yo, what's up guys! 🥳</p>
        <p>
          It's tiring to write a different description for each shot, just like
          the shot and move on, love ya! 😘
        </p>
        <p>Let's create something amazing together! 🧑‍🎨</p>
        <p>
          Feel free to contact me -<a href="#">ertuken@gmail.com</a>
        </p>
      </div>

      <h4>
        <img src={pic} alt="Something Wrong" />
      </h4>

      <div className="Box_info">
        <h5>Eren ツ</h5>
        <p>let's create something amazing together →</p>
        <button>Hire Me</button>
      </div>
    </div>
  );
}
export default Content;
