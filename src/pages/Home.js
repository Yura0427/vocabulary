import React, { useEffect } from 'react';
import { Table } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { WordCard } from '../components/WordCard';
import { fetchWords } from '../store/actions/wordActions';

export const Home = () => {
  const { error, loading, data } = useSelector((state) => state.words);

  return (
    <div className="m-2 mx-auto">
      <div className="mx-auto" style={{ width: 150, textAlign: 'center' }}>
        Онлайн словник
      </div>
      {loading && (
        <div className="mx-auto" style={{ width: 150, textAlign: 'center' }}>
          Loading ...
        </div>
      )}
      {error && (
        <div className="mx-auto" style={{ width: 150, textAlign: 'center' }}>
          {error}
        </div>
      )}

      <Table bordered hover>
        <thead>
          <tr>
            <th>Id</th>
            <th>Word</th>
            <th>Translate</th>
          </tr>
        </thead>
        <tbody>{data.length > 0 && data.map((word) => <WordCard key={word.id} word={word} />)}</tbody>
      </Table>
    </div>
  );
};
