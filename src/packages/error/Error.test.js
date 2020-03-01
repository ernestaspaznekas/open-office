import React        from 'react';
import { render }   from '@testing-library/react';

import Error         from './Error';


test('renders error', () => {
    const { getByText } = render(<Error />);
    const error = getByText(/Error happend:/i);
    expect(error).toBeInTheDocument();
});