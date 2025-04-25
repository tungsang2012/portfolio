import styles from '@/styles/ContactCode.module.css';

const contactItems = [
  {
    social: 'email',
    link: 'sang.luontung@gmail.com',
    href: 'mailto:sang.luontung@gmail.com',
  },
  {
    social: 'github',
    link: 'tungsang2012',
    href: 'https://github.com/tungsang2012',
  },
  {
    social: 'linkedin',
    link: 'luong.tungsang',
    href: 'https://www.linkedin.com/in/luong-tung-sang-30074b21b/',
  },
];

const ContactCode = () => {
  return (
    <div className={styles.code}>
      <p className={styles.line}>
        <span className={styles.className}>.socials</span> &#123;
      </p>
      {contactItems.map((item, index) => (
        <p className={styles.line} key={index}>
          &nbsp;&nbsp;&nbsp;{item.social}:{' '}
          <a href={item.href} target="_blank" rel="noopener">
            {item.link}
          </a>
          ;
        </p>
      ))}
      <p className={styles.line}>&#125;</p>
    </div>
  );
};

export default ContactCode;
