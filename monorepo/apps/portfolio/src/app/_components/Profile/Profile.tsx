import {
  Divider,
  Header,
  Highlight,
  List,
  SplitGrid,
  Text,
} from "@repo/components";
import TwinnyLogo from "@/assets/images/twinnyLogo.svg";

const Profile = () => {
  return (
    <>
      <Header>🔎 Profile</Header>
      <Divider />
      <Header size="s">경력 (총 2년)</Header>
      <SplitGrid
        lhs={
          <>
            <TwinnyLogo />
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
                  적용으로 공통으로 사용되는 hook 과 component 를 중복하지 않고
                  사용 가능
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
            <Divider />
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
    </>
  );
};

export default Profile;
