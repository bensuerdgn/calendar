import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleRight, faAngleLeft } from "@fortawesome/free-solid-svg-icons";

interface IProps {
  setValue: any;
  prevYear: any;
  nextYear: any;
  currentYear: any;
  onChangeMonth: any;
  currentMonth: any;
}

const Year: React.FC<IProps> = ({
  setValue,
  prevYear,
  currentYear,
  nextYear,
  onChangeMonth,
  currentMonth,
}) => {
  return (
    <div className="col-span-1 bg-blue-600 h-full pt-5 text-white">
      <div className="text-xl">
        <div className="year mb-5">
          <span className="cursor-pointer" onClick={() => setValue(prevYear())}>
            <FontAwesomeIcon icon={faAngleLeft} />
          </span>
          <span className="mx-3">{currentYear()}</span>
          <span className="cursor-pointer" onClick={() => setValue(nextYear())}>
            <FontAwesomeIcon icon={faAngleRight} />
          </span>
        </div>
        <div className="month flex justify-center items-center ">
          <div className="flex flex-col w-full ">
            {[
              "January",
              "February",
              "March",
              "April",
              "May",
              "June",
              "July",
              "August",
              "September",
              "October",
              "November",
              "December",
            ].map((month, index) => (
              <span
                key={index}
                className={`border-b border-blue-500 w-full py-3 cursor-pointer hover:bg-blue-500 transition-all ${
                  month == currentMonth() ? "bg-blue-500" : ""
                }`}
                onClick={() => onChangeMonth(month)}
              >
                {month}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Year;
