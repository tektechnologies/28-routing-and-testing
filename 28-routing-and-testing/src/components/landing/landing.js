//the home page of what site does. 
import React, { Component } from 'react';
import {BrowserRouter, Route, Link} from 'react-router-dom';
import '../../App.css';

//import Dashboard from './components/dasboard/dashboard';

export default class Landing extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className="App">
        
          <main>
            <div>
              <p>Field Notes: Memo Books, Notebooks, Journals & Planners
                  https://fieldnotesbrand.com/
                  Field Notes offers smartly-designed, vintage-inspired pocket notebooks, notepads, journals, calendars, planners, and writing accoutrements.
                  Missing: draper ‎| ‎Must include: ‎draper
                  ‎Films · ‎Our Story · ‎Retail Locations · ‎Customization
              </p>
            </div>
          </main>
       
        </div>
      </BrowserRouter>
    );
  }
}


