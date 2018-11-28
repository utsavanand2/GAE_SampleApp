#   Sample NodeJS Application for deploying to Google App Engine


###   Steps to deploy:
*   Make sure Google Cloud SDK is correctly installed, authenticated with your Google account and configured for the Google Cloud Project you are going to use

    If you are using Cloud Shell within the GCP console for deployment, then you get terminal access to a linux virtual machine that is already authorized to access resources in Google Cloud, hence no need to set up Google Cloud SDK on your local machine

    For instructions to set up Google Cloud SDK refer the official documentation at 
    https://cloud.google.com/sdk/

*   Open up a terminal window and clone this git repository 
    ```
    $ git clone https://github.com/utsavanand2/GAE_SampleApp.git
    ```
*   Go to the root of the cloned repo
    ```
    $ cd GAE_SampleApp
    ```

*   (Optional) To test the application locally, make sure you have a NodeJS installation of v8.0 or above

    Installing the dependencies
    ```
    $ npm install
    ```
    Running the application locally
    ```
    $ npm start
    ```

*   To deploy this sample application to App Engine
    ```
    $ gcloud app deploy
    ```

*   After the deployment is successful, to browse to your app, enter
    ```
    $ gcloud app browse
    ```