import {
  Bold,
  Header,
  Highlight,
  Link,
  List,
  Text,
  Title,
} from "@repo/components";
import { MainLogo } from "@images";

const BLOG_LINK = "https://blog.k1my3ch4n.xyz/";
const PORTFOLIO_LINK = "https://portfolio.k1my3ch4n.xyz/";
const GITHUB_LINK = "https://github.com/k1my3ch4n/dev-blog/blob/main/README.md";

export default function Monorepo() {
  return (
    <>
      <Title title="📖 Monorepo로 블로그 및 포트폴리오 페이지 생성" />
      <MainLogo width="100%" height="auto" />
      <Header size="s">기간</Header>
      <Text>
        <Highlight>2024.12 ~ 2025.02</Highlight>
      </Text>

      <Header size="m">작업 및 성과</Header>
      <List>
        <Bold>
          Monorepo 로 Blog , Portfolio, Core 패키지 구성 ( yarn workspace 사용 )
        </Bold>
        <List spot="m">Blog , Portfolio 페이지 개발</List>
        <List spot="m">
          공통으로 사용되는 hook , component 를 위한 core 패키지 개발
        </List>
        <List spot="m">yarn pnp 를 사용해 zero-install 구성</List>
      </List>

      <List>
        <Bold>Github Actions 를 사용해 CI/CD 자동화 및 버저닝 추가</Bold>
        <List spot="m">
          변경된 패키지를 확인 후 , 해당 패키지에만 CI/CD 작동하도록 설정
        </List>
        <List spot="m">배포 및 버저닝 자동화 추가</List>
      </List>

      <List>
        <Bold>
          GCP ( Google Cloud Platform ) 과 docker , Github Actions 로 배포
          자동화 설정
        </Bold>
      </List>

      <List>
        <Bold>msw 를 이용한 서버 개발 및 테스트 코드 작성</Bold>
        <List spot="m">jest , React Testing Library 로 테스트 코드 작성</List>
        <List spot="m">
          msw 를 사용해 api mocking
          <List spot="s">테스트 코드 작성 및 서버 개발</List>
        </List>
      </List>

      <List>
        <Bold>postgreSQL , Apollo server 및 graphql 로 서버 개발</Bold>
      </List>

      <List>
        <Bold>core component 확인을 위한 storybook 개발</Bold>
        <List spot="m">
          storybook 으로 component 를 개발자 및 다른 사람들도 확인 가능
        </List>
      </List>

      <Header size="s">관련 홈페이지 및 자료</Header>
      <List>
        <Link link={BLOG_LINK}>블로그 페이지</Link>
      </List>
      <List>
        <Link link={PORTFOLIO_LINK}>포트폴리오 페이지</Link>
      </List>
      <List>
        <Link link={GITHUB_LINK}>Github Repository</Link>
      </List>
    </>
  );
}
