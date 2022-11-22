import "./styles/Home.scss";
import "./App.css";

function App() {
  return (
    <div className="Home">
      <div className="Rectangle">
        <span className="Player-ONE">Player ONE</span>
        <span className="Community">Community</span>
        <span className="Products">Products</span>
        <span className="Overview">Overview</span>
      </div>
      <div className="Image">
        <span className="CAPSTONE-NBBANG">CAPSTONE NBBANG</span>
        <br />
        <span className="Smart-Control-platform-with-electrode-signal">
          Smart Control platform with electrode signal
        </span>
        <br />
        <span class="Its-not-just-muscles-that-can-move-We-expand-the-limits-of-our-bodies">
          It's not just muscles that can move
          <br /> We expand the limits of our bodies
        </span>
        <div className="logo"></div>
      </div>
    </div>
  );
}
export default App;
