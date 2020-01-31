// @flow
// @jsx glam
import React from 'react';
import glam from 'glam';

import { Div, Img, Video } from '../primitives';
import { type PropsWithStyles } from '../types';
import { className, isVideo } from '../utils';
import { getSource } from './component-helpers';

type Props = PropsWithStyles & {
  data: Object,
  isFullscreen: boolean,
  isModal: boolean,
};

export const viewCSS = () => ({
  lineHeight: 0,
  position: 'relative',
  textAlign: 'center',
});

const View = (props: Props) => {
  const { data, formatters, getStyles, index, isFullscreen, isModal } = props;
  const innerProps = {
    alt: formatters.getAltText({ data, index }),
    src: getSource({ data, isFullscreen }),
  };

  return (
    <Div
      css={getStyles('view', props)}
      className={className('view', { isFullscreen, isModal })}
    >
      {!isVideo(innerProps.src) ? (
        <Img
          {...innerProps}
          className={className('view-image', { isFullscreen, isModal })}
          css={{
            height: 'auto',
            maxHeight: '100vh',
            maxWidth: '100vw',
            userSelect: 'none',
          }}
        />
      ) : (
        <Video
          {...innerProps}
          className={className('view-image', { isFullscreen, isModal })}
          css={{
            height: 'auto',
            width: '100%',
            maxHeight: '100vh',
            maxWidth: '100vw',
            userSelect: 'none',
          }}
          controls
        />
      )}
      
    </Div>
  );
};

export default View;
