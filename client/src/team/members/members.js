import React from 'react';
import Member from './member';
import './styles/members.scss';

function Members(props) {
  const { tab } = props;
  const memberNames = [["Angela", "Arman"], ["Weiqiang"], ["Weiqiang"]]
  const memberObject = {
    0: {
      Angela: {
        name: "Angela Yang",
        description: "Hi I'm Angela"
      },
      Arman: {
        name: "Arman Nagra",
        description: "Hi I'm Arman"
      }
    },
    1: {
      Weiqiang: {
        name: "Weiqiang Zhang",
        description: "Please be patient"
      }
    },
    2: {
      Weiqiang: {
        name: "Weiqiang Zhang",
        description: "I have the big A"
      }
    }
  }
  return (
    <div className="members">
      <div className="members__container">
      {memberNames[tab].map((value, index) => {
        const image = process.env.PUBLIC_URL + `/assets/${value}_${index}_${tab}.png`;
        const memberObj = memberObject[tab][value];
        return (
          <Member image={image} name={memberObj.name} description={memberObj.description} />
        )
      })
      }
      </div>
    </div>
  );
}

export default Members;
