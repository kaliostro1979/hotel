import React from 'react';
import {useParams} from "react-router-dom";
import AccordionContainer from "../../components/UI/accordion/AccordionContainer";

const pages = {
    "privacy-and-cookie": {
        title: "Privacy and cookie",
        path: "privacy-and-cookie",
        content: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Culpa delectus, error illo ipsa provident quibusdam quisquam recusandae rerum voluptas voluptate."
    },
    "kantar-policies": {
        title: "Kantar Policies",
        path: "kantar-policies",
        content: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Culpa delectus, error illo ipsa provident quibusdam quisquam recusandae rerum voluptas voluptate."
    }
}


const Page = ({path}) => {
    const params = useParams()

    return (
        <div>
            <h1>{pages[params.id].title}</h1>
            <p>{pages[params.id].content}</p>
            <AccordionContainer/>
        </div>
    );
};

export default Page;
