"use client";
import { usePathname, useRouter, useSearchParams } from 'next/navigation';
import React, { useCallback } from 'react'
import { IconType } from 'react-icons';
import qs from "query-string";

interface CategoryBoxProps {
    label: string;
    description: string;
    icon: IconType;
    selected?: boolean;
}

const CategoryBox = ({ label, icon: Icon, selected }: CategoryBoxProps) => {
    const router = useRouter();
    const params = useSearchParams();
    const pathname = usePathname();

    const handleClick = useCallback(() => {
        let currentQuery = {};

        if(params) {
            currentQuery = qs.parse(params?.toString());
        }

        const updatedQuery: any = {
            ...currentQuery,
            category: label
        }
        //console.log(updatedQuery)

        if(params?.get('category') === label) {
            delete updatedQuery.category;
        }


        const url = qs.stringifyUrl({
            url: pathname || "",
            query: updatedQuery
        }, { skipNull: true });

        router.push(url)
    }, [label, params, router, pathname])

  return (
    <div  onClick={handleClick} className={`
        flex
        flex-col
        items-center
        justify-center
        gap-2
        p-3
        border-b-2
        hover:text-neutral-800
        transition
        cursor-pointer
        ${selected ? "border-b-neutral-800" : "border-transparent"}
        ${selected ? "text-neutral-800" : "text-neutral-500"}
        `}
    >
      <Icon size={26}/>
      <div className='font-medium text-sm'>
            {label}
      </div>
    </div>
  )
}

export default CategoryBox
