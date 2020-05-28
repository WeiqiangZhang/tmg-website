import React from 'react';
import Member from './member';
import { Grid } from '@material-ui/core';
import './styles/members.scss';

function Members(props) {
  const { tab } = props;
  const memberNames = [["Angela", "Arman"], ["Amelia", "Isha", "Elya", "George"], ["Dewan"]]
  const memberObject = {
    0: {
      Angela: {
        name: "Angela Yang"
      },
      Arman: {
        name: "Arman Nagra"
      }
    },
    1: {
      Amelia: {
        name: "Amelia Helpard"
      },
      Isha: {
        name: "Isha Patel"
      },
      Elya: {
        name: "Elya Diaffar"
      },
      George: {
        name: "George Li"
      }
    },
    // 2: {
    //   Weiqiang: {
    //     name: "Weiqiang Zhang"
    //   }
    // },
    2: {
      Dewan: {
        name: "Dewan"
      }
    }
  }
  return (
    <div className="members">
      <div className="members__container">
        <Grid container spacing={3}>
          {memberNames[tab].map((value, index) => {
            const image = process.env.PUBLIC_URL + `/assets/${value}_${index}_${tab}.png`;
            const memberObj = memberObject[tab][value];
            return (
              <Grid item md={6} xs={12} key={index}>
                <Member image={image} name={memberObj.name} />
              </Grid>
            )
          })
          }
        </Grid>
      </div>
    </div>
  );
}

export default Members;
