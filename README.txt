# Readme for Episte-AI-Vision CLI TTS

## Introduction
This Command Line Interface (CLI) application, created by Thomas Yiu, leverages OpenAI's GPT models for parallel processing of prompts along with an image. The program facilitates intelligent conversations and generates audio responses.

## Prerequisites
- Node.js installed
- OpenAI API key set as an environment variable
- VLC installed for audio playback (`VLC must be installed for the audio playback to work!`)

## Installation
1. Clone the repository.
2. Navigate to the project directory in your terminal.
3. Run `npm install` to install the required dependencies.

## Usage
1. Run the application using the command `node index.js`.
2. Follow the prompts to enter the desired number of prompts and provide the image URL.
3. Enter the prompts as instructed.
4. press Enter to see response

## Configuration
- **OpenAI API Key:** Set your OpenAI API key in the environment variables in Windows
- **Models:** The application uses GPT-4 Vision for vision processing. Update the `model1`, `model2`, and `model3` variables in the code if needed.

## Recording Audio
- The application records audio based on the generated responses. Make sure to have the required recording libraries and dependencies installed. (optional)

## Additional Notes
- The application supports Windows and Mac OS (not mobile).
- Ensure VLC is installed for audio playback.
- Exit the program by typing 'END' or using Ctrl+C/Command+C.

## Acknowledgments
- This program is assisted by ChatGPT to enhance conversation capabilities.
- Last edited on 2023-12-18.

Feel free to reach out for any further assistance or improvements!
