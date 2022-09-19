import React from 'react';
import BackgroundImage from "../../assets/images/contacts-bgr.png"
import { CONTACTS } from "../../constants/contacts.constant";


const ContactsInformation = () => {
  return (
    <div className={"ContactsInformation"} style={{backgroundImage: `url(${BackgroundImage})`}}>
     <div className={"ContactsInformationWrapper"}>
       <div className={"ContactsInformationPhones ContactsInformationItem"}>
         <p>Phone:</p>
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
       <div className={"ContactsInformationEmail ContactsInformationItem"}>
         {
           CONTACTS.email.map(email=>{
             return <a href={"mailto:" + email.email} key={email.id}>{email.email}</a>
           })
         }
       </div>
       <div className={"ContactsInformationAddress ContactsInformationItem"}>
         {
           CONTACTS.address.map(address => {
             return <p key={address.id}>{address.address}</p>
           })
         }
       </div>
     </div>
    </div>
  );
};

export default ContactsInformation;