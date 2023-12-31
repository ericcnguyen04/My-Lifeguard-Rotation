import { render } from "@testing-library/react";


export default function Whiteboard({receivedData}) {

    // define a number of stands
    const stand = receivedData && receivedData.stands

    // define a number of guards
    const guard = receivedData && receivedData.guards

    // create div based on the number of guards
    const renderDivs = () => {
        if (stand) {
          const divs = [];
          for (let i = 0; i < stand; i++) {
            divs.push(<div key={i}>Div {i + 1}</div>);
          }
          return divs;
        }
        return null;
      };

    // assign the guards a stand

    // create a timer to cue rotation

    return (
        <div className="whiteboard">
            <h1>{stand}</h1>
            {guard}
            {renderDivs}
        </div>
    )
}