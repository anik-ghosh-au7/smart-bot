import { useEffect } from 'react';
import SpeechRecognition, {
	useSpeechRecognition,
} from 'react-speech-recognition';

const VoiceController = ({ getTranscript }) => {
	const commands = [
		{
			command: `anik *`,
			callback: (cmd) => {
				console.log('command ==>> ', cmd);
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
