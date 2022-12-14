import React, { Component } from 'react'
import axios from 'axios'
import styled from 'styled-components'

import InputSubmit from '../components/InputSubmit'
import CardList from '../components/CardList'

class Search extends Component {
  state = {
    repos: []
  }

  componentDidMount() {
    this.searchRepos('miniclass')
  }

  searchRepos(keyword) {
    this.setState({ repos: [] })
    axios
      .get(`https://api.github.com/search/repositories?q=${keyword}`)
      .then(result => this.setState({ repos: result.data.items }))
  }

  render() {
    return (
      <Container>
        <InputSubmit
          placeholder="Начните вводить текст для поиска(не менее 3 символов)"
          buttonText=""
          onSubmit={value => this.searchRepos(value)}
        />
        <CardList items={this.state.repos} />
      </Container>
    )
  }
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`

export default Search
