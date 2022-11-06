import React, {useEffect, useState} from 'react';
import {useSelector} from "react-redux";
import {useNavigate} from "react-router-dom";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import ArticlesList from "../components/ArticlesList";
import {ListGroup} from "react-bootstrap";
import Button from "react-bootstrap/Button";
import RoutesToPages from "../assets/RoutesToPages";

const GetArticles = () => {
    const [articlesQuantity, setArticlesQuantity] = useState(10);
    const [isFetching, setIsFetching] = useState(true);
    const [currentArticlesAmount, setCurrentArticlesAmount] = useState(0);

    const allArticles = useSelector(({articlesData}) => articlesData);
    const articlesToScroll = allArticles.slice(0, currentArticlesAmount);

    const navigate = useNavigate();

    const goToMainPage = () => {
        navigate(RoutesToPages.homePage);
    };

    useEffect(() => {
        if (isFetching) {
            setCurrentArticlesAmount(prevState => currentArticlesAmount + 2);
        }

        setIsFetching(false);
    }, [isFetching]);

    useEffect(() => {
        document.addEventListener('scroll', handleScroll);
        return () => {
            document.removeEventListener('scroll', handleScroll);
        };
    }, []);

    const renderScrollArticlesList = articlesAmount => {
        return (
            <ListGroup className='mt-2 fs-6 bg-success'>
                {articlesToScroll.slice(0, articlesAmount).map((article, index) => (
                    <ListGroup.Item variant='success'
                                    key={index}>
                        <ArticlesList singleArticle={article}/>
                    </ListGroup.Item>
                ))}
            </ListGroup>
        )
    };

    const handleScroll = e => {
        if (e.target.documentElement.scrollHeight -
            (e.target.documentElement.scrollTop + window.innerHeight) < 100) {
            setIsFetching(true);
        }
    };

    const changeQuantityOfArticles = ({target}) => setArticlesQuantity(target.value);

    return (
        <Container>
            <Row className='d-flex justify-content-center'>
                <Col xs={9} className='d-flex justify-content-center mt-5 p-2 bg-dark rounded-3'>
                    <span className='text-info me-2'>
                        Quantity of articles: | {articlesQuantity || 'all'} | :
                    </span>
                    <input type='number'
                           onInput={changeQuantityOfArticles}
                           value={articlesQuantity}/>
                </Col>
                <Col xs={9} className='mt-1 p-2 bg-black rounded-3'>
                    <h1 className='text-center mb-2 text-success'>Articles List</h1>
                    <Button
                        variant="outline-success ms-3 mb-2"
                        onClick={goToMainPage}>Go Back
                    </Button>
                    <div onScroll={handleScroll}>
                        {renderScrollArticlesList(articlesQuantity || allArticles.length)}
                    </div>
                </Col>
            </Row>
        </Container>
    );
};

export default GetArticles;