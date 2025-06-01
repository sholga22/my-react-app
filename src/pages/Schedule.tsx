import { useState, useRef } from 'react'
import { formatDate } from '@fullcalendar/core'
import FullCalendar from '@fullcalendar/react'
import dayGridPlugin from '@fullcalendar/daygrid'
import timeGridPlugin from '@fullcalendar/timegrid'
import interactionPlugin from '@fullcalendar/interaction'
import { INITIAL_EVENTS, createEventId } from '../event-utils.ts'

import { AddEvent } from '../components/AddEvent'
import { useSendToMake } from '../hooks/SendToMake'


import '../App.css'
import '../index.css'

export default function App() {
  const [weekendsVisible, setWeekendsVisible] = useState(true)
  const [currentEvents, setCurrentEvents] = useState([])

  const calendarRef = useRef(null)      // REF for calendar
  const { send } = useSendToMake();     // send to make.com

  console.log("Weekend data weekendsVisible:", weekendsVisible);

  function handleWeekendsToggle() {
    setWeekendsVisible(!weekendsVisible)
  }

  function addNewEvent(event) {
    const calendarApi = calendarRef.current.getApi();
    calendarApi.addEvent({
      id: createEventId(),
      title: event.title,
      start: event.start,
      end: event.end,
      allDay: event.allDay || false,
    });
  }

  function handleDateSelect(selectInfo: any) {
    let title = prompt('Please enter a new title for your event')
    let calendarApi = selectInfo.view.calendar

    calendarApi.unselect() // clear date selection

    if (title) {
      calendarApi.addEvent({
        id: createEventId(),
        title,
        start: selectInfo.startStr,
        end: selectInfo.endStr,
        allDay: selectInfo.allDay
      })
    }
  }

  function handleEventClick(clickInfo: any) {
    // if (confirm(`Are you sure you want to delete the event '${clickInfo.event.title}'`)) {
    //  clickInfo.event.remove()
    //}
    if (confirm(`Are you sure you want to set info about the event '${clickInfo.event.title}'`)) {
      send({ title: clickInfo.event.title })
    }
  }

  function handleEvents(events) {
    setCurrentEvents(events)
  }

  {// === calendarRef is connection between FullCalendar and Sidebar 
    return (

      <div className='schedule'>
        <Sidebar
          weekendsVisible={weekendsVisible}
          handleWeekendsToggle={handleWeekendsToggle}
          currentEvents={currentEvents}
          calendarRef={calendarRef}
          addNewEvent={addNewEvent} />

        <div className='schedule-main'>
          <FullCalendar
            ref={calendarRef}
            plugins={[dayGridPlugin, timeGridPlugin, interactionPlugin]}
            headerToolbar={{
              left: 'prev,next today',
              center: 'title',
              right: 'dayGridMonth,timeGridWeek,timeGridDay'
            }}
            initialView='dayGridMonth'
            editable={true}
            selectable={true}
            selectMirror={true}
            dayMaxEvents={true}
            weekends={weekendsVisible}
            initialEvents={INITIAL_EVENTS} // alternatively, use the `events` setting to fetch from a feed
            select={handleDateSelect}
            eventContent={renderEventContent} // custom render function
            eventClick={handleEventClick}
            eventsSet={handleEvents} // called after events are initialized/added/changed/removed
          />
        </div>
      </div>

    )
  }


  function renderEventContent(eventInfo: any) {
    return (
      <>
        <b>{eventInfo.timeText}</b>
        <i>{eventInfo.event.title}</i>
      </>
    )
  }


  function Sidebar({
    weekendsVisible,
    handleWeekendsToggle,
    currentEvents,
    calendarRef,
    addNewEvent,
  }: {
    weekendsVisible: boolean;
    handleWeekendsToggle: () => void;
    currentEvents: any[];
    calendarRef: React.RefObject<any>;
    addNewEvent: (event: any) => void;
  }) {
    return (
      <div className='schedule-sidebar'>
        <div className='schedule-sidebar-section'>
          <h2>Add lesson(s) to the schedule</h2>
          <ul>
            <AddEvent calendarRef={calendarRef} showWeekends={weekendsVisible} addNewEvent={addNewEvent} />
          </ul>
        </div>
        <div className='schedule-sidebar-section'>
          <label>
            <input
              type='checkbox'
              checked={weekendsVisible}
              onChange={handleWeekendsToggle}
            ></input>
            show weekends
          </label>
        </div>
        <div className='schedule-sidebar-section'>
          <h2>All Events ({currentEvents.length})</h2>
          <ul>
            {currentEvents.map((event) => (
              <SidebarEvent key={event.id} event={event} />
            ))}
          </ul>
        </div>
      </div>
    )
  }

  function SidebarEvent({ event }) {
    return (
      <li key={event.id}>
        <b>{formatDate(event.start, { year: 'numeric', month: 'short', day: 'numeric' })}</b>
        <i>{event.title}</i>
      </li>
    )
  }
}
