import { Search } from "lucide-react";
import { Control } from "./Control";
import { Input } from "@/components/atom/Input";

export function Filter() {
  return (
    <section className="flex flex-col items-center w-full space-y-4 pb-4 bg-white shadow">
      <Control.Section>
        <Control.Item label="검색어">
          <Input
            left={<Search className="size-4" />}
            placeholder="검색어를 입력해주세요."
          />
        </Control.Item>
      </Control.Section>
      <div className="flex items-center gap-2">
        <button>안녕</button>
      </div>
    </section>
  );
}
