import React from 'react';
import NoteItem from './note-item';


export default class NoteList extends React.Componenet{
  constructor(props){
    super(props);
  }
  render(){
      const {notes} = this.props;
      return(
        <div>
            {notes.map(note =>(
<NoteItem handelUpdate = {this.props.handleUpdate}
            ))}
        </div>
      );
  }

}//close notelist class