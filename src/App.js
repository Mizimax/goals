import _ from 'lodash'
import React from 'react'
import styled from 'styled-components'
import Course from './components/course/Course'
import COLORS from './configs/colors'
import options from './configs/graphOptions'
import goalData from './configs/data'

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
  background-color: ${COLORS.GRAY_LIGHT_3};
  padding-bottom: 50px;
  box-sizing: border-box;
  min-height: 100vh;
`

const CourseContainer = styled.div`
  margin: 50px 0;
`

const Error = styled.div`
  padding: 150px 0;
  text-align: center;
  font-size: 24px;
`

const App = () => {
  // sum sales in each month and use to summary data
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
        {summary ? (
          options.map((item, index) => (
            <CourseContainer key={item.name}>
              <Course option={item} summary={summary[index]} />
            </CourseContainer>
          ))
        ) : (
          <Error>ไม่พบข้อมูล</Error>
        )}
      </Content>
    </MyApp>
  )
}

export default App
