import React, {Component} from 'react';
import Highcharts from 'highcharts'
import HighchartsReact from 'highcharts-react-official'
import './App.css';
import options from './graphOptions'

class App extends Component {

    render()
    {
        return (
            <div>
                {
                    options.map(item => (
                        <HighchartsReact
                            highcharts={Highcharts}
                            options={item}
                        />
                    ))
                }

            </div>
        );
    }
}


export default App;
