import { Nullable } from "@/types/nil";

export const FilterItemType = {
  INPUT: "INPUT",
  SELECT: "SELECT",
  DATE: "DATE",
  DATE_RANGE: "DATE_RANGE",
  CHECKBOX: "CHECKBOX",
} as const;
export type FilterItemType =
  (typeof FilterItemType)[keyof typeof FilterItemType];

export type FilterInputItemType = {
  type: typeof FilterItemType.INPUT;
  value: string;
};
export type FilterSelectItemType = {
  type: typeof FilterItemType.SELECT;
  value: string;
  variants: {
    label: string;
    value: string;
  }[];
};
export type FilterDateItemType = {
  type: typeof FilterItemType.DATE;
  value: Nullable<Date>;
};
export type FilterDateRangeItemType = {
  type: typeof FilterItemType.DATE_RANGE;
  value: [Nullable<Date>, Nullable<Date>];
};
export type FilterCheckboxItemType = {
  type: typeof FilterItemType.CHECKBOX;
  value: boolean;
  inputLabel?: string;
};

export type FilterItem = {
  label: string;
} & (
  | FilterInputItemType
  | FilterSelectItemType
  | FilterDateItemType
  | FilterDateRangeItemType
  | FilterCheckboxItemType
);
