import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import SvgIcon from '@material-ui/core/SvgIcon';
import Grid from '@material-ui/core/Grid';
import Fab from '@material-ui/core/Fab';
import styles from '../breadcrumb.module.css';

const MyButton = styled(Fab)`
  &&& {
    :active {
      transform: translateY(4px);
    }
  }
`;

const returnStatus = (selection, id) => {
  if (selection > id) {
    return 'M20.285 2l-11.285 11.567-5.286-5.011-3.714 3.716 9 8.728 15-15.285z';
  } else if (id === 0) {
    return 'M14.601 21.5c0 1.38-1.116 2.5-2.499 2.5-1.378 0-2.499-1.12-2.499-2.5s1.121-2.5 2.499-2.5c1.383 0 2.499 1.119 2.499 2.5zm-2.42-21.5c-4.029 0-7.06 2.693-7.06 8h3.955c0-2.304.906-4.189 3.024-4.189 1.247 0 2.57.828 2.684 2.411.123 1.666-.767 2.511-1.892 3.582-2.924 2.78-2.816 4.049-2.816 7.196h3.943c0-1.452-.157-2.508 1.838-4.659 1.331-1.436 2.986-3.222 3.021-5.943.047-3.963-2.751-6.398-6.697-6.398z';
  } else if (id === 1) {
    return 'M4 22v-20h16v11.543c0 4.107-6 2.457-6 2.457s1.518 6-2.638 6h-7.362zm18-7.614v-14.386h-20v24h10.189c3.163 0 9.811-7.223 9.811-9.614zm-5-1.386h-10v-1h10v1zm0-4h-10v1h10v-1zm0-3h-10v1h10v-1z';
  } else if (id === 2) {
    return 'M12 0c-4.198 0-8 3.403-8 7.602 0 4.198 3.469 9.21 8 16.398 4.531-7.188 8-12.2 8-16.398 0-4.199-3.801-7.602-8-7.602zm0 11c-1.657 0-3-1.343-3-3s1.343-3 3-3 3 1.343 3 3-1.343 3-3 3z';
  } else if (id === 3) {
    return 'M19 16.166c0-4.289-4.465-5.483-7.887-7.091-2.079-1.079-1.816-3.658 1.162-3.832 1.652-.1 3.351.39 4.886.929l.724-3.295c-1.814-.551-3.437-.803-4.885-.841v-2.036h-2v2.134c-3.89.535-5.968 2.975-5.968 5.7 0 4.876 5.693 5.62 7.556 6.487 2.54 1.136 2.07 3.5-.229 4.021-1.993.451-4.538-.337-6.45-1.079l-.909 3.288c1.787.923 3.931 1.417 6 1.453v1.996h2v-2.105c3.313-.464 6.005-2.293 6-5.729z';
  } else if (id === 4) {
    return 'M10 13h-4v-1h4v1zm2.318-4.288l3.301 3.299-4.369.989 1.068-4.288zm11.682-5.062l-7.268 7.353-3.401-3.402 7.267-7.352 3.402 3.401zm-6 8.916v.977c0 4.107-6 2.457-6 2.457s1.518 6-2.638 6h-7.362v-20h14.056l1.977-2h-18.033v24h10.189c3.163 0 9.811-7.223 9.811-9.614v-3.843l-2 2.023z';
  }
  return 'M1.729,9.212h14.656l-4.184-4.184c-0.307-0.306-0.307-0.801,0-1.107c0.305-0.306,0.801-0.306,1.106,0 l5.481,5.482c0.018,0.014,0.037,0.019,0.053,0.034c0.181,0.181,0.242,0.425,0.209,0.66c-0.004,0.038-0.012,0.071-0.021,0.109 c-0.028,0.098-0.075,0.188-0.143,0.271c-0.021,0.026-0.021,0.061-0.045,0.085c-0.015,0.016-0.034,0.02-0.051,0.033l-5.483,5.483 c-0.306,0.307-0.802,0.307-1.106,0c-0.307-0.305-0.307-0.801,0-1.105l4.184-4.185H1.729c-0.436,0-0.788-0.353-0.788-0.788 S1.293,9.212,1.729,9.212z';
};
const returnIcon = (current, selection, id) => {
  if (current === id) {
    return styles.currentIcon;
  } else if (selection > id) {
    return styles.finishedIcon;
  }
  return styles.unfinishedIcon;
};
const returnSvg = (current, selection, id) => {
  if (current === id) {
    return styles.currentSvg;
  } else if (selection > id) {
    return styles.finishedSvg;
  }
  return styles.unfinishedSvg;
};
const returnRightBar = (selection, id) => {
  if (selection > id) {
    return styles.riiiiiiightBarFinished;
  }
  return styles.riiiiiiightBarUnfinished;
};
const returnLeftBar = (selection, id) => {
  if (selection > id) {
    return styles.leeeeeeftBarFinished;
  }
  return styles.leeeeeeeftBarUnfinished;
};
const returnLabel = (current, id) => {
  if (current === id) {
    return styles.currentLabel;
  }
  return styles.label;
};
export const Breadcrumb = props => (
  <Link to={props.link} className={styles.link}>
    <Grid container className={styles.column}>
      <MyButton className={returnIcon(props.current, props.selection, props.value)}>
        <SvgIcon className={returnSvg(props.current, props.selection, props.value)}>
          <path d={returnStatus(props.selection, props.value)} />
        </SvgIcon>
      </MyButton>
      {(() => {
        switch (props.value) {
          case 0:
            return <div className={returnRightBar(props.selection, props.value)} />;
          case 4:
            return <div className={returnLeftBar(props.selection, props.value - 1)} />;
          default:
            return (
              <div>
                <div className={returnLeftBar(props.selection, props.value - 1)} />
                <div className={returnRightBar(props.selection, props.value)} />
              </div>
            );
        }
      })()}

      <h2 className={returnLabel(props.current, props.value)}>{props.name}</h2>
    </Grid>
  </Link>
);
Breadcrumb.propTypes = {
  current: PropTypes.number,
  value: PropTypes.number,
  selection: PropTypes.number,
  link: PropTypes.string,
  name: PropTypes.string,
};

Breadcrumb.defaultProps = {
  current: 0,
  selection: 0,
  value: PropTypes.number,
  link: PropTypes.string,
  name: PropTypes.string,
};

export default Breadcrumb;
