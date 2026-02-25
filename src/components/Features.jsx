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

       <div className="features-reminders">

        <div className="feature-reminde">
          <div className="icon yowllo">📋</div>
          <h3>Scheduling & Reminders</h3>
          <p>
            Fill your calendar and keep it full.
             Drag-and-drop appointments, assign bays/techs, and send automated SMS/email 
             confirmations and reminders. Enable waitlist and quick rebook.
              No-shows drop when customers get clear reminders and easy links to reschedule.
          </p>
        </div>

        <div className="feature-reminde">
          <div className="icon black">💳</div>
          <h3>Digital Vehicle Inspections (DVI) </h3>
          <p>
           Show, don't tell.
            Capture photos and videos, tag severity,
             and add technician notes customers can understand.
             Approvals happen faster when drivers see exactly what you see—right
             from their phone. Link recommended work to estimates with a tap.
          </p>
        </div>

      </div>
      
    </section>
    
  );
  
}
