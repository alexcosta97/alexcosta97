import style from './index.module.less';

export default function Home() {
  return (
    <main className={style.container}>
      <h1 style={{ textAlign: 'center', fontSize: '4rem', lineHeight: '3.5rem', fontWeight: '700'}}>
        Alex
        <br />
        Costa
      </h1>
      <p>Software Engineer with a focus on back-end development</p>
    </main>
  );
}
