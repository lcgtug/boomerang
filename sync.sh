#!/bin/bash

s3cmd sync -v --exclude-from=sync-excludes --acl-public --delete-removed . s3://gdg-lc-web

