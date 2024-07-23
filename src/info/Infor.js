import React from 'react';
import { useState } from 'react'; // For managing collapsible state
import "../App.css";
import Grid from './grid';
import Collapsible from 'react-collapsible';

const Infor = () => {
  const [collapsibles, setCollapsibles] = useState([
    { trigger: "Healthcare Realities", content: "Estimated $455 billion spent on healthcare yearly is lost each year to fraud and corruption. Estimated 45% of global citizens believe the healthcare sector is corrupt or very corrupt." },
    { trigger: "Obesity Statistics", content: "1/3 Adults in the United States are obese. 32.5% of American adults are overweight, obesity is linked to at least 60 chronic diseases. Obesity affects 1/6 children in the United States. Obesity costs Americans an estimated $147 billion a year." },
    { trigger: "Water and Degenerative Disease", content: "Our current water supply is processed and does not hydrate, because the molecules are too big for capillaries. Blood is 83% water, we need access to charged water, or electrically/sunlight charged water. The 3 leading causes of degenerative disease: oxidized stress, dehydration, and acidity." },
  ]);
  const [selectedTrigger, setSelectedTrigger] = useState(null); // Track selected title

  const handleTriggerClick = (trigger) => {
    setSelectedTrigger(trigger);
  };

  return (
    <div className='container'>
      <div className="title-container">
        <h1>Functional Medicine</h1>
        {/* Separate table for collapsible titles */}
        <table>
          <tbody>
            {collapsibles.map((collapsible) => (
              <tr key={collapsible.trigger}>
                <td onClick={() => handleTriggerClick(collapsible.trigger)}>
                  {collapsible.trigger}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        {/* Content based on selected trigger */}
        {selectedTrigger && (
          <table className="collapsibles-table">
            <tbody>
              {collapsibles.find((item) => item.trigger === selectedTrigger)
                .content.split('.') // Assuming content is separated by dots
                .map((paragraph) => (
                  <tr key={paragraph}>
                    <td>{paragraph}</td>
                  </tr>
                ))}
            </tbody>
          </table>
        )}
        <Grid />
      </div>
      <div className="collapsible">
      </div>
    </div>
  );
};

export default Infor;
