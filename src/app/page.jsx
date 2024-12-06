import React from 'react';
import Link from "next/link";
import styles from './page.module.css'

export default function App() {

    return (
        <div className={styles.main}>
            <h1>useImperativeHandle examples</h1>
            <ol>
                <li><Link href={"base/ref"}>Base without useImperativeHandle</Link></li>
                <li><Link href={"base"}>Base with useImperativeHandle</Link></li>
                <li><Link href={"advanced"}>Advanced</Link></li>
                <li><Link href={"deps-not-correct/wrong"}>Deps are not correct - wrong</Link></li>
                <li><Link href={"deps-not-correct/correct"}>Deps are not correct - correct</Link></li>
                <li><Link href={"deps-empty/wrong"}>Deps are empty - wrong</Link></li>
                <li><Link href={"deps-empty/correct"}>Deps are empty - correct</Link></li>
                <li><Link href={"ref-modification/wrong"}>Ref modification - wrong</Link></li>
                <li><Link href={"ref-modification/correct"}>Ref modification - correct</Link></li>
                <li><Link href={"before-init/wrong"}>Before init - wrong</Link></li>
                <li><Link href={"before-init/correct"}>Before init - correct</Link></li>
                <li><Link href={"state-animation-sync/wrong"}>State animation sync - wrong</Link></li>
                <li><Link href={"state-animation-sync/correct"}>State animation sync - correct</Link></li>
            </ol>
        </div>
    );
}
