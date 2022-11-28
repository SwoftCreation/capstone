import "../styles/Products.scss";

export default function Products() {
  return (
    <main>
      <section id="content">
        <div id="front-text">
          <span id="text1">Player ONE</span>
          <br />
          <span id="text2">EXPAND PHYSICAL CAPACITY</span>
          <br />
        </div>

        <div id="graph-area">
          <div className="rectangle rectangle1 odd"></div>
          <div className="rectangle rectangle2 even"></div>
          <div className="rectangle rectangle3 odd"></div>
          <div className="rectangle rectangle4 even"></div>
          <div className="rectangle rectangle5 odd"></div>
          <div className="rectangle rectangle6 even"></div>
        </div>
      </section>
    </main>
  );
}
