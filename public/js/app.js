
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


class EditableTimerList extends React.Component {
  render() {
    return (
      <div id="timers">
        <EditableTimer
          title="Learn React"
          project="the hard way"
          elapsed="890789789"
          runningSince={null}
          editFormOpen={false}
        />
        <EditableTimer
          title="Learn Weibo"
          project="the hard way"
          elapsed="889789"
          runningSince={null}
          editFormOpen={true}
        />
    </div>
    );
  }
}
