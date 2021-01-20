import React, { useCallback, useState, useEffect } from 'react';
import Member from './member';
import { Grid } from '@material-ui/core';
import './styles/members.scss';
import a from './assets/0_0.png';
import b from './assets/1_0.png';
import c from './assets/0_1.png';
import d from './assets/1_1.png';
import e from './assets/2_1.png';
import f from './assets/3_1.png';
import g from './assets/0_2.png';
import h from './assets/1_2.png';
import i from './assets/2_2.png';
import j from './assets/3_2.png';
import k from './assets/4_2.png';
import l from './assets/5_2.png';
import m from './assets/6_2.png';
import n from './assets/7_2.png';
import o from './assets/8_2.png';
import p from './assets/0_3.png';

function Members(props) {
  const { tab } = props;
  const [loaded, setLoaded] = useState(false);
  const handleImageLoad = useCallback(() => {
    setLoaded(true);
  }, [loaded]);
  useEffect(() => {
    setLoaded(false);
  }, [props.tab]);
  const memberNames = [[<img src={a} className={`members__image${!loaded ? '--hidden' : ''}`} onLoad={handleImageLoad} alt="Angela Yang" />, <img src={b} className={`members__image${!loaded ? '--hidden' : ''}`} onLoad={handleImageLoad} alt="Arman Nagra" />], 
  [<img src={c} className={`members__image${!loaded ? '--hidden' : ''}`} onLoad={handleImageLoad} alt="Amelia Helpard" />, <img src={d} className={`members__image${!loaded ? '--hidden' : ''}`} onLoad={handleImageLoad} alt="Isha Patel" />, <img src={e} className={`members__image${!loaded ? '--hidden' : ''}`} onLoad={handleImageLoad} alt="Elya Diaffar" />, <img src={f} className={`members__image${!loaded ? '--hidden' : ''}`} onLoad={handleImageLoad} alt="George Li" />], 
  [<img src={g} className={`members__image${!loaded ? '--hidden' : ''}`} onLoad={handleImageLoad} alt="Jerry Hung" />, <img src={h} className={`members__image${!loaded ? '--hidden' : ''}`} onLoad={handleImageLoad} alt="Kristen Koo" />, <img src={i} className={`members__image${!loaded ? '--hidden' : ''}`} onLoad={handleImageLoad} alt="Agam Gujral" />, <img src={j} className={`members__image${!loaded ? '--hidden' : ''}`} onLoad={handleImageLoad} alt="Tushar Mallisetty" />, <img src={k} className={`members__image${!loaded ? '--hidden' : ''}`} onLoad={handleImageLoad} alt="Deborah Krishanthan" />, <img src={l} className={`members__image${!loaded ? '--hidden' : ''}`} onLoad={handleImageLoad} alt="Faran Ali" />, <img src={m} className={`members__image${!loaded ? '--hidden' : ''}`} onLoad={handleImageLoad} alt="Nadia Ardekani" />, <img src={n} className={`members__image${!loaded ? '--hidden' : ''}`} onLoad={handleImageLoad} alt="Neeraka Balamurali" />, <img src={o} className={`members__image${!loaded ? '--hidden' : ''}`} onLoad={handleImageLoad} alt="Gloria Liu" />], 
  [<img src={p} className={`members__image${!loaded ? '--hidden' : ''}`} onLoad={handleImageLoad} alt="Dewan" />]];
  return (
    <div className="members">
      <div className="members__container">
        <Grid container spacing={3}>
          {memberNames[tab].map((value, index) => {
            const image = value;
            return (
              <Grid item md={tab === 2 ? 4 : 6} xs={12} key={index}>
                <Member image={image} loaded={loaded} />
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
