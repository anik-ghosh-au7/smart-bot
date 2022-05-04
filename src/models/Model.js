/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
*/

import React, { useEffect, useRef, useState } from 'react';
import { useGLTF, useAnimations } from '@react-three/drei';
import { COMMANDS, MODEL_ACTIONS, MODEL_PATH } from '../constants';

const Model = ({ action, ...props }) => {
	const group = useRef();
	const { nodes, materials, animations } = useGLTF(MODEL_PATH);
	const [currentAction, setCurrentAction] = useState(MODEL_ACTIONS.IDLE);
	const { actions } = useAnimations(animations, group);
	useEffect(() => {
		actions[currentAction].fadeOut(0.2);
		actions[currentAction].stop();
		switch (action) {
			case COMMANDS.DANCE:
				setCurrentAction(COMMANDS.DANCE);
				actions[COMMANDS.DANCE].play();
				break;
			case COMMANDS.FIGHT:
				setCurrentAction(COMMANDS.FIGHT);
				actions[COMMANDS.FIGHT].play();
				break;
			default:
				setCurrentAction(COMMANDS.IDLE);
				actions[COMMANDS.IDLE].play();
				break;
		}
	}, [actions, action, currentAction]);
	return (
		<group ref={group} {...props} dispose={null}>
			<group name="Scene">
				<group name="Armature">
					<primitive object={nodes.Hips} />
					<skinnedMesh
						name="Wolf3D_Body"
						geometry={nodes.Wolf3D_Body.geometry}
						material={materials['Wolf3D_Body']}
						skeleton={nodes.Wolf3D_Body.skeleton}
					/>
					<skinnedMesh
						name="Wolf3D_Glasses"
						geometry={nodes.Wolf3D_Glasses.geometry}
						material={materials['Wolf3D_Glasses']}
						skeleton={nodes.Wolf3D_Glasses.skeleton}
					/>
					<skinnedMesh
						name="Wolf3D_Hair"
						geometry={nodes.Wolf3D_Hair.geometry}
						material={materials['Wolf3D_Hair']}
						skeleton={nodes.Wolf3D_Hair.skeleton}
					/>
					<skinnedMesh
						name="Wolf3D_Outfit_Bottom"
						geometry={nodes.Wolf3D_Outfit_Bottom.geometry}
						material={materials['Wolf3D_Outfit_Bottom']}
						skeleton={nodes.Wolf3D_Outfit_Bottom.skeleton}
					/>
					<skinnedMesh
						name="Wolf3D_Outfit_Footwear"
						geometry={nodes.Wolf3D_Outfit_Footwear.geometry}
						material={materials['Wolf3D_Outfit_Footwear']}
						skeleton={nodes.Wolf3D_Outfit_Footwear.skeleton}
					/>
					<skinnedMesh
						name="Wolf3D_Outfit_Top"
						geometry={nodes.Wolf3D_Outfit_Top.geometry}
						material={materials['Wolf3D_Outfit_Top']}
						skeleton={nodes.Wolf3D_Outfit_Top.skeleton}
					/>
					<skinnedMesh
						name="EyeLeft"
						geometry={nodes.EyeLeft.geometry}
						material={materials['Wolf3D_Eye']}
						skeleton={nodes.EyeLeft.skeleton}
						morphTargetDictionary={nodes.EyeLeft.morphTargetDictionary}
						morphTargetInfluences={nodes.EyeLeft.morphTargetInfluences}
					/>
					<skinnedMesh
						name="EyeRight"
						geometry={nodes.EyeRight.geometry}
						material={materials['Wolf3D_Eye']}
						skeleton={nodes.EyeRight.skeleton}
						morphTargetDictionary={nodes.EyeRight.morphTargetDictionary}
						morphTargetInfluences={nodes.EyeRight.morphTargetInfluences}
					/>
					<skinnedMesh
						name="Wolf3D_Head"
						geometry={nodes.Wolf3D_Head.geometry}
						material={materials['Wolf3D_Skin']}
						skeleton={nodes.Wolf3D_Head.skeleton}
						morphTargetDictionary={nodes.Wolf3D_Head.morphTargetDictionary}
						morphTargetInfluences={nodes.Wolf3D_Head.morphTargetInfluences}
					/>
					<skinnedMesh
						name="Wolf3D_Teeth"
						geometry={nodes.Wolf3D_Teeth.geometry}
						material={materials['Wolf3D_Teeth']}
						skeleton={nodes.Wolf3D_Teeth.skeleton}
						morphTargetDictionary={nodes.Wolf3D_Teeth.morphTargetDictionary}
						morphTargetInfluences={nodes.Wolf3D_Teeth.morphTargetInfluences}
					/>
				</group>
			</group>
		</group>
	);
};

export default Model;

useGLTF.preload(MODEL_PATH);
