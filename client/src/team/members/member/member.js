import React from 'react';
import './styles/member.scss';

function Member(props) {
  const { image, name } = props;
  return (
    <div className="member">
      <img className="member__image" src={image} alt={`${name}`} />
    </div>
  );
}

export default Member;
