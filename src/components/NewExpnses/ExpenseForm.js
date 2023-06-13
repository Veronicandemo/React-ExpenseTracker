import React, {useState} from "react";
import './ExpenseForm.css'
const ExpenseForm =(props)=>{
    // We are storing strings all the time  and not a number here for the amount, for example,
    // because by default, whenever you listen to the change event for an input, if you read the value of that input element,
    // it'll always be a string.  Even if it stores a number
    // it will be a number as a string and the same for the date.
    // So we always get a string here.
    // That's why we also initialize all States with a string.
    // for option 1
   const [enteredTitle, setEnteredTitle] = useState('')
   const [enteredAmount, setEnteredAmount] = useState('')
   const [enteredDate, setEnteredDate] = useState('')
// for option2
// const [userInput, setUserInput] = ({
//     enteredTitle: '',
//     enteredAmount: '',
//     enteredDate:'',
// })

    const titleChangeHandler = (event) =>{
        // option1
        setEnteredTitle(event.target.value)
        //        option2
        // setUserInput({ //Instead of this do the below
        //     ...userInput,
        //     enteredTitle: event.target.value
        // })
        //        option3
        // setUserInput((prevousState) => {
        //     return {  
        //         ...prevousState,
        //         enteredTitle: event.target.value
        //     }

        // })
    }
    const amountChangeHandler = (event) =>{
        // Option1
        setEnteredAmount(event.target.value)
        // Option2
        // setUserInput({
        //     ...userInput, 
        //     enteredAmount: event.target.value
        // })
        // Option3
    //     setUserInput((prevousState) => {
    //         return {  
    //             ...prevousState,
    //             enteredAmount: event.target.value
    //         }
    // })
}
    const dateChangeHandler = (event) =>{
        // Option1
        setEnteredDate(event.target.value)
        // Option2
        // setUserInput({
        //     ...userInput,
        //     enteredDate: event.target.value
        // })
        // Option3
    //     setUserInput((prevousState) => {
    //         return {  
    //             ...prevousState,
    //             enteredDate: event.target.value
    //         }
    // })
}
const submitHandler =(event) => {
    event.preventDefault()
    const expenseData = {
        title: enteredTitle,
        amount : enteredAmount,
        date: new Date(enteredDate)
    }
props.onSaveExpenseDate()
setEnteredTitle('')
setEnteredAmount('')
setEnteredDate('')


}
    return (
        <form onSubmit={submitHandler}>
            <div className="new-expense__controls">
                <div className="new-expense__control">
                    <label >Title</label>
                    <input type="text"
                    value={enteredTitle}
                     onChange={titleChangeHandler}/>
                    </div>
                    <div className="new-expense__control">
                        <label>Amount</label>
                        <input 
                        type="number" 
                        min="0.01" step="0.01"
                        value={enteredAmount}
                        onChange={amountChangeHandler}/>
                        </div>
                        <div className="new-expense__control">
                            <label>Date</label>
                            <input 
                            type="date"
                             min='2019-01-01'
                              max='2022-12-31'
                              value={enteredDate}
                              onChange={dateChangeHandler}/>
                            </div>
                            </div>
                            <div className="new-expense__actions">
                                <button type="submit">Add Expense</button>
                            </div>
        </form>
    )
}
export default ExpenseForm