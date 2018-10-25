
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

class EditableTimer extends React.Component {
  render() {
    if (this.props.editFormOpen)
      return (
        <TimerForm
          title={this.props.title}
          project={this.props.project}
        />
      );
    } else {
      return (
        <Timer
          title={this.props.title}
          project={this.props.project}
          elapsed={this.props.elapsed}
          runningSince={this.props.runningSince}
        />
      );
    }
  }
}

class TimerForm extends React.Component {
  render() {
    const submitText = this.props.title ? 'Update' : 'Create';
    return (
      <div className="ui centered Card">
        <div className="content">
          <div className="ui form">
            <div className="field" >
              <label>Title</label>
              <input type="text" defaultValue={this.props.title} />
              </div>
              <div className='field'>
                <label>Project</label>
                <input type="text" defaultValue={this.props.project} />
              </div>
              <div className="two bottom attached buttons">
                <button className="ui basic blue button">
                  {submitText}
                </button>
                <button className="ui basic red button">
                  Cancel
                </button>
              </div>
            </div>
          </div>
        </div>
    );
  }
}

class ToggleableTimerForm extends React.Component {
  render() {
    if (this.props.isOpen) {
      return (
        <TimerForm />
      );
    } else {
      <div className="ui basic content center aligned segment">
        <button className="ui basic button icon">
          <i className="plus icon" />
          </button>
      </div>
    }
  }
}


class Timer extends React.Component {
  render() {
    const elapsedString = helpers.renderElapsedString(this.props.elapsed);
    return (
      <div className="ui centered card">
        <div className="content">
          <div className="header">
            {this.props.title}
          </div>
          <div className='meta'>
            {this.props.project}
          </div>
          <div className="centered aligned description">
            <h2>{elapsedString}</h2>
          </div>
          <div className="extra content" >
            <span className="right floated edit icon">
              <i className="edit icon" />
            </span>
          </div>
        </div>
        <div className="ui bottom attached blue basic button" >
          Start
        </div>
    );
  }
}
