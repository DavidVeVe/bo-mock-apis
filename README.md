# Mock APIs
<hr>

The current repository is used to mock the APIs served for both testing-interface and uix repositories, so it can be used for UI
development, and also to run tests against it.

__Have in mind that this are not real APIs responding, they are dummy responses based on few small details of the requests,
they don't save files, they don't do sorting nor any other logic.__

_Note:_ It can be extended to serve more than APIs.

<hr>

## Table of contents

- [Usage](#usage)
- [Testing Interface APIs](#testing-interface)
    - [Available Keys](#Available-keys)
    - [End points covered](#endpoints-covered)
    - [Development](#development)
        - [Structure](#Structure)
        - [Add new scenario](#Add-new-scenario)
        - [Add new endpoint](#Add-new-endpoints)
- [UIX APIs](#uix)
    - [Available sessions](#uix-available-sessions)
    - [Available accounts](#uix-available-accounts)
    - [Development](#uix-development)
            - [Structure](#uix-structure)
            - [Add new session](#uix-session)
            - [Add new endpoint](#uix-endpoints)
- [Tests](#tests)
- Documentation

<a name="usage"></a>
## Usage
There are two ways to use this project
1. __Clon it locally__ This development can be used while adding more cases, since changes can be used directly.

1. __As dependency__ THis project can be used as dependency of other projects, so other projects are "self sufficent" by
their own.

### As a clone

1. Clone the repository using the provided

#### Pre-requisites
* You need to have at least read permissions to the current repository
* Have Node v8.12.0 and npm v6.4.1
> To check if you have node installed, type on console `node --version && npm --version`. If any error or version is not
the required, it is recommended to install node using [nvm](https://github.com/creationix/nvm)

#### Clonning and set up
* Get the url to clone the repository on the upper left sidebar below to your profile avatar
* Clone the repository typing
`git clone <repositry-url>`
* Move to the repository directory
`cd mock-apis`
* Install the package, you need to have internet connection and probably be connected to BlueOptima VPN
`npm install`
> This will download all the required repository dependencies, and the first time it can take some time

* If no errors then you're all set up. In case of any error please email [Enrique Ulloa](mailto:enrique.ulloa@blueoptima.com)
for support.

#### Running the API Server
* start API server

```npm run start:api ```

> This will start an local server listening on the port 9000 by default.

* Override server port

```API_PORT=<port number> npm run start:api```


### As a dependency
- On the project you want to install it as dependency, add the following line to your package.json
```
"dependencies": {
   ...

   "mock-apis": "git+https://git.blueoptima.com/uf/mock-apis.git",
    ...
  }
 ```
- Type `npm install` on the console

- Now you can start the API server typing `APP=ti node ./node_modules/mock-apis/index.js`
- Additionally you can create a script to start your api `"start:api": "APP=ti node ./node_modules/mock-apis/index.js"`

<a name="testing-interface"></a>
# Testing Interface

<a name="Available-keys"></a>
## Available keys
* 'anyKey' Related sessions: 1738
* 'keyNewUser' Related sessions: 1742. This link is created for new user who does not get test previously(system has not information about user).
* 'expiredKey' Related sessions: 1. This link expires on starting test with 403 satus in response from server.
* 'keyCameraDetectingDisabled' Related sessions: 1744. Link with disabled camera detecting.
* 'updateInProgress' Related sessions: 1745. Link with task status "update in progress".
* 'otherSessionActive' Related sessions: 4. Authenticate returns that there is another active session. On terminate testSession "in progress".
* 'alreadyExpired' Related sessions: 3. Link is expired.
* 'successfulCompleted' Related sessions: 5. Link is finished with passed result.
* 'failedCompleted' Related sessions: 6. Link is finished with failed result.
* 'snapshotTimeout' Related sessions: 7. Saving final snapshot takes 5 seconds.
* 'keyLessTimeToSolveTest' Related sessions: 1746. Amount of time to solve test is 2 minutes 3 sec.
* 'keyTwoProblemsOneSubmission' Related sessions: 1747. (Use ONLY if no other developer is using it, otherwise you might encounter issues for simultaneous requests) Adding one submission and two problems with ability to switch from one to the other.
* 'javaTask' Related sessions: 1750. Working with a Java Task to display a compile button.
* 'longResponseTime' Related sessions: 1751. Long response time in execute & submit requests (10 secs).
* 'sqlTest' Related sessions: 1752. SQL test
* 'demographicSurvey' Related sessions: 1753. Displays the demographic survey before to start the test

### Demo session
* Session with __testSessionId=0__ available for demo purposes.

<a name="endpoints-covered"></a>
## End points covered

- /api/v1/authenticate
- /api/v1/refreshtoken
- /api/v1/signature
- /api/v1/testSessions/{testSessionId}
- /api/v1/testSessions/{testSessionId}/snapshots
- /api/v1/testSessions/{testSessionId}/tasks
- /api/v1/testSessions/{testSessionId}/tasks/{taskId}
- /api/v1/testSessions/{testSessionId}/tasks/{taskId}/activity
- /api/v1/testSessions/{testSessionId}/tasks/{taskId}/files
- /api/v1/testSessions/{testSessionId}/tasks/{taskId}/files/{filename}/
- /api/v1/testSessions/{testSessionId}/tasks/{taskId}/listOfAnswers
- /api/v1/testSessions/{testSessionId}/tasks/{taskId}/resetToSubmission
- /api/v2/testSessions/{testSessionId}/tasks/{taskId}/submissions
- /api/v2/testSessions/{testSessionId}/tasks/{taskId}/submissions/{submissionId}
- /api/v2/testSessions/{testSessionId}/tasks/{taskId}/timer
- /api/v1/errorLog

### Endpoints not covered
- /api/v1/languages
- /api/v1/ping

> During initial development it wasn't found any usage of these two endpoints, therefore implementation was not done


<a name="development"></a>
## Development
In essence, this repository should growth as more cases are required to test or cover. Therefore in order to add more
cases her we have some tips:

<a name="Structure"></a>

### Structure
This project is structured in three main parts of the folder

```
.
   ├── api
   │   └── testing-interface
   ├── config
   │   └── testing-interface
   ├── data
   │   └── testing-interface
   │       ├── authenticate
   │       ├── refreshtoken
   │       └── testSessions
   |-- index.js
```

While the main file and the one that starts the local server is `index.js` located at root, the file who has the details
for all routes supported is
`config/router.js`

#### api
Contains files that mocked the API's and have the logic response in here. Some of them serve .json files, some
others just success/fail responses. All of them contain only available methods for such endpoint.

_api/AbstractFilePath.js_ Is an abstraction of functions where node mehtods and functions are used. Is used as an utility.
If in any of your endpoints you require to add something from node, i.e. `fs` library, then you add it here and on your
endpoint abstraction you require this AbstractFilePath

_api/RequestHandler.js_ It is an object that contains instances of all described and available endpoints.

_api/Config.js_ It is used to easily add/manage success responses of given endpoints. File is self descriptive.


#### config
Contains the router configuration. Which in most of the cases will be the one required to be updated

#### data
Contains a folder structure similar to the endpoint url, and here is where the responses are stored.

<a name="Add-new-scenario"></a>
### Add new scenario
All below bullets, are assumming that provided files will contain a valid response structure.
1. Add a new key under `data/authenticate` **Name given to the json file will be a valid key**.
2. Create a new folder under `data/testSessions`. The folder should be named as the testSessionId provided in response of previous step.
3. Replicate folder structure under `data/testSessions/1738`.
4. Rename files accordingly to the new session recorded.

    4.1 All mocked endpoints look up for a file with a specific name structure. If you don't follow or miss spelled any
    of the files names, then that endpoint will return a `401` response.

5. Replace content of the files accordingly to the new session recorded.
6. On `api/AccountHelper.js` include the taskIds, sessionIds, and submissionIds that you want to return a success response for
each of the endpoints.

    6.1. If you don't add either taskId, sessionId or  submissionIds in any of the endpoints described there, then that
    endpoint is configured to return a failure response. _Some ids might be intentionally not in included to tests
    failure scenarios_
7. Update this file in the section of  *Available keys* to include the new key
you just added
8. Increase package version


<a name="Add-new-endpoints"></a>
### Add new endpoints
1- Add your new endpoint `config/testing-interface/router.js`, make sure to add only the methods that the endpoint will support.

__DO NOT ADD ANY LOGIC HERE__

2- Create your mock endpoint in `api` folder, creating a new file.
* If your endpoint will serve a response from a json, you can take as example `Authenticate.js`
* If your endpoint will serve a "SUCCESS"/"FAIL" response, you can take as example `Activity.js`
* Keep your logic as simple as possible

3- Add your mock data in data folder. Make sure to follow a similar structure to the used by the API
i.e. If your new endpoint is /api/v2/testSessions/{testSessionId}/tasks/{taskId}/compile
Then your data should be placed in a structure like
```
    .
    |--data
    |   |
    |   |--testing-interface
    |       |
            |--testSessions
            |   |
            |   |--1233
            |   |   |
            |   |   |--compile
            |   |   |   |
            |   |   |   |--compile-{taskIdNumber}-get.json
```

> Keep in mind that if you add a new endpoint, previous data there won't have it so you need to replicate this file
structure on existing data, otherwise while this data is required the API will file since it won't find such structure.
i.e. data/testSessions/1738 doesn't have this compile folder nor the compile file.

<a name="uix"></a>
# UIX

<a name="uix-available-sessions"></a>
### Available sessions
* 'validSession' SuperAdmin group user, with full access. All data is coming from default `filePrefix-method.json`
i.e `profile-get.json`

<a name="uix-available-accounts"></a>
### Available Accounts
```
        user: 'test@uix.com',
        password: 'p@55w0rd!'
 ----
        user: 'john.snow@uix.com',
        password: 'IKn0wN0th1ng!'
 ----
        user: 'test_121@uix.com',
        password: 'p@55w0rd!'
 ----
        user: 'in_app_notification@uix.com',
        password: 'p@55w0rd!'

```
 Available accounts can be found on `api/uix/Config.js`

#### Permissions in accounts
Relation between user-permissions

| User               | Cost   |
| -------------------| ------ |
| test@uix.com       | true   |
| -------------------| ------ |
| john.snow@uix.com  | true   |
| -------------------| ------ |
| test_121@uix.com   | false  |



<a name="uix-development"></a>
### Development
In essence, this repository should growth as more cases are required to test or cover. Therefore in order to add more
cases her we have some tips:

<a name="uix-structure"></a>
#### Structure
This project is structured in three main parts of the folder

```
.
   ├── api
   │   └── uix
   ├── config
   │   └── uix
   ├── data
   │   └── uix
   │       ├── authenticate
   │       ├── refreshtoken
   │       └── alerts
   |-- index.js
```

While the main file and the one that starts the local server is `index.js` located at root, the file who has the details
for all routes supported is
`config/uix/router.js`

##### api
Contains files that mocked the API's and have the logic response in here. Some of them serve .json files, some
others just success/fail responses. All of them contain only available methods for such endpoint.

_api/AbstractFilePath.js_ Is an abstraction of functions where node mehtods and functions are used. Is used as an utility.
If in any of your endpoints you require to add something from node, i.e. `fs` library, then you add it here and on your
endpoint abstraction you require this AbstractFilePath

_api/uix/AbstractRouter.js_ It is an class that contains a default response for common methods, can be extended to include
more methods. Essentially, it looks for a basic structure of `filePath/prefix-method-token.json` file.
When this class istantiated requires both, filePath and prefix.
- filePath is the relative path that goes after `data/uix/` i.e. `ranks-segment-role/` will find `data/uix/ranks-segment-role/`
- prefix is the prefix the file should have i.e. `ranks`

> Use `api/uix/RequestHandler.js` as example.

_api/uix/RequestHandler.js_ It is an object that contains instances of all described and available endpoints.

_api/uix/Config.js_ It is used to easily add/manage success responses of given endpoints. File is self descriptive.


##### config
Contains the router configuration. Which in most of the cases will be the one required to be updated

##### data
Contains a folder structure similar to the endpoint url, and here is where the responses are stored.

<a name="uix-session"></a>
#### Add new Session
All below bullets, are assumming that provided files will contain a valid response structure.
Consider, that for few cases you might need to provide only a different profile, but data access can be the one already provided (default). There is no need to over complicate things.
1. Add a new key under `data/authenticate` **Name given to the json file will be a valid key**. **NOTE: Make sure file name and token provided in the response is the same**
1. Only if needed, create a new data set by adding new files into data/uix folder, following convention, and if the session is a different from the default one, then add the token at the end of the file name i.e. profile-get-noDataAccess.
1. Add files on each of the folders accordingly to step 2.

1. Replace content of the files accordingly to the new session recorded.
1. On `api/uix/Config.js` include the session and associate it email to it.

    5.1. A session might have several emails associate it with. Although there is no need.
    5.2 Email should be something related to the purpose of the session. i.e. `only-one-org-access@test.com`
1. Update this readme file with session available accounts
1. Increase package version

<a name="uix-endpoints"></a>
#### Add new EndPoints
1- Add your new endpoint `config/uix/router.js`, make sure to add only the methods that the endpoint will support.

__DO NOT ADD ANY LOGIC HERE__

2- Create your mock endpoint in `api` folder, creating a new file.
* If your endpoint will serve a response from a json, you can take as example `Authenticate.js` or use `AbstractRouter.js`
* If your endpoint will serve a "SUCCESS"/"FAIL" response, you can take as example `SsoCheck.js`
* Keep your logic as simple as possible

3- Add your mock data in data folder. Make sure to follow a similar structure to the used by the API
i.e. If your new endpoint is /api/v2/fvorites/ces/
Then your data should be placed in a structure like
```
    .
    |--data
    |   |
    |   |--uix
    |       |
            |--favorites
            |   |
            |   |--ces
            |   |   |--ces-get{-sessionTken}.json
```

## IMPORTANT NOTE
At the moment this file is being committed, the APIs available doesn't filter or make use of any request parameters. This
functionality should e reviewed once needed. Although should remain simple.

<a name="tests"></a>
## Test

The current repository has been set to be linted. Before you commit any code, make sure to run the test script, and fix
all issues reported by the linter if any.

`npm run test`

## Documentation
This section is still to be defined
