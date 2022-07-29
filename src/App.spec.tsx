import { render, screen } from '@testing-library/react';

import App from '@/App';

describe('App', () => {
    it('should render "Vite + React"', () => {
        render(<App />);
        expect(screen.getByText('Vite + React'));
    });
});
