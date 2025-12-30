import { Bold, Header, Highlight, List } from "@repo/components";

const MonorepoContent = () => {
  return (
    <>
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
    </>
  );
};

export default MonorepoContent;
