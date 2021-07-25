import { createSelector } from "@reduxjs/toolkit";

export const formSelector = (state) => state.form.items;
export const filterSelector = (state) => state.filter?.query;

export const getfilteredSelector = createSelector(
 [formSelector, filterSelector],
 (items, query) =>
  items?.filter((item) => item.name.toLowerCase().includes(query.toLowerCase()))
);

// const getFilterItems = (state) => {
//  const formattedState = state.filter.query.toLowerCase().trim();
//  const filtered = state.form.items.filter((contact) =>
//   contact.name.toLowerCase().includes(formattedState)
//  );
//  return filtered;
// };
