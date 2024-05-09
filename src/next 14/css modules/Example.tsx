import styles from './styles.module.scss'

export default function CssModule() {
    return (
        <p className={`${styles.header} ${styles.teste}`}>Example</p>
    )
}
