import React from 'react';
export class Selector extends React.Component {
  
  listItems = this.props.levels.map((number) => 
    <option value={number} key={number}>h{number}</option>
  );

  onChangeLevel = (evt) => {
    this.props.onChangeLevelHandler(evt.target.value);
  };

  render() {
    return (
        <select value={this.props.level} onChange={this.onChangeLevel}>
            {this.listItems}
        </select>
    );
  }
};
