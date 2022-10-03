import React from 'react';
import { Button, ButtonGroup, Card } from 'react-bootstrap';
import { useDispatch } from 'react-redux';
import { falseAnswer, next, trueAnswer } from '../store/actions/testActions';

export const TestItem = ({ item }) => {
  const dispatch = useDispatch();
  let translate = [item.el.translate];
  item.el1.map((el) => translate.push(el.translate));

  return (
    <>
      <Card className="text-center">
        <Card.Body>
          <Card.Title>{item.el.word}</Card.Title>
          <ButtonGroup size="lg" className="mb-2">
            <Button
              variant="primary"
              onClick={(e) => {
                dispatch(next());
                e.target.innerHTML === item.el.translate ? dispatch(trueAnswer()) : dispatch(falseAnswer());
              }}
            >
              {translate.sort()[0]}
            </Button>
            <Button
              variant="primary"
              onClick={(e) => {
                dispatch(next());
                e.target.innerHTML === item.el.translate ? dispatch(trueAnswer()) : dispatch(falseAnswer());
              }}
            >
              {translate.sort()[1]}
            </Button>
            <Button
              variant="primary"
              onClick={(e) => {
                dispatch(next());
                e.target.innerHTML === item.el.translate ? dispatch(trueAnswer()) : dispatch(falseAnswer());
              }}
            >
              {translate.sort()[2]}
            </Button>
            <Button
              variant="primary"
              onClick={(e) => {
                dispatch(next());
                e.target.innerHTML === item.el.translate ? dispatch(trueAnswer()) : dispatch(falseAnswer());
              }}
            >
              {translate.sort()[3]}
            </Button>
          </ButtonGroup>
        </Card.Body>
      </Card>
    </>
  );
};
