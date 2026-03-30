import styles from "./TestProfile.module.css"

export function NotPresent({children}) {
    return (
        <div className="notPresent" style={{backgroundColor: "goldenrod", fontFamily: "Georgia"}}>
            <h1 className={styles.testProfileBox}>Students not present</h1>
            <div className="bg-green-600">
                { children }
            </div>
        </div>
    )
}