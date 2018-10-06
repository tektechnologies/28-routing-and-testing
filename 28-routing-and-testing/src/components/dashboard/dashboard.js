import React, {Component} from 'react';
import uuid from 'uuid';
import NoteForm from '../../components/note-create-form/note-create-form';


export default class Dashboard extends React.Component{
  constructor(props){
    super(props);

    this.state = {
      notes: [{
        _id: uuid(), 
        title: 'This is a Title.',
        content: 'Notes go Here',
      }],
      error: null,
    };
    // this.renderFieldNotes = this.renderFieldNotes.bind(this);
  }
    

  renderFieldNotes(){
    console.log('did it work');
    return(
      <ul>
        {this.state.notes.map(note =>(
          <li key={note._id}>
            {note.title} : {note.content}
          </li>
        ))}
      </ul>
    );
  }
        //check
        handleAddNote = (note) => {
          console.log('saving note', note);

          if(!note.title){
            this.setState({error: 'title error'});
            return;
          }
          note._id = uuid();
          this.setState(prevState => ({
            notes: [note, ...prevState.notes],
            error: null,
          }));
        }
        
        // removeNote = (note) => {
        //     console.log('removing note', note);
        //     this.state.notes.filter


        //     }
        // }




        render(){
          return(
            <React.Fragment>
          
              <h1>Dashboard Component</h1>
                               
              <NoteForm handleAddNote={this.handleAddNote} />
             
              { this.renderFieldNotes() }
           
            </React.Fragment>
          );
        }
}//close class default
