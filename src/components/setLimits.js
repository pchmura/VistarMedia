import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { startNewGame } from '../redux/actions/actions';

export class SetLimits extends Component {

  render() {
    let lowerInput;
    let upperInput;
    const handleSubmit = (e) => {
            e.preventDefault();
  
            let lower = parseInt(lowerInput.value, 10) || 0;
            let higher = parseInt(upperInput.value, 10) || 0;
  
            if (lower > higher) {
              window.alert('the lower number needs to be lower than the higher number');
              return;
            }
            if (lower === higher) {
              window.alert('where is the fun in that?');
              return;
            }
            this.props.startNewGame(lower, higher);
    }
    
    return(
        <form onSubmit = {handleSubmit}>
            <div>
                <label>Lower bound:</label>
                    <input 
                        data-test-id='lowerInput'
                        type="number"
                        placeholder="Lower bound"
                        defaultValue={ this.props.gameParams.lowerLimit }
                        ref={node => lowerInput = node}
                        />
            </div>
            <div>
                <label>Upper bound:</label>
                <input 
                    data-test-id='upperLimit'
                    type="number"
                    placeholder="Upper bound"
                    defaultValue={ this.props.gameParams.upperLimit }
                    ref={node => upperInput = node}
                    />
                </div>
                <div>
                    <button type="submit">Reset</button>
            </div>
        </form>
        )
    }

}

const mapStateToProps = state => {
    return {
        gameParams: state.gameParams
    }
}

const mapDispatchToProps = dispatch => {
    return bindActionCreators({ startNewGame }, dispatch)
}

const SetLimitsStore = connect(mapStateToProps, mapDispatchToProps)(SetLimits)

export default SetLimitsStore;