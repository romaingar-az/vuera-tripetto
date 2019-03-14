## Install yarn

    $ npm install yarn -g

If you don't have node/nvm/npm, install them before.

## Add yarn PATH

    $ yarn global bin

Run above command to find your yarn bin path, then add to your shell's run commands, like this

    #yarn bin path
    export YARN_BIN="$HOME/.yarn/bin"  <-- your yarn PATH as you known

    export PATH="$YARN_BIN:$PATH"

Of course you might need

    $ yarn config set registry http://registry.npm.taobao.org
    $ yarn config set sass-binary-site http://npm.taobao.org/mirrors/node-sass