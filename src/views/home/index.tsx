import style from './index.module.less';

import AboutMe from '~/components/aboutMe';
import Projects from '~/components/projects';
import Title from '~/components/title';

export default function Home() {
  return (
    <main className={style.container}>
      <Title />
      <AboutMe />
      <Projects />
    </main>
  );
}
