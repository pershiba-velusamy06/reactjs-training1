import React, { useState } from 'react';

import './newExpenseform.css';
import moment from 'moment';

export const NewExpenseForm = ({ expenseList, setexpenseList }) => {

    const [formData, setformData] = useState({
        title: "",
        amount: "",
        DateVal: {
            month: "",
            year: "",
            Date: ""
        },
        date:"",
        isError: false,
        errorMessage: ""
    })

    const storeDate = (e) => {

        e.preventDefault()
        if (formData.title === "" && formData.amount === "" && formData.DateVal.month === "") {

            setformData({ ...formData, isError: true, errorMessage: "Please fill all necessary fields" })
            return
        } else if (formData.amount === "" && formData.DateVal.month === "") {
            setformData({ ...formData, isError: true, errorMessage: "Please fill amount and date" })
            return
        } else if (formData.title === "" && formData.amount === "") {
            setformData({ ...formData, isError: true, errorMessage: "Please fill all necessary fields" })
            return
        } else if (formData.title === "" && formData.DateVal.month === "") {
            setformData({ ...formData, isError: true, errorMessage: "Please fill title and date" })
            return
        } else if (formData.title === "") {
            setformData({ ...formData, isError: true, errorMessage: "Please fill title" })
            return
        } else if (formData.amount === "") {
            setformData({ ...formData, isError: true, errorMessage: "Please fill Amount" })
            return
        } else if (formData.DateVal.month === "") {
            setformData({ ...formData, isError: true, errorMessage: "Please fill date" })
            return
        }



        let expenditure = {
            expensesDate: {
                month: formData.DateVal.month,
                year: formData.DateVal.year,
                Date: formData.DateVal.Date
            },
            expenseTitle: formData.title,
            Price: formData.amount,
            id:Math.floor( Math.random()*999 ) + 100
        }
        setexpenseList((preVal) => [...preVal, expenditure])
        setformData({
            title: "",
            amount: "",
            DateVal: {
                month: "",
                year: "",
                Date: ""
            },
            isError: false,
            errorMessage: "",
            date:''
        })
    }

    const setDatevalue = (type, e) => {
        if (type === 'date') {
            console.log(e, "date")
            let format = moment(e.target.value).format('x')
            console.log(moment(parseInt(format)).format('MMM'))
            setformData({
                ...formData, isError: false,
                errorMessage: "", DateVal: {
                    month: moment(parseInt(format)).format('MMM'),
                    year: moment(parseInt(format)).format('yyyy'),
                    Date: moment(parseInt(format)).format('DD')
                },
                date:e.target.value
            })
        } else if (type === 'title') {
            setformData({
                ...formData, isError: false,
                errorMessage: "", title: e.target.value
            })
        } else {
            setformData({
                ...formData, isError: false,
                errorMessage: "", amount: e.target.value
            })
        }

    }

    return (


        <form>
            <div className='new-expense__controls'>

                <div className='new-expense__control'>
                    <label>Title</label>
                    <input type='text' value={formData.title} onChange={(e) => setDatevalue("title", e)} />
                </div>
                <div className='new-expense__control'>
                    <label>Amount</label>
                    <input type='number' min='0.01' step='0.01' value={formData.amount} onChange={(e) => setDatevalue("amount", e)} />
                </div>
                <div className='new-expense__control'>
                    <label>Date</label>
                    <input type='date' value={formData.date} onChange={(e) => setDatevalue("date", e)} />
                </div>
            </div>
            {formData.isError && <h1>{formData.errorMessage}</h1>}
            <div className='new-expense__actions'>
                <button type='submit' onClick={(e) => storeDate(e)} >Add Expense</button>
            </div>
        </form>
    );
};

