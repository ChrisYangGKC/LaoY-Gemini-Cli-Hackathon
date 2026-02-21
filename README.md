# Tech Talks Today Website

Welcome to the Tech Talks Today website! This is a single-page application that displays the schedule for a one-day technical conference.

This project was created with the assistance of the Gemini CLI, which helped with code generation, deployment, and troubleshooting.

## Features

*   **Full-day schedule:** View the entire schedule for the tech conference, including talks and breaks.
*   **Search by category:** Filter the talks by category to easily find the topics you are interested in.
*   **Responsive design:** The website is designed to be accessible on both desktop and mobile devices.

## Getting Started

To run this website locally, you will need to have Node.js and npm installed.

1.  **Install dependencies:**
    ```bash
    npm install
    ```

2.  **Start the local server:**
    ```bash
    npm start
    ```

    The website will be available at [http://localhost:3000](http://localhost:3000).

## Deployment to Google Cloud Run

Our goal was to deploy this application to Google Cloud Run to make it available on the web. Here is a summary of our deployment journey:

1.  **Containerization:** We created a `Dockerfile` to containerize the Node.js application.

2.  **Building the image:** We used Google Cloud Build to build the container image and push it to the Google Artifact Registry.

3.  **Deployment:** We deployed the container image to Cloud Run.

4.  **Troubleshooting:** We encountered several challenges during the deployment process, primarily related to organization policies and permissions in the Google Cloud project.
    *   **Public access:** Our initial attempts to make the service publicly accessible were blocked by an organization policy.
    *   **Internal access:** We then configured the service for internal access, but this also required specific IAM permissions that were not available.

5.  **Final State:** The application is currently deployed on Cloud Run and is accessible internally within the Google Cloud project.

## Development with Gemini CLI

This project was developed with the extensive help of the Gemini CLI. Here are some of the ways Gemini assisted in the process:

*   **Project setup:** Gemini created the initial project structure, including the `index.html`, `style.css`, `script.js`, and `server.js` files.
*   **Code generation:** Gemini generated the placeholder data for the talks and wrote the initial code for the frontend and backend.
*   **Deployment assistance:** Gemini provided the `gcloud` commands for building the container image and deploying to Cloud Run.
*   **Troubleshooting and debugging:** When we encountered deployment issues, Gemini helped diagnose the problems by analyzing the error messages and logs. Gemini suggested solutions and provided the necessary commands to fix the issues.
*   **Documentation:** Gemini created this `README.md` file to document the project and our development process.

This project is a great example of how the Gemini CLI can be used to accelerate development, from initial idea to deployment and troubleshooting.
