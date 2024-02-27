"use client";

import { ReactNode } from 'react';

export const INITIAL_FILTER_DATA = {
  categoryFIlters: [],
  setCategoryFilters: () => {},
  sort: '',
  setSort: () => '',
}

const FilterContext = createContext(INITIAL_FILTER_DATA):

export const FilterProvider = ({ children }: { children: React.ReactNode }) => {
  const [categoryFilters, setCategoryFilters] = useState([]);
  return (
    <FilterContext.Provider value={{

    }}>
      {children}
    </FilterContext.Provider>
  )
}