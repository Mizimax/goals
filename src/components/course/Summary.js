import React from "react";
import PropTypes from 'prop-types'
import styled from 'styled-components'


const Summary = (props) => (
        <SummaryContainer>
            <TableHeader>
                <div>วิชา</div>
                <div>ยอดขาย(คอร์ส)</div>
            </TableHeader>

            {
                props.data.map(item => (
                    <TableData>
                        <div>{item.display}</div>
                        <div>{item.value}</div>
                    </TableData>

                ))
            }

            <TableDataSum>
                <div >รวม</div>
                <div style={{color: '#F23535'}}>{props.data.reduce((a, b) => a + b.value, 0)}</div>
            </TableDataSum>

        </SummaryContainer>
)

Summary.propTypes = {
    data: PropTypes.array
}

const TableData = styled.div`
    display: flex;
    font-size: 24px;
    color: #333;
    padding: 6px 0;
    & > div:first-child {
        flex: 0 0 60%;
    }
    & > div:last-child {
        flex: 0 0 40%;
    }
    &:nth-last-child(2) {
        border-bottom: 1px solid #E5E5E5;
    }
`

const TableHeader = styled(TableData)`
    padding: 0;
    font-size:13px;
    font-family: Tahoma;
    color: #636363;
    margin-bottom: 10px;
`

const TableDataSum = styled(TableData)`
    font-weight: bold;
    border: 1px 
    border-bottom: 1px solid #E5E5E5;
    position: relative;
    &:before {
      content: " ";
      position: absolute;
      top: 0;
      left: 0;
      right: 0;
      bottom: -8px;
      border-bottom: 1px solid #E5E5E5;
    }
`

const SummaryContainer = styled.div`
    min-width: calc(25% - 25px);
    margin-right: 25px;
    @media (max-width: 768px) {
        margin-right: 0;
        margin-top: 25px;
    }
`

export default Summary;

