import DatePicker from "react-native-modern-datepicker";

function DatePickerComponent({ showCalendar, mode, setDate }) {
  return (
    <>
      {showCalendar && (
        <DatePicker
          mode={mode}
          current={new Date().toISOString().slice(0, 10)}
          onSelectedChange={setDate}
        />
      )}
    </>
  );
}

export default DatePickerComponent;
