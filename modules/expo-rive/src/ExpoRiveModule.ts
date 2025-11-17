import { NativeModule, requireNativeModule } from 'expo';

import { ExpoRiveModuleEvents } from './ExpoRive.types';

declare class ExpoRiveModule extends NativeModule<ExpoRiveModuleEvents> {
  PI: number;
  hello(): string;
  setValueAsync(value: string): Promise<void>;
}

// This call loads the native module object from the JSI.
export default requireNativeModule<ExpoRiveModule>('ExpoRive');
