import React, { Component } from 'react'
import styled from 'styled-components'
import magnifier from '../icons/magnifier.svg'

export default class InputSubmit extends Component {
  state = {
    value: ''
  }

  changeValue(value) {
    this.setState({ value })
  }

  submitValue() {
    this.setState({ value: '' })
    this.props.onSubmit(this.state.value)
  }

  render() {
    return (
      <Header>
        <Input
          type="text"
          placeholder={this.props.placeholder}
          value={this.state.value}
          onChange={event => this.changeValue(event.target.value)}
        />

        <Button onClick={() => this.submitValue()}>
          {this.props.buttonText}
          <Magnifier src={magnifier}>
          </Magnifier>
        </Button>
      </Header>
    )
  }
}

const Header = styled.header`
  width: 100%;
  display: flex;
  aliogn-items: center;
  justify-content: center;
  background: #DDDDDD;
`

const Input = styled.input`
  padding: 10px 20px;
  border: solid 1px #A2A3A4;
  margin: 32px 0px 47px 25px;
  outline: none;
  flex:90%;
  color: #000000;
  &:focus {
    border-color: #A2A3A4;
    transition: 0.5s;
  }
  &::placeholder{
    color: #000000
  }
`

const Button = styled.button`
  padding: 0;
  border: solid 1px #00A3FF;
  color: white;
  outline: none;
  cursor: pointer;
  margin: 32px 39px 47px 0;
  background: #00A3FF 100%;
`

const Magnifier = styled.img`
  display: block;
  height: 100%;
  width: 100%;
  cursor: pointer;
  padding: 14px 12px 13px 11px;
`
