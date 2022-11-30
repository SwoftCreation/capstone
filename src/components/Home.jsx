import "../styles/Home.scss";

export default function Home() {
  return (
    <div className="front-container">
      <section className="Video-Section">
        <video autoPlay loop muted placeinline poster="image/background.jpg">
          <source src="video/video.mp4" type="video/mp4" />
          Browser not support this video
        </video>
      </section>
      <div className="front-texts">
        <p className="text1">CAPSTONE NBBANG</p>
        <p className="text2">Smart Control platform with electrode signal</p>
        <p className="text3">
          It's not just muscles that can move
          <br /> We expand the limits of our bodies
        </p>
        <div className="button-frame">
          <div className="front-button">
            <p>experience now</p>
          </div>
        </div>
      </div>
    </div>
  );
}
