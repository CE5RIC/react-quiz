import './App.css';
import React, { useEffect, useState} from "react";




// Fetching the API in the app function and displaying a question on the page
function App() {
    const [question, setQuestion] = useState("");
    useEffect(() => {
        const url = "https://opentdb.com/api.php?amount=20";
        const fetchData = async () => {
            try {
                const response = await fetch(url);
                const json = await response.json();
                console.log(json.results[0].question);
                setQuestion(json.results[0].question);
            } catch (error) {
                console.log("error", error);
            }
        };

        fetchData();

    }, []);

    return <div>
        <p>{question}</p>
    </div>;

}

export default App;
