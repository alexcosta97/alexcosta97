import style from './index.module.less';

export default function AboutMe() {
  return (
    <section className={style.aboutMe}>
      <h1>About Me</h1>
      <p>
        I'm a software engineer who loves to build great products and improve the experience of
        developing software.
      </p>
      <p>
        I have experience in all parts of modern software development (front-end, back-end and
        mobile development), but my main area of expertise lies in back-end development using
        Node.js with the Express framework.
      </p>
      <p>
        But I'm more than my job and career. When I'm not coding, you can find me{' '}
        <a href='https://twitch.tv/c0axial97'>speedrunning video games</a> (most likely the 3D-era
        Grand Theft Auto games), having a coffee or a drink with friends, listening to music or
        writing fanfiction.
      </p>
    </section>
  );
}
