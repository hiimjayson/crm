import { useCallback, useMemo, useState } from "react";
import {
  BaseFilterItem,
  FilterCheckboxItemType,
  FilterDateItemType,
  FilterDateRangeItemType,
  FilterInputItemType,
  FilterItem,
  FilterItemType,
  FilterSelectItemType,
} from "./types";

type FilterItemOption = BaseFilterItem &
  (
    | Omit<FilterInputItemType, "value">
    | Omit<FilterSelectItemType, "value">
    | Omit<FilterDateItemType, "value">
    | Omit<FilterDateRangeItemType, "value">
    | Omit<FilterCheckboxItemType, "value">
  );
// eslint-disable-next-line @typescript-eslint/no-explicit-any
export type FilterChangeHandler = (name: string, value: any) => void;

export function useFilterProps(options: FilterItemOption[]) {
  const [items, setItems] = useState<FilterItem[]>(
    options.map(
      (option) =>
        ({
          ...option,
          value: getFilterItemDefaultValue(option),
          // eslint-disable-next-line @typescript-eslint/no-explicit-any
        } as any)
    )
  );
  const [appliedValues, setAppliedValues] = useState<Record<string, unknown>>(
    {}
  );

  const isClearable = useMemo(() => {
    return Object.values(items).some(
      (item) => !compareItemValue(item.value, getFilterItemDefaultValue(item))
    );
  }, [items]);
  const isDirty = useMemo(() => {
    return items.some(
      (item) =>
        !compareItemValue(item.value, appliedValues[item.name]) &&
        !compareItemValue(item.value, getFilterItemDefaultValue(item))
    );
  }, [items, appliedValues]);

  const onChange: FilterChangeHandler = useCallback((name, value) => {
    setItems((prev) =>
      prev.map((item) => (item.name === name ? { ...item, value } : item))
    );
  }, []);

  const clear = useCallback(() => {
    setItems(
      items.map((item) => ({
        ...item,
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        value: getFilterItemDefaultValue(item) as any,
      }))
    );
    setAppliedValues({});
  }, [items]);

  const apply = useCallback(() => {
    setAppliedValues(
      items.reduce((acc, item) => {
        acc[item.name] = item.value;
        return acc;
      }, {} as Record<string, unknown>)
    );
  }, [items]);

  return {
    filterProps: {
      items,
      onChange,
      onClear: clear,
      onApply: apply,
      isDirty,
      isClearable,
    },
    values: appliedValues,
  };
}

function getFilterItemDefaultValue(option: FilterItemOption): unknown {
  switch (option.type) {
    case FilterItemType.INPUT:
      return option.defaultValue ?? "";
    case FilterItemType.SELECT:
      return option.defaultValue ?? "";
    case FilterItemType.DATE:
      return option.defaultValue ?? null;
    case FilterItemType.DATE_RANGE:
      return option.defaultValue ?? [null, null];
    case FilterItemType.CHECKBOX:
      return option.defaultValue ?? false;
    default:
      throw new Error("Invalid filter item type");
  }
}

function compareItemValue(a: unknown, b: unknown) {
  if (Array.isArray(a) && Array.isArray(b)) {
    return (
      a.length === b.length && a.every((value, index) => value === b[index])
    );
  }

  return a === b;
}
