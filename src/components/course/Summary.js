import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { toComma } from '../../utils'

const TableData = styled.div`
  display: flex;
  font-size: 24px;
  color: #333;
  padding: 6px 0;
  &:nth-last-child(2) {
    border-bottom: 1px solid #e5e5e5;
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
  color: #636363;
  margin-bottom: 10px;
`

const TableDataSum = styled(TableData)`
  font-weight: bold;
  border: 1px;
  border-bottom: 1px solid #e5e5e5;
  position: relative;
  &:before {
    content: ' ';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: -8px;
    border-bottom: 1px solid #e5e5e5;
  }
`

const Summary = props => {
  const sumSales = props.data.reduce((a, b) => a + b.value, 0)
  return (
    <div>
      <TableHeader>
        <Name>วิชา</Name>
        <Value>ยอดขาย(คอร์ส)</Value>
      </TableHeader>
      {props.data.map(item => (
        <TableData key={item.name}>
          <Name>{item.display}</Name>
          <Value>{toComma(item.value)}</Value>
        </TableData>
      ))}
      <TableDataSum>
        <Name>รวม</Name>
        <Value style={{ color: '#F23535' }}>{toComma(sumSales)}</Value>
      </TableDataSum>
    </div>
  )
}

Summary.propTypes = {
  data: PropTypes.array,
}

export default Summary
