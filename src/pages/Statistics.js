import React from 'react';
import { Table } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { createStatistics, fetchStatistics } from '../store/actions/statisticsActions';

export const Statistics = () => {
  const { error, loading, data } = useSelector((state) => state.statistics);
  const dispatch = useDispatch();
  const [rate, setRate] = React.useState();

  React.useEffect(() => {
    dispatch(fetchStatistics());
  }, [dispatch]);

  React.useEffect(() => {
    let rate = 0;
    data.map((el) => {
      rate += el.result;
    });
    setRate(data.length ? rate / data.length : 0);
  }, [data]);

  console.log(data.length);

  if (!error && !loading)
    return (
      <div>
        {data.length && (
          <Table bordered hover>
            <thead>
              <tr>
                <th>Id</th>
                <th>result</th>
                <th>date</th>
              </tr>
            </thead>
            <tbody>
              {data.length > 0 &&
                data.map((word) => {
                  return (
                    <tr>
                      <td>{word.id}</td>
                      <td>{word.result}%</td>
                      <td>{word.date}</td>
                    </tr>
                  );
                })}
            </tbody>
          </Table>
        )}
        <div>середній відсоток : {data.length ? rate + '%' : 'ще немає результатів '}</div>
      </div>
    );
};
