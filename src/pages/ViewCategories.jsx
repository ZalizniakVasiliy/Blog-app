import React from 'react';
import {useSelector} from "react-redux";
import {useNavigate} from "react-router-dom";
import RoutesToPages from "../assets/RoutesToPages";
import {ListGroup} from "react-bootstrap";
import CategoriesList from '../components/CategoriesList';
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";

const ViewCategories = () => {
    const allArticles = useSelector(({articlesData}) => articlesData);
    const navigate = useNavigate();

    const goToMainPage = () => {
        navigate(RoutesToPages.homePage);
    };

    const renderArticlesList = () => {
        return (
            <ListGroup className='mt-2 fs-6 bg-success'>
                {allArticles.map((article, index) => (
                    <ListGroup.Item variant='success'
                                    key={index}>
                        <CategoriesList singleArticle={article}/>
                    </ListGroup.Item>
                ))}
            </ListGroup>
        )
    }

    return (
        <Container>
            <Row className='d-flex justify-content-center'>
                <Col xs={9} className='mt-5 p-2 bg-dark rounded-3'>
                    <h1 className='text-center mb-2 text-warning'>Categories List</h1>
                    <div className="d-flex justify-content-center">
                        <Button
                            variant="outline-warning"
                            onClick={goToMainPage}>Go Back
                        </Button>
                    </div>
                    {allArticles.length > 0 ? renderArticlesList()
                        :
                        <p className='mt-2 text-center text-danger fs-4'>Categories have not been created yet</p>}
                </Col>
            </Row>
        </Container>
    );
};

export default ViewCategories;