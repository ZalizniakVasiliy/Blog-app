import Card from "react-bootstrap/Card";

const CategoriesList = props => {
    return (
        <Card className="text-start bg-dark">
            <Card.Body className='text-start text-light'>
                <Card.Title>{props.singleArticle.category}</Card.Title>
            </Card.Body>
        </Card>
    );
};

export default CategoriesList;