import "./Features.css";

export default function Features() {
  return (
    <section className="features1">

      <h2 className="features-title">
        Run your whole shop—without the busywork
      </h2>

      <p className="features-subtitle">
        Everything you need to manage estimates, work orders, invoicing,
        scheduling, and more in one unified auto repair shop software.
      </p>

      <div className="features-cards">

        <div className="feature-card">
          <div className="icon blue">📋</div>
          <h3>Estimates & Work Orders</h3>
          <p>
            Create professional estimates in seconds, convert to work orders
            with one click, and track approval status at a glance.
          </p>
        </div>

        <div className="feature-card">
          <div className="icon green">💳</div>
          <h3>Invoicing & Payments</h3>
          <p>
            Invoice from the bay—or your office—and collect payment online
            via link, card, or Apple/Google Pay.
          </p>
        </div>

      </div>
      
      

    </section>
    
  );
  
}
