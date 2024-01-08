"use client";
import useCountries from "@/app/hooks/useCountries";
import useSearchModal from "@/app/hooks/useSearchModal";
import { differenceInDays } from "date-fns";
import { useSearchParams } from "next/navigation";
import React, { useMemo } from "react";
import { BiSearch } from "react-icons/bi";

const Search = () => {
  const searchModal = useSearchModal();
  const params = useSearchParams();
  const { getByValue } = useCountries();

  const locationValue = params?.get("locationValue");
  const startDate = params?.get("startDate");
  const endDate = params?.get("endDate");
  const guestCount = params?.get("guestCount");

  const locationLabel = useMemo(() => {
    if(locationValue){
      return getByValue(locationValue as string)?.label;
    }
    return "Anywhere";
  },[getByValue, locationValue]);

  const durationLabel = useMemo(() => {
    if(startDate && endDate) {
      const start = new Date(startDate as string);
      const end = new Date(endDate as string);
      let diff = differenceInDays(end, start);

      if(diff == 0) {
        diff = 1
      }

      return `${diff} ${diff <= 1 ? "Day" : "Days"}`;
    }

    return "Any week";
  },[startDate, endDate]);

  const guestsLabel = useMemo(() => {
    if(guestCount) {
      return `${parseInt(guestCount)} Guest(s)`;
    }

    return "Add Guests";
  },[guestCount])
  return (
    <div 
      onClick={searchModal.onOpen}
      className="border-[1px]  py-2 rounded-full shadow-md hover:shadow-md transition cursor-pointer">
      <div className="flex flex-row items-center justify-between">
        <div className="text-sm font-semibold px-6">{locationLabel}</div>
        <div
          className="
                hidden
                sm:block
                px-6
                border-x-[1px]
                flex-1
                text-center
            "
        >
          {durationLabel}
        </div>
        <div className="text-sm pl-6 pr-2 text-gray-600 flex flex-row items-center gap-3">
          <div className="hidden sm:block">{guestsLabel}</div>
          <div className="p-2 bg-rose-500 rounded-full hover:opacity-70 transition text-white">
            <BiSearch size={18} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Search;
