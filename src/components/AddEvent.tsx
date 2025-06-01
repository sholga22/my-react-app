import React, { useState } from "react";
import { useForm } from 'react-hook-form';

type AddEventProps = {
    showWeekends: boolean;
    calendarRef: React.RefObject<any>;
    addNewEvent: (event: any) => void;
    currentEvents: any[]; // можно указать более точный тип, если хочешь
}

export function AddEvent({
    showWeekends,
    addNewEvent,
    calendarRef,
    currentEvents
}): AddEventProps {

    console.log("Weekend data:", showWeekends);

    const [teacher, setTeacher] = useState("");
    const [student, setStudent] = useState("");
    const [subject, setSubject] = useState("");
    const [date, setDate] = useState(""); // date without time
    const [time, setTime] = useState(""); // time only
    const [paidLessons, setPaidLessons] = useState(1);
    const [weekDays, setWeekDays] = useState({
        monday: false,
        tuesday: false,
        wednesday: false,
        thursday: false,
        friday: false,
        saturday: false,
        sunday: false,
    });

    const allDays = [
        ["monday", "Mon"],
        ["tuesday", "Tue"],
        ["wednesday", "Wed"],
        ["thursday", "Thu"],
        ["friday", "Fri"],
        ["saturday", "Sat"],
        ["sunday", "Sun"],
    ];

    // Если showWeekends = false — исключаем субботу и воскресенье
    const daysToShow = showWeekends
        ? allDays
        : allDays.filter(([dayKey]) => dayKey !== "saturday" && dayKey !== "sunday");

    const handleCheckboxChange = (day) => {
        setWeekDays((prev) => ({ ...prev, [day]: !prev[day] }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        // You can combine date and time into one string or a Date object
        const dateTime = date && time ? `${date}T${time}` : null;


        console.log("Submitted data:", {
            teacher,
            student,
            subject,
            date,
            time,
            paidLessons,
            weekDays
        });
        //============================  can send data to server or use it further
        if (!dateTime) return;

        const newEvent = {
            id: `${Date.now()}`, // или uuid, или createEventId()
            title: `${teacher} → ${student} (${subject})`,
            start: dateTime,
            allDay: false,
        };

        addNewEvent(newEvent); // send data to FullCalendar in Schedule 
    };

    return (
        <form onSubmit={handleSubmit} style={{ maxWidth: 400, margin: "auto" }}>
            <div>
                <label>Teacher:</label>
                <input
                    type="text"
                    value={teacher}
                    onChange={(e) => setTeacher(e.target.value)}
                    required
                />
            </div>

            <div>
                <label>Student:</label>
                <input
                    type="text"
                    value={student}
                    onChange={(e) => setStudent(e.target.value)}
                    required
                />
            </div>

            <div>
                <label>Subject:</label>
                <input
                    type="text"
                    value={subject}
                    onChange={(e) => setSubject(e.target.value)}
                    required
                />
            </div>

            <div>
                <label>Date:</label>
                <input
                    type="date"
                    value={date}
                    onChange={(e) => setDate(e.target.value)}
                    required
                />
            </div>

            <div>
                <label>Time:</label>
                <input
                    type="time"
                    value={time}
                    onChange={(e) => setTime(e.target.value)}
                    required
                />
            </div>

            <div>
                <label>Number of Paid Lessons:</label>
                <input
                    type="number"
                    value={paidLessons}
                    onChange={(e) => setPaidLessons(+e.target.value)}
                    min={0}
                    required
                />
            </div>
            {paidLessons > 1 && (
                <div>
                    <label>Week Days:</label>
                    <div>
                        {daysToShow.map(([dayKey, dayLabel]) => (
                            <label key={dayKey} style={{ marginRight: 10 }}>
                                <input
                                    type="checkbox"
                                    checked={weekDays[dayKey]}
                                    onChange={() => handleCheckboxChange(dayKey)}
                                />
                                {dayLabel}
                            </label>
                        ))}
                    </div>
                </div>
            )}

            <button type="submit" style={{ marginTop: 10 }}>
                Create event(s)
            </button>
        </form>
    );
};