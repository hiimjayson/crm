import { Check, RefreshCcw, Search } from "lucide-react";
import { Control } from "./Control";
import { Input } from "@/components/atom/Input";
import { Select } from "@/components/atom/Select";
import { DatePicker } from "@/components/atom/DateRangePicker";
import { Checkbox } from "@/components/atom/Checkbox";
import { Button } from "@/components/atom/Button";
import {
  FilterCheckboxItemType,
  FilterDateItemType,
  FilterDateRangeItemType,
  FilterInputItemType,
  FilterItem,
  FilterItemType,
  FilterSelectItemType,
} from "./types";
import { SwitchCase } from "@toss/react";

interface Props {
  items: FilterItem[];
}
export function Filter({ items }: Props) {
  return (
    <section className="flex flex-col items-center w-full space-y-4 pb-4 bg-white shadow-md">
      <Control.Section>
        {items.map((item) => (
          <Control.Item key={item.label} label={item.label}>
            <SwitchCase
              value={item.type}
              caseBy={{
                [FilterItemType.INPUT]: (
                  <Input
                    left={<Search className="size-4" />}
                    placeholder={`${item.label}을(를) 입력해주세요.`}
                    value={(item as FilterInputItemType).value}
                    onChange={() => {}}
                  />
                ),
                [FilterItemType.SELECT]: (
                  <Select
                    value={(item as FilterSelectItemType).value}
                    options={(item as FilterSelectItemType).variants?.map(
                      (variant) => ({
                        label: variant.label,
                        value: variant.value,
                      })
                    )}
                    onChange={() => {}}
                  />
                ),
                [FilterItemType.DATE]: (
                  <DatePicker
                    value={(item as FilterDateItemType).value}
                    onChange={() => {}}
                  />
                ),
                [FilterItemType.DATE_RANGE]: (
                  <DatePicker
                    value={(item as FilterDateRangeItemType).value}
                    onRangeChange={() => {}}
                  />
                ),
                [FilterItemType.CHECKBOX]: (
                  <Checkbox
                    checked={(item as FilterCheckboxItemType).value}
                    onChange={() => {}}
                  />
                ),
              }}
            />
          </Control.Item>
        ))}
      </Control.Section>
      <div className="flex items-center gap-2">
        <Button variant="secondary" left={<RefreshCcw className="size-4" />}>
          초기화
        </Button>
        <Button left={<Check className="size-4" />}>적용하기</Button>
      </div>
    </section>
  );
}
