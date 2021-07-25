#! /bin/bash
if [ $1 == "--help" ]; then
  echo "Find the parent directory of a given executable"
  echo "Usage:"
  echo " which <executable>"
else
  echo "$(dirname "$(which $1)")"
fi