import React, { useState, useEffect } from 'react';

const Calendar = ({ onDateSelect }) => {
    const [selectedDate, setSelectedDate] = useState(new Date());
    const [daysInMonth, setDaysInMonth] = useState([]);

    // Array of month names for dropdown selection
    const months = [
        'January', 'February', 'March', 'April', 'May', 'June', 'July',
        'August', 'September', 'October', 'November', 'December',
    ];

    const currentYear = new Date().getFullYear();
    const years = [currentYear, currentYear + 1]; // Current year and next year

    // Get the number of days in the selected month and year
    useEffect(() => {
        const days = new Date(selectedDate.getFullYear(), selectedDate.getMonth() + 1, 0).getDate();
        const daysArray = Array.from({ length: days }, (_, index) => index + 1);
        setDaysInMonth(daysArray);
    }, [selectedDate]);

    // Handler for month dropdown change
    const handleMonthChange = (e) => {
        const newDate = new Date(selectedDate.setMonth(months.indexOf(e.target.value)));
        setSelectedDate(newDate);
        onDateSelect(newDate); // Pass the updated date back to parent
    };

    // Handler for year dropdown change
    const handleYearChange = (e) => {
        const newDate = new Date(selectedDate.setFullYear(Number(e.target.value)));
        setSelectedDate(newDate);
        onDateSelect(newDate); // Pass the updated date back to parent
    };

    // Handler for clicking on a day in the calendar
    const handleDayClick = (day) => {
        const newDate = new Date(selectedDate.setDate(day));
        setSelectedDate(newDate);
        onDateSelect(newDate); // Pass the selected date back to parent
    };

    return (
        <div>
            <h2 className="text-2xl font-bold mb-6">Select Date & Time</h2>
            
            <div className="grid grid-cols-2 gap-4">
                {/* Month Selector */}
                <div>
                    <label className="block text-sm font-medium text-gray-700">Month</label>
                    <select
                        className="border border-gray-300 rounded-lg p-2 w-full"
                        value={months[selectedDate.getMonth()]}
                        onChange={handleMonthChange}
                    >
                        {months.map((month, index) => (
                            <option key={index} value={month}>
                                {month}
                            </option>
                        ))}
                    </select>
                </div>
                
                {/* Year Selector */}
                <div>
                    <label className="block text-sm font-medium text-gray-700">Year</label>
                    <select
                        className="border border-gray-300 rounded-lg p-2 w-full"
                        value={selectedDate.getFullYear()}
                        onChange={handleYearChange}
                    >
                        {years.map((year, index) => (
                            <option key={index} value={year}>
                                {year}
                            </option>
                        ))}
                    </select>
                </div>
            </div>

            {/* Calendar Grid */}
            <div className="mt-6 grid grid-cols-7 gap-2">
                {['Mon', 'Tues', 'Wed', 'Thurs', 'Fri', 'Sat', 'Sun'].map((day) => (
                    <div key={day} className="text-center font-bold text-gray-700">
                        {day}
                    </div>
                ))}
                
                {daysInMonth.map((day) => (
                    <button
                        key={day}
                        onClick={() => handleDayClick(day)}
                        className={`p-3 border rounded-md ${
                            selectedDate.getDate() === day
                                ? 'bg-pink-400 text-white'
                                : 'bg-gray-200 hover:bg-pink-200'
                        }`}
                    >
                        {day}
                    </button>
                ))}
            </div>

            {/* Selected Date Display */}
            <div className="mt-4">
                <h3 className="text-lg font-bold">Selected Date:</h3>
                <p>{selectedDate.toDateString()}</p>
            </div>
        </div>
    );
};

export default Calendar;
