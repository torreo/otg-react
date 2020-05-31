import React from 'react';
import { Header } from '../Header/Header';
import { Selector } from '../Selector/Selector';

export function TextWidget(props) {
  return (
    <div>
        <div className="preview-box">
            <Header level={props.level}>{props.text}</Header>
        </div>

        <div className="form">
        <div className="input-box">
            <input type="text" value={props.text} onChange={this.onChangeText} />
        </div>

        <div className="toolbar">
            <button onClick={this.onDecreaseFontClick} disabled={props.level === 1}>-</button>
            <Selector level={this.state.level} levels={this.levels} onChangeLevelHandler={this.onChangeLevel} />
            <button onClick={this.onIncreaseFontClick} disabled={props.level === 6}>+</button>
        </div>
        </div>
    </div>
  )
}
