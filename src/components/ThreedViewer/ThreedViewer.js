import  React , { useEffect, useRef } from "react";
import { Container } from "semantic-ui-react";
function ThreedViewer() {
  const container = useRef(null);

  useEffect(() => {
    const marmoset = window.marmoset;

    if (marmoset) {

      var params = { autoStart: false, fullFrame: true, pagePreset: false }
      var viewer = marmoset.embed("Room_2.mview", params);
      // const height  = container.current.getBoundingClientRect().height;
      // const width = container.current.getBoundingClientRect().width;
      // var viewer = new marmoset.WebViewer("Room_2.mview", params);
      marmoset.noUserInterface = true; //please be considerate
      container.current.appendChild(viewer.domRoot);
      // viewer.loadScene();
    }
    return () => {
      viewer.unload();
      // setRandom(Math.random())
    }
  }, [])

  return (
    <Container fluid>
      <div ref={container} className="m-container" >
      </div>
    </Container>
  );
}

export default ThreedViewer;
