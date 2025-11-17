import { registerWebModule, NativeModule } from 'expo';

import { ChangeEventPayload } from './ExpoRive.types';

type ExpoRiveModuleEvents = {
  onChange: (params: ChangeEventPayload) => void;
}

class ExpoRiveModule extends NativeModule<ExpoRiveModuleEvents> {
  PI = Math.PI;
  async setValueAsync(value: string): Promise<void> {
    this.emit('onChange', { value });
  }
  hello() {
    return 'Hello world! 👋';
  }
};

export default registerWebModule(ExpoRiveModule, 'ExpoRiveModule');
