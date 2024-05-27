export function AddNoteSideMenu({onAddNoteImg, onAddNoteVideo}){




    return <div className="side-bar">
                <div className="action-icon">
                    <img src="assets\img\new_list.svg" alt="" />    
                    <span className="action-name">New list</span>
                </div>
                <div className="action-icon">
                    <img src="assets\img\new_note_with_drawing.svg" alt="" />      
                    <span className="action-name">New note with drawing</span>
                </div>
                <div className="action-icon" onClick={onAddNoteVideo}>
                    <img height="24" width="24" src="assets\img\video.png" alt="" />      
                    <span className="action-name">New note with video</span>
                </div>
                <div className="action-icon" onClick={onAddNoteImg}>
                    <img src="assets\img\new_note_with_img.svg" alt="" />      
                    <span className="action-name">New note with image</span>
                </div>
            </div>
}