import React, { Fragment, Suspense, useState } from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';
import IdleModel from './models/IdleModel';
import VoiceController from './components/VoiceController';
import { MODEL_PATHS } from './constants';
import DanceModel from './models/DanceModel';
import FightModel from './models/FightModel';

export default function App() {
	const [modelPath, setModelPath] = useState(MODEL_PATHS.IDLE);
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
					{modelPath === MODEL_PATHS.IDLE && (
						<IdleModel position={[0.025, -0.9, 0]} />
					)}
					{modelPath === MODEL_PATHS.DANCE && (
						<DanceModel position={[0.025, -0.9, 0]} />
					)}
					{modelPath === MODEL_PATHS.FIGHT && (
						<FightModel position={[0.025, -0.9, 0]} />
					)}
				</Suspense>
				<OrbitControls />
			</Canvas>
			<VoiceController setModelPath={setModelPath} />
		</Fragment>
	);
}
