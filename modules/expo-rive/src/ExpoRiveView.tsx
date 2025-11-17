import { requireNativeView } from 'expo';
import * as React from 'react';

import { ExpoRiveViewProps } from './ExpoRive.types';

const NativeView: React.ComponentType<ExpoRiveViewProps> =
  requireNativeView('ExpoRive');

export default function ExpoRiveView(props: ExpoRiveViewProps) {
  return <NativeView {...props} />;
}
