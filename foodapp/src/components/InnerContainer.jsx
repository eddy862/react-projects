import styles from './innercontainer.module.css'

export default function InnerContainer({children}) {
  return (<div className={styles.innerCtn}>
    {children}
  </div>)
}