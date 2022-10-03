import React, { useState } from 'react';
import { Button, Form } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { createWords } from '../store/actions/wordActions';

export const New = () => {
  const dispatch = useDispatch();
  const [word, setWord] = useState('');
  const [translate, setTranslate] = useState('');

  return (
    <Form className="mx-auto my-2" style={{ width: '80%', textAlign: 'center' }}>
      <Form.Group className="mb-3" controlId="formBasicWord">
        <Form.Label>Word</Form.Label>
        <Form.Control
          type="text"
          placeholder="Enter word"
          onInput={(e) => setWord(e.target.value)}
          value={word}
        />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicTranslate">
        <Form.Label>Translate</Form.Label>
        <Form.Control
          type="text"
          placeholder="Enter translate"
          onInput={(e) => setTranslate(e.target.value)}
          value={translate}
        />
      </Form.Group>
      <Button
        variant="primary"
        onClick={() => {
          dispatch(createWords({ word, translate }));
          setWord('');
          setTranslate('');
        }}
      >
        Submit
      </Button>
    </Form>
  );
};
