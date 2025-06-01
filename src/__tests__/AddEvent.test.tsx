import React from 'react'
import { render, screen, fireEvent } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { AddEvent } from '../AddEvent'

describe('AddEvent component', () => {
    const mockAddNewEvent = jest.fn()
    const mockCalendarRef = { current: null }

    beforeEach(() => {
        mockAddNewEvent.mockClear()
    })

    test('renders form fields', () => {
        render(
            <AddEvent
                showWeekends={true}
                addNewEvent={mockAddNewEvent}
                calendarRef={mockCalendarRef}
                currentEvents={[]}
            />
        )

        expect(screen.getByLabelText(/Teacher:/i)).toBeInTheDocument()
        expect(screen.getByLabelText(/Student:/i)).toBeInTheDocument()
        expect(screen.getByLabelText(/Subject:/i)).toBeInTheDocument()
        expect(screen.getByLabelText(/Date:/i)).toBeInTheDocument()
        expect(screen.getByLabelText(/Time:/i)).toBeInTheDocument()
        expect(screen.getByLabelText(/Number of Paid Lessons:/i)).toBeInTheDocument()
    })

    test('calls addNewEvent on submit with correct data', () => {
        render(
            <AddEvent
                showWeekends={true}
                addNewEvent={mockAddNewEvent}
                calendarRef={mockCalendarRef}
                currentEvents={[]}
            />
        )

        userEvent.type(screen.getByLabelText(/Teacher:/i), 'John Doe')
        userEvent.type(screen.getByLabelText(/Student:/i), 'Jane Smith')
        userEvent.type(screen.getByLabelText(/Subject:/i), 'Math')
        userEvent.type(screen.getByLabelText(/Date:/i), '2025-06-01')
        userEvent.type(screen.getByLabelText(/Time:/i), '10:00')
        userEvent.clear(screen.getByLabelText(/Number of Paid Lessons:/i))
        userEvent.type(screen.getByLabelText(/Number of Paid Lessons:/i), '2')

        fireEvent.click(screen.getByRole('button', { name: /Create event\(s\)/i }))

        expect(mockAddNewEvent).toHaveBeenCalled()

    })
})
