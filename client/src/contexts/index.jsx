import { TopBarProvider } from './TopBarContext';
import { CanvasProvider } from './CanvasContext';

function ContextProvider(props) {
  return (
    <TopBarProvider>
      <CanvasProvider>{props.children}</CanvasProvider>
    </TopBarProvider>
  );
}

export default ContextProvider;
