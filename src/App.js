import React from 'react';
import "./App.css";
import Records from "./records.json";
function App() {
  return (
    <div className='App'>{
        Records && Records.map(record=>{
            return(
                <div className="boder">
                  <big><strong><u>{record.title}</u></strong></big><br/>
                    RollNumber:{record.id}<br/>
                    Name:{record.name}<br/>
                    Branch:{record.branch}<br/>
                </div>
            )
        })
    }
   </div>
  );
}
export default  App;
