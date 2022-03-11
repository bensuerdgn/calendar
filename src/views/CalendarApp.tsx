import Year from "../components/year/";
import Calendar from "../components/calendar/";
import Activity from "../components/activity/";
import { useEffect, useState } from "react";
import moment from "moment";

const CalendarApp: React.FC = () => {
  const [calendar, setCalendar] = useState([]);
  const [value, setValue] = useState(moment());

  const currentYear = () => {
    return value.format("YYYY");
  };
  const startDay = value.clone().startOf("month").startOf("week");
  const endDay = value.clone().endOf("month").endOf("week");
  const day = startDay.clone().subtract(0, "day");

  useEffect(() => {
    allMonthNames();
    allDay();
  }, []);
  const allDay = () => {
    console.log(startDay)
    console.log(endDay);
    console.log(day);
    const a: any = [];
    while (day.isBefore(endDay, "day")) {
      a.push(
        Array(7)
          .fill(0)
          .map(() => day.add(1, "day").clone())
      );
    }
    setCalendar(a);
  };

  const allMonthNames = () => {
    const a: any = [];
    // while (condition) {
    //   a.push(value.clone().add(1, "month"));
    // }
  };

  const isSelected = (day: any) => {
    return value.isSame(day, "day");
  };
  // const beforeToday = (day: any) => {
  //   return day.isBefore(new Date(), "day");
  // };
  const isToday = (day: any) => {
    return day.isSame(new Date(), "day");
  };
  const dayStyles = (day: any) => {
    // if (beforeToday(day)) return "bg-red-300 !text-white";
    if (isSelected(day)) return "bg-blue-300 !text-white";
    if (isToday(day)) return "bg-green-300 !text-white";
    return "";
  };
  const currentMonth = () => {
    return value.format("MMMM");
  };
  const prevYear = () => {
    return value.clone().subtract(1, "year");
  };
  const nextYear = () => {
    return value.clone().add(1, "year");
  };
  const onChangeMonth = (month:string) => {
    return value.clone()
  }
  return (
    <div className="grid grid-cols-6 h-full justify-center">
      <Year
        setValue={setValue}
        currentYear={currentYear}
        prevYear={prevYear}
        nextYear={nextYear}
        onChangeMonth={onChangeMonth}
        currentMonth={currentMonth}
      />
      <Calendar
        setValue={setValue}
        calendar={calendar}
        currentMonth={currentMonth}
        dayStyles={dayStyles}
      />
      <Activity />
    </div>
  );
};

export default CalendarApp;
