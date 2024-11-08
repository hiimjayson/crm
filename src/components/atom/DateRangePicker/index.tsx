import { Nullable } from "@/types/nil";
import ReactDatePicker, {
  DatePickerProps,
  ReactDatePickerCustomHeaderProps,
} from "react-datepicker";
import { format } from "date-fns";
import { ko } from "date-fns/locale";
import { Calendar, ChevronLeft, ChevronRight } from "lucide-react";
import { forwardRef, HTMLAttributes } from "react";
import { Input } from "../Input";
import "react-datepicker/dist/react-datepicker.css";
import "./react-datepicker.scss";

interface SingleDatePickerProps {
  value: Nullable<Date>;
  onChange: (value: Nullable<Date>) => void;
}
interface DateRangePickerProps {
  value: [Nullable<Date>, Nullable<Date>];
  onRangeChange: (value: [Nullable<Date>, Nullable<Date>]) => void;
}

type Props = {
  placeholder?: string;
} & (SingleDatePickerProps | DateRangePickerProps);
export function DatePicker({ placeholder, ...props }: Props) {
  const isSingleDatePicker = "onChange" in props;

  const renderCustomHeader: DatePickerProps["renderCustomHeader"] = (
    headerProps
  ) => {
    return <DatePickerHeader {...headerProps} />;
  };

  const datePickerProps = isSingleDatePicker
    ? ({ selected: props.value, onChange: props.onChange } as const)
    : ({
        startDate: props.value[0] ?? undefined,
        endDate: props.value[1] ?? undefined,
        onChange: props.onRangeChange,
        selectsRange: true,
      } as const);

  const isClearable = isSingleDatePicker
    ? props.value != null
    : props.value[0] != null || props.value[1] != null;

  const inputValue = !isClearable
    ? ""
    : isSingleDatePicker
    ? format(props.value ?? new Date(), "yyyy.MM.dd")
    : `${format(props.value[0] ?? new Date(), "yyyy.MM.dd")} ~ ${format(
        props.value[1] ?? new Date(),
        "yyyy.MM.dd"
      )}`;

  const clear = () => {
    console.log("clear");

    if (isSingleDatePicker) {
      props.onChange(null);
    } else {
      props.onRangeChange([null, null]);
    }
  };

  return (
    <div className="relative w-full max-w-[260px]">
      <Input
        left={<Calendar className="size-4 text-gray-500" />}
        placeholder={placeholder}
        value={inputValue}
        readOnly
      />
      <ReactDatePicker
        {...datePickerProps}
        locale={ko}
        renderCustomHeader={renderCustomHeader}
        customInput={<DatePickerTrigger />}
      />
      {isClearable && (
        <button
          type="button"
          className="absolute z-30 top-1/2 -translate-y-1/2 right-2"
          onClick={clear}
        >
          <Input.ClearIcon />
        </button>
      )}
    </div>
  );
}

function DatePickerHeader({
  monthDate,
  decreaseMonth,
  increaseMonth,
  prevMonthButtonDisabled,
  nextMonthButtonDisabled,
}: ReactDatePickerCustomHeaderProps) {
  return (
    <div className="flex items-center justify-between px-[2px]">
      <button
        className="z-0 group relative inline-flex items-center justify-center box-border appearance-none select-none whitespace-nowrap font-normal subpixel-antialiased overflow-hidden tap-highlight-transparent data-[pressed=true]:scale-[0.97] outline-none data-[focus-visible=true]:z-10 data-[focus-visible=true]:outline-2 data-[focus-visible=true]:outline-focus data-[focus-visible=true]:outline-offset-2 text-small rounded-medium px-0 transition-all motion-reduce:transition-none bg-transparent hover:bg-gray-100 min-w-10 w-10 h-10 text-[#777E85] disabled:opacity-50"
        type="button"
        aria-label="이전 달로 이동"
        style={{ borderRadius: "50%" }}
        disabled={prevMonthButtonDisabled}
        onClick={decreaseMonth}
      >
        <ChevronLeft className="size-6" />
      </button>
      <p className="text-lg text-gray-800">{format(monthDate, "yyyy. M월")}</p>
      <button
        className="z-0 group relative inline-flex items-center justify-center box-border appearance-none select-none whitespace-nowrap font-normal subpixel-antialiased overflow-hidden tap-highlight-transparent data-[pressed=true]:scale-[0.97] outline-none data-[focus-visible=true]:z-10 data-[focus-visible=true]:outline-2 data-[focus-visible=true]:outline-focus data-[focus-visible=true]:outline-offset-2 text-small rounded-medium px-0 transition-all motion-reduce:transition-none bg-transparent hover:bg-gray-100 min-w-10 w-10 h-10 text-[#777E85] disabled:opacity-50"
        type="button"
        aria-label="다음 달로 이동"
        style={{ borderRadius: "50%" }}
        disabled={nextMonthButtonDisabled}
        onClick={increaseMonth}
      >
        <ChevronRight className="size-6" />
      </button>
    </div>
  );
}

const DatePickerTrigger = forwardRef<
  HTMLDivElement,
  HTMLAttributes<HTMLDivElement>
>(function Trigger({ className, ...props }, ref) {
  return (
    <div
      className={`absolute top-0 left-0 opacity-0 z-10 size-full ${className}`}
      {...props}
      ref={ref}
    ></div>
  );
});
