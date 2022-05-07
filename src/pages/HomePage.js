import React from 'react';
import AddHolders from "../components/addHolders/addHolders";

function HomePage(props) {
    const [showButton, setShowButton] = React.useState(false);
    return (
        <div>
            {showButton && (
                <AddHolders setShowButton={setShowButton}/>
            )}
            <button onClick={()=>setShowButton(true)}>Add Holders</button>
        </div>
    );
}

export default HomePage;
