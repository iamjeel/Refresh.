
import useContextMenu from './useContextMenu';
import '../assets/App.css'

const Main = () => {
  const { anchorPoint, show } = useContextMenu();

  if (show) {
    return (
      <ul className="main" style={{ top: anchorPoint.y, left: anchorPoint.x }}>
        <li>Refresh</li>
   
      </ul>
    );
  }
  return <></>;
};
export default Main;

