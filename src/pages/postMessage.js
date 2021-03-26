import React, {useEffect} from 'react'

export default function PostMessage() {
    const func = e => {
        console.log(e, 'window of postMessage');
    }
    useEffect(() => {
        // window.postMessage('my name is summer', '*')
        window.addEventListener('message', func, false)
        return () => {
            window.removeEventListener('message', func)
        }
    }, [])
    return (
        <div className="my-window">
            <iframe src="http://localhost:3001/zmc-webapp/student/studenthistorycourse?courseType=1&lessonId=2120373741&lessonUid=68532a45ef9a4738876d3ecd7c9ba76c" style={{width: '1000px', height: '500px'}}/>
        </div> 
    )
}
