import React from 'react';
import {useFormik} from 'formik';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import * as yup from 'yup';

const ArticleForm = props => {

    const formik = useFormik({
        initialValues: {
            title: '',
            text: '',
            author: '',
            category: ''
        },

        validationSchema: yup.object({
            title: yup.string().trim()/*.required('Required to fill')*/,
            text: yup.string().trim()/*.required('Required to fill')*/,
            author: yup.string().trim()/*.required('Required to fill')*/,
            category: yup.string().trim()/*.required('Required to fill')*/
        }),

        onSubmit: (values, {resetForm}) => {
            props.onHandleSubmit(values);
            resetForm();
        },
    });

    return (
        <Form onSubmit={formik.handleSubmit}
              className='rounded-3 text-bg-dark p-3'>
            <Form.Group className="mb-3"
                        controlId="exampleForm.ControlInput1">
                <Form.Label>Type a title</Form.Label>
                <Form.Control
                    type="text"
                    placeholder="Title ..."
                    autoFocus
                    {...formik.getFieldProps('title')}/>
                {formik.touched.title && formik.errors.title ? (
                    <div>{formik.errors.title}</div>) : null}
            </Form.Group>
            <Form.Group className="mb-3"
                        controlId="exampleForm.ControlInput2">
                <Form.Label>Choose an article cover</Form.Label>
                <Form.Control
                    type="file"
                    onInput={props.onHandleFileSelected}
                />
            </Form.Group>
            <Form.Group className="mb-3"
                        controlId="exampleForm.ControlTextarea1">
                <Form.Label>Type a text</Form.Label>
                <Form.Control
                    as="textarea"
                    rows={3}
                    placeholder='Text ...'
                    {...formik.getFieldProps('text')}/>
                {formik.touched.text && formik.errors.text ? (
                    <div>{formik.errors.text}</div>) : null}
            </Form.Group>
            <Form.Group className="mb-3"
                        controlId="exampleForm.ControlInput3">
                <Form.Label>Type an author</Form.Label>
                <Form.Control
                    type="text"
                    placeholder="Author ..."
                    {...formik.getFieldProps('author')}/>
                {formik.touched.author && formik.errors.author ? (
                    <div>{formik.errors.author}</div>) : null}
            </Form.Group>
            <Form.Group className="mb-3"
                        controlId="exampleForm.ControlInput4">
                <Form.Label>Type a category</Form.Label>
                <Form.Control
                    type="text"
                    placeholder="Category ..."
                    {...formik.getFieldProps('category')}/>
                {formik.touched.category && formik.errors.category ? (
                    <div>{formik.errors.category}</div>) : null}
            </Form.Group>
            <div className='d-flex justify-content-between'>
                <Button variant="outline-success"
                        type='submit'>
                    Add
                </Button>
            </div>
        </Form>
    );
};

export default ArticleForm;