function Pricing() {
  return (
    <section className="pricing">
      <h2>Simple pricing</h2>
      <p className="pricing-sub">
        No contracts. Cancel anytime.
      </p>

      <div className="pricing-cards">
        <div className="price-card">
          <h3>Starter</h3>
          <h4>$29 / mo</h4>
          <ul>
            <li>Job management</li>
            <li>Basic invoicing</li>
            <li>Email support</li>
          </ul>
          <button>Get Started</button>
        </div>

        <div className="price-card popular">
          <h3>Professional</h3>
          <h4>$59 / mo</h4>
          <ul>
            <li>Everything in Starter</li>
            <li>Online payments</li>
            <li>Inventory tracking</li>
          </ul>
          <button>Get Started</button>
        </div>

        <div className="price-card">
          <h3>Enterprise</h3>
          <h4>Custom</h4>
          <ul>
            <li>Multiple locations</li>
            <li>Advanced reports</li>
            <li>Priority support</li>
          </ul>
          <button>Contact Sales</button>
        </div>
      </div>
    </section>
  );
}

export default Pricing;
