import React, {useState} from 'react';
import {useDispatch} from "react-redux";
import {useNavigate} from "react-router-dom";
import {addArticle} from "../store/slices/article";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import ArticleForm from "../components/ArticleForm";
import RoutesToPages from "../assets/RoutesToPages";

const AddArticle = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const [cover, setCover] = useState('');

    const handleSubmit = fieldsValues => {
        dispatch(addArticle({cover, ...fieldsValues}));
        navigate(RoutesToPages.articles);
    };

    const readURL = file => {
        return new Promise((resolve, reject) => {
            const reader = new FileReader();
            reader.onload = e => resolve(e.target.result);
            reader.onerror = e => reject(e);
            reader.readAsDataURL(file);
        });
    };

    const handleFileSelected = async e => {
        const selectedFile = e.target.files[0];
        let imgPath = await readURL(selectedFile);
        setCover(imgPath);
    };

    return (
        <Container>
            <Row className='d-flex justify-content-center mt-5'>
                <Col xs={9}>
                    <ArticleForm
                        onHandleSubmit={handleSubmit}
                        onHandleFileSelected={handleFileSelected}/>
                </Col>
            </Row>
        </Container>
    );
};

export default AddArticle;