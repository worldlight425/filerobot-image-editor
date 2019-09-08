import React, { Component } from 'react';
import { ToolWrapper, ToolIcon, ToolLabel } from '../../styledComponents/index';


export default class extends Component {
  render() {
    const { name, activeTab, updateState } = this.props;
    const filteredName = name === 'rotate' ? 'orientation' : name;

    return (
      <ToolWrapper
        active={activeTab === name}
        onClick={() => updateState({ activeTab: name })}
      >
        <ToolIcon name={name}/>
        <ToolLabel>{filteredName}</ToolLabel>
      </ToolWrapper>
    )
  }
}