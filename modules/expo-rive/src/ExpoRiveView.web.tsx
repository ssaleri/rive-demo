import * as React from 'react';

import { ExpoRiveViewProps } from './ExpoRive.types';

export default function ExpoRiveView(props: ExpoRiveViewProps) {
  return (
    <div style={props.style as React.CSSProperties}>
      <iframe
        style={{ width: '100%', height: '100%', border: 'none' }}
        src={props.url}
        onLoad={() => props.onLoad({ nativeEvent: { url: props.url } })}
      />
    </div>
  );
}
