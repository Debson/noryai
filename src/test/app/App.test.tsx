import { fireEvent, screen, waitFor } from '@testing-library/react';
import MockAdapter from 'axios-mock-adapter';
import React from 'react';
import { baseApi } from '../../app/api/common/axios.settings';
import { SCREEN_DATA_ENDPOINT } from '../../app/api/screen/screen.api';
import App from '../../app/app';
import { render } from '../config/test-utils';
import { screenApiMockResponse } from './app.fixtures';

describe('[App integration tests]', () => {
  let baseApiMock: MockAdapter;

  beforeEach(() => {
    baseApiMock = new MockAdapter(baseApi);

    baseApiMock.onGet(SCREEN_DATA_ENDPOINT).reply(200, screenApiMockResponse);
  });

  afterEach(() => {
    baseApiMock.restore();
  });

  test('When app renders, it should initially display `Home` screen', async () => {
    render(<App />);

    await waitFor(() => expect(screen.getByText('Home')).toBeInTheDocument());
  });

  test('It should display correct number of nav bar items', async () => {
    render(<App />);

    await waitFor(() =>
      /** Header + Sales + Labour + Settings */
      expect(screen.getAllByTestId('nav-bar-item').length).toEqual(4)
    );
  });

  test('Nav Bar navigation should behave correctly', async () => {
    render(<App />);

    const navBarItemEls = await screen.findAllByTestId('nav-bar-item');

    /** Click `Sales` nav bar item */
    fireEvent.click(navBarItemEls[1]);
    await waitFor(() => expect(screen.getByText('Sales')).toBeInTheDocument());

    /** Click `Labour` nav bar item */
    fireEvent.click(navBarItemEls[2]);
    await waitFor(() => expect(screen.getByText('Labour')).toBeInTheDocument());

    /** Click `Settings` nav bar item */
    fireEvent.click(navBarItemEls[3]);
    await waitFor(() =>
      expect(screen.getByText('Settings')).toBeInTheDocument()
    );

    /** Click `Home` nav bar item  */
    fireEvent.click(navBarItemEls[0]);
    await waitFor(() => expect(screen.getByText('Home')).toBeInTheDocument());
  });

  test('Ensure that API works correctly and fetched image is displayed on the screen', async () => {
    render(<App />);

    await waitFor(() =>
      expect(screen.getByTestId('dynamic-screen-image')).toHaveAttribute(
        'src',
        screenApiMockResponse.message
      )
    );
  });
});
