#!/bin.sh

# Create environment variables

# FILE="$PWD/docker/deploymetadata.json";

# if $PRODUCTION
# then FILE="/"/opt/elasticbeanstalk/deployment/deploymetadata.json

# Keep Connection Alive
set -e

if [ "${1#-}" != "${1}" ] || [ -z "$(command -v "${1}")" ]; then
  set -- node "$@"
fi

exec "$@"