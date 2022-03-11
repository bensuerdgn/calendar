interface IProps {
  setValue: any;
  calendar: any;
  currentMonth: any;
  dayStyles: any;
}

const Year: React.FC<IProps> = ({
  setValue,
  calendar,
  currentMonth,
  dayStyles,
}) => {
  return (
    <div className="col-span-3 pt-5 py-5">
      <div className="header text-2xl font-bold text-gray-700 mb-5">{currentMonth()}</div>
      <div className="body">
        <div className="day-names grid grid-cols-7 text-xl font-semibold text-gray-500 mb-3">
          {["mon", "tue", "wed", "thu", "fri", "sat", "sun"].map(
            (week, index) => (
              <div key={index} className="">
                {week}
              </div>
            )
          )}
        </div>
        {calendar.map((week: any, index: number) => (
          <div key={index} className="grid grid-cols-7">
            {week.map((day: any, index: number) => (
              <div
                key={index}
                className={`flex justify-center items-center my-2 mx-1`}
                onClick={() => setValue(day)}
              >
                <div
                  className={`flex items-center justify-center rounded-full w-10 h-10 text-center cursor-pointer text-lg font-medium text-gray-400
                   ${dayStyles(day)}`}
                >
                  {day.format("D").toString()}
                </div>
              </div>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Year;
