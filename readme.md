# npmrc-tweak

To tweak or not to tweak npmrc...

### Disclaimer

Do not expect to find some kind of gem: 
this is my first (almost) package, currently cobbled together so I won't forget 
that it could have been helpful to me ;)

## Overview

For now [npmrc-tweak](https://github.com/max-devjs/npmrc-tweak) just do the 
two things I needed:

* displays the contents of npmrc (userconfig $HOME/.npmrc) in a console
* if necessary, can open npmrc in $EDITOR

## Why

Recently npm install behaved differently from how it should do.
Long story short, [Vasco](https://twitter.com/AngularUniv) suggested the possible reason:
I had completely forgotten that "a long time ago in a galaxy not so far, far away" I had saved a specific 
configuration in npmrc.

## Usage

With no option, npmrc-tweak displays the contents of npmrc (userconfig $HOME/.npmrc).

```
~ npmrc-tweak --help                                                                                                                  

  Usage: npmrc-tweak [options]

  Options:

    -h, --help     output usage information
    -V, --version  output the version number
    -e, --edit     Edit

```

## Install

Maybe someday in the foreseeable future will be a published package, then:

```
npm install npmrc-tweak
```

For now clone the repository

```
git clone https://github.com/max-devjs/npmrc-tweak
```

cd into the previously cloned repository

```
cd npmrc-tweak
```

and finally [link](https://docs.npmjs.com/cli/link) it

```
npm link
```

Now the npmrc-tweak command must be globally available and, hopefully, working.

## Note For Windows Users

I have no idea if it works on Windows: I use it on *nix (probably
 will work on OSX).

## A couple of fine packages to which take a look

Not using for this project, but code it pays to be read out.

* [editor](https://www.npmjs.com/package/editor)
* [npmrc](https://www.npmjs.com/package/npmrc)
* [npm-prefix](https://www.npmjs.com/package/npm-prefix)
* [shelljs](https://www.npmjs.com/package/shelljs)

## TODO

### Tests

There are no currently tests (well, there is one but it's too ugly).

## License

MIT

## Contact

* GitHub [@max-devjs](https://github.com/max-devjs)
* [Issues](https://github.com/max-devjs/npmrc-tweak/issues) for this package 
(suggestions & comments are welcome)
* Twitter [@max_devjs](https://twitter.com/max_devjs)