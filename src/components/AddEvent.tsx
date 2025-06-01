import React, { useState } from "react";

export const AddEvent = ({ showWeekends }) => {
    const [teacher, setTeacher] = useState("");
    const [student, setStudent] = useState("");
    const [subject, setSubject] = useState("");
    const [date, setDate] = useState(""); // date without time
    const [time, setTime] = useState(""); // time only
    const [paidLessons, setPaidLessons] = useState(0);
    const [weekDays, setWeekDays] = useState({
        monday: false,
        tuesday: false,
        wednesday: false,
        thursday: false,
        friday: false,
        saturday: false,
        sunday: false,
    });

    const handleCheckboxChange = (day) => {
        setWeekDays((prev) => ({ ...prev, [day]: !prev[day] }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        // You can combine date and time into one string or a Date object
        const dateTime = date && time ? `${date}T${time}` : null;

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


        console.log("Submitted data:", formData);
        // here you can send data to server or use it further
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

            <div>
                <label>Week Days:</label>
                <div>
                    {[
                        ["monday", "Mon"],
                        ["tuesday", "Tue"],
                        ["wednesday", "Wed"],
                        ["thursday", "Thu"],
                        ["friday", "Fri"],
                        ["saturday", "Sat"],
                        ["sunday", "Sun"],
                    ].map(([dayKey, dayLabel]) => (
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

            <button type="submit" style={{ marginTop: 10 }}>
                Create event(s)
            </button>
        </form>
    );
};