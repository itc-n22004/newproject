import styles from 'styles/hero.module.css'
import Link from 'next/link'

export default function Nav () {
	return (
		<nav>
			<ul className={styles.title}>
				<li>
					<Link legacyBehavior href="/page1">
						page1
					</Link>
				</li>
				<li>
					<Link legacyBehavior href="/page2">
						page2
					</Link>
				</li>
				<li>
					<Link legacyBehavior href="/page3">
						page3
					</Link>
				</li>
				<li>
					<Link legacyBehavior href="/page4">
						page4
					</Link>
				</li>
				<li>
					<Link legacyBehavior href="/page5">
						page5
					</Link>
				</li>
			</ul>
		</nav>
	)
}
