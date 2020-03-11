# Setting up your machine to run the giffgaff App

## Required installations:
### 1. Download & Install:
You may download some of this through Self-Service, on your laptop.
1. [Google Chrome](https://www.google.com/chrome/ "Chrome") (contains useful developer tools)
2. [Visual Code](https://code.visualstudio.com/download "Visual Studio Download")
3. [iTerm2](https://www.iterm2.com/downloads.html "iTerm2")
4. [Docker](https://docs.docker.com/docker-for-mac/install/ "Docker")
5. Emulators, if you use the app:
6. Get the **Engineering: Command Line Apps** from **Self-service** on your laptop. A script will be downloaded on your Desktop. Run the script you've just downloaded
Example:
```sh
> sh ~/Desktop/engineeringApps.sh
```


### 2. Open the terminal & install
Some of these might be already installed. However, considering you don't, please install:

#### > Brew
Follow the commands [here](https://brew.sh).

#### > [Node.js](https://treehouse.github.io/installation-guides/mac/node-mac.html "Node")
```sh
> brew install node
> brew install nvm
> nvm install 10.15.1
> nvm use 10.15.1
```
It is important to use a specific version as you might have some code problems later on otherwise.

#### > Git:
Do install git first.
```sh
> brew install git
```

If you don't have a [github.com](http://github.com/) account, you should create one first. Then, ask the IT to give you access to giffgaff's repositories.

To link git to your account:
  1. Follow [this guide](https://help.github.com/en/github/authenticating-to-github/generating-a-new-ssh-key-and-adding-it-to-the-ssh-agent) to generate SSH keys (you need them to pair to your account).
  2. Then you have to add the SSH keys to your account. [This guide](https://help.github.com/en/github/authenticating-to-github/adding-a-new-ssh-key-to-your-github-account) will help you.
  3. Then do authorise the SSH keys to be used with the Organization files. The helping guide is [here](https://help.github.com/en/github/authenticating-to-github/authorizing-an-ssh-key-for-use-with-saml-single-sign-on).

TIP: _In case these steps are now working or you get a SAML error, you might not be allocated to an engineering team just yet. Please speak with the IT department._

#### > [Maven](https://maven.apache.org/download.cgi "Maven")
```sh
> brew install mvnvm
```

### 3. Configuration steps:


```sh
> brew install node
```


2. You're now ready to install the rest of the pre-requisites. Open the terminal and:
	* Run the script you've just downloaded
	Example:
		```sh
		> sh ~/Desktop/engineeringApps.sh
		```
	* [If not installed] Install [Brew](https://brew.sh/ "Brew") (applicable to MAC) & wget
	* [If not installed] Install [Maven](https://maven.apache.org/download.cgi "Maven")
	* [If not installed] Install [Node.js](https://treehouse.github.io/installation-guides/mac/node-mac.html "Node")
	

	- Android and iOS emulators:
		* [Android Studio](https://developer.android.com/studio/index.html "Android Studio")
		* [xCode](https://apps.apple.com/us/app/xcode/id497799835 "xCode")

2. 

A statement

_this is italic_

![this is link to an image](./images/FirebaseRemoteConfigDev.png)

```JSX
<Component name="login" />
```

check your version of java :

```sh
>java -version
```