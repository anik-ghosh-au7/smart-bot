import React, { Fragment, Suspense, useState } from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';
import VoiceController from './components/VoiceController';
import Model from './models/Model';
import { COMMANDS } from './constants';

export default function App() {
	const [modelAction, setModelAction] = useState(COMMANDS.IDLE);
	return (
		<Fragment>
			<Canvas
				camera={{ position: [2, 0, 12.25], fov: 15 }}
				style={{
					backgroundColor: '#111a21',
					width: '100vw',
					height: '100vh',
				}}
			>
				<ambientLight intensity={1.25} />
				<ambientLight intensity={0.1} />
				<directionalLight intensity={0.4} />
				<Suspense fallback={null}>
					<Model action={modelAction} position={[0.025, -0.9, 0]} />
				</Suspense>
				<OrbitControls />
			</Canvas>
			<VoiceController setModelAction={setModelAction} />
		</Fragment>
	);
}
