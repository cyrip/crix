#!/bin/bash

set -e

docker build -t cyrip/crix:prod .
docker push cyrip/crix:prod

