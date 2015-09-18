import React, { findDOMNode, Component, PropTypes } from 'react';

class TextInput extends Component {
  //todo write validator function
  //include required and regex of acceptedFormat

  getValue(){
  	const val = findDOMNode(this.refs.inputVal).value.trim();
  	
  	return val;
  }
  render(){
    return (
      <div>
        <label className={this.props.class} for={this.props.class}>{this.props.label}</label><br/>
        <input id={this.props.name} type={this.props.type} className="w100p" ref="inputVal" />
      </div>
    )
  }
}
TextInput.propTypes = {
	name: React.PropTypes.string,
	initVal: React.PropTypes.string,
	labelClass: React.PropTypes.string,
	inputClass: React.PropTypes.string,
	type:React.PropTypes.string, //[email, password, text, ...],
	required: React.PropTypes.bool,
	label: React.PropTypes.string,
	acceptedFormat:React.PropTypes.string, //email address, min char, probably use regex
	maxChar: React.PropTypes.number,
	error: React.PropTypes.bool,
	errorMessage: React.PropTypes.string
}

export default TextInput;