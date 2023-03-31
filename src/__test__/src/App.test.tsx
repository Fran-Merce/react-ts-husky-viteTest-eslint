import App from '@/App';
import { render } from '@testing-library/react';
import { describe, it } from 'vitest';

describe('App', () => {
  it('Should render correctly ', () => {
    console.log(import.meta.env.SAY_HELLO as any);
    const component = render(<App />);
    expect(import.meta.env.SAY_HELLO as any).toBeDefined();
    expect(component).toBeTruthy();
  });
});
