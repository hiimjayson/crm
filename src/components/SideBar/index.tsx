import Section from "./Section";
import MenuItem from "./MenuItem";

export default function SideBar() {
  return (
    <nav className="w-64 bg-white border-r border-gray-200 h-screen">
      <Section title="영업 리드 관리">
        <MenuItem href="/leads/current">주요사 리마인더</MenuItem>
        <MenuItem href="/leads/sales">매출 리마인더</MenuItem>
      </Section>

      <Section title="회원 관리">
        <MenuItem href="/members/dashboard">대시보드</MenuItem>
        <MenuItem href="/members/list">회원 내역</MenuItem>
      </Section>

      <Section title="컨텐츠 관리">
        <MenuItem href="/contents/diary">다이어리</MenuItem>
        <MenuItem href="/contents/news">신청내역</MenuItem>
        <MenuItem href="/contents/etc">후기</MenuItem>
      </Section>

      <Section title="C/S 관리">
        <MenuItem href="/cs/contact">전화 문의 내역</MenuItem>
        <MenuItem href="/user">채팅 문의 내역</MenuItem>
      </Section>
    </nav>
  );
}
