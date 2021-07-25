# lander examples

## bundle

Build bundle from directory like `docker build`.

Build and tag a bundle from . and use FlockeFile if found

```sh
flocker bundle --tag <BUNDLE TAG> .
```

Build a bundle from . but skip any found FlockeFile

```sh
flocker bundle --skip-file .
```

Build a bundle from . and dump result to stdout

```sh
flocker bundle --dump . > bundle.crob
```

## bundles

Interact with existing bundles

List bundles

```sh
flocker bundles # like docker images
REPOSITORY                           TAG                 BUNDLE ID           CREATED             SIZE             PRIMARYURL
???????/????                         <BUNDLE TAG>        <BUNDLE ID>         N months ago        X.XXGB           <none>
```

View bundle information

```sh
flocker bundles <BUNDLE ID>
```

Dump bundle result to stdout

```sh
flocker bundles --out=binary <BUNDLE ID> > bundle.crob
```

### bundles mount

Similar to `docker run`

```sh
flocker bundles mount <BUNDLE ID>
```

Extract contents

```sh
flocker bundles mount --extract-only <BUNDLE ID> <folder>
```

## mounts

```sh
flocker mounts # like 'docker ps'
MOUNT ID            BUNDLE              CREATED              STATUS              NAMES
<MOUNT ID>          <BUNDLE ID>         About a minute ago   Up About a minute   admiring_fermi
```

### mounts commit

Commit edits to bundle

```sh
flocker mounts commit <MOUNT ID>
```

## route

```sh
flocker route --live <MOUNT ID | BUNDLE ID | PATH TO FOLDER | PATH TO CROB FILE> [ip]:[port]/[path]
```

```sh
flocker route --live --single-file  <PATH TO FILE> [ip]:[port]/[path]
```

```sh
flocker route --passthrough <PATH TO API> [ip]:[port]/[path]
```

## routes

```sh
flocker routes
ROUTE ID            TARGET              IP                    PATH              PORT              SERVER              TYPE
<ROUTE ID>          <BUNDLE ID>         127.0.0.1             /mounted-path     8080              <SERVER ID>         SERVER
```

```sh
flocker routes open <ROUTE ID>
```

## servers

```sh
flocker server create [ip]:<port>
```

```sh
flocker servers
SERVER ID           PORT              CREATED              STATUS              IP           BUNDLE              LOCATION           ATTRIBUTES
<SERVER ID>         <PORT>            About a minute ago   Paused              <IP>         <MOUNT ID>          <MOUNT ID>         cors,live
```

## directives

```sh
flocker directives
DIRECTIVE ID            TAG                     CREATED              STATUS              NAMES
<DIRECTIVE ID>          <DIRECTIVE TAG>
```

## asset

```sh
flocker asset add <name space> --tag-releative-path/--tag-path --delete <path to file or folder>
```

```sh
flocker asset list <namespace>
ASSET ID            TAG                 MIME             PATH              PORT              SERVER              TYPE
<ROUTE ID>          <BUNDLE ID>         text/html             /mounted-path     8080              <SERVER ID>         SERVER
```

```sh
flocker asset extract <bundle id> <name space> <path to file or folder within bundle>
```

## metadata

```sh
flocker metadata --graphql --sql --query=""
```

gen-bundle -dir . -baseURL http://. -o foo.wbn

gen-bundle -dir static -baseURL https://. -o foo.wbn -primaryURL https://. -ignoreErrors

gen-bundle -dir static -baseURL http://. -o bar.wbn -primaryURL http://. -ignoreErrors
