import React, { Component } from 'react'
import styled from 'styled-components'
import options from './graphOptions'
import Course from './components/course/Course'
import apiData from './mockApi'

const Header = styled.h1`
  background-color: #00624b;
  padding: 50px 0;
  font-weight: bold;
  font-size: 48px;
  color: #fff;
  margin: 0;
  text-align: center;
`

const Content = styled.div`
  max-width: 1200px;
  margin: 0 auto;
`

const MyApp = styled.div`
  background-color: #f2f2f2;
  padding-bottom: 50px;
`

const CourseContainer = styled.div`
  margin: 50px 0;
`

class App extends Component {
  constructor(props) {
    super(props)
    if (apiData.data && apiData.data.length !== 0) {
      this.summary = apiData.data.map(course =>
        course.map(data => ({ ...data, value: data.data.reduce((a, b) => a + b, 0) }))
      )
    }
  }

  render() {
    return (
      <MyApp>
        <Header>สรุป Goal 2019 Dek-D's School</Header>
        <Content>
          {options.map((item, index) => (
            <CourseContainer key={item.name}>
              <Course option={item} summary={this.summary[index]} />
            </CourseContainer>
          ))}
        </Content>
      </MyApp>
    )
  }
}

export default App
