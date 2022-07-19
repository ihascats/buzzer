import './styles/Popup.css';

export default function Popup({ top, right, bottom, left }) {
  return (
    <div style={{ inset: top, right, bottom, left }} className="popup">
      <button>Log out</button>
    </div>
  );
}
