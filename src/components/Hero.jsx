import "./hero.css";

export default function Hero() {
  return (
    <section className="hero">
      <div className="hero-container">
        <div className="hero-left">
          <h1>
            Auto repair shop <br />
            management software
          </h1>

          <p>
            Run estimates, DVIs, inventory, scheduling, and invoicing &
            payments—together in one easy system built for growing shops.
            Keep jobs moving, keep customers in the loop, and get paid faster.
          </p>

          <div className="hero-buttons">
            <button className="btn-primary">Request Demo</button>
            <button className="btn-outline">
              ▶ Watch Demo Video
            </button>
          </div>
        </div>

        <div className="hero-right">
          <div className="browser">
            <div className="browser-top">
              <span></span>
              <span></span>
              <span></span>
            </div>

            <div className="dashboard">
              <div className="stats">
                <div className="stat green">
                  <p>Active Tickets</p>
                  <h2>24</h2>
                </div>

                <div className="stat blue">
                  <p>Revenue</p>
                  <h2>$3,240</h2>
                </div>
              </div>

              <div className="job active">
                2015 Honda Civic - Oil Change
                <span>Active</span>
              </div>

              <div className="job pending">
                2018 Ford F-150 - Brake Service
                <span>Pending</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
