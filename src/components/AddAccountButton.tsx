import React from 'react';

interface Props {
  activeCount: number;
}

const AddAccountButton: React.FC<Props> = ({ activeCount }) => {
  const handleClick = () => {
    if (activeCount >= 5) {
      alert('Можно иметь не более 5 активных счетов');
    } else {
      alert('Открылось модальное окно создания счёта...');
    }
  };

    return <button onClick={handleClick}>Добавить счёт</button>
};

export default AddAccountButton;
