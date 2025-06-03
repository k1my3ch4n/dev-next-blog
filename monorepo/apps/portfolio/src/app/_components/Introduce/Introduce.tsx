import {
  Divider,
  Header,
  Highlight,
  Link,
  List,
  SplitGrid,
  Text,
} from "@repo/components";
import MainPhoto from "@/assets/images/mainPhoto.svg";

const RESUME_LINK =
  "https://k1my3ch4ns.notion.site/1cac98c1db05805bb6e8c4c02a55c72c";

const Introduce = () => {
  return (
    <>
      <Header>🙎‍♂️ Who Am I ?</Header>
      <Divider />
      <SplitGrid
        lhs={
          <>
            <MainPhoto />
            <Text>🔥 김예찬 </Text>
            <Text>
              ✉️{" "}
              <Link link="mailto:k1my3ch4n@gmail.com">k1my3ch4n@gmail.com</Link>
            </Text>
            <Text>📱 010-2695-7092</Text>
            <Text>🏠 경기 성남시 분당구</Text>
            <Text>
              📘 <Link link={RESUME_LINK}>Resume</Link>
            </Text>
          </>
        }
        rhs={
          <>
            <Text>
              웹 프론트엔드 개발자로 React 등 SPA 프레임워크 사용과
              Javascript/Typescript 사용에 능숙하고 깊은 이해를 가지고 있습니다.
              자율 주행 로봇 스타트업에서 커리어를 시작해서, 관리자 및 사용자를
              위한 로봇 관제 웹 프로덕트 개발 및 운영 경험을 쌓았습니다.
            </Text>
            <List>
              사용자 경험 중심의 로봇 관리 및 제어 웹 프로덕트를 개발하고
              운영하여 실제 현장(물류센터 등)에 성공적으로 납품 및 적용한 경험을
              가지고 있습니다.
            </List>
            <List>
              엔지니어와 현장 작업자가 로봇을 효율적으로 제어하고 작업 현황을
              실시간으로 파악할 수 있도록 실시간 대시보드 및 엑셀 기반 WMS 작업
              생성/지시 기능을 개발하여 업무 효율성을 높였습니다.
            </List>
            <List>
              문제 해결을 주도적으로 수행하여 개발 환경을 개선하고 생산성을
              향상시킨 경험이 있습니다. 대표적으로 CRA 환경에서 빌드 속도 지연
              문제를 VITE 마이그레이션을 통해 개선해 빌드 시간을 약{" "}
              <Highlight>72%</Highlight> 단축했습니다.
            </List>
            <List>
              Github Actions, AWS, Notion을 활용한{" "}
              <Highlight>배포 및 버저닝 CI/CD 자동화</Highlight>를 구축하여
              생산성을 높였습니다. 또한, Yarn Workspaces를 활용한{" "}
              <Highlight>Monorepo 구성</Highlight> 및{" "}
              <Highlight>Zero Install</Highlight>
              적용을 통해 개발 환경을 최적화했습니다.
            </List>
            <List>
              다양한 직군과의 원활한 소통을 위해 노력하며 협업 효율성을 높이는
              데 기여했습니다. 서버 팀과의 API 개발 협의를 위해{" "}
              <Highlight>MSW</Highlight>를 도입하고, 디자인 팀과의 일관된 UI
              개발을 위해 <Highlight>Storybook</Highlight>을 적극적으로
              활용했습니다.
            </List>
            <List>
              안정적인 서비스 운영을 위해 jest, React Testing Library, MSW를
              활용한 테스트 코드를 작성하고, 테스트 커버리지를{" "}
              <Highlight>20%에서 87%</Highlight>까지 향상시켜 코드 품질을
              높였습니다.
            </List>
          </>
        }
      />
    </>
  );
};

export default Introduce;
