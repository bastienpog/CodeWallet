import { describe, it, beforeAll, vi } from 'vitest';
import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import { CodeForm } from '../pages/Form';

beforeAll(() => {
    (global as any).window.SnippetAPI = {
        readSnippet: vi.fn().mockResolvedValue([]),
    };
});

describe('App', () => {
    it('renders the App component', () => {
        render(
            <MemoryRouter>
                <CodeForm />
            </MemoryRouter>
        );

        screen.debug(); // Check what renders
    });
});