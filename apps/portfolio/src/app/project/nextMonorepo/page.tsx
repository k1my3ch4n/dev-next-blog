import { MainLogo } from "@images";
import {
  Header,
  Highlight,
  Link,
  Text,
  Title,
  List,
  Bold,
} from "@repo/components";

const GITHUB_LINK = "https://github.com/k1my3ch4n/dev-next-blog";

export default function NextMonorepo() {
  return (
    <>
      <Title title="📖 Monorepo 마이그레이션 (Vite -> Nextjs)" />
      <MainLogo width="100%" height="auto" />
      <Text>
        <Highlight>2025.05 ~ 2025.06</Highlight>
      </Text>

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

      <Header size="s">관련 홈페이지 및 자료</Header>
      <List>
        <Link link={GITHUB_LINK}>Github Repository</Link>
      </List>
    </>
  );
}
