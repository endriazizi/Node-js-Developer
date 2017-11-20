# Node-js-Developer


# create a new repository on the command line

    echo "# Node-js-Developer" >> README.md
    git init
    git add README.md
    git commit -m "first commit"
    git remote add origin https://github.com/endriazizi/Node-js-Developer.git
    git push -u origin master

# Getting Starting

# 2.1   Installing Node

https://nodejs.org
Javascript Es6
    $ node -v
    v7.2.1
npm install -g update-node

# Using Require
Require let'us load in the modules functionality so we can call it down below

    cd notes-node
built in module
create app.js is where our application will start

Built in Modules

# FS Module
https://nodejs.org/api/index.html

an example
https://nodejs.org/api/fs.html#fs_fs_appendfile_file_data_options_callback

# OS Module
https://nodejs.org/api/os.html


Another way using Es6 feature known as template string because we are using Node V6 or grater,start and ends with back tick oparator `to insert javascritp variable inside of our template string: ${}`

# Requiring our own files created in our project

Relative paths start with a dot forward slash , which points to the current directory that the file is in
    const notes = require('./notes');