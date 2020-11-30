import React, {Component} from 'react';
import isMobile from 'react-device-detect';

import './main.css';

class Main extends Component {
  constructor(props) {
    super(props);

    this.state = {
      grey: '0',
      dash: false,
      busy: false,
      oke: false,
      scav: false,
      van: false
    }
  }

  render() {
    if (!isMobile) {
      return(
        <div className='pageWrapper' grey={this.state.grey}>
          <div className='slides'>
            <div className='one'>
              <div className='chineseHeader'/>
              <div className='englishHeader'/>
              <div className='mePhoto'/>
              <div className='featuredWorkDivider'/>
              <div className='dash' onMouseDown={() => this.setState({grey: '1', dash: true})}/>
              <div className='allWorksDivider'/>
              <div className='allWorks'>
                <h1 className='work' onMouseDown={() => this.setState({grey: '1', busy: true})}>Busy Map</h1>
                <h1 className='work' onMouseDown={() => this.setState({grey: '1', oke: true})}>Oke</h1>
                <h1 className='work' onMouseDown={() => this.setState({grey: '1', scav: true})}>Scav Hunt</h1>
                <h1 className='work' onMouseDown={() => this.setState({grey: '1', van: true})}>Vanstrings</h1>
              </div>
              {this.state.dash ? 
                <div className='dashWrapper slide'>
                  <h1 className='back'>Back</h1>
                  <p>HELLO</p>
                  <p>HELLO</p>
                  <p>HELLO</p>
                  <p>HELLO</p>
                </div> : null}
              {this.state.busy ? <div/> : null}
              {this.state.oke ? <div/> : null}
              {this.state.scav ? <div/> : null}
              {this.state.van ? <div/> : null}
            </div>
          </div>
        </div>
      )
    } else {
      return(
        <div className='pageWrapper'>
          
        </div>
      )
    }
  }
}

export default Main;