import {
  Divider,
  Header,
  ImageBox,
  Link,
  SplitGrid,
  Text,
  Title,
} from "@repo/components";

import { MainPhoto } from "@shared/assets";
import { PROFILE_INFO, INTRODUCE_TEXTS, LINKS } from "@shared/config";

const Introduce = () => {
  return (
    <section className="w-full mb-[20px]">
      <Title title={INTRODUCE_TEXTS.title} />
      <Divider />
      <SplitGrid
        lhs={
          <address className="not-italic">
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
          </address>
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
    </section>
  );
};

export default Introduce;
