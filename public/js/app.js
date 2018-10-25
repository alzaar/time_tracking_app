
import React from "react";

class TimerDashboard extends React.Component {
  render() {
    return (
      <div className="ui three colomn centered grid">
        <div className="colomn">
          <EditableTimerList  />
          <ToggleableTimerForm
            isOpen={true}
            />
        </div>
      </div>
    );
  }
}
