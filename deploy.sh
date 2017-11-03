#!/usr/bin/env bash
branch=$(git branch | sed -n -e 's/^\* \(.*\)/\1/p')
if [ ${branch} = master ]
then
    serverless deploy --stage prod -t
elif [ ${branch} = rc ]
then
    serverless deploy --stage rc -t
else
    serverless deploy --stage dev -t
fi
