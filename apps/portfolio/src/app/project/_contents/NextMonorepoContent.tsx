import { Bold, Header, Highlight, List } from "@repo/components";

const NextMonorepoContent = () => {
  return (
    <>
      <Header size="m">작업 및 성과</Header>
      <List>
        <Bold>
          기존 <Highlight>Vite Monorepo</Highlight> 로 되어있던 프로젝트를{" "}
          <Highlight>Nextjs , Turborepo</Highlight> 로 마이그레이션 진행
        </Bold>
      </List>
      <List>
        <Bold>
          기존 <Highlight>sass</Highlight> 에서{" "}
          <Highlight>Tailwindcss</Highlight> 적용
        </Bold>
      </List>
      <List>
        <Bold>
          <Highlight>SSR</Highlight> 및 검색 설정 추가
        </Bold>
      </List>
    </>
  );
};

export default NextMonorepoContent;
