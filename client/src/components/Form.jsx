import { useState } from "react"

function Form(props){
    const[name, setName] = useState("")
    const[URL,  setURL] = useState("")

    const handleNameChange = (event) => {
        console.log(event.target.value)
        setName(event.target.value)
    }

    const handleURLChange = (event) => {
        console.log(event.target.value)
        setURL(event.target.value)
    }

    return(
        <form onSubmit={(event)=>{
            event.preventDefault()
            console.log(name, URL)
            // Send this to the table! Therefore, I need to send to the LinkContainer
            props.submitNewLink({name, URL})

        }}>
            <label for="linkName">Link Name:</label>
            <input type="text" id="linkName" name="linkName" onChange={handleNameChange}></input>
            <br />
            <br />
            <label for="URL">Link URL:</label>
            <input type="text" id="linkURL" name="linkURL" onChange={handleURLChange}></input>
            <br />
            <br />
            <input type="submit" value="Submit"></input>    
        </form>
    )

}

export default Form