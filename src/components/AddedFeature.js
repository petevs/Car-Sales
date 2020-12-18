import React from 'react';
import {removeFeature} from '../actions/featureActions'
import {connect} from 'react-redux'

const AddedFeature = props => {

  return (
    <li>
      {/* Add an onClick to run a function to remove a feature */}
      <button 
        className="button" 
        onClick={() => props.removeFeature(props.feature.id)}
        >
          X
          </button>
      {props.feature.name}
    </li>
  );
};

const mapStateToProps = (state) => {
  return {
    car: state.featuresReducer.car
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    removeFeature: (id) => dispatch(removeFeature(id))
  }
}


export default connect(mapStateToProps, mapDispatchToProps)(AddedFeature);
