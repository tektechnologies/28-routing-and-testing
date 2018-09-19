import React, {Component} from 'react';
import uuid from 'uuid';
import NoteForm from '../note-create-form';


export default class Dashboard extends Component{
    constructor(props){
        super(props);

        this.state = {
            notes: [{_id: uuid(), title:'Flight Notes', amount: 1},],
            error: null,
            };
        }
    

        renderFlightNotes(){
            return(
                <ul>
                    {this.state.notes.map(note =>(
                        <li key={note._id}>
                        {note.title} : ${note.amount}
                        </li>
                     ))}
                </ul>
            );
        }
        handleAddNote = (note) => {
            console.log('saving note', note);

            if(!note.title){
                this.setState({error: 'title error'});
                return;
            }
                this.setState(prevState => ({
                    notes: [note, ...prevState.note],
                    error: null,
                }));
            }
        
        render(){
            return(
                <div>
                    <h1>Dashboard Component</h1>
                    {this.state.error && <div className='error'>
                    {this.state.error}</div>}

                    <NoteForm handleAddNote={this.handleAddNote} />
                    {this.renderFlightNotes()}
                </div>
            )
        }
    }//close class default
