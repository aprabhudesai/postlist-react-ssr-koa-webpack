#!/bin/bash

if [[ $# -ne 2 ]]; then
  echo "Need to specify 2 arguments #1-locale  & #2-num of requests to send";
  exit 1;
fi

locale=$1
num_reqs=$2

echo "Executing for Locale:${locale} # of requests:${num_reqs}"

for i in $(seq "${num_reqs}")
do
  curl --header "Connection: keep-alive" "http://localhost:8088?locale=${locale}"
done
