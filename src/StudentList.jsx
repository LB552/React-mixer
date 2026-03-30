export function StudentList({children}) {
    return (
        <div className="studentList">
            <h1>List of students</h1>
            <div className="mt-4 bg-green-200">
                { children }
            </div>
        </div>
    )
}