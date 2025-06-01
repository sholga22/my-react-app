import { render, screen } from '@testing-library/react';
import { AddEntity } from './AddEntity';

const mockConfig = {
    apiEndpoint: 'teachers',
    fields: [
        { name: 'name', label: 'Name', type: 'text', required: true },
        { name: 'email', label: 'Email', type: 'email', required: false },
    ],
};

describe('AddEntity component', () => {
    it('renders form fields from config', () => {
        render(<AddEntity config={mockConfig} />);

        expect(screen.getByLabelText(/Name/i)).toBeInTheDocument();
        expect(screen.getByLabelText(/Email/i)).toBeInTheDocument();
        expect(screen.getByRole('button', { name: /Add/i })).toBeInTheDocument();
    });
});

// The component renders successfully
// Form fields are displayed according to the configuration
// There is a submit button for the form