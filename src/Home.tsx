import React from "react"
import styles from "./Home.less"

import { DocTree } from "./components/DocTree"

const Home = () => (
    <div className={styles.container}>
        <DocTree />
    </div>
)

export default Home
