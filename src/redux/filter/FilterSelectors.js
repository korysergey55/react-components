import { createSelector } from "@reduxjs/toolkit";

export const formSelector = (state) => state.form.items;
export const filterSelector = (state) => state.filter.query;

export const getfilteredProductSelector = createSelector(
 [formSelector, filterSelector],
 (items, filter) =>
  items.filter((item) => item.name.toLowerCase().includes(filter.toLowerCase()))
);
