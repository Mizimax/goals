import PropTypes from 'prop-types'
import React from 'react'
import styled from 'styled-components'
import COLORS from '../../configs/colors'
import { toComma } from '../../utils'

const TableData = styled.div`
  display: flex;
  font-size: 24px;
  color: ${COLORS.GRAY_DARK_3};
  padding: 6px 0;

  //add bottom line to previous last child
  &:nth-last-child(2) {
    border-bottom: 1px solid ${COLORS.GRAY_LIGHT_2};
  }
`

const Name = styled.div`
  flex: 1;
  padding-right: 10px;
`

const Value = styled.div`
  flex: 0 0 40%;
`

const TableHeader = styled(TableData)`
  padding: 0;
  font-size: 14px;
  font-family: Tahoma, 'sans-serif';
  color: ${COLORS.GRAY_DARK_2};
  margin-bottom: 10px;
`

const TableDataSum = styled(TableData)`
  font-weight: bold;
  border: 1px;
  border-bottom: 1px solid ${COLORS.GRAY_LIGHT_2};
  position: relative;

  //add second line to last child
  &:before {
    content: ' ';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: -8px;
    border-bottom: 1px solid ${COLORS.GRAY_LIGHT_2};
  }
`

const Summary = ({ data }) => {
  // sum sales of each subjects
  const sumSales = data.reduce((a, b) => a + b.value, 0)
  return (
    <div>
      <TableHeader>
        <Name>วิชา</Name>
        <Value>ยอดขาย(คอร์ส)</Value>
      </TableHeader>
      {data.map(item => (
        <TableData key={item.name}>
          <Name>{item.name}</Name>
          <Value>{toComma(item.value)}</Value>
        </TableData>
      ))}
      <TableDataSum>
        <Name>รวม</Name>
        <Value style={{ color: COLORS.RED }}>{toComma(sumSales)}</Value>
      </TableDataSum>
    </div>
  )
}

Summary.propTypes = {
  data: PropTypes.array,
}

export default Summary
