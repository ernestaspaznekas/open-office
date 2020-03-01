import React        from 'react';
import { render }   from '@testing-library/react';

import weatherMock  from '../mocks/weather'

import Details      from './Details';


test('renders weather details', () => {
    const { getByText } = render(<Details {...weatherMock} />);
    const linkElement = getByText(/Feels like: 10/i);
    expect(linkElement).toBeInTheDocument();
});