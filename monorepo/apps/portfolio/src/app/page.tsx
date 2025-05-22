"use client";

import {
  Divider,
  Header,
  Highlight,
  Link,
  List,
  SplitGrid,
  Text,
  Title,
} from "@repo/components";

export default function Home() {
  const RESUME_LINK =
    "https://k1my3ch4ns.notion.site/1cac98c1db05805bb6e8c4c02a55c72c";

  return (
    <>
      <Title title="🔥 함께 일하는 프론트엔드 개발자 김예찬입니다." />
      <div className="flex flex-col items-start w-full">
        {/* introduce */}
        <Header>🙎‍♂️ Who Am I ?</Header>
        <Divider />
        <SplitGrid
          lhs={
            <>
              {/* <MainPhoto className={styles.mainPhoto} /> */}
              <Text>🔥 김예찬 </Text>
              <Text>
                ✉️{" "}
                <Link link="mailto:k1my3ch4n@gmail.com">
                  k1my3ch4n@gmail.com
                </Link>
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
                Javascript/Typescript 사용에 능숙하고 깊은 이해를 가지고
                있습니다. 자율 주행 로봇 스타트업에서 커리어를 시작해서, 관리자
                및 사용자를 위한 로봇 관제 웹 프로덕트 개발 및 운영 경험을
                쌓았습니다.
              </Text>
              <List>
                사용자 경험 중심의 로봇 관리 및 제어 웹 프로덕트를 개발하고
                운영하여 실제 현장(물류센터 등)에 성공적으로 납품 및 적용한
                경험을 가지고 있습니다.
              </List>
              <List>
                엔지니어와 현장 작업자가 로봇을 효율적으로 제어하고 작업 현황을
                실시간으로 파악할 수 있도록 실시간 대시보드 및 엑셀 기반 WMS
                작업 생성/지시 기능을 개발하여 업무 효율성을 높였습니다.
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

        {/* Profile */}
        <Header>🔎 Profile</Header>
        <Divider />
        <Header size="s">경력 (총 2년)</Header>
        <SplitGrid
          lhs={
            <>
              {/* <TwinnyLogo className={styles.logo} /> */}
              <Text>TWINNY</Text>
              <Highlight>2022.4 - 2024.4</Highlight>
            </>
          }
          rhs={
            <>
              <Header size="s">
                유저용 작업 관제 웹 프로덕트 ( 오더피킹 ) 개발 및 서비스
              </Header>
              <Text>
                <Highlight>2023.01 ~ 2024.04</Highlight>
              </Text>
              <List spot="l">
                유저용 로봇 관제 웹 프로덕트 ( 오더피킹 ) 개발 및 서비스
                <List spot="m">
                  실시간 대시보드 개발 및 엑셀로 WMS 처럼 작업 생성 및 지시 기능
                  개발
                </List>
              </List>
              <List spot="l">
                웹 프로덕트 배포 및 버저닝 자동화, 리팩토링 진행
                <List spot="m">
                  <Highlight>github action</Highlight>을 이용한 배포 및 버저닝
                  자동화 진행
                </List>
                <List spot="m">
                  <Highlight>CRA</Highlight> → <Highlight>VITE</Highlight>{" "}
                  마이그레이션 및 <Highlight>monorepo</Highlight> 적용
                  <List spot="s">
                    빌드 시간 단축 ( 2:20 → 0:40 , 약 72% 속도 개선 )
                  </List>
                  <List spot="s">
                    <Highlight>yarn workspaces</Highlight> 사용해서{" "}
                    <Highlight>monorepo</Highlight>
                    적용으로 공통으로 사용되는 hook 과 component 를 중복하지
                    않고 사용 가능
                  </List>
                  <List spot="s">
                    <Highlight>pnp</Highlight> 모드 적용으로 zero-install 적용
                  </List>
                </List>
                <List spot="m">
                  <Highlight>msw ( mock service worker )</Highlight> 적용
                  <List spot="s">
                    서버 개발이 늦어지는 경우 미리 API 명세서를 보고 작업 가능,
                    해당 작업 후 서버 측에 API 명세에 대한 피드백 전달 가능 (
                    프론트엔드 주도 인터페이스 개발 )
                  </List>
                  <List spot="s">
                    테스트 , 스토리북 작성 시 실제와 비슷한 환경에서 실행 가능
                  </List>
                </List>
              </List>
              <List spot="l">
                테스트 코드 및 스토리북 작성
                <List spot="m">
                  <Highlight>jest</Highlight>,{" "}
                  <Highlight>React Testing Library</Highlight> 와{" "}
                  <Highlight>msw ( mock service worker )</Highlight>를 사용해서
                  테스트 코드 작성
                  <List spot="s">테스트 coverage 20% → 87% 달성</List>
                </List>
                <List spot="m">
                  <Highlight>msw ( mock service worker )</Highlight> 를 사용해서
                  스토리북 작성
                </List>
              </List>
              {/* 구분선 */}
              <Header size="s">
                관리자용 작업 관제 웹 프로덕트 개발 및 서비스{" "}
              </Header>
              <Text>
                <Highlight>2022.04 ~ 2023.01</Highlight>
              </Text>
              <List spot="l">관리자를 위한 로봇 관제 웹 프로덕트 개발</List>
              <List spot="l">
                프로덕트 유지보수 및 리팩토링 진행
                <List spot="m">
                  자바스크립트 → 타입스크립트 전환 ( 95% 이상 전환 )
                </List>
                <List spot="m">
                  프로젝트의 모듈화 진행
                  <List spot="s">
                    약 30부분 이상의 유효성 검사 기능에 모듈화 적용
                  </List>
                </List>
              </List>
            </>
          }
        />

        <Header size="s">학력</Header>
        <Text>홍익대학교 컴퓨터공학과 졸업</Text>
        <Text>
          <Highlight>2015.3 - 2022.2</Highlight>
        </Text>
      </div>
    </>
  );
}
