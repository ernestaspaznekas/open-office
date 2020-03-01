import React        from 'react';
import { render }   from '@testing-library/react';

import Loader         from './Loader';


test('renders loader', () => {
    const { getByText } = render(<Loader />);
    const loading = getByText(/Loading.../i);
    expect(loading).toBeInTheDocument();
});