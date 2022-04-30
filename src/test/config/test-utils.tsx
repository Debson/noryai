// jest-dom adds custom jest matchers for asserting on DOM nodes.
// allows you to do things like:
// expect(element).toHaveTextContent(/react/i)
// learn more: https://github.com/testing-library/jest-dom
import '@testing-library/jest-dom';
import '@testing-library/jest-dom/extend-expect';
import {
  queries,
  Queries,
  render,
  RenderOptions,
} from '@testing-library/react';
import React from 'react';
import { Provider } from 'react-redux';
import { store } from '../../app/store';

const customRender = <
  Q extends Queries & typeof queries,
  Container extends Element | DocumentFragment = HTMLElement
>(
  ui: React.ReactElement,
  options?: RenderOptions<Q, Container>
) => {
  const DefaultProviders: React.FC<{ children?: React.ReactNode }> = ({
    children,
  }) => {
    return <Provider store={store}>{children}</Provider>;
  };

  return render(ui, {
    wrapper: DefaultProviders,
    queries,
    ...options,
  });
};

export { customRender as render };
