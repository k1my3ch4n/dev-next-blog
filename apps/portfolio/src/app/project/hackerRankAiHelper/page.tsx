import {
  Bold,
  Header,
  Highlight,
  Link,
  List,
  Text,
  Title,
} from "@repo/components";
import { HRAHLogo } from "@/assets/images";
import { Metadata } from "next";

const BASE_URL = "https://portfolio.k1my3ch4n.xyz";

export const metadata: Metadata = {
  title: "📚 Hackerrank AI Helper 프로젝트",
  description: "📚 Hackerrank AI Helper 프로젝트에 대한 상세 정보입니다.",
  alternates: {
    canonical: `${BASE_URL}/project/hackerRankAiHelper`,
  },
};

const GITHUB_LINK = "https://github.com/k1my3ch4n/HackerRankAIHelper";

export default function HackerRankAiHelper() {
  return (
    <>
      <Title title="📚 Hackerrank AI Helper 프로젝트" />
      <HRAHLogo width="50%" height="auto" />
      <Header size="s">기간</Header>
      <Text>
        <Highlight>2025.08 ~ 2025.09</Highlight>
      </Text>

      <Header size="m">작업 및 성과</Header>
      <List>
        <Bold>
          <Highlight>NextJS</Highlight> 와 <Highlight>Tailwind CSS</Highlight>{" "}
          를 사용해 <Highlight>HackerRank</Highlight> 문제 풀이 서비스 개발
        </Bold>
      </List>
      <List>
        <Bold>
          <Highlight>Gemini API</Highlight> 를 사용해 문제 번역, 요약 및 힌트
          제공 기능 구현
        </Bold>
      </List>
      <List>
        <Bold>
          <Highlight>Zustand</Highlight>를 사용해 전역 상태 관리 추가
        </Bold>
      </List>

      <List>
        <Bold>모바일 반응형 디자인 적용</Bold>
      </List>

      <Header size="s">관련 홈페이지 및 자료</Header>
      <List>
        <Link link={GITHUB_LINK}>Github Repository</Link>
      </List>
    </>
  );
}
