export function Person({ firstname, lastname, isPresent, onClickHandler }) {
  return (
    <div onClick={onClickHandler} style={{ cursor: 'pointer' }}>
      {firstname} {lastname} — {isPresent ? "Present" : "Absent"}
    </div>
  )
}