'use client';

import useGetPosts from '@apis/useGetPosts';
import Blog from './components/Blog';
import Extra from './components/Extra';
import Introduce from './components/Introduce';
import Projects from './components/Projects';

const Main = () => {
  useGetPosts({});

  return (
    <>
      <Introduce />
      <Projects />
      <Blog />
      <Extra />
    </>
  );
};

export default Main;
