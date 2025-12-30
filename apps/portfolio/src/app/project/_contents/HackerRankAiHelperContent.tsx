import { Bold, Header, Highlight, List } from "@repo/components";

const HackerRankAiHelperContent = () => {
  return (
    <>
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
    </>
  );
};

export default HackerRankAiHelperContent;
