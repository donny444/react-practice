function Form() {
    return (
        <div className="form">
            <form action="" method="">
                <label for="fname">First name:</label>
                <input type="text" id="fname" name="fname"/><br/><br/>
                <label for="lname">Last name:</label>
                <input type="text" id="lname" name="lname"/><br/><br/>
                <input type="submit" value="Submit"/>
            </form>
        </div>
    )
}

export default Form;