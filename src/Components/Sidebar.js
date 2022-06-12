function Sidebar( { notes, onAddNote, onDeleteNote, activeNote, setActiveNote } ) {

  const sortedNotes = notes.sort((a, b) => b.lastModified - a.lastModified);

  return (
    <div className='sidebar'>
        <div className='header'>
            <h1>Notes</h1>
            <button onClick={onAddNote}>Add</button>
        </div>
        <div className='notes'>
          {sortedNotes.map((note) => (
             <div 
             className={`app-sidebar-note ${note.id === activeNote && "active"}`} 
             onClick={() => setActiveNote(note.id)}>
            <div className='note-title'>
                <strong>{note.title}</strong>
                <button onClick={() => onDeleteNote(note.id)}>Delete</button>
            </div>

            <p>{note.body && note.body.substr(0, 100) + "..."}</p>
            <small className='note-meta'>
              Last modified{" "}
            {new Date(note.lastModified).toLocaleDateString("en-GB", {
              hour: "2-digit",
              minute: "2-digit",
            })}</small>
              </div>
            ))}
        </div>
    </div>
  )
}

export default Sidebar