import Card from "react-bootstrap/Card";
import LoadableImage from "./LoadableImage";
import React from "react";

const ArticlesList = props => {
    const text = props.singleArticle.text;

    return (
        <Card className="text-start bg-black">
            <Card.Body className='text-start text-light'>
                <Card.Title>{props.singleArticle.title}</Card.Title>
                <hr/>
                <LoadableImage src={props.singleArticle.cover}/>
                <hr/>
                <Card.Title>
                    {text.length >= 250 ? text.substring(0, 250).concat('...') : text}
                </Card.Title>
                <hr/>
                <Card.Title>{props.singleArticle.author}</Card.Title>
                <hr/>
                <Card.Title>{props.singleArticle.category}</Card.Title>
            </Card.Body>
        </Card>
    );
};

export default ArticlesList;