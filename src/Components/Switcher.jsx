import '../App.css';

export default function Switcher({ toggled, setToggled }) {
    return (
        <button 
          className={`toggle-btn ${toggled ? "toggled" : ""}`}
          onClick={() => setToggled(!toggled)}
        >
          <div className="thumb">

          </div>
        </button>
    )
}