import { describe, it } from 'vitest';
import { render, screen } from '@testing-library/react'
import { Info } from '../pages/Info';
import { MemoryRouter } from 'react-router-dom';

console.log(typeof Info);

describe('Info', () => {
    it('renders the App component', () => {
        render(<MemoryRouter>
            <Info />
        </MemoryRouter>)

        screen.debug(); // prints out the jsx in the App component unto the command line
    })
})