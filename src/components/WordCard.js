import React from 'react';

export const WordCard = ({ word }) => {
  return (
    <tr>
      <td>{word.id}</td>
      <td>{word.word}</td>
      <td>{word.translate}</td>
    </tr>
  );
};
