import { MainLogo } from "@images";
import { Header, Highlight, Link, Text, Title, List } from "@repo/components";

const GITHUB_LINK = "https://github.com/k1my3ch4n/dev-next-blog";

export default function NextMonorepo() {
  return (
    <>
      <Title title="📖 Monorepo 프로젝트 마이그레이션 (Vite -> Nextjs)" />
      <MainLogo width="100%" height="auto" />
      <Text>
        <Highlight>2025.05 ~ 2025.06</Highlight>
      </Text>

      <Header size="s">임시로 GITHUB 링크로 대체합니다. ( 작성 중 )</Header>
      <List>
        <Link link={GITHUB_LINK}>Github Repository</Link>
      </List>
    </>
  );
}
