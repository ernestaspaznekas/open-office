import React        from 'react';
import { render }   from '@testing-library/react';

import Main         from './Main';


test('renders main', () => {
    const { getByText } = render(<Main />);
    const main = getByText(/Loading.../i);
    expect(main).toBeInTheDocument();
});