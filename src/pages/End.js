import React from 'react';
import { Button, Card } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { createStatistics } from '../store/actions/statisticsActions';
import { reset } from '../store/actions/testActions';

export const End = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { trueAnswer, falseAnswer } = useSelector((state) => state.test);

  return (
    <div className="m-5 mx-auto" style={{ textAlign: 'center' }}>
      <Card className="text-center">
        <Card.Body>
          <Card.Title>Ваш результат: {(trueAnswer / (trueAnswer + falseAnswer)) * 100}% правильних відповідей</Card.Title>
          <Button
            variant="primary"
            onClick={() => {
              navigate('/test');
              dispatch(reset());
              dispatch(createStatistics({ result: (trueAnswer / (trueAnswer + falseAnswer)) * 100, date: new Date().toLocaleString() }));
            }}
          >
            Restart
          </Button>
        </Card.Body>
      </Card>
    </div>
  );
};
