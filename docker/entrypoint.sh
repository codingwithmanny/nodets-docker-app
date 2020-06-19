#!/bin.sh

export APP_VERSION_LABEL=$(cat /tmp/deploymetadata.json | jq --compact-output --raw-output '.AppVersionLabel')
export DEPLOYMENT_ID=$(cat /tmp/deploymetadata.json | jq --compact-output --raw-output '.DeploymentId')
export SERIAL=$(cat /tmp/deploymetadata.json | jq --compact-output --raw-output '.Serial')

# Keep Connection Alive
set -e

if [ "${1#-}" != "${1}" ] || [ -z "$(command -v "${1}")" ]; then
  set -- node "$@"
fi

exec "$@"