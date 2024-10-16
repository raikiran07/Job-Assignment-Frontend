# Job Portal

## Overview

This is a job portal application built using the MERN stack (MongoDB, Express.js, React.js, Node.js). The application provides a platform for companies to list job openings and allows candidates to receive automated email notifications about job postings through OTP (One-Time Password) verification via email and mobile number.

### Key Features

- **User Registration**: Users can register using their email or mobile number.
- **Email Verification**: An OTP is sent to the user's email address for verification.
- **Mobile Verification**: An OTP is sent to the user's mobile number using Twilio for verification.
- **Job Listings**: Companies can list available job postings.
- **Automated Email Notifications**: Companies can enter candidates' email addresses to send automated notifications about job openings.
- **Responsive UI**: Built with React.js, ensuring a seamless user experience across devices.

## Tech Stack

- **Frontend**: 
  - React.js: For building the user interface and managing the application state.
  - Axios: For making API calls to the backend.

- **Backend**: 
  - Express.js: For developing RESTful APIs.
  - Node.js: For server-side JavaScript execution.
  - MongoDB: For database management.

- **OTP Verification**:
  - Nodemailer: For sending OTP emails to users.
  - Twilio: For sending OTP via SMS to users' mobile numbers.

## Getting Started

### Prerequisites

- Node.js and npm installed
- MongoDB database (local or cloud instance)

### Installation

1. Clone the repository:
   ```bash
   git clone <repository-url>
   cd job-portal
