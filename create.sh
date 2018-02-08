#!/bin/bash

# Input from user 
read -p "Enter Project Name : " playground

# Check if the project aleady exists?

PLAYGROUND_PATH="./src/$playground"

if [ -d $PLAYGROUND_PATH ]; then 

    echo "Project Already Exists!!!"
    exit 1;
fi

# Create Project Folder
mkdir $PLAYGROUND_PATH

# Copy Sample Files to Project Folder

cp ./src/sample/* $PLAYGROUND_PATH

# Success Message 

echo 'Project Created Successfully !!!'
echo "To run project : parcel src/$playground/index.html"
echo -e "Append your package.json scritp section :\` \"$playground\": \"parcel src/$playground/index.html\"\`"