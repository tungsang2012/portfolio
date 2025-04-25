import styles from '@/styles/AboutPage.module.css';

const AboutPage = () => {
  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <h1 className={styles.title}>Luong Tung Sang</h1>
        <div className={styles.subtitle}>Software Engineer</div>

        <div className={styles.aboutContent}>
          <section className={styles.section}>
            <p className={styles.paragraph}>
              Hey! I&apos;m a software engineer from Ho Chi Minh City, VietNam. I primarily
              work with .Net, Javascript / TypeScript and the Angular, React ecosystem.
            </p>
            <p className={styles.paragraph}>
              I&apos;m focused on frontend development with Angular, React but
              you&apos;ll also find me working with Asp.Net, Node.js, MSSQL and MongoDB
              while building the backend for my personal projects.
            </p>
          </section>

          <section className={styles.section}>
            <h2 className={styles.sectionTitle}>Experience</h2>
            <p className={styles.paragraph}>
              Currently at <span className={styles.highlight}>FPT Software Malaysia</span> as
              Software Engineer (Expert), working with a lean team of 4 full stack engineers
              to build a website for Petronas - a leading global energy company.
            </p>
            <p className={styles.paragraph}>
              I&apos;ve been leading the development efforts for bringing
              collaborative video reviewing and editing to the platform. I also
              maintain our in-house component library, icon library and website.
            </p>
          </section>

          <section className={styles.section}>
            <h2 className={styles.sectionTitle}>Beyond Code</h2>
            <p className={styles.paragraph}>
              Aside from programming, I like to read a good
              dystopian novel, listen to music and playing football.
            </p>
          </section>
        </div>
      </div>
    </div>
  );
};

export async function getStaticProps() {
  return {
    props: { title: 'About' },
  };
}

export default AboutPage;
