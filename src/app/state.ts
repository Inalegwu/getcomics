import { observable } from '@legendapp/state';

const globalState$ = observable<GlobalState>({
  colorMode: 'light',
});

export default globalState$;
