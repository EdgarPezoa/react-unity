import React from "react";
import { Unity, useUnityContext } from "react-unity-webgl";

function App() {
	const { unityProvider } = useUnityContext({
		loaderUrl: "/mygame/mygame3.loader.js",
		dataUrl: "/mygame/mygame3.data",
		frameworkUrl: "/mygame/mygame3.framework.js",
		codeUrl: "/mygame/mygame3.wasm",
	});

	return (
		<div
			style={{
				display: "flex",
				justifyContent: "center",
				flexWrap: "wrap",
			}}
		>
			<h1 style={{ width: "100%", textAlign: "center" }}>My ship game</h1>
			<Unity
				unityProvider={unityProvider}
				style={{ width: 480, height: 854 }}
			/>
		</div>
	);
}

export default App;
