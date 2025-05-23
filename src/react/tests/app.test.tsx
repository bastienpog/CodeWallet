import { describe, it, beforeAll, vi } from 'vitest';
import { render, screen } from '@testing-library/react';
import { App } from '../app';
import { MemoryRouter } from 'react-router-dom';

beforeAll(() => {
  (global as any).window.SnippetAPI = {
    readSnippet: vi.fn().mockResolvedValue([]),
  };
});

describe('App', () => {
  it('renders the App component', () => {
    render(
      <MemoryRouter>
        <App />
      </MemoryRouter>
    );

    screen.debug(); // Check what renders
  });
});