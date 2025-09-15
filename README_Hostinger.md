
# Instructions for A1 Furniture Polish Website

This document provides instructions for updating and deploying the A1 Furniture Polish website on Hostinger.

## How to Update Prices Manually

Prices for the services are located in the `src/pages/Services.tsx` file. To update a price, follow these steps:

1.  **Open the file:** `a1-furniture-polish/src/pages/Services.tsx`
2.  **Locate the `services` array:** This array contains the list of services and their details.
3.  **Update the `ourPrice` and `ucPrice` values:** Find the service you want to update and change the values for `ourPrice` and `ucPrice`.

```javascript
const services = [
  {
    name: 'Bed Wood Polish',
    ucPrice: 2999, // UrbanCompany price
    ourPrice: 2699, // Our price
    // ... other details
  },
  // ... other services
];
```

## How to Deploy the Updated Site to Hostinger

1.  **Build the project:** Open your terminal, navigate to the `a1-furniture-polish` directory, and run the following command:

    ```bash
    npm run build
    ```

2.  **Upload the build files:**
    *   Log in to your Hostinger account.
    *   Go to the **File Manager** for your domain.
    *   Navigate to the `public_html` directory.
    *   Delete the existing files (or create a backup).
    *   Upload the contents of the `a1-furniture-polish/dist` directory to `public_html`.

## How to Connect Firestore for Live Price Storage

To store and manage prices in real-time, you can use Google Firestore. Here's how to set it up:

1.  **Set up a Firebase project:**
    *   Go to the [Firebase Console](https://console.firebase.google.com/) and create a new project.
    *   Add a web app to your project and copy the Firebase configuration object.

2.  **Install the Firebase SDK:**

    ```bash
    npm install firebase
    ```

3.  **Create a `firebase.ts` file:**
    *   In the `src` directory, create a file named `firebase.ts`.
    *   Add the following code to the file, replacing the placeholder with your Firebase config:

    ```typescript
    import { initializeApp } from 'firebase/app';
    import { getFirestore } from 'firebase/firestore';

    const firebaseConfig = {
      // Your Firebase config object here
    };

    const app = initializeApp(firebaseConfig);
    const db = getFirestore(app);

    export { db };
    ```

4.  **Fetch prices from Firestore:**
    *   In `Services.tsx`, you can now import the `db` object and fetch the prices from a Firestore collection.
    *   You would need to create a collection in Firestore (e.g., `services`) and add documents with the price details.

**Note:** You will need to write the necessary code to fetch the data from Firestore and update the component's state.
