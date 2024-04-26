import clsx from 'clsx';
import Heading from '@theme/Heading';
import styles from './styles.module.css';

const FeatureList = [
  {
    title: 'Docker Setup',
    Svg: require('@site/static/img/undraw_docusaurus_mountain.svg').default,
    description: (
      <>
        Configure a Docker environment to facilitate the operation of backend applications across various environments, including local, staging, and production settings.
      </>
    ),
  },
  {
    title: 'Documentation of Base Code Utilized in the Backend',
    Svg: require('@site/static/img/undraw_docusaurus_tree.svg').default,
    description: (
      <>
        Provide comprehensive documentation covering essential backend components such as base models, repositories, queries, exceptions, and other relevant elements.
      </>
    ),
  },
  {
    title: 'Development Tutorial',
    Svg: require('@site/static/img/undraw_docusaurus_tree.svg').default,
    description: (
      <>
        Offer a detailed tutorial on initiating development using the current design patterns and effectively utilizing the provided base classes.
      </>
    ),
  },
  {
    title: 'Google Cloud Service Credential Configuration',
    Svg: require('@site/static/img/undraw_docusaurus_react.svg').default,
    description: (
      <>
        Outline the process for setting up Google Cloud Service credentials essential for backend application functionalities.
      </>
    ),
  },
  {
    title: 'Document Scan Functionality Explanation',
    Svg: require('@site/static/img/undraw_docusaurus_react.svg').default,
    description: (
      <>
        Explain the document scanning process within the project, including detailed instructions on its setup and integration.
      </>
    ),
  },
];

function Feature({Svg, title, description}) {
  return (
    <div className={clsx('col col--4')}>
      
      <div className="text--center padding-horiz--md">
        <Heading as="h3">{title}</Heading>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures() {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
