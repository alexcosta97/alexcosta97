import style from './index.module.less';

import ProjectItem from '~/components/project-item';

export default function Projects() {
  return (
    <div className={style.container}>
      <h1>Projects</h1>
      <ProjectItem
        name='mac-setup'
        description='A project that automates the setup of a laptop using Bash Scripts'
        links={[{ text: 'Source', url: 'https://github.com/alexcosta97/mac-setup' }]}
      />
      <ProjectItem
        name='nodejs-http-errors'
        description='Throwable HTTP Errors to use in Node.js back-end projects'
        links={[
          {
            text: 'Use',
            url: 'https://www.npmjs.com/package/@alexcosta97/http-errors'
          },
          {
            text: 'Source',
            url: 'https://github.com/alexcosta97/nodejs-http-errors',
            isPrimary: false
          }
        ]}
      />
      <ProjectItem
        name='danger-plugin-pr-utilities'
        description='An NPM package containing utilities to facilitate PR validation using DengerJS'
        links={[
          {
            text: 'Use',
            url: 'https://www.npmjs.com/package/danger-plugin-pr-utilities'
          },
          {
            text: 'Source',
            url: 'https://github.com/alexcosta97/danger-plugin-pr-utilities',
            isPrimary: false
          }
        ]}
      />
    </div>
  );
}
