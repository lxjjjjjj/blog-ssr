import React from 'react'
import withStyle from '../hoc/withStyle'
import styles from '../static/style/components/Footer.css'
const Footer = ()=>(
    <div className={styles["footer-div"]}>
        <div>系统由 React+Node+Ant Desgin驱动 </div>
        <div>lxjjjjjj.com</div>
    </div>
)

export default withStyle(styles)(Footer)