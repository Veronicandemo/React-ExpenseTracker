//component that is dealing with rendering expense itme data
import React, { useState } from 'react';
import ExpenseDate from './ExpenseData';
import './ExpenseItems.css';
import Card from '../UI/Card';
const ExpenseItem = (props) =>{
  const [title, setTitle] = useState(props.title) 
  console.log('Expense evaluatde by react');
  //A react hook and returns a function that we can call to assign a new value (an array, 
  // first value is value itself and an updating function)
  const clickHandler = () => {
    setTitle('Updated')
    console.log(title)

  }
  return (
    <Card className='expense-item'>
      <ExpenseDate date = {props.date} />
      <div className='expense-item__description'>
     <h2>{title} </h2> 
      <div  className='expense-item__price'>${props.amount}</div>
        </div>
        <button onClick={clickHandler}>Change title</button>
    </Card>
  );
}
export default ExpenseItem;
