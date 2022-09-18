import React from 'react';
import {CONTACTS} from "../../constants/contacts.constant";

const Contacts = () => {
    return (
        <div className={"Contacts"}>
            <div className={"ContactsTitle ContactsItem"}>
                <h2>Contacts</h2>
            </div>
            <div className={"ContactsAddress ContactsItem"}>
                {
                    CONTACTS.address.map(address => {
                        return <p key={address.id}>{address.address}</p>
                    })
                }
            </div>
            <div className={"ContactsPhoneNumbers ContactsItem"}>
                <ul>
                    {
                        CONTACTS.phoneNumbers.map(number => {
                            return <li key={number.id}>
                                <a href={"tel:" + number.number}>{number.number}</a>
                            </li>
                        })
                    }
                </ul>
            </div>
            <div className={"ContactsPhoneEmail ContactsItem"}>
                {
                    CONTACTS.email.map(email=>{
                        return <a href={"mailto:" + email.email} key={email.id}>{email.email}</a>
                    })
                }
            </div>
        </div>
    );
};

export default Contacts;
