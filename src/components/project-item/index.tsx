import LinkButton from '~/components/linkButton';
import style from './index.module.less';

interface Link {
  text: string;
  url: string;
  isPrimary?: boolean;
}

interface Properties {
  name: string;
  description: string;
  links: Link[];
}

export default function ProjectItem({ name, description, links }: Properties) {
  return (
    <div className={style.container}>
      <h2>{name}</h2>
      <p>{description}</p>
      <div className={style.buttonContainer}>
        {links.map(link => (
          <LinkButton text={link.text} link={link.url} isPrimary={link.isPrimary} />
        ))}
      </div>
    </div>
  );
}
