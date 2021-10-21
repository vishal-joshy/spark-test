import React from 'react'
import { useSelector } from 'react-redux'


function SuccessPage() {
    const account = useSelector(state => state.account)
    const personal = useSelector(state => state.personal)
    console.log('account',account);
    console.log('personal',personal);
    return (
        <div >
            <div>
            Personal Details:
            <div>FirstName:{personal.firstName}</div>
            <div>LastName:{personal.lastName}</div>
            <div>Address:{personal.address}</div>
            <div>Zipcode:{personal.zipcode}</div>
            <div>Pincode:{personal.pincode}</div>
            </div>
            <div>
            Bank Details:
            <div>Bank Name:{account.bankName}</div>
            <div>Account Number:{account.accountNumber}</div>
            <div>Branch:{account.branch}</div>
            <div>IFSC code:{account.ifscCode}</div>
            </div>
        </div>
    )
}

export default SuccessPage
