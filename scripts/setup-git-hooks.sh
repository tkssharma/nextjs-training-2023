#!/bin/sh

SCRIPT_DIR=$( cd -- "$( dirname -- "${BASH_SOURCE[0]}" )" &> /dev/null && pwd )
PROJECT_DIR=$(dirname $SCRIPT_DIR)
# See revert-git-hooks.sh to revert actions in this script
HOOKS_DIR=$PROJECT_DIR/.husky

if [ ! $CI ] # don't run in CI environment
then
  echo "Setting $HOOKS_DIR/ as the project git hooksPath..."
  git config core.hooksPath $HOOKS_DIR
  echo "DONE"
fi