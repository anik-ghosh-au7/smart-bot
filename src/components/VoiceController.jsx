import { useEffect } from 'react';
import SpeechRecognition, {
	useSpeechRecognition,
} from 'react-speech-recognition';
import { COMMANDS, MODEL_PATHS } from '../constants';

const VoiceController = ({ setModelPath, getTranscript = false }) => {
	const voiceCommandHandler = (cmd) => {
		console.log('command ==>> ', cmd);
		switch (cmd) {
			case COMMANDS.DANCE:
				setModelPath(MODEL_PATHS.DANCE);
				break;
			default:
				break;
		}
	};

	const commands = [
		{
			command: `anik *`,
			callback: (cmd) => {
				voiceCommandHandler(cmd);
				resetTranscript();
			},
		},
	];

	const { transcript, resetTranscript, browserSupportsSpeechRecognition } =
		useSpeechRecognition({ commands, continious: true });
	useEffect(() => {
		if (browserSupportsSpeechRecognition) {
			SpeechRecognition.startListening({ continuous: true, language: 'en-IN' });
		}
		return () => {
			if (browserSupportsSpeechRecognition) {
				SpeechRecognition.stopListening();
			}
		};
	}, [browserSupportsSpeechRecognition]);

	return getTranscript ? transcript : null;
};

export default VoiceController;
