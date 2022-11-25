import "../styles/main.scss";

export default function Home() {
  return (
    <div className="Home-container">
      <div className="Navigation-bar">
        <span className="BrandName">Player ONE</span>
        <span className="Community">Community</span>
        <span className="Products">Products</span>
        <span className="Overview">Overview</span>
        <span className="Sign-in">Sign in</span>
      </div>
      <div className="Image">
        <video autoPlay loop muted poster="image/background.jpg">
          <source src="video/video.mp4" type="video/mp4" />
          Browser not support this video
        </video>
        <div className="front-texts">
          <span className="text1">CAPSTONE NBBANG</span>
          <br />
          <span className="text2">
            Smart Control platform with electrode signal
          </span>
          <br />
          <span className="text3">
            It's not just muscles that can move
            <br />
            We expand the limits of our bodies
          </span>
          <br />
          <span className="experience-now">experience now</span>
        </div>
      </div>
      <div className="Footer-Frame"></div>
    </div>
  );
}
