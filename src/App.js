import React, {Component} from 'react';
import styled from 'styled-components'
import options from './graphOptions'
import Course from "./components/course/Course";
import apiData from "./mockApi";

class App extends Component {

    constructor(props) {
        super(props);

        this.summary = []
        var self = this;
        apiData['data'].forEach((item, index)=> {
            item.forEach((it,i)=> {
                if(!self.summary[index])
                    self.summary[index] = []
                self.summary[index][i] = {}
                self.summary[index][i]["name"] = it.name
                self.summary[index][i]["display"] = it.display
                self.summary[index][i]["value"] = it.data.reduce((a,b)=>a+b,0);
            })
        })

    }

    render()
    {
        return (
            <MyApp>
                <Header>
                    <div style={{width:'100%'}} align="center">สรุป Goal 2019 Dek-D's School</div>
                </Header>

                <Content>
                    {
                        options.map((item, index) => (
                            <Course option={item} summary={this.summary[index]} />
                        ))
                    }
                </Content>
            </MyApp>
        );
    }
}

const Header = styled.div`
    background-color: #00624B;
    position: relative;
    padding: 50px 0;
    & > div {
        position: relative;
        font-weight: bold;
        font-size: 48px;
        color: #fff;
    }
`

const Content = styled.div`
    max-width: 1200px;
    margin: 0 20px;
    @media (min-width: 1000px) {
        margin: 0 auto;
    }
`

const MyApp = styled.div`
    background-color: #f2f2f2;
    padding-bottom: 50px;
`


export default App;
