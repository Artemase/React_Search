import React, { Component, useState } from 'react'
import styled from 'styled-components'
import pencil from '../icons/pencil.svg'
import watchers from '../icons/watchers.svg'
import star from '../icons/star.svg'


class Card extends Component {
  render() {
    return (
      <Container>
        <CardBody>
          <a style={{'display':'block','textDecoration':"none",'color':'inherit'}} href={this.props.link}>
          <Title>{this.props.title}</Title>
          <Wrapper>
            <Avatar src={this.props.image} />
            <Author>{this.props.owner}</Author>
          </Wrapper>
          </a>
          <Wrapper>
            <Icon src={star}>
            </Icon>
            <Counter>
              {this.props.stars}
            </Counter>
            <Icon src={watchers}>
            </Icon>
            <Counter>
              {this.props.watchers}
            </Counter>
          </Wrapper>
          <Wrapper style={{'margin-bottom':'13px'}}>
            <Comment  
            type="text"
            placeholder={'Комментарий к проекту'}/>
            <Button>
              <Pencil src={pencil}>
              </Pencil>
            </Button>
          </Wrapper>
        </CardBody>
      </Container>
    )
  }
}


/* Стили контейнера */
const Container = styled.div`
  flex: 1;
  flex-basis: 30%;
  margin: 25px;
  border: solid 1px #A2A3A4;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  border-radius: 5px;
  align-items: left;
`
/*--------------------*/
/* Стили Карточки */
const CardBody = styled.div`
  padding-left: 16px;
  text-decoration: none;
`
/*--------------------*/
/* Стили Названия */
const Title = styled.h1`
  font-size: 20px;
  margin-top: 7px;
`
/*--------------------*/
/* Стили Обертки */
const Wrapper = styled.div`
  display: flex;
  flex-basis: fit-content;
  flex:1;
  align-items:center;
  margin-right: 15px;
`
/*--------------------*/
/*Стили автора*/
const Avatar = styled.img`
  display: inline-block;
  width:  50px;
  height: 50px;
  border-radius: 50%;
  margin: 11px 26px 18px 0px;
`

const Author = styled.h1`
  display: inline-block;
  text-align: center;
  font-size: 18px;
`
/*--------------------*/

/* Стили счетчиков */
const Icon = styled.img`
  margin-right: 18px;
  height: 25px;
  width: 25px;
`

const Counter = styled.h1`
 margin-right: 70px


`
/*--------------------*/
/* Стили комментариев */
const Comment = styled.input`
  height: 54px;
  flex: 90%;
  padding: 10px 20px;
  border: solid 1px #A2A3A4;
  &:focus {
    border-color: #A2A3A4;
    transition: 0.5s;
  }
  &::placeholder{
    color: #000000
  }
`

const Pencil = styled.img`
  display: block;
  height: 100%;
  width: 100%;
  cursor: pointer;
  padding: 6px 11px 8px 12px;
`

const Button = styled.button`
  padding: 0;
  border: solid 1px #00A3FF;
  color: white;
  outline: none;
  cursor: pointer;
  background: #00A3FF 100%;
`
/*--------------------*/
export default Card
