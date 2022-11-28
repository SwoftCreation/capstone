import "../styles/Home.scss";

export default function Home() {
  return (
    <div className="Home-container">
      <main className="main">
        <section className="Video-Section">
          <video autoPlay loop muted poster="image/background.jpg">
            <source src="video/video.mp4" type="video/mp4" />
            Browser not support this video
          </video>
        </section>

        <section className="front-texts">
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
        </section>
      </main>
    </div>
  );
}
