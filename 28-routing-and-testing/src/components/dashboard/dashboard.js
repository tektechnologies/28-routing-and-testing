import React, {Component} from 'react';
import uuid from 'uuid';
import NoteForm from '../landing/note-create-form/note-create-form';


export default class Dashboard extends Component{
    constructor(props){
        super(props);

        this.state = {
            notes: [],
            error: null,
            };
           // this.renderFeildNotes = this.renderFeildNotes.bind(this);
        }
    

        renderFeildNotes(){
            console.log('did it work');
            return(
                <ul>
                    {this.state.notes.map(note =>(
                        <li key={note._id}>
                        {note.title} : {note.note}
                        <button></button>
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
                this.setState(prevState => ({
                    notes: [note, ...prevState.notes],
                    error: null,
                }));
            }
        
        removeNote = (note) => {
            console.log('removing note', note);
            this.state.notes.filter


            }
        }




        render(){
            return(
                <React.Fragment>
                <div>
                    <h1>Dashboard Component</h1>
                    {/* {this.state.error && <div className='error'>
                    {this.state.error}</div>} */}
                    
                    <NoteForm handleAddNote={this.handleAddNote} />
                    {this.renderFeildNotes()}
                </div>
                </React.Fragment>
            )
        }
    }//close class default
