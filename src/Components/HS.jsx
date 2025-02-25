import '../App.css';

export default function HS({ toggled }) {
    return (
        <div className="hs">
                  
            <h1 className={`${!toggled ? "visible" : "disabled"}`}>Всё плохо?</h1>  
            
            <h1 className={`${toggled ? "visible" : "disabled"}`}>Теперь все хорошо</h1>
        
        </div>
    )
}