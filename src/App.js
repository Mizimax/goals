import React from 'react'
import _ from 'lodash'
import styled from 'styled-components'
import colors from './configs/colors'
import options from './graphOptions'
import Course from './components/course/Course'
import goalData from './mockApi'

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
  background-color: ${colors.GRAY_LIGHT_3};
  padding-bottom: 50px;
`

const CourseContainer = styled.div`
  margin: 50px 0;
`

const App = () => {
  let summary
  if (!_.isEmpty(goalData)) {
    summary = goalData.map(course =>
      course.data.map(sales => ({ ...sales, value: sales.data.reduce((a, b) => a + b, 0) }))
    )
  }
  return (
    <MyApp>
      <Header>สรุป Goal 2019 Dek-D's School</Header>
      <Content>
        {summary &&
          options.map((item, index) => (
            <CourseContainer key={item.name}>
              <Course option={item} summary={summary[index]} />
            </CourseContainer>
          ))}
      </Content>
    </MyApp>
  )
}

export default App
