import React, { Component } from 'react';

const defaultState = {
  title: '',
  note: '',
};

export default class NoteForm extends Component{
  constructor(props){
    super(props);
    this.state = props.note || defaultState;
  }
  componentDidUpdate(){
    console.log('__STATE__', this.state);
  }
    handleSubmit = (event) => {
      event.preventDefault();
      console.log('saving', this.state);
      this.props.handleAddNote(this.state);
      //reset form
      if(!this.props.note){
        this.setState(defaultState);
      }
    }
    handleChange = (event) => {
      const { name, value } = event.target;
      this.setState({
        [name]:value,
      });
    }
    render(){
      return(
        <form onSubmit={this.handleSubmit}>
          <input 
            type='text'
            name='title'
            placeholder="title"
            value={this.state.title}
            onChange={this.handleChange}
          />
          <input 
            type='text'
            name='note'
            rows="5"
            cols="50"
            placeholder="note"
            value={this.state.note}
            onChange={this.handleChange}
          />
          <button type="submit">Add Notes</button>
          {/* <button onClick={this.addEditFee}>Editors Fee(1000)</button> */}

        </form>
      );
    }
    // addEditFee = (event) => {
    //     event.preventDefault();
    //     this.props.addEditFee({
    //         title: 'Edited Notes',
    //         price: 1000,
    //     });
    // }
    



}//close class