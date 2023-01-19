import styles from 'styles/page1.module.css'
export default function page1() {
	return (
		<div>
			<div className={styles.header}>
				<header className={styles.title}>SELF-INTRODUCTION</header>
			</div>
			
			<div className={styles.main}>
				<h2>Greeting</h2>
			
				<p>Hello!! my name is shurei iwata.</p>
				<p>I am a student of IT College Okinawa Cyber Security Department. Nice to meet you!!</p>

				<h2>My hobby 2</h2>

				<p>I like exercise these days.</p>
				<p>I like volleyball and soccer. let's do it together!!</p>
			</div>

			<div className={styles.footer}>
				<p>Copyright (c) 2023 shureiiwata. All rights reserved.</p>
			</div>
		</div>
	)
}
