import React from "react";
import { Unity, useUnityContext } from "react-unity-webgl";

function App() {
	const { unityProvider, loadingProgression, isLoaded } = useUnityContext({
		loaderUrl: "/shipgame/shipgame.loader.js",
		dataUrl: "/shipgame/shipgame.data",
		frameworkUrl: "/shipgame/shipgame.framework.js",
		codeUrl: "/shipgame/shipgame.wasm",
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
			{!isLoaded && (
				<p>
					Loading Application...{" "}
					{Math.round(loadingProgression * 100)}%
				</p>
			)}
			<div style={{ display: "flex", width: "100%" }}>
				<div
					style={{
						width: "33%",
						paddingLeft: "10px",
						textAlign: "center",
					}}
				>
					<h4>Instrucciones</h4>
					<p>
						<b>Movimiento</b>: Mouse
					</p>
					<p>
						<b>Disparar</b>: Click primario
					</p>
					<p>¡Destruye monos!</p>
				</div>
				<div
					style={{
						width: "33%",
						paddingLeft: "10px",
						textAlign: "center",
					}}
				>
					<Unity
						unityProvider={unityProvider}
						style={{
							width: 480,
							height: 854,
							visibility: isLoaded ? "visible" : "hidden",
						}}
					/>
				</div>
			</div>
		</div>
	);
}

export default App;
