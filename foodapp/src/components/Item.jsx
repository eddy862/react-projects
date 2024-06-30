import styles from './item.module.css';

export default function Item({item}) {
  return (<>
    <div className={styles.itemCtn}>
      <div className={styles.imageCtn}>
        <img src={`https://spoonacular.com/cdn/ingredients_100x100/${item.image}`} alt="" />
      </div>
      <div className={styles.nameCtn}>
        <div className={styles.name}>{item.name}</div>
        <div className={styles.amount}>{item.amount} {item.unit}</div>
      </div>
    </div>
  </>);
}