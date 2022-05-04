import { useEffect } from 'react';
import SpeechRecognition, {
	useSpeechRecognition,
} from 'react-speech-recognition';
import { COMMANDS } from '../constants';

const VoiceController = ({ setModelAction, getTranscript = false }) => {
	const voiceCommandHandler = (cmd) => {
		console.log('command ==>> ', cmd);
		if (Object.values(COMMANDS).includes(cmd)) {
			setModelAction(cmd);
		}
	};

	const commands = [
		{
			command: `bro *`,
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
