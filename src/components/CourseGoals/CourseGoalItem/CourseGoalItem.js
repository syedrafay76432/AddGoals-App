import React from 'react';

import './CourseGoalItem.css';
import Button from '../../UI/Button/Button';

const CourseGoalItem = props => {
  // const [deleteText, setDeleteText] = useState('');

  const deleteHandler = () => {
    // setDeleteText('(Deleted!)');
    props.onDelete(props.id);
  };

  return (
    <li className="goal-item" >
      {props.children}
      <Button onClick={deleteHandler}>Delete</Button>
    </li>
  );
};

export default CourseGoalItem;
