import styles from 'styles/page2.module.css'

export default function page2() {
        return (
<div className={styles.contents}>
    <h1>My Layout</h1>
    <div className={styles.grid_column}>
        <div className={styles.box}>
            <h2>Box 1</h2>
            <p> hello world hello world hello world hello world</p>
	    <p></p>
            <p> hello world hello world hello world hello world</p>
        </div>
        <div className={styles.box}>
            <h2>Box 2</h2>
            <p>
                hello world hello world hello world hello world hello world hello world hello world hello world
            </p>
        </div>
    </div>

    <div className={styles.column}>
        <div className={styles.box}>
            <h2>Box 3</h2>
            <p>
                hello world hello world hello world hello world hello world hello world hello world hello world
            </p>
        </div>
        <div className={styles.box}>
            <h2>Box 4</h2>
            <p>
                hello world hello world hello world hello world hello world hello world hello world hello world
            </p>
        </div>
    </div>
</div>


	)
}
