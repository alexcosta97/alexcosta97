import style from './index.module.less';

interface Properties {
  text: string;
  link: string;
  isPrimary?: boolean;
}

export default function LinkButton({ text, link, isPrimary = true }: Properties) {
  return (
    <div
      className={[style.buttonLink, isPrimary ? style.primaryButton : style.secondaryButton].join(
        ' '
      )}>
      <a href={link}>{text}</a>
    </div>
  );
}
