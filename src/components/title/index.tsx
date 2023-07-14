import style from './index.module.less';

export default function Title() {
  return (
    <section className={style.titleSection}>
      <h1 className={style.titleText}>
        Alex
        <br />
        <span className={style.accentText}>Costa</span>
      </h1>
      <p>Full Stack Software Engineer</p>
    </section>
  );
}
