"use client";

import React from 'react'
import { DateRange, RangeKeyDict, Range } from 'react-date-range';
import "react-date-range/dist/styles.css";
import "react-date-range/dist/theme/default.css";

interface CalenderProps {
    value: Range;
    onChange: (value: RangeKeyDict) => void;
    disabledDates?: Date[];
}

const Calender = ({ value, onChange, disabledDates }: CalenderProps) => {
  return (
    <DateRange 
        rangeColors={["#262626"]}
        ranges={[value]}
        date={new Date()}
        onChange={onChange}
        direction="vertical"
        showDateDisplay={false}
        minDate={new Date()}
        disabledDates={disabledDates}
    />
  )
}

export default Calender
