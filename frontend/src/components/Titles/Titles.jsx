import styles from "../../styles/Titles/Titles.module.scss"

const Title = ({children}) => {
  return (
    <div className={styles.title}>
        {children}
    </div>
  )
}

export { Title };