import {
  Divider,
  Header,
  ImageBox,
  Link,
  SplitGrid,
  Text,
  Title,
} from "@repo/components";

import { MainPhoto } from "@images";
import { PROFILE_INFO, INTRODUCE_TEXTS } from "@constants/profile";
import { LINKS } from "@constants/links";

const Introduce = () => {
  return (
    <div className="w-full mb-[20px]">
      <Title title={INTRODUCE_TEXTS.title} />
      <Divider />
      <SplitGrid
        lhs={
          <>
            <ImageBox
              Image={MainPhoto}
              width="200px"
              height="200px"
              imageClassName="rounded-[20px]"
            />
            <Text>{`🔥 ${PROFILE_INFO.name}`}</Text>
            <Text>{`✉️ ${PROFILE_INFO.email}`}</Text>
            <Text>{`📱 ${PROFILE_INFO.phone}`}</Text>
            <Text>{`🏠 ${PROFILE_INFO.address}`}</Text>
          </>
        }
        rhs={
          <>
            {INTRODUCE_TEXTS.headers.map((header, index) => (
              <Header key={index} size="m">
                {header}
              </Header>
            ))}
            <Header size="m">
              <Link link={LINKS.PORTFOLIO}>
                {INTRODUCE_TEXTS.portfolioLinkText}
              </Link>
            </Header>
          </>
        }
        rhsClassName="flex flex-col justify-center items-center"
      />
    </div>
  );
};

export default Introduce;
