import { useEffect } from 'react';
import { Button } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { startTests } from '../store/actions/testActions';
import { TestItem } from './TestItem';

export const TestContainer = () => {
  const { data, step } = useSelector((state) => state.test);
  const { data: words } = useSelector((state) => state.words);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const getRandomItems = (numb, arr) => {
    if (numb >= arr.length) return arr;
    let item = [];
    let arr1 = arr.map((el) => el);
    if (arr.length > 0) {
      for (let i = 0; i < numb; i++) {
        item.push(arr1.splice(Math.ceil(Math.random() * arr1.length - 1), 1)[0]);
      }
    }
    return item;
  };

  const items = getRandomItems(10, words).map((el) => {
    return {
      el,
      el1: getRandomItems(
        3,
        words.filter((el1) => el1.id !== el.id)
      ),
    };
  });

  const start = () => {
    dispatch(startTests(items));
  };

  useEffect(() => {
    if (step === 11) {
      navigate('/end');
    }
  }, [step, navigate]);

  return (
    <div className="m-5 mx-auto" style={{ textAlign: 'center' }}>
      {step === 0 && (
        <div>
          <Button variant="primary" onClick={start}>
            Start
          </Button>
        </div>
      )}
      {step !== 0 && step < 11 && (
        <div>
          <TestItem item={data[step - 1]} />
        </div>
      )}
    </div>
  );
};
