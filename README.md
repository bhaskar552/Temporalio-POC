# Temporal.io Project

This project demonstrates a Temporal.io workflow implementation where an activity simulates an external service call. 

## Prerequisites

1. **Node.js**: Ensure you have Node.js installed. You can download it 
2. **Temporal CLI**: You need to install Temporal CLI to run Temporal services locally.
  To install Temporal CLI on Windows, download the version for your architecture:
  https://temporal.download/cli/archive/latest?platform=windows&arch=amd64
  Once you've downloaded the file, extract the downloaded archive and add the temporal.exe binary to your PATH.
  Once you've installed Temporal CLI and added it to your PATH, open a new Terminal window and run the following command:

  ```bash
  temporal server start-dev
  ```

##  Project Setup Instructions

### Step 1: Clone the Repository

Clone this repository to your local machine:

```bash
git clone https://github.com/bhaskar552/Temporalio-POC.git
```
### Step 2 : Navigate to the project directory

```bash
cd Temporalio-POC
```

### Step 3: Install Dependencies

```bash
npm install
```
### Step 4: Run the Workflow

```bash
npm run start
```

### Step 5 : Test the Endpoints Using Postman

You can use Postman to test the workflow endpoint.

Open Postman: Download and install Postman from here.

Create a New Request:

Method: GET
URL: http://localhost:3000/temporal

Send the Request: Click on Send to trigger the workflow. You should see a response with the workflow result.


### Step 8: Verify Workflow Execution in Temporal UI
You can verify that your workflow ran successfully by checking the Temporal Web UI at http://localhost:8233. You should see the workflow execution details there.
