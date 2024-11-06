import { Select } from "@/components/common/Select";
import { DateRangePicker } from "@/components/common/DateRangePicker";
import { CustomerFilterValues } from "./useCustomerFilter";

interface Props {
  filters: CustomerFilterValues;
  onFiltersChange: (filters: CustomerFilterValues) => void;
}

const STATUS_OPTIONS = ["전체", "활성", "비활성", "대기중"];
const USAGE_OPTIONS = ["전체", "사용중", "미사용", "체험판"];

export function CustomerFilter({ filters, onFiltersChange }: Props) {
  const handleChange = (
    key: keyof CustomerFilterValues,
    value: string | [Date | null, Date | null]
  ) => {
    onFiltersChange({
      ...filters,
      [key]: value,
    });
  };

  return (
    <div className="bg-white rounded-lg shadow space-y-4 pb-4">
      <div className="bg-gray-50 p-6 grid grid-cols-2 gap-4">
        <div>
          <div className="space-y-4">
            <div className="flex items-center gap-4">
              <label className="w-24 font-medium">Status</label>
              <Select
                value={filters.status}
                options={STATUS_OPTIONS}
                onChange={(value) => handleChange("status", value)}
              />
            </div>
            <div className="flex items-center gap-4">
              <label className="w-24 font-medium">사용상태</label>
              <Select
                value={filters.usage}
                options={USAGE_OPTIONS}
                onChange={(value) => handleChange("usage", value)}
              />
            </div>
            <div className="flex items-center gap-4">
              <label className="w-24 font-medium">등록일</label>
              <DateRangePicker
                value={filters.registrationDateRange}
                onChange={(value) =>
                  handleChange("registrationDateRange", value)
                }
              />
            </div>
            <div className="flex items-center gap-4">
              <label className="w-24 font-medium">설치일</label>
              <DateRangePicker
                value={filters.installationDateRange}
                onChange={(value) =>
                  handleChange("installationDateRange", value)
                }
              />
            </div>
          </div>
        </div>
        <div>
          <div className="space-y-4">
            <div className="flex items-center gap-4">
              <label className="w-24 font-medium">기기관리</label>
              <Select
                value={filters.status}
                options={STATUS_OPTIONS}
                onChange={(value) => handleChange("status", value)}
              />
            </div>
            <div className="flex items-center gap-4">
              <label className="w-24 font-medium">Arrival Date</label>
              <DateRangePicker
                value={filters.arrivalDate}
                onChange={(value) => handleChange("arrivalDate", value)}
              />
            </div>
            <div className="flex items-center gap-4">
              <label className="w-24 font-medium">기본워런티</label>
              <DateRangePicker
                value={filters.baseWarrantyRange}
                onChange={(value) => handleChange("baseWarrantyRange", value)}
              />
            </div>
            <div className="flex items-center gap-4">
              <label className="w-24 font-medium">추가워런티</label>
              <DateRangePicker
                value={filters.extendedWarrantyRange}
                onChange={(value) =>
                  handleChange("extendedWarrantyRange", value)
                }
              />
            </div>
          </div>
        </div>
      </div>
      <div className="flex justify-center gap-2">
        <button
          onClick={() => {
            // 초기화 로직
            onFiltersChange({
              status: "전체",
              usage: "전체",
              registrationDateRange: [null, null],
              installationDateRange: [null, null],
              arrivalDate: [null, null],
              baseWarrantyRange: [null, null],
              extendedWarrantyRange: [null, null],
            });
          }}
          className="px-4 py-2 text-gray-600 border border-gray-300 rounded hover:bg-gray-50"
        >
          초기화
        </button>
        <button
          onClick={() => {
            // 적용 로직
            // 이미 실시간으로 적용되고 있으므로 추가 작업 불필요
          }}
          className="px-4 py-2 text-white font-bold bg-blue-500 rounded hover:bg-blue-700 transition-colors"
        >
          적용
        </button>
      </div>
    </div>
  );
}

export * from "./useCustomerFilter";
