import React from "react";
import Highcharts from "highcharts";
import HighchartsReact from "highcharts-react-official";
import PropTypes from 'prop-types';
import styled from 'styled-components';

import Summary from "./Summary";


const Course = (props) => (

        <Container>
            <Name>{props.option.name}</Name>
            <Box>
                <Summary data={props.summary}></Summary>
                <ChartContainer>
                    <HighchartsReact
                        highcharts={Highcharts}
                        options={props.option}
                    />
                </ChartContainer>
            </Box>
        </Container>

)

Course.propTypes = {
    summary: PropTypes.array,
    option: PropTypes.object
}

const Name = styled.div`
    margin-bottom: 10px;
    font-size: 30px;
    font-weight: bold;
    color: #F37A01;
`

const Box = styled.div`
    -webkit-box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
    background: white;
    display: flex;
    flex-wrap: wrap;
    flex-grow: 1;
    padding: 50px;
    flex-direction: column-reverse;
    @media (min-width: 768px) {
        flex-direction: row;
    }
    & > HighchartsReact {
        width:75%;
    }
    
`

const Container = styled.div`
    margin: 50px 0;
`

const ChartContainer = styled.div`
    width: 75%;
    @media (max-width: 768px) {
         width: 100%;
    }
`

export default Course;

