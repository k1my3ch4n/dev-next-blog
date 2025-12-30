import { Metadata } from "next";
import { notFound } from "next/navigation";
import { Header, Highlight, Link, List, Text, Title } from "@repo/components";
import { getProjectById, PROJECT_DETAILS } from "@data";
import { PROJECT_CONTENTS } from "../_contents";
import { generateArticleJsonLd } from "@lib/jsonLd";

const BASE_URL = "https://portfolio.k1my3ch4n.xyz";

interface PageProps {
  params: Promise<{ projectId: string }>;
}

export async function generateStaticParams() {
  return Object.keys(PROJECT_DETAILS).map((projectId) => ({
    projectId,
  }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { projectId } = await params;
  const project = getProjectById(projectId);

  if (!project) {
    return {
      title: "프로젝트를 찾을 수 없습니다",
    };
  }

  const projectUrl = `${BASE_URL}/project/${projectId}`;

  return {
    title: project.title,
    description: project.description,
    alternates: {
      canonical: projectUrl,
    },
    openGraph: {
      type: "article",
      locale: "ko_KR",
      url: projectUrl,
      siteName: "김예찬's Portfolio",
      title: project.title,
      description: project.description,
    },
    twitter: {
      card: "summary_large_image",
      title: project.title,
      description: project.description,
    },
  };
}

export default async function ProjectPage({ params }: PageProps) {
  const { projectId } = await params;
  const project = getProjectById(projectId);
  const ContentComponent = PROJECT_CONTENTS[projectId];

  if (!project || !ContentComponent) {
    notFound();
  }

  const Thumbnail = project.thumbnail;
  const thumbnailWidth = project.thumbnailWidth || "100%";

  const articleJsonLd = generateArticleJsonLd({
    title: project.title,
    description: project.description,
    projectId: project.id,
    period: project.period,
  });

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleJsonLd) }}
      />
      <Title title={project.title} />
      <div
        className={
          project.thumbnailWidth ? "flex w-full justify-center" : undefined
        }
      >
        <Thumbnail width={thumbnailWidth} height="auto" />
      </div>

      <Header size="s">기간</Header>
      <Text>
        <Highlight>{project.period}</Highlight>
      </Text>

      <ContentComponent />

      <Header size="s">관련 홈페이지 및 자료</Header>
      {project.relatedLinks.map((link, index) => (
        <List key={index}>
          <Link link={link.url}>{link.label}</Link>
        </List>
      ))}
    </>
  );
}
