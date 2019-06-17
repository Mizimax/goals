import Highcharts from 'highcharts'
import HighchartsReact from 'highcharts-react-official'
import PropTypes from 'prop-types'
import React from 'react'
import styled from 'styled-components'
import COLORS from '../../configs/colors'
import BREAKPOINTS from '../../configs/responsive'

import Summary from './Summary'

const Name = styled.div`
  margin-bottom: 10px;
  font-size: 30px;
  font-weight: bold;
  color: ${COLORS.ORANGE_THEME};
`

const Box = styled.div`
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  background: white;
  display: flex;
  flex-wrap: nowrap;
  padding: 50px;
  flex-direction: column-reverse;
  border-radius: 6px;

  @media (min-width: ${BREAKPOINTS.tablet}px) {
    flex-direction: row;
  }
`

const ChartContainer = styled.div`
  flex: 1;
  @media (min-width: ${BREAKPOINTS.tablet}px) {
    padding-left: 25px;
  }
`

const SummaryContainer = styled.div`
  flex: 0 0 25%;
`

const Course = ({ option, summary }) => {
  // set highchart option with thousands seperate
  Highcharts.setOptions({
    lang: {
      thousandsSep: ',',
    },
  })
  return (
    <div>
      <Name>{option.name}</Name>
      <Box>
        <SummaryContainer>
          <Summary data={summary} />
        </SummaryContainer>
        <ChartContainer>
          <HighchartsReact highcharts={Highcharts} options={option} />
        </ChartContainer>
      </Box>
    </div>
  )
}

Course.propTypes = {
  summary: PropTypes.array,
  option: PropTypes.object,
}

export default Course
