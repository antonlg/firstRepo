#Open the app locally

You need 2 terminal tabs:
### First tab
1. Open 3 panes (split your tab vertically / horizontally) and go to your giffgaff folder in each one of them
  - In your 1st pane, go to **smart-stubbing-svc/smart-stub-server** folder and run:
  ```sh
  > mvn spring-boot:run
  ```
  - In the 2nd pane, go to **smart-data-loader** folder. After the you see _Started application_ in the first pane, run:
  ```sh
  > mvn -DtestEnvironment=local initialize
  ```
  - In the 3rd pane, go to **graphql-server**, and check that _stubs.js_ in _config_ folder the first link is **https** instead of **http**. Then, in your main graphql folder run:
  ```sh
  > npm i
  > npm run start:stubs
  ```

### Second tab
  - Go to your **re-app** folder and if you already did _npm i_ run:
  ```sh
  > npm run android -- -e .env.stubs
  ```
  In case you want to open the iOS app, just run:
    ```sh
  > npm run ios -- -e .env.stubs
  ```
