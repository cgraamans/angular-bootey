# ANGULAR-BOOTEY

An Asynchronously loaded AngularJS/RequireJS Client for Socket.io Standalone Servers

## What is Angular Boot?

Angular-boot is a ready to use bootstrap for AngularJS applications which want to use Socket.io standalone services to provide their data. This bootstrap implementation bootstraps AngularJS via RequireJS to assure that the application loads controllers, factories and directives as and when they are needed.

In short, Angular-Boot gives you:
- Asynchronously loaded AngularJS modules via RequireJS
- Ready-to-use Socket.io implementation of the btford-socket-io provider.

### Note: If you're looking for a quick standalone socket.io mvc framework for Angular-Boot, it functions very nicely with [Sockey, the standalone Socket.io MVC framework](https://github.com/cgraamans/sockey) that I've written.

Angular-Bootey Uses:
- [AngularJS]()
  - [AngularAMD]()
  - [Angular-Route]()
- [Socket.io]()
  - [Socket.io Client]()
  - [Brian Ford's Angular Socket.io Provider]()

## Installation

To install Angular-Boot you will need to install npm and a webserver (such as for example apache) on your box. Once you have done so, navigate to the place you want to host the files and...

    git clone https://github.com/cgraamans/angular-boot
    cd angular-boot
    npm install


