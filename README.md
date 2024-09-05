

# Messaging App

## Description

This is a React-based messaging application that provides users with a seamless experience for managing and interacting with their conversations. The application leverages Zustand for state management, React Context for authentication, and integrates several UI components for a smooth chat experience.

## Live Demo

You can view the live demo of this project 
https://chat-application-aa8d.onrender.com 

Feel free to explore the app and see its features in action!

## Features

- **User Authentication**: Users can log in and authenticate using their credentials.
- **Conversation Management**: Users can select, view, and manage their conversations.
-  **Real-Time Messaging**: Utilizes Socket.IO for real-time bidirectional communication.
- **Message Input and Display**: Real-time messaging capabilities with an intuitive input field and message display area.
- **Responsive Design**: Ensures a good user experience across different screen sizes and devices.

## Technologies Used

- **React**: JavaScript library for building user interfaces.
- **Zustand**: State management library for managing conversation states.
- **React Context**: Provides a way to pass data through the component tree without having to pass props down manually at every level.
- **Tailwind CSS**: Utility-first CSS framework for styling the application.
- **React Icons**: Icon library for adding icons to the UI.
-  **Socket.IO**: Library for real-time, bidirectional, and event-based communication.

## Installation

To get started with this project locally, follow these steps:

1. **Clone the repository:**
   ```bash
   git clone https://github.com/manushukla2/Chat-Application.git
   ```



2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Start the development server:**
   ```bash
   npm start
   ```

4. **Open your browser and go to:**
   ```
   http://localhost:3000
   ```

## Usage

- **Authentication**: Users need to log in to access the chat functionality.
- **Conversation Selection**: Click on a conversation from the list to view and send messages.
- **Message Input**: Type your message in the input field and press enter to send.
- **Real-Time Communication**: Messages are sent and received in real-time using Socket.IO.

## Screenshots

Below are some screenshots of the application in action:

### Signup Screen



![Screenshot 2024-08-30 231413](https://github.com/user-attachments/assets/19d51305-abae-4ff1-85ff-e93fc4604062)



### Login Screen



![Screenshot 2024-08-30 231726](https://github.com/user-attachments/assets/5c346281-af30-4606-938c-78c1db1c23f3)

### Chat Window


![Screenshot 2024-08-30 231913](https://github.com/user-attachments/assets/2145acfa-4bdf-45a4-a526-74bc7ddfa2ac)


### Bi-Directional Chat Window

![Screenshot 2024-08-30 233741](https://github.com/user-attachments/assets/7b9591c4-871e-481d-a78e-54e7784f6217)


### No Conversation Selected

![Screenshot 2024-08-30 232746](https://github.com/user-attachments/assets/094b0e3c-05ee-4e2a-96cf-a36f8907a930)


### Search Conversation 


![Screenshot 2024-08-30 233537](https://github.com/user-attachments/assets/0deb367a-a6f9-451f-ad39-70dd83125db3)


## Components

- **`MessageContainer`**: Displays the selected conversation, header with back navigation, messages, and message input.
- **`MessageInput`**: Provides a text field for users to type and send messages.
- **`Messages`**: Displays the list of messages in the selected conversation.
- **`NoChatSelected`**: Displays a welcome message when no conversation is selected.

## Contributing

Contributions are welcome! Please fork the repository and submit a pull request with your changes. Please open an issue on the GitHub repository for bug reports and feature requests.

## Acknowledgments

- **React** and **React Icons** for providing powerful tools for UI development.
- **Zustand** and **React Context** for state management solutions.
- **Tailwind CSS** for a fast and flexible way to style the application.
- **Socket.IO** is used to enable real-time communication features.

---

